<script>
    import Nav from "../components/nav.svelte";
    import Footer from "../components/footer.svelte";
</script>


<div>
    <!-- Navbar -->
    <Nav/>

    <slot></slot>

    <!-- Footer -->
    <Footer/>
</div>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(h1, h2, h3){
        @apply text-primary-800;
    }

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

    :global(button){
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        @apply bg-primary-900;
        overflow: hidden;
        transition: color 0.15s ease-in-out;
        max-width: 250px;
    }

    :global(button::before){
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        @apply bg-secondary;
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
        transition: transform 0.15s ease-in-out;
    }

    :global(button:active){
        cursor: pointer;
        color: #161616;
    }

    :global(button:active::before) {
        transform: translate3d(-50%, -50%, 0) scale3d(20, 20, 20);
    }
</style>