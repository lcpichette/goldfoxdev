<script>
    export let service;
    export let description;
    export let price;

    export let currencySymbol;
    export let selected;
</script>

<tr class="p-3">
    <td class="px-2 lg:px-6 py-4 text-sm font-medium text-gray-900">
        {service}
    </td>
    <td class="px-2 lg:px-6 py-4 text-sm text-gray-500 col-span-2 lg:col-span-1">
        {description}
    </td>
    <td class="px-2 lg:px-6 py-4 text-sm text-gray-500">
        <span class="symbol">{currencySymbol}</span><span class="price" data-usdprice="{price}">
            {price}
        </span>
    </td>
    <td class="hidden lg:inline-block px-0 lg:px-6 py-4 text-right text-sm font-medium">
        <div class="flex justify-center h-5">
            <input bind:checked={selected} type="checkbox" class="focus:ring-secondary h-4 w-4 text-secondary border-gray-300 rounded">
        </div>
    </td>
</tr>
<tr class="border-gray-200 border-b table-row lg:hidden">
    <td colspan="4">
        <div class="flex justify-center">
            <input bind:checked={selected} type="checkbox" class="mb-4 focus:ring-secondary h-9 w-3/5 text-secondary border-gray-300 rounded-lg">
        </div>
    </td>
</tr>