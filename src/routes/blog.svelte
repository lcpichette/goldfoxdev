<script context="module">
  import { GraphQLClient } from 'graphql-request';
import { onMount } from 'svelte';
  export async function load() {
    const graphcms = new GraphQLClient(
      'https://api-us-west-2.graphcms.com/v2/ckx6em1th5ke501xq4z6t1q05/master',
      {
        headers: {}
      }
    );
    const { posts } = await graphcms.request(
      `{ 
        posts {
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
          }
          tags
          author {
						name
            picture {
              url
            }
					}
        }
      }`
    );
    return {
      props: {
        posts
      }
    };
  }
</script>
<script>
  import BlogHeader from "../components/blogHeader.svelte";
  import PostCard from "../components/post-card.svelte";
  export let posts;

  onMount(()=>{
    mounted = true;
  })

  let mounted = false;
  let searchValue = "";
  let visiblePosts = posts;

  function updateSearch() {
    console.log(mounted, '//////', searchValue);
    if(mounted){
      if(searchValue === ""){
        visiblePosts = posts;
      } else{
        visiblePosts = [];
        posts.forEach((post)=>{
          if(post.title.toLowerCase().includes(searchValue.toLowerCase())
          || post.content.text.toLowerCase().includes(searchValue.toLowerCase())
          || post.excerpt.toLowerCase().includes(searchValue.toLowerCase())){
            visiblePosts.push(post);
          }
        });
        console.log(visiblePosts);
      }
    }
  };
</script>

<svetle:head>
  <title>GFD Blog</title>
</svetle:head>

<!-- This example requires Tailwind CSS v2.0+ -->
<BlogHeader/>
<div class="relative bg-gray-50 py-16 px-8 -z-10">
  <div class="relative max-w-7xl mx-auto">

    <!-- Search Bar -->
    <div class="justify-center flex">
      <input on:change={()=>{updateSearch()}} bind:value={searchValue} type="text" placeholder="Search..." class="rounded-full w-2/3 lg:w-1/3 px-5 focus:border-secondary border-2 outline-none"/>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 transform -translate-x-9 translate-y-3" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Posts -->
    <div id="post-wrapper" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {#each visiblePosts as post}
        <PostCard 
        title={post.title} 
        description={post.excerpt}
        type={post.tags}
        author={post.author.name}
        publishDate={post.date}
        readTime={(post.content.text.split(' ').length / 200).toFixed(0)}
        authorImgUrl={post.author.picture.url}
        imgUrl={post.coverImage.url}
        postUrl="/post/{post.slug}"
        />
      {/each}
    </div>
  </div>
</div>
  