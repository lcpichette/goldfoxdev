import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const navOpen = writable(false);
const navButton_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1cw1fym{z-index:1;position:relative;font-size:inherit;font-family:inherit;padding:0.5em 1em;outline:none;border:none;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));overflow:hidden;transition-property:color, background-color;transition-duration:0.45s;transition-timing-function:ease-in-out;max-width:250px;cursor:pointer}a.active.svelte-1cw1fym{pointer-events:none;font-weight:700;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}a.inactive.svelte-1cw1fym{font-weight:400;--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity))}@media(max-width: 500px){a.svelte-1cw1fym{max-width:100%}}a.svelte-1cw1fym:hover{color:#fff;background-color:#303444}",
  map: null
};
const NavButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { path = "" } = $$props;
  let { section = void 0 } = $$props;
  let { title } = $$props;
  let randomNum = Math.random() * Date.now();
  let fullPath;
  const navUpdate = () => {
  };
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  {
    $page.path ? navUpdate() : navUpdate();
  }
  $$unsubscribe_page();
  return `

<a${add_attribute("id", "nav-" + title + randomNum, 0)}${add_attribute("href", fullPath, 0)} class="relative inactive active z-20 px-3 py-5 rounded-md text-sm svelte-1cw1fym">${escape(title)}</a>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobileOpen = false;
  navOpen.subscribe((value) => {
    mobileOpen = value;
  });
  return `
<div class="h-[4.5rem]"></div>
<nav class="bg-primary-900 fixed top-0 w-full z-50 shadow-md shadow-primary-900/50"><div class="max-w-7xl mx-auto px-8"><div class="relative flex items-center justify-between h-[4.5rem]">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden w-full"><div class="flex relative justify-between place-items-center w-full">
					<button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only">Open main menu</span>

						${!mobileOpen ? `<svg id="openMobileNavIcon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>` : `<svg id="closedMobileNavIcon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`}</button>
					<div class="relative"><img class="h-6 w-6" src="/img/Gold-Fox-Dev-Icon-Transparent.webp" alt="Gold Fox Dev Icon"></div></div></div>

			
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"><div class="flex-shrink-0 flex items-center"><div class="hidden lg:flex place-items-center"><img class="h-8 w-auto text-white" src="/img/Gold-Fox-Dev-Logo-White-Transparent.webp" alt="Gold Fox Dev"></div></div>
				<div class="hidden lg:block sm:ml-6"><div class="flex space-x-4">${validate_component(NavButton, "NavButton").$$render($$result, { path: "/", title: "Home" }, {}, {})}
						
						${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      path: "/",
      section: "contact",
      title: "Contact"
    },
    {},
    {}
  )}
						${validate_component(NavButton, "NavButton").$$render($$result, { path: "/pricing", title: "Pricing" }, {}, {})}
						<div><link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
							<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async><\/script>
							<script type="text/javascript">window.onload = function () {
									Calendly.initBadgeWidget({
										url: 'https://calendly.com/goldfoxdev/consultation-meeting',
										text: "Let's Get Started",
										color: '#ffb806',
										textColor: '#272b38',
										branding: false
									});
								};
							<\/script></div></div></div></div></div></div>

	
	<div style="height:1px;overflow:hidden;" class="block lg:hidden transition-all ease-in-out duration-300" id="mobile-menu"><div class="relative pt-2 pb-2 space-y-1 flex lg:hidden flex-col gap-2 px-8 z-10">${validate_component(NavButton, "NavButton").$$render($$result, { path: "/", title: "Home" }, {}, {})}
			
			${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      path: "/",
      section: "contact",
      title: "Contact"
    },
    {},
    {}
  )}
			${validate_component(NavButton, "NavButton").$$render($$result, { path: "/pricing", title: "Pricing" }, {}, {})}</div></div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<footer class="bg-white border-t border-gray-300/50 z-20 relative"><div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"><nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer"><div class="px-5 py-2"><a href="/#about" class="underline-fancy text-base text-gray-500 hover:text-gray-900">About
          </a></div>
  
        
  
        <div class="px-5 py-2"><a href="/jobs" class="underline-fancy text-base text-gray-500 hover:text-gray-900">Jobs
          </a></div></nav>
      <div class="mt-8 flex justify-center space-x-6"><a href="https://www.facebook.com/goldfoxdev" class="text-gray-500 hover:text-secondary"><span class="sr-only">Facebook</span>
          <svg class="h-6 w-6 transition duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a>
  
        <a href="https://www.instagram.com/goldfoxdev/" class="text-gray-500 hover:text-secondary"><span class="sr-only">Instagram</span>
          <svg class="h-6 w-6 transition duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a>
 
        </div>
      <p class="mt-8 text-center text-base text-gray-500">© 2023 Gold Fox Dev, All rights reserved.
      </p></div></footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>
	${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

	${slots.default ? slots.default({}) : ``}

	
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
