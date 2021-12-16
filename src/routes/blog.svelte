<script context="module">
  import { GraphQLClient } from 'graphql-request';
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
    console.log("POST: ",posts);
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
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<BlogHeader/>
<div class="relative bg-gray-50 py-16 px-8">
  <div class="relative max-w-7xl mx-auto">

    <!-- Search Bar -->
    <div class="justify-center flex">
      <input type="text" placeholder="Search..." class="rounded w-2/3 lg:w-1/3 selected:w-2/3"/>
    </div>

    <!-- Posts -->
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {#each posts as post}
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
  