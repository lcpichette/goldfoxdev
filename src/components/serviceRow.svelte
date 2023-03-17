<script>
    export let service;
    export let description;
    export let price;
    export let discount = 0;

    export let price_type = 'price';
    export let currencySymbol = undefined;
    export let selected = undefined;
    export let amount = undefined;

    const displayPrice = `
        ${price_type === 'price' ? currencySymbol : ''}
        ${price_type === 'price' ? Math.floor(price) : price * 100}
    `;
    const discountedDisplayPrice = `
        ${price_type === 'price' ? currencySymbol : ''}
        ${price_type === 'price' ? Math.floor(price * (1 - discount)) : price * 100}
    `;
</script>

<tr class="p-3 bg-white relative z-20">
    <td class="px-2 lg:px-6 py-4 text-sm font-medium text-gray-900">
        {service}
    </td>
    <td class="px-2 lg:px-6 py-4 text-sm text-gray-500 col-span-2 lg:col-span-1">
        {description}
    </td>
    <td class="px-2 lg:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {#if discount}
        <span class="price line-through" data-usdprice="{price}">
            {displayPrice}
        </span>
        <span class="price font-bold" data-usdprice="{price}">
            {discountedDisplayPrice}
        </span>
        {:else}
        <span class="price" data-usdprice="{price}">
            {displayPrice}
        </span>
        {/if}
        {#if price_type === 'discount'}
        <span>%</span>
        {/if}
    </td>
    {#if selected != null}
    <td class="hidden lg:inline-flex align-center justify-center w-full px-0 lg:px-6 py-4 text-right text-sm font-medium">
        <div class="flex justify-center h-5">
            <input bind:checked={selected} type="checkbox" class="focus:ring-secondary h-4 w-4 text-secondary border-gray-300 rounded">
        </div>
    </td>
    {:else}
    <td class="hidden lg:inline-flex w-full align-center justify-center px-2 lg:px-6 py-4 text-sm text-gray-500">
        <div class="flex h-5">
            <input bind:value={amount} placeholder="0" type='text' pattern="[0-9]+" class="focus:ring-secondary active:ring-secondary h-6 w-10 px-2 py-1 border-gray-300 border rounded text-center invalid:text-error invalid:border-error valid:border-gray-300 valid:text-gray-500">
        </div>
    </td>
    {/if}
</tr>
{#if selected != null}
<tr class="border-gray-200 border-b table-row lg:hidden w-full align-center justify-center inline-flex">
    <td colspan="4">
        <div class="flex justify-center">
            <input bind:checked={selected} type="checkbox" class="mb-4 focus:ring-secondary h-9 w-3/5 text-secondary border-gray-300 rounded-lg">
        </div>
    </td>
</tr>
{:else}
<tr class="border-gray-200 border-b table-row lg:hidden">
    <td class="px-2 lg:px-6 py-4 text-sm text-gray-500">
        <div class="h-5">
            <input bind:value={amount} placeholder="0" type='text' pattern="[0-9]+" class="focus:ring-secondary active:ring-secondary h-6 w-10 px-2 py-1 border-gray-300 border rounded text-center invalid:ring-error invalid:text-error invalid:border-error invalid:text-error valid:border-gray-300 valid:text-gray-500">
        </div>
    </td>
</tr>
{/if}
