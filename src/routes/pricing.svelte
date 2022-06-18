<script>
    import { onMount } from "svelte";
    import Plans from "../components/plans.svelte";
    import ServiceRow from "../components/serviceRow.svelte";

    let currency = "USD";
    let currencySymbol = "$";

    let conversions = {
        lastUpdated: "12/12/21",
        data: {
            "USD": 1, // base currency
            "ARS": 101.5,
            "AUD": 1.39,
            "CAD": 1.27,
            "EUR": 0.88,
            "JPY": 113.39,
            "CHF": 0.92,
            "GBP": 0.75
        },
        symbols: {
            "USD": "$", // base currency
            "ARS": "$",
            "AUD": "$",
            "CAD": "$",
            "EUR": "€",
            "JPY": "¥",
            "CHF": "CHF",
            "GBP": "£"
        }
    }

    let options;
    let prices;

    onMount(() => {
        options = document.getElementById("currency").querySelectorAll("option");
    })

    function updateCurrency() {
        for(const o of options){
            console.log(o.selected);
            if(o.selected){
                currency = o.value;
                break;
            }
        }

        prices = document.querySelectorAll(".price");
        for(const price of prices){
            console.log(price.dataset.usdprice);
            price.innerText = parseFloat(price.dataset.usdprice) * conversions.data[currency];
        }

        currencySymbol = conversions.symbols[currency];
    }


    $: selectedServices = services.filter((service) => service.selected);
    const sum = (arr) => arr.reduce((a, b) => a + b, 0);
    $: totalPrice = sum(selectedServices.map((service) => (parseFloat(service.price) * conversions.data[currency])));
    $: subscriptionPrice = sum(selectedServices.map((service) => ((parseFloat(service.price) * conversions.data[currency]) / 12)));

    let services = [{
            "service": "Visual Mock/Design",
            "description": 'Ask us what your company\'s website or app would look like if we were to make it, and we\'ll provide a free visual mock showing you.',
            "price": 0,
            "selected": false,
        },
        {
            "service": "Front End Development",
            "description": 'Establishing "looks"/aesthetic of website',
            "price": 1500,
            "selected": false,
        },
        {
            "service": "Hosting",
            "description": 'Establish the Cloud-Based Infrastructure for Hosting',
            "price": 2000,
            "selected": false,
        },
        {
            "service": "Content Management System (CMS)",
            "description": 'Add/change content in your website with a friendly interface.',
            "price": 1000,
            "selected": false,
        },
        {
            "service": "Data Analytics",
            "description": 'Add analytics tools that enable you to see information like: Visitor device type, age-range, page visits, and more.',
            "price": 200,
            "selected": false,
        },
        {
            "service": "Logo + Emblem/Icon Creation",
            "description": "We'll create your company's logo and emblem/icon!",
            "price": 400,
            "selected": false,
        },
        {
            "service": "Style Guide",
            "description": "Don't have a style guide for your company yet? We can create one for you!",
            "price": 200,
            "selected": false,
        },
        {
            "service": "Email",
            "description": "Want HIPPA and FERPA compliant email(s) created for you, using your company's name? Price is for first email, subsequent emails only cost $50 each.",
            "price": 350,
            "selected": false,
        },
        {
            "service": "App Creation",
            "description": "We'll create your app, and it will work on all platforms. App Icon comes free with this.",
            "price": 9750,
            "selected": false,
        },
    ];

    let packages = [{
            "service": "Standard Website",
            "description": "We'll design, create, and host your website. Services included: Visual Mock/Design, Front End Development, and Hosting.",
            "price": 3500,
            "selected": false,
        },
        {
            "service": "Feature-packed Website",
            "description": 'Everything one of our standard websites would provide... plus some more awesome features. Services include: Visual Mock/Design, Front End Development, Hosting, CMS, and Data Analytics.',
            "price": 4700,
            "selected": false,
        },
        {
            "service": "Cross-Platform App",
            "description": "We'll create your app, and the logo for it! Cross-platform, meaning one code-base that works on every platform (Android, MacOS, etc)",
            "price": 9750,
            "selected": false,
        },
    ];
</script>

<svetle:head>
  <title>GFD Pricing</title>
</svetle:head>

