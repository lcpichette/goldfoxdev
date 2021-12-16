<script context="module">
	import { GraphQLClient } from 'graphql-request';
	export async function load(ctx) {
		const graphcms = new GraphQLClient(
			'https://api-us-west-2.graphcms.com/v2/ckx6em1th5ke501xq4z6t1q05/master',
			{
				headers: {}
			}
		);
		const { post } = await graphcms.request(
			`query PostPageQuery($slug: String!) {
				post(where: { slug: $slug }) {
					title
					slug
					date
					excerpt
					coverImage {
						url
						handle
					}
					content {
						text
						raw
						html
					}
					tags
					author {
						name
						picture {
							url
						}
					}
				}
			}`,
			{
				slug: ctx.page.params.slug
			}
		);
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { page } from "$app/stores";
	export let post;
	//let post = null;
	

	onMount(()=>{
		document.getElementById("post-content").innerHTML = post.content.html;
	});
</script>

<svelte:head>
	<title>{$page.params.slug}</title>
</svelte:head>

{#if post === undefined || post === null}
<div class="h-[calc(100vh-15vh-4rem)] relative flex justify-center place-items-center">
	<svg viewBox="25 25 50 50" class="">
	<circle cx="50" cy="50" r="20"></circle>
	</svg>
</div>
{:else}
<div class="max-w-7xl mx-auto px-8 py-12 selection:bg-secondary/20">
	<div class="py-6">
		<h1 class="text-3xl text-primary-800 font-nromal">{post.title}</h1>
		<div class="flex place-items-center py-4 text-gray-800 text-sm">
			<img class="h-10 w-10 rounded-full mr-2" src="{post.author.picture.url}" alt="headshot of author">
			<span class="mr-2">{post.author.name}</span>
			<time class="mr-2" datetime="{post.date}">
				{post.date}
			</time>
			<span class="mr-2" aria-hidden="true">
				&middot;
			</span>
			<span class="mr-2">
				{(post.content.text.split(' ').length / 200).toFixed(0) + "min read"}
			</span>
		</div>
	</div>
	<div id="post-content"></div>
</div>
{/if}

<style lang="postcss">
	svg {
  @apply w-[15vh];
  @apply h-[15vh];
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  @apply stroke-secondary;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}

h1, h2, h3, h4, h5, h6{
	@apply text-primary-800;
}
h1{
	@apply text-3xl;
}
h2{
	@apply text-2xl;
}
h3{
	@apply text-xl;
}
h4{
	@apply text-lg;
}
p, span, a{
	@apply text-gray-900;
}

</style>