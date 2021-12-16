<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    export let path;
    export let section = undefined;
    export let title;

    let randomNum = Math.random() * Date.now();
    let mounted = false;

    if(section === undefined){section = ""}else{section="#"+section}
    let fullPath = path + section;
    if(fullPath.includes('##')){
        console.log("!!!! ", fullPath);
        let idx = fullPath.indexOf('#');
        fullPath.slice(idx, idx+1);
        console.log("~~~~ ", fullPath);
    }

    onMount(()=>{
        document.getElementById("nav-"+title+randomNum).classList.remove("active");
        document.getElementById("nav-"+title+randomNum).classList.remove("inactive");
        mounted = true;

        navUpdate();
    });

    const navUpdate = (ev) => {
        if(mounted){
            if(window.location.href){
                if($page.path === path){
                    if(window.location.hash.includes("#")){
                        // Can't be Home '/'
                        if(section != ""){
                            if(window.location.hash.includes(section)){
                                // correct hash, section, and path. Must be true.
                                // Link must be active
                                // Our "Contact"
                                document.getElementById("nav-"+title+randomNum).classList.remove("inactive");
                                document.getElementById("nav-"+title+randomNum).classList.add("active");
                            } else{
                                // has hash, but incorrect section. Must be false.
                                // inactive
                                document.getElementById("nav-"+title+randomNum).classList.remove("active");
                                document.getElementById("nav-"+title+randomNum).classList.add("inactive");
                            }
                        } else{
                            // has hash, but no section is specified
                            // inactive
                            document.getElementById("nav-"+title+randomNum).classList.remove("active");
                            document.getElementById("nav-"+title+randomNum).classList.add("inactive");
                        }
                    } else{
                        // no hash and correct path
                        if(section == ""){
                            // Must be home or pricing
                            document.getElementById("nav-"+title+randomNum).classList.remove("inactive");
                            document.getElementById("nav-"+title+randomNum).classList.add("active");
                        } else{
                            // no hash, but desires section
                            // inactive
                            document.getElementById("nav-"+title+randomNum).classList.remove("active");
                            document.getElementById("nav-"+title+randomNum).classList.add("inactive");
                        }
                    }
                } else{
                    // inactive
                    document.getElementById("nav-"+title+randomNum).classList.remove("active");
                    document.getElementById("nav-"+title+randomNum).classList.add("inactive");
                }
            } else{
                console.error("???");
            }
        } else{
            //not mounted
        }
    }

    $: ($page.path) ? navUpdate() : navUpdate();
</script>

<svelte:window on:hashchange={navUpdate} on:popstate={navUpdate} />

<a id={"nav-"+title+randomNum} href={fullPath} class="relative inactive active z-20">{title}</a>

<style lang="postcss">
    .active{
        @apply text-white px-3 py-2 rounded-md text-sm font-bold pointer-events-none;
    }
    .inactive {
        @apply text-gray-300 px-3 py-2 rounded-md text-sm font-normal;
    }
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
    @media (max-width: 500px){
        a{
            max-width:100%;
        }
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
        transform: translate3d(-50%, -50%, 0) scale3d(25, 25, 25);
    }
</style>