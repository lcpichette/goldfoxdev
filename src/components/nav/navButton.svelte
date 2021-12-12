<script>
    import { page } from "$app/stores";

    export let path;
    export let section;
    export let title;
    export let ignorePath;

    const fullPath = path + "#" + section;
</script>

{#if ignorePath != "true" && $page.path == path}
<a href={fullPath} class="text-white font-bold px-3 py-2 rounded-md text-sm pointer-events-none" aria-current="page">{title}</a>
{:else}
<a href={fullPath} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{title}</a>
{/if}

<style lang="postcss">
    a{
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        padding: 0.5em 1em;
        outline: none;
        border: none;

        overflow: hidden;
        transition: color 0.45s ease-in-out;
        max-width: 250px;
    }

    a::before{
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        
        @apply bg-white;
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
        transition: transform 0.45s ease-in-out;
    }

    a:hover{
        cursor: pointer;
        color: #161616;
    }

    a:hover::before {
        transform: translate3d(-50%, -50%, 0) scale3d(20, 20, 20);
    }
</style>