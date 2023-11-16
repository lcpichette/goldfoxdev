import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.keanu-coder-cat.svelte-1xtcxlk{height:72px;width:72px}#post-gratitude.svelte-1xtcxlk{font-size:42px;font-weight:200;padding:4px 24px;margin-left:30px;color:white;border-left:2px solid #ffb806}@media screen and (max-width: 612px){.keanu-coder-cat.svelte-1xtcxlk{height:50px;width:50px;margin-left:24px}#post-gratitude.svelte-1xtcxlk{font-size:24px}.author.svelte-1xtcxlk{font-size:16px}}svg.svelte-1xtcxlk{width:15vh;height:15vh;transform-origin:center;animation:svelte-1xtcxlk-rotate 2s linear infinite}circle.svelte-1xtcxlk{fill:none;stroke:#ffb806;stroke-width:2;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:svelte-1xtcxlk-dash 1.5s ease-in-out infinite}@keyframes svelte-1xtcxlk-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1xtcxlk-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-35px}100%{stroke-dashoffset:-125px}}#post-wrapper .serif-demonstration{font-family:garamond, serif}#post-wrapper .display-demonstration{font-family:fatface, display}#post-wrapper .script-demonstration{font-family:nautigal, script}#post-wrapper a{position:relative;font-style:italic;color:#393e50}#post-wrapper a::before{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;--tw-text-opacity:1;color:rgb(48 52 68 / var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgb(255 184 6 / var(--tw-bg-opacity));transform-origin:bottom right;transform:scaleX(0);transition:transform 0.5s ease}#post-wrapper a:hover::before{transform-origin:bottom left;transform:scaleX(1)}#post-wrapper h2{padding-top:3rem;padding-bottom:0.5rem;font-size:1.875rem;line-height:2.25rem;--tw-text-opacity:1;color:rgb(57 62 80 / var(--tw-text-opacity))}#post-wrapper h3{padding-top:2rem;padding-bottom:0.25rem;font-size:1.5rem;line-height:2rem;font-weight:600;--tw-text-opacity:1;color:rgb(57 62 80 / var(--tw-text-opacity))}#post-wrapper h4{padding-top:2rem;padding-bottom:0.25rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(57 62 80 / var(--tw-text-opacity))}#post-wrapper p{color:#222;padding-bottom:12px}#post-wrapper blockquote{margin-top:1rem;margin-bottom:1rem;border-left-width:4px;--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity));padding-left:1rem;--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}#post-wrapper h2 + h3{padding-bottom:0.5rem;padding-top:0.25rem}#post-wrapper h3 + h4{padding-bottom:0.5rem;padding-top:0.25rem}#post-wrapper h5 + h6{padding-bottom:0.5rem;padding-top:0.25rem}#post-wrapper code{border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));background-color:#e9e2dd5e;padding:0.25rem;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(185 28 28 / var(--tw-text-opacity))}#post-wrapper pre code{border-style:none;background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}#post-wrapper pre{display:block;width:100%;border-radius:0.375rem;border-width:2px;--tw-border-opacity:1;border-color:rgb(107 114 128 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(39 43 56 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.5rem;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));margin-top:0.25rem;margin-bottom:0.5rem}#post-wrapper pre .buttons{height:12px;padding-bottom:1rem;padding-top:0.25rem}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1nxrmmg_START -->${$$result.title = `<title>${escape($page.params.slug)}</title>`, ""}<!-- HEAD_svelte-1nxrmmg_END -->`, ""}

<div id="post-wrapper"><div class="px-8 mt-12 max-w-7xl mx-auto">${``}</div>
	

	${`<div class="h-[calc(100vh-15vh-4rem)] relative flex justify-center place-items-center"><svg viewBox="25 25 50 50" class=" svelte-1xtcxlk"><circle cx="50" cy="50" r="20" class="svelte-1xtcxlk"></circle></svg></div>`}

	<div style="margin-bottom:140px;margin-top:20px;" class="max-w-7xl mx-auto px-8 flex justify-center"><div style="background-color:#303444;width:100%;padding:20px 0;" class="flex justify-center place-items-center border-2 border-secondary"><img height="72px" width="72px" class="border border-transparent rounded-full bg-secondary keanu-coder-cat svelte-1xtcxlk" src="/img/keanu_headshot.jpg" alt="">
			<h2 id="post-gratitude" class="relative px-4 svelte-1xtcxlk">Thanks for Reading!<span class="author italic text-lg text-left block pl-2 pt-2 svelte-1xtcxlk">-Keanu the Coder Cat</span></h2></div></div>
	
</div>`;
});
export {
  Page as default
};
