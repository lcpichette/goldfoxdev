<script>
	import { onMount } from 'svelte';
	import { gql, GraphQLClient } from 'graphql-request';
	import Plans from '$lib/components/plans.svelte';
	import ServiceRow from '$lib/components/serviceRow.svelte';

	let banner; // data
	let discountBanner; // data
	let conversionAvailable = false; // status
	let currency = 'USD'; // data
	let currencySymbol = '$'; // component param
	let services = []; // data
	let packages = []; // data
	let options;
	let prices;
	let paymentPlanMonths; // component param
	let feePerMonth; // component param
	let subscriptionDivisor; // component param
	let servicesLoaded = false; // status
	let paymentPlanInfoLoaded = false; // status
	let queryParams; // data
	let affiliateDiscount, directDiscount; // interim variables
	let discount; // data
	let discountName; // data
	let totalPrice = undefined;
	//

	let conversions = {
		data: {
			USD: 1, // base currency
			ARS: undefined,
			AUD: undefined,
			CAD: undefined,
			EUR: undefined,
			JPY: undefined,
			CHF: undefined,
			GBP: undefined
		},
		symbols: {
			USD: '$', // base currency
			ARS: '$',
			AUD: '$',
			CAD: '$',
			EUR: '€',
			JPY: '¥',
			CHF: 'CHF',
			GBP: '£'
		}
	};

	onMount(() => {
		options = document.getElementById('currency').querySelectorAll('option');
		for (const [i, tag] of Object.keys(conversions.symbols).entries()) {
			loadPrice(tag, 1)
				.then((conversionData) => {
					conversions.data[tag] = conversionData.new_amount;
				})
				.catch((err) => console.error(err));
		}

		loadServices();
		loadPaymentPlanInfo();

		queryParams = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop)
		});
		if (queryParams.discount) {
			checkForDiscount(queryParams.discount).then((discount) => {
				if (discount) {
					directDiscount = discount;
				} else {
					affiliateDiscount = 0;
				}
			});
		}
		if (queryParams.affiliate) {
			checkForAffiliate(queryParams.affiliate).then((discount) => {
				if (discount) {
					affiliateDiscount = discount;
				} else {
					affiliateDiscount = 0;
				}
			});
		}
	});

	function toggleBanner() {
		discountBanner = false;
		setTimeout(() => {
			banner.style.display = 'none';
		}, 600);
	}

	async function checkForDiscount(code) {
		const DATE_SEG = new Date(new Date())
			.toLocaleString()
			.split(',')[0]
			.split('/')
			.map((seg) => seg.padStart(2, '0'));
		const TODAY = `${DATE_SEG[2]}-${DATE_SEG[0]}-${DATE_SEG[1]}`;
		const query = gql`
        query Discounts {
          discounts(
            where: {validUntil_gte: "${TODAY}", queryParamTitle: "${code}", active: true}
          ) {
            validUntil
            percent
          }
        }
        `;
		const hygraph = new GraphQLClient(
			'https://us-west-2.cdn.hygraph.com/content/ckx6em1th5ke501xq4z6t1q05/master',
			{ headers: {} }
		);
		const res = await hygraph.request(query);
		return res.discounts[0]?.percent || 0;
	}
	async function checkForAffiliate(code) {
		const DATE_SEG = new Date(new Date())
			.toLocaleString()
			.split(',')[0]
			.split('/')
			.map((seg) => seg.padStart(2, '0'));
		const TODAY = `${DATE_SEG[2]}-${DATE_SEG[0]}-${DATE_SEG[1]}`;
		const query = gql`
        query Affiliates {
          affiliates(
            where: {validUntil_gte: "${TODAY}", queryParamTitle: "${code}", active: true}
          ) {
            validUntil
            percent
            kickback
          }
        }
        `;
		const hygraph = new GraphQLClient(
			'https://us-west-2.cdn.hygraph.com/content/ckx6em1th5ke501xq4z6t1q05/master',
			{ headers: {} }
		);
		const res = await hygraph.request(query);
		return res.affiliates[0]?.percent || 0;
	}

	async function loadPaymentPlanInfo() {
		const query = gql`
			query PaymentPlan {
				paymentPlanInfos(where: { active: true }) {
					months
					monthlyFee
				}
				subscriptionPlanInfos(where: { active: true }) {
					divisor
				}
			}
		`;
		const hygraph = new GraphQLClient(
			'https://us-west-2.cdn.hygraph.com/content/ckx6em1th5ke501xq4z6t1q05/master',
			{ headers: {} }
		);
		const res = await hygraph.request(query);
		paymentPlanMonths = res.paymentPlanInfos[0].months;
		feePerMonth = res.paymentPlanInfos[0].monthlyFee;
		subscriptionDivisor = res.subscriptionPlanInfos[0].divisor;
		paymentPlanInfoLoaded = true;
	}

	async function loadServices() {
		const query = gql`
			query Prices {
				bundles(where: { active: true }) {
					services {
						id
					}
					title
					seasonalPriceRange
					discount
					description
				}
				services(where: { active: true }, orderBy: order_ASC) {
					per
					price
					seasonalPriceRange
					title
					order
					id
					description
				}
			}
		`;
		const hygraph = new GraphQLClient(
			'https://us-west-2.cdn.hygraph.com/content/ckx6em1th5ke501xq4z6t1q05/master',
			{ headers: {} }
		);
		const res = await hygraph.request(query);
		services = res.services.map((service) => {
			return {
				id: service.id,
				per: service.per,
				service: service.title,
				description: service.description,
				price: service.price,
				order: service.order,
				selected: service.per === 'Whole' ? false : null,
				amount: service.per !== 'Whole' ? undefined : null
			};
		});
		packages = res.bundles.map((bundle) => {
			return {
				service: bundle.title,
				description: bundle.description,
				discount: bundle.discount,
				selected: false
			};
		});
		servicesLoaded = true;
	}

	async function loadPrice(tag, amount) {
		const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=${tag}&amount=${amount}`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '706136ec32msh717478ab5e5c67ap188ccdjsn427bf120f53b',
				'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
			}
		};

		let data;
		await fetch(url, options)
			.then((res) => {
				data = res.json();
				return data;
			})
			.catch((err) => console.error('error:' + err));

		return await data;
	}

	function updateCurrency() {
		for (const o of options) {
			if (o.selected) {
				currency = o.value;
				break;
			}
		}

		prices = document.querySelectorAll('.price');
		for (const price of prices) {
			price.innerText = Math.round(
				parseFloat(price.dataset.usdprice) * conversions.data[currency]
			);
		}

		currencySymbol = conversions.symbols[currency];
	}

	$: selectedServices = services.filter((service) => {
		if (
			(service.per === 'Whole' && service.selected) ||
			(service.per !== 'Whole' && service.amount)
		) {
			return service;
		}
	});
	const sum = (arr) => arr.reduce((a, b) => a + b, 0);
	$: totalPrice = sum(
		selectedServices.map((service) => {
			const priceForOne = parseFloat(service.price) * conversions.data[currency];
			if (service.per === 'Whole') {
				return priceForOne;
			}

			const disc = Math.round(priceForOne * (service.amount || 0) * (1 - (discount || 0)));
			return disc;
		})
	);

	$: {
		discountBanner = true;
		if ((affiliateDiscount || 0) > (directDiscount || 0)) {
			discount = affiliateDiscount;
			discountName = queryParams?.affiliate;
		} else {
			discount = directDiscount;
			discountName = queryParams?.discount;
		}
	}
</script>

<svetle:head>
	<title>GFD Pricing</title>
</svetle:head>

<div>
	<div class="bg-primary-700">
		<div
			class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"
		>
			<div class="max-w-xl">
				<h2
					class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
				>
					Pricing
				</h2>
				<p class="mt-5 text-xl text-gray-400">
					We offer various payment plans and cost transparency.
				</p>
			</div>
			<div class="mt-10 w-full max-w-xs">
				<label for="currency" class="block text-base font-medium text-gray-300"
					>Currency</label
				>
				<div class="mt-1.5 relative">
					<select
						id="currency"
						name="currency"
						class="appearance-none block w-full bg-none bg-primary-800 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
						on:change={() => {
							updateCurrency();
						}}
					>
						<option value="ARS">Argentina (ARS)</option>
						<option value="AUD">Australia (AUD)</option>
						<option value="USD" selected>United States (USD)</option>
						<option value="CAD">Canada (CAD)</option>
						<option value="EUR">France (EUR)</option>
						<option value="JPY">Japan (JPY)</option>
						<option value="CHF">Switzerland (CHF)</option>
						<option value="GBP">United Kingdom (GBP)</option>
					</select>
					<div
						class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"
					>
						<!-- Heroicon name: solid/chevron-down -->
						<svg
							class="h-4 w-4 text-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if servicesLoaded}
		<div class="flex flex-col max-w-7xl mx-auto w-full mt-0">
			<div class="w-full">
				<div class="bg-white py-16 sm:py-24">
					<div class="mx-auto max-w-7xl px-6 lg:px-8">
						<div class="mx-auto max-w-2xl sm:text-center">
							<h2
								class="text-slate-700 text-3xl font-bold tracking-tight sm:text-4xl"
							>
								Simple no-tricks pricing
							</h2>
							<p class="mt-4 text-lg leading-6 text-slate-500">
								Contact us for a custom quote, or to see if you're eligible for a
								discount.
							</p>
						</div>
						<div
							class="text-slate-700 mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
						>
							<div class="p-8 sm:p-10 lg:flex-auto">
								<h3 class="text-2xl font-bold tracking-tight">Scalable Billing</h3>
								<p class="mt-6 text-base leading-7 text-slate-600">
									Scale up/down our services as you need them, with a minimum of
									40 hours per month, billed monthly. Alternatively, you can pay
									using one of the payment plans we offer.
								</p>
								<div class="mt-10 flex items-center gap-x-4">
									<h4
										class="flex-none text-sm font-semibold leading-6 underline-fancy-static"
									>
										What’s included
									</h4>
									<div class="h-px flex-auto bg-gray-100" />
								</div>
								<ul
									role="list"
									class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
								>
									<li class="flex gap-x-3">
										<svg
											class="h-6 w-5 flex-none text-secondary"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
												clip-rule="evenodd"
											/>
										</svg>
										Custom Designs
									</li>
									<li class="flex gap-x-3">
										<svg
											class="h-6 w-5 flex-none text-secondary"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
												clip-rule="evenodd"
											/>
										</svg>
										Quality Assurance & Testing
									</li>
									<li class="flex gap-x-3">
										<svg
											class="h-6 w-5 flex-none text-secondary"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
												clip-rule="evenodd"
											/>
										</svg>
										Bleeding-Edge Software
									</li>
									<li class="flex gap-x-3">
										<svg
											class="h-6 w-5 flex-none text-secondary"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
												clip-rule="evenodd"
											/>
										</svg>
										Lower Hosting Fees
									</li>
								</ul>
							</div>
							<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
								<div
									class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
								>
									<div class="mx-auto max-w-xs px-8">
										<p class="text-base font-semibold text-gray-600">
											Per-Employee, Per-Hour
										</p>
										<p class="mt-6 flex items-baseline justify-center gap-x-2">
											<span
												class="text-5xl font-bold tracking-tight text-slate-700"
												>$50</span
											>
											<span
												class="text-sm font-semibold leading-6 tracking-wide text-gray-600"
												>USD</span
											>
										</p>
										<a
											href="/#contact"
											class="button w-44 flex justify-center mt-8 font-bold rounded-md text-white bg-primary-900"
										>
											<span>Get Started</span>
										</a>
										<p class="mt-6 text-xs leading-5 text-gray-600">
											Invoices provided for all purchases
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if discount}
		<div
			class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-[999999] banner"
			class:fadeOut={!discountBanner}
			bind:this={banner}
		>
			<div
				class="pointer-events-auto flex items-center justify-between gap-x-6 bg-primary-900 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4"
			>
				<p class="text-sm leading-6 text-[#fff]">
					<strong class="font-semibold text-secondary">{discount * 100}% Savings!</strong
					><svg
						viewBox="0 0 2 2"
						class="mx-2 inline h-0.5 w-0.5 fill-current"
						aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg
					><span
						>Thanks to {discount === affiliateDiscount ? 'affiliate' : 'discount'} code
						<span class="text-secondary">{discountName}</span></span
					>
				</p>
				<button type="button" class="-m-1.5 flex-none p-1.5" on:click={toggleBanner}>
					<span class="sr-only">Dismiss</span>
					<svg
						class="h-5 w-5 text-primary-200"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
						/>
					</svg>
				</button>
			</div>
		</div>
	{/if}

	<!--
	{#if paymentPlanInfoLoaded && selectedServices.length >= 1}
		<Plans
			{discount}
			{currencySymbol}
			{totalPrice}
			{feePerMonth}
			{paymentPlanMonths}
			{subscriptionDivisor}
		/>
	{:else}
		<p class="text-primary-800 text-2xl my-32 text-center">
			Select Service(s) to See Payment Options
		</p>
	{/if}

	<div class="flex flex-col max-w-7xl mx-auto w-full mt-12">
		<div class="py-2 align-middle w-[90%] max-w-7xl lg:min-w-full lg:px-8 block mx-auto">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<h2 class="text-primary-800 text-xl pb-4">Definitions</h2>

				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Term
								</th>
								<th
									scope="col"
									class="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Definition
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Traditional</td>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500"
									>Total expenses, half paid upfront, half paid at the completion
									of the selected services.</td
								>
							</tr>
							<tr>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Payment Plan</td
								>
								{#if paymentPlanInfoLoaded}
									<td class="px-2 lg:px-6 py-4 text-sm text-gray-500"
										>Total expenses, divided into {paymentPlanMonths} payments (and
										rounded to nearest whole-dollar), each payment made to Gold Fox
										Dev once per month until all payments are made. Payments start
										when development starts. There is no APR associated to the Payment
										Plan, but the Payment Plan does apply an additional ${feePerMonth}/mo,
										resulting in a total of ${feePerMonth * paymentPlanMonths} in
										additional charges. Additional ${feePerMonth}/mo is shown in
										the figure for the Payment Plan pricing plan.</td
									>
								{/if}
							</tr>
							<tr>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Subscription</td
								>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500"
									>Total expenses, divided by {subscriptionDivisor} (and rounded to
									nearest whole-dollar), each payment made to Gold Fox Dev once per
									month while ownership is desired. Once payments end,
									<b>hosting is shut-down</b>, and files are kept for 3 months.</td
								>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="flex flex-col max-w-7xl mx-auto w-full mt-12 pb-6">
			<p class="mt-12 px-2 lg:px-6 text-gray-700 text-base">
				<span class="higlight">NOTE</span>: Gold Fox Dev does not pay for monthly fees
				accrued by regular services. For example, the cost you pay for the Hosting service
				by Gold Fox Dev is the construction of the infrastructure required in order to host
				your website.
				<b>Not</b> the monthly expenses accrued by the provider. This is a standard practice
				among website developers.
			</p>
		</div>
	</div>
	-->
</div>

<style lang="postcss">
	tr:nth-of-type(2n) {
		@apply bg-gray-50;
	}
	th {
		@apply font-bold;
	}

	.banner {
		opacity: 1;
	}
	.fadeOut {
		opacity: 0;
		transition: opacity 0.6s ease-in-out;
	}

	.higlight {
		position: relative;
		z-index: 1;
		@apply font-semibold;
	}

	.higlight::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: -0.25em;
		right: -0.25em;
		background-color: hsla(59, 97%, 59%, 0.657);
		//transform-origin: center right;
		transform: scaleX(1);
		transform-origin: center left;
		transition: transform 0.2s ease-in-out;
	}

	/*
    .higlight:hover::before {
        transform: scaleX(1);
        transform-origin: center left;
    }
    */
</style>
