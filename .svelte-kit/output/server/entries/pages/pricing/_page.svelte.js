import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index2.js";
import "graphql-request";
const plans_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "tr.svelte-18fhtnr:nth-of-type(2n){--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}th.svelte-18fhtnr{font-weight:700}.banner.svelte-18fhtnr{opacity:1}.fadeOut.svelte-18fhtnr{opacity:0;transition:opacity 0.6s ease-in-out}.higlight.svelte-18fhtnr{position:relative;z-index:1;font-weight:600}.higlight.svelte-18fhtnr::before{content:'';position:absolute;z-index:-1;top:0;bottom:0;left:-0.25em;right:-0.25em;background-color:hsla(59, 97%, 59%, 0.657);//transform-origin:center right;transform:scaleX(1);transform-origin:center left;transition:transform 0.2s ease-in-out}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedServices;
  let banner;
  let discountBanner;
  let currency = "USD";
  let services = [];
  let subscriptionDivisor;
  let queryParams;
  let affiliateDiscount, directDiscount;
  let discount;
  let discountName;
  let conversions = {
    data: {
      USD: 1,
      // base currency
      ARS: void 0,
      AUD: void 0,
      CAD: void 0,
      EUR: void 0,
      JPY: void 0,
      CHF: void 0,
      GBP: void 0
    },
    symbols: {
      USD: "$",
      // base currency
      ARS: "$",
      AUD: "$",
      CAD: "$",
      EUR: "€",
      JPY: "¥",
      CHF: "CHF",
      GBP: "£"
    }
  };
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    selectedServices = services.filter((service) => {
      if (service.per === "Whole" && service.selected || service.per !== "Whole" && service.amount) {
        return service;
      }
    });
    {
      {
        discountBanner = true;
        {
          discount = directDiscount;
          discountName = queryParams?.discount;
        }
      }
    }
    sum(selectedServices.map((service) => {
      const priceForOne = parseFloat(service.price) * conversions.data[currency];
      if (service.per === "Whole") {
        return priceForOne;
      }
      const disc = Math.round(priceForOne * (service.amount || 0) * (1 - (discount || 0)));
      return disc;
    }));
    $$rendered = `<svetle:head><title>GFD Pricing</title></svetle:head>

<div><div class="bg-primary-700"><div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"><div class="max-w-xl"><h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing
				</h2>
				<p class="mt-5 text-xl text-gray-400">We offer various payment plans and cost transparency.
				</p></div>
			<div class="mt-10 w-full max-w-xs"><label for="currency" class="block text-base font-medium text-gray-300">Currency</label>
				<div class="mt-1.5 relative"><select id="currency" name="currency" class="appearance-none block w-full bg-none bg-primary-800 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"><option value="ARS">Argentina (ARS)</option><option value="AUD">Australia (AUD)</option><option value="USD" selected>United States (USD)</option><option value="CAD">Canada (CAD)</option><option value="EUR">France (EUR)</option><option value="JPY">Japan (JPY)</option><option value="CHF">Switzerland (CHF)</option><option value="GBP">United Kingdom (GBP)</option></select>
					<div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
						<svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div></div></div></div>

	${``}

	${discount ? `<div class="${[
      "pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-[999999] banner svelte-18fhtnr",
      !discountBanner ? "fadeOut" : ""
    ].join(" ").trim()}"${add_attribute("this", banner, 0)}><div class="pointer-events-auto flex items-center justify-between gap-x-6 bg-primary-900 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4"><p class="text-sm leading-6 text-[#fff]"><strong class="font-semibold text-secondary">${escape(discount * 100)}% Savings!</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg><span>Thanks to ${escape(discount === affiliateDiscount ? "affiliate" : "discount")} code
						<span class="text-secondary">${escape(discountName)}</span></span></p>
				<button type="button" class="-m-1.5 flex-none p-1.5"><span class="sr-only">Dismiss</span>
					<svg class="h-5 w-5 text-primary-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>` : ``}

	${`<p class="text-primary-800 text-2xl my-32 text-center">Select Service(s) to See Payment Options
		</p>`}

	<div class="flex flex-col max-w-7xl mx-auto w-full mt-12"><div class="py-2 align-middle w-[90%] max-w-7xl lg:min-w-full lg:px-8 block mx-auto"><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"><h2 class="text-primary-800 text-xl pb-4">Definitions</h2>

				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr class="svelte-18fhtnr"><th scope="col" class="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider svelte-18fhtnr">Term
								</th>
								<th scope="col" class="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider svelte-18fhtnr">Definition
								</th></tr></thead>
						<tbody><tr class="svelte-18fhtnr"><td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Traditional</td>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Total expenses, half paid upfront, half paid at the completion
									of the selected services.</td></tr>
							<tr class="svelte-18fhtnr"><td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Payment Plan</td>
								${``}</tr>
							<tr class="svelte-18fhtnr"><td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Subscription</td>
								<td class="px-2 lg:px-6 py-4 text-sm text-gray-500">Total expenses, divided by ${escape(subscriptionDivisor)} (and rounded to
									nearest whole-dollar), each payment made to Gold Fox Dev once per
									month while ownership is desired. Once payments end,
									<b>hosting is shut-down</b>, and files are kept for 3 months.</td></tr></tbody></table></div></div></div>

		<div class="flex flex-col max-w-7xl mx-auto w-full mt-12 pb-6"><p class="mt-12 px-2 lg:px-6 text-gray-700 text-base"><span class="higlight svelte-18fhtnr">NOTE</span>: Gold Fox Dev does not pay for monthly fees
				accrued by regular services. For example, the cost you pay for the Hosting service
				by Gold Fox Dev is the construction of the infrastructure required in order to host
				your website.
				<b>Not</b> the monthly expenses accrued by the provider. This is a standard practice
				among website developers.
			</p></div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
