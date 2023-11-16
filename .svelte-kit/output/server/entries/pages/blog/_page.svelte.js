import { c as create_ssr_component, b as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/index2.js";
const BlogHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="bg-white shadow-md shadow-gray-300/50 border border-t border-gray-300/50 z-20 relative"><div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"><div class="text-center"><h2 class="text-base font-semibold text-primary-800 underline-fancy-static-small w-12 mx-auto tracking-wide uppercase">Blog</h2>
            <p class="mt-1 text-4xl font-extrabold text-primary-800 sm:text-5xl sm:tracking-tight lg:text-6xl">To Inform is to Empower</p>
            <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Website Development blog posts, to help keep you informed.</p></div></div></div>`;
});
const postCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fadeOut{animation:svelte-1pgdg85-fadeOut 4s linear forwards}@keyframes svelte-1pgdg85-fadeOut{0%{opacity:1}35%{opacity:1}100%{opacity:0}}",
  map: null
};
const Post_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { type } = $$props;
  let { author = "Lucas Pichette" } = $$props;
  let { publishDate } = $$props;
  let { readTime } = $$props;
  let { imgUrl } = $$props;
  let { authorImgUrl } = $$props;
  let { postUrl } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.publishDate === void 0 && $$bindings.publishDate && publishDate !== void 0)
    $$bindings.publishDate(publishDate);
  if ($$props.readTime === void 0 && $$bindings.readTime && readTime !== void 0)
    $$bindings.readTime(readTime);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  if ($$props.authorImgUrl === void 0 && $$bindings.authorImgUrl && authorImgUrl !== void 0)
    $$bindings.authorImgUrl(authorImgUrl);
  if ($$props.postUrl === void 0 && $$bindings.postUrl && postUrl !== void 0)
    $$bindings.postUrl(postUrl);
  $$result.css.add(css);
  return `<a${add_attribute("href", postUrl, 0)} class="post-card flex flex-col rounded-md shadow-lg overflow-hidden hover:shadow-2xl hover:transform hover:-translate-y-[1px] cursor-pointer relative z-20"><div class="flex-shrink-0 border-b-2 border-gray-300"><img class="h-48 w-full object-cover"${add_attribute("src", imgUrl, 0)} alt=""></div>
    <div class="flex-1 bg-gradient-to-tl from-primary-800/10 via-white to-white p-6 flex flex-col justify-between"><div class="flex-1"><p class="flex flex-wrap text-sm tracking-wide font-semibold text-primary-700 absolute z-30">${each(type, (tag) => {
    return `<a href="/blog" class="underline-fancy mx-1.5">${escape(tag)}
                    </a>`;
  })}</p>
            <div class="block mt-8"><p class="text-xl font-semibold text-primary-800">${escape(title)}</p>
                <p class="mt-3 text-base text-gray-600">${escape(description)}</p></div></div>
        <div class="mt-6 flex items-center"><div class="flex-shrink-0"><span class="sr-only">${escape(author)}</span>
                <img class="h-10 w-10 rounded-full"${add_attribute("src", authorImgUrl, 0)} alt=""></div>
            <div class="ml-3"><p class="text-sm font-medium text-primary-800">${escape(author)}</p>
                <div class="flex space-x-1 text-sm text-gray-500"><time${add_attribute("datetime", publishDate, 0)}>${escape(publishDate)}</time>
                    <span aria-hidden="true">·
                    </span>
                    <span>${escape(readTime + "min read")}</span></div></div></div></div>
</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let posts;
  let searchValue = "";
  let visiblePosts = posts.reverse();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<svetle:head><title>GFD Blog</title></svetle:head>


${validate_component(BlogHeader, "BlogHeader").$$render($$result, {}, {}, {})}
<div class="relative bg-gray-50 py-16 px-8 z-10"><div class="relative max-w-7xl mx-auto">
		<div class="justify-center flex">
			<input id="blog-search" type="text" placeholder="Press Enter or Click Icon to Search..." class="hidden lg:block rounded-full w-2/3 lg:w-1/3 px-5 focus:border-secondary border-2 outline-none"${add_attribute("value", searchValue, 0)}>
			
			<input id="blog-search" type="text" placeholder="Search..." class="block lg:hidden rounded-full w-2/3 lg:w-1/3 px-5 focus:border-secondary border-2 outline-none"${add_attribute("value", searchValue, 0)}>
			
			<svg class="h-5 w-5 text-gray-500 hover:text-primary-900 cursor-pointer transform -translate-x-9 translate-y-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div>

		<span style="opacity:0;" id="search-reminder" class="text-center text-red-400 italic text-base pt-1 block">Press Enter or Click the Search Icon to Search</span>

		
		<div id="post-wrapper" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">${each(visiblePosts, (post) => {
    return `${validate_component(Post_card, "PostCard").$$render(
      $$result,
      {
        title: post.title,
        description: post.excerpt,
        type: post.tags,
        author: post.author.name,
        publishDate: post.date,
        readTime: (post.content.text.split(" ").length / 200).toFixed(0),
        authorImgUrl: post.author.picture.url,
        imgUrl: post.coverImage.url,
        postUrl: "/post/" + post.slug
      },
      {},
      {}
    )}`;
  })}</div></div></div>`;
});
export {
  Page as default
};
