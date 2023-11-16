import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const _404 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<div class="min-h-full pt-16 pb-12 flex flex-col bg-white"><main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"><div class="flex-shrink-0 flex justify-center"><a href="/" class="inline-flex"><span class="sr-only">Gold Fox Dev</span>
          <img class="h-14 w-auto" src="/img/Gold-Fox-Dev-Icon-Transparent.webp" alt="company logo"></a></div>
      <div class="py-16"><div class="text-center"><p class="text-sm font-semibold text-primary uppercase tracking-wide">404 error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-secondary tracking-tight sm:text-5xl">Page not found.</h1>
          <p class="mt-2 text-base text-secondary-700">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6"><a href="/" class="text-base font-medium text-primary underline-fancy text-primary-900">Go back home</a><span aria-hidden="true"> →</span></div></div></div></main></div>`;
});
const Other = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="min-h-full pt-16 pb-12 flex flex-col bg-white"><main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"><div class="flex-shrink-0 flex justify-center"><a href="/" class="inline-flex"><span class="sr-only">Gold Fox Dev</span>
          <img class="h-12 w-auto" src="/img/Gold-Fox-Dev-Logo-Transparent.webp" alt=""></a></div>
      <div class="py-16"><div class="text-center"><p class="text-sm font-semibold text-primary-800 uppercase tracking-wide">Unrecognized Error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-secondary tracking-tight sm:text-5xl">${escape(message)}</h1>
          <div class="mt-6"><a href="/" class="text-base font-medium text-primary-800">Go back home<span aria-hidden="true">→</span></a></div></div></div></main></div>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$page.status === 404 ? `${validate_component(_404, "Missing").$$render($$result, {}, {}, {})}` : `${validate_component(Other, "Other").$$render($$result, { message: $page.error.message }, {}, {})}`}`;
});
export {
  Error as default
};
