<script>
    import Nav from "../components/nav.svelte";
    import Footer from "../components/footer.svelte";
</script>

<!-- Navbar -->
<Nav/>


<slot></slot>


<!-- Footer -->
<Footer/>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(.underline-fancy) {
        background: 
            linear-gradient(currentColor 0 0) 
            var(--p, 0) 100% /var(--d, 0) 2px 
            no-repeat;
        transition: 0.3s, background-position 0s 0.3s;

        font-weight:600;
        cursor:pointer;
        @apply text-gray-800;
    }
    :global(.underline-fancy:hover) {
        --d: 100%;
        --p: 100%;
    }
</style>