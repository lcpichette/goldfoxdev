<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status // same as status: status
            }
        };
    }
  </script>
  
  <script>
    import Missing from '../components/404.svelte';
    import Other from '../components/other.svelte';
  
    export let message;
    export let status;
  </script>
  
  {#if status == 404} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
    <Missing />
  {:else}
    <Other message={message} />
  {/if}