<div>
    <div class="bg-primary-700">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing</h2>
                <p class="mt-5 text-xl text-gray-400">We offer subscription-based plans, and standard upfront plans. Prices assume starting from scratch.</p>
            </div>
            <div class="mt-10 w-full max-w-xs">
                <label for="currency" class="block text-base font-medium text-gray-300">Currency</label>
                <div class="mt-1.5 relative">
                    <select id="currency" name="currency" class="appearance-none block w-full bg-none bg-primary-800 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm" on:change={() => {updateCurrency()}}>
                        <option value="ARS">Argentina (ARS)</option>
                        <option value="AUD">Australia (AUD)</option>
                        <option value="USD" selected>United States (USD)</option>
                        <option value="CAD">Canada (CAD)</option>
                        <option value="EUR">France (EUR)</option>
                        <option value="JPY">Japan (JPY)</option>
                        <option value="CHF">Switzerland (CHF)</option>
                        <option value="GBP">United Kingdom (GBP)</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="flex flex-col max-w-7xl mx-auto w-full mt-12">
        <div class="w-full">
            <div class="py-2 align-middle w-[90%] lg:min-w-full lg:px-8 block mx-auto">
                <p class="italic pb-4 text-sm text-primary-500">Prices based on USD, conversions to other currencies may have innacuracies.</p>

                <h2 class="text-primary-800 text-xl pb-4">Aren't Sure What to Pick?</h2>
                <p class="text-primary-800">Here are some common combinations/packages. We'll also help keep you informed, please <a class="underline-fancy italic text-primary-600" href="/#contact">contact us</a> with any questions!</p>

                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4">
                    <table class="divide-y divide-gray-200 border-collapse w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                            </tr>
                        </thead>

                        <tbody id="service-row-pricing">
                            {#each packages as p}
                            <ServiceRow service={p.service} description={p.description} price={p.price} currencySymbol={currencySymbol} />
                            {/each}
                        </tbody>
                    </table>
                </div>

                <h2 class="text-primary-800 text-xl pb-4 pt-16">Pricing</h2>
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="divide-y divide-gray-200 border-collapse w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" class="hidden lg:inline-block relative px-6 py-3">
                                    <span class="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody id="service-row-pricing">
                            {#each services as s}
                            <ServiceRow service={s.service} description={s.description} price={s.price} currencySymbol={currencySymbol} bind:selected={s.selected} />
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    {#if selectedServices.length >= 1}
    <Plans currencySymbol={currencySymbol} totalPrice={totalPrice} subscriptionPrice={subscriptionPrice} />
    {:else}
    <p class="text-primary-800 text-2xl my-32 text-center">Select Service(s) to See Payment Options</p>
    {/if}

    <div class="flex flex-col max-w-7xl mx-auto w-full mt-12">
        <div class="max-w-7xl mx-auto w-full">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <h2 class="text-primary-800 text-xl pb-4">Definitions</h2>
                
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Term
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Definition
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-6 py-4 text-sm text-gray-500">Traditional</td>
                                <td class="px-6 py-4 text-sm text-gray-500">Total expenses, half paid upfront, half paid at the completion of the selected services.</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 text-sm text-gray-500">Payment Plan</td>
                                <td class="px-6 py-4 text-sm text-gray-500">Total expenses, divided into 6 payments (and rounded to nearest whole-dollar), each payment made to Gold Fox Dev once per month until all payments are made. Payments start when development starts. There is no APR associated to the Payment Plan, but the Payment Plan does apply an additional $40/mo, resulting in a total of $200 in additional charges. Additional $40/mo is shown in the figure for the Payment Plan pricing plan.</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 text-sm text-gray-500">Subscription</td>
                                <td class="px-6 py-4 text-sm text-gray-500">Total expenses, divided by 12 (and rounded to nearest whole-dollar), each payment made to Gold Fox Dev once per month while ownership is desired. Once payments end, hosting is shut-down, and files are kept for 3 months.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col max-w-7xl mx-auto w-full mt-12 pb-6">
        <p class="mt-12 px-6 text-gray-700 text-base">
            <span class="higlight">NOTE</span>: Gold Fox Dev does
            not pay for monthly fees accrued by regular services.
            For example, the cost you pay for the Hosting service
            by Gold Fox Dev is the
            construction of the infrastructure required in order
            to host your website. <b>Not</b> the monthly expenses
            accrued by the provider. This is a standard practice
            among website developers.
        </p>
    </div>
</div>

<style lang="postcss">
    tr:nth-of-type(2n){
        @apply bg-gray-50;
    }
    th{
        @apply font-bold;
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
  