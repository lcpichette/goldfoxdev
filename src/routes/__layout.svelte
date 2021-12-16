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

    :global(*){
        scroll-behavior: smooth;
    }

    :global(h1, h2, h3){
        @apply text-primary-800;
    }
    :global(.underline-fancy) {
        position: relative;
    }

    :global(.underline-fancy::before) {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        @apply text-primary-800;
        @apply bg-secondary;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.5s ease;
    }

    :global(.underline-fancy:hover::before) {
        transform-origin: bottom left;
        transform: scaleX(1);
    }

    :global(a.button){
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: .75em 1em;
        outline: none;
        border: none;
        @apply bg-primary-900;
        @apply shadow-md;
        @apply shadow-primary-900/50;
        overflow: hidden;
        transition: color 0.35s ease-in-out;
        max-width: 250px;
    }

    :global(a.button::before){
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
        transition: transform 0.35s ease-in-out;
    }

    :global(a.button:hover){
        cursor: pointer;
        color: #161616;
        @apply shadow-md;
    }

    :global(a.button:hover::before) {
        transform: translate3d(-50%, -50%, 0) scale3d(20, 20, 20);
    }

    :global(a.button:active){
        @apply shadow-sm;
        @apply shadow-secondary/50;
    }
</style>