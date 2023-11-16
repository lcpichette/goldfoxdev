import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div id="hero" class="shadow-md shadow-gray-300/50 border w-full relative z-20"><div class="max-w-7xl mx-auto px-4"><div class="pt-8 lg:pt-0 h-[calc(20vh+180px)] lg:h-[65vh] flex flex-col lg:flex-row lg:justify-between">
            <div class="w-full lg:w-1/2 self-center flex justify-center">
                <div class="flex flex-col"><h1 class="text-4xl lg:text-5xl mt-8 lg:mt-0 font-extrabold text-primary-800 tracking-tight">Removing Technical Barriers</h1>
                    <h2 class="text-2xl text-gray-700 mt-2 hidden lg:inline-block">Website Development, Apps, Emails, Logos, and so much more</h2> 
                    <h2 class="text-2xl text-gray-700 mt-4 inline-block lg:hidden">Website Development</h2> 
                    <a href="/#contact" class="button w-44 flex justify-center mt-8 font-bold rounded-md text-white bg-primary-900"><span>Learn More</span></a></div></div>
        
            
            <div class="hidden lg:flex w-1/2 self-center justify-center"><div class="flex flex-col"><picture><source srcset="/img/Scene-1.webp" type="image/webp">
                        <source srcset="/img/Scene-1.png" type="image/png">
                        <img src="/img/Scene-1.webp" alt="Hi-Fi Mock"></picture>

                    <div class="h-auto flex justify-around">
                        </div></div></div></div></div></div>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div id="services" class="relative bg-gray-50 py-16 sm:py-24 lg:py-32 z-10"><div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"><h2 class="text-base font-semibold tracking-wider text-primary-700 underline-fancy-static-small mx-auto uppercase">Less to worry about</h2>
      <p class="mt-2 text-3xl font-extrabold text-primary-800 tracking-tight sm:text-4xl">Everything you need to create your <span class="mark text-primary-800 underline-fancy-static">website</span></p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">Let us geeks handle the boring tech-stuff, while you focus on what&#39;s important.
      </p>
      <div class="mt-12"><div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"><div class="pt-6"><div class="flow-root bg-gray-100 rounded-lg px-6 pb-8"><div class="-mt-6"><div><span class="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg shadow-secondary/50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg></span></div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Cloud-Hosted</h3>
                <p class="mt-5 text-base text-gray-600">Hosted using cutting-edge techniques, religiously following the 5 Principles of the <a class="underline-fancy" href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/">Well-Architected Framework</a>.
                </p></div></div></div>
  
          <div class="pt-6"><div class="flow-root bg-gray-100 rounded-lg px-6 pb-8"><div class="-mt-6"><div><span class="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg shadow-secondary/50">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span></div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">SSL Certificates</h3>
                <p class="mt-5 text-base text-gray-600">Keep your site secure, and help your users feel at-ease with what&#39;s now a must-have for websites: an HTTPS connection.
                </p></div></div></div>
  
          <div class="pt-6"><div class="flow-root bg-gray-100 rounded-lg px-6 pb-8"><div class="-mt-6"><div><span class="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg shadow-secondary/50">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></span></div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Updateable</h3>
                <p class="mt-5 text-base text-gray-600">Want to add posts, or change content on your site? We can add a Content Management System to provide you full autonomy.
                </p></div></div></div>
  
          <div class="pt-6"><div class="flow-root bg-gray-100 rounded-lg px-6 pb-8"><div class="-mt-6"><div><span class="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg shadow-secondary/50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg></span></div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Advanced Analytics</h3>
                <p class="mt-5 text-base text-gray-600">Stay a step-ahead by using advanced analytics to learn more about your site&#39;s visitors. 
                </p></div></div></div>
  
          <div class="pt-6"><div class="flow-root bg-gray-100 rounded-lg px-6 pb-8"><div class="-mt-6"><div><span class="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg shadow-secondary/50">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span></div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Continued Maintenance</h3>
                <p class="mt-5 text-base text-gray-600">We can provide continued maintenance and updates to your site at a low monthly price.
                </p></div></div></div>
  
          <div class="pt-6"><div class="flow-root bg-gray-100 rounded-lg px-6 pb-8"><div class="-mt-6"><div><span class="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg shadow-secondary/50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg></span></div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Database Backups</h3>
                <p class="mt-5 text-base text-gray-600">Worried about losing data? We can generate backups at a rate that&#39;s best for you.
                </p></div></div></div></div></div></div></div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svetle:head><title>About</title></svetle:head>


<div id="about" class="py-16 overflow-hidden rounded-md shadow-md shadow-gray-300/50 border-t border-gray-300/50 z-20 relative"><div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8"><div class="text-base max-w-prose mx-auto lg:max-w-none"><h2 class="text-base text-primary-700 font-semibold tracking-wide uppercase underline-fancy-static-small">We get it</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-800 sm:text-4xl">What makes us different</p></div>
      <div class="relative z-1 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72"><p class="text-lg text-gray-500">Humble uprisings and empathy; Gold Fox Dev started as a college student&#39;s love for making websites, and has transformed into something special.</p></div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start"><div class="relative z-1"><div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none"><p>We&#39;re all handling life the best we can. We&#39;re here to help make it a little less chaotic.</p>
            <ul role="list"><li>We let you focus on what&#39;s important; We aim to get all of the necessary information we need during our consultation meeting, preventing interruptions in development and in your workflow.</li>
                <li>At a low price, we won&#39;t break the bank!</li>
                <li>We don&#39;t construct websites using templates; Your website will always be unique.</li></ul>
            
            <h3 class="text-primary-800">We’re here to help</h3>
            <p>From idea to launch, we work quickly, provide high-quality results, all at an affordable rate.</p></div></div>
        <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none"><svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"></rect></svg>
          <blockquote class="relative bg-white rounded-lg shadow-lg"><div class="rounded-t-lg px-6 py-24">
                <div class="flex justify-start items-center flex-col lg:flex-row"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    <h3 class="block lg:inline pl-4 pb-1 text-xl leading-8 font-semibold tracking-tight text-primary-800">Meet the Developer</h3>
                    <h4 class="block lg:inline italic text-gray-600">... and the cat?</h4></div>

                
                <div class="relative text-lg text-gray-700 font-medium mt-8"><svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
                    <p class="relative">Cat-dad and technology enthusiast, I spend my free time watching shows and fearing spontaneous attacks from my cat Keanu.</p></div>

                
                <div class="rounded-full right-10 mt-6 absolute flex"><span class="place-self-center pr-4 text-primary-800 font-semibold">Keanu</span>
                    <img class="w-12 h-12 border border-transparent rounded-full bg-secondary" src="/img/keanu_headshot.jpg" alt=""></div></div>
            <cite class="relative flex items-center sm:items-start bg-secondary rounded-b-lg not-italic py-5 px-6"><div class="relative rounded-full border-2 border-white"><img class="w-12 h-12 rounded-full bg-secondary" src="/img/headshot.jpg" alt=""></div>
              <span class="relative flex flex-col text-left ml-6 text-secondary font-semibold"><p class="text-gray-800 font-semibold text-base inline">Lucas Pichette</p>
                <p class="hidden lg:block text-gray-700 font-normal">Developer at Gold Fox Dev</p>
                <p class="block lg:hidden text-gray-600 font-normal">Developer</p></span></cite></blockquote></div></div></div>
    
    <div class="max-w-7xl px-8 mx-auto pt-6 flex justify-between">
      <div class="mt-10 flex w-full">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8"></dl></div></div></div>`;
});
const contact_svelte_svelte_type_style_lang = "";
const css = {
  code: "sup.svelte-12a7e1u{color:#a22616;padding-left:2px;font-weight:bold}input.svelte-12a7e1u{z-index:10}.input.svelte-12a7e1u{display:block;width:100%;border-radius:0.375rem;--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(253 253 253 / var(--tw-bg-opacity));padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.input.svelte-12a7e1u:focus{--tw-border-opacity:1;border-color:rgb(255 184 6 / var(--tw-border-opacity));--tw-ring-opacity:1;--tw-ring-color:rgb(255 184 6 / var(--tw-ring-opacity))}.invalid-input.svelte-12a7e1u:invalid{--tw-border-opacity:1;border-color:rgb(162 38 22 / var(--tw-border-opacity))}.invalid-input.svelte-12a7e1u:focus:invalid{--tw-border-opacity:1;border-color:rgb(162 38 22 / var(--tw-border-opacity));--tw-ring-opacity:1;--tw-ring-color:rgb(162 38 22 / var(--tw-ring-opacity))}",
  map: null
};
const firstNameValidation = "[A-Za-z]{2,}";
const emailValidation = "[a-zA-Z0-9._%+-]+@(?!gmail\\.com|outlook\\.com|hotmail\\.com|aol\\.com|yahoo\\.com)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
function checkValidity(element) {
  if (!element)
    return false;
  return !element.checkValidity() && element.value !== "";
}
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emailInput, submitButton, firstNameInput;
  $$result.css.add(css);
  return `<div id="contact" class="relative bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 z-10"><div class="relative max-w-xl mx-auto"><svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
		<svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
		<div class="text-center"><h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Us</h2>
			<p class="mt-4 text-lg leading-6 text-gray-500">Want to <span class="text-primary-800 underline-fancy-static-small">learn more</span>, or
				<span class="text-primary-800 underline-fancy-static-small">get started</span>?
				Shoot a quick email our way by filling out this form.
			</p></div>

		<div class="mt-12"><form action="https://app.99inbound.com/api/e/oa4cFnR6" method="POST" class="flex flex-col gap-2 lg:grid lg:gap-y-2 lg:grid-cols-2 lg:gap-x-8"><div><label for="first-name" class="block text-sm font-medium text-gray-700">First name<sup class="svelte-12a7e1u">*</sup></label>
					<div class="mt-1"><input type="text"${add_attribute("pattern", firstNameValidation, 0)} name="first-name" id="first-name" autocomplete="given-name" class="${["input svelte-12a7e1u", checkValidity(emailInput) ? "invalid-input" : ""].join(" ").trim()}" required${add_attribute("this", firstNameInput, 0)}>
						${``}</div></div>
				<div><label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
					<div class="mt-1"><input type="text" name="last-name" id="last-name" autocomplete="family-name" class="input svelte-12a7e1u"></div></div>
				<div class="mb-6 col-span-1 lg:col-span-2"><label for="company" class="block text-sm font-medium text-gray-700">Company</label>
					<div class="mt-1"><input type="text" name="company" id="company" autocomplete="organization" class="input svelte-12a7e1u"></div></div>
				<div class="col-span-1 lg:col-span-2"><label for="email" class="block text-sm font-medium text-gray-700">Email<sup class="svelte-12a7e1u">*</sup></label>
					<div class="mt-1"><input id="email" name="email" type="email"${add_attribute("pattern", emailValidation, 0)} autocomplete="email" class="${["input svelte-12a7e1u", checkValidity(emailInput) ? "invalid-input" : ""].join(" ").trim()}" required${add_attribute("this", emailInput, 0)}>
						${``}</div></div>
				<div class="col-span-1 lg:col-span-2 mb-6"><label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
					<div class="mt-1 relative rounded-md shadow-sm"><div class="absolute inset-y-0 left-0 flex items-center"><label for="country" class="sr-only">Country</label>
							<select id="country" name="country" class="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-secondary focus:border-secondary rounded-md"><option value="US">US</option><option value="CA">CA</option><option value="EU">EU</option></select></div>
						<input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="py-3 px-4 block w-full pl-20 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md bg-[#fdfdfd] svelte-12a7e1u" placeholder="+1 (123) 456-7890"></div></div>
				<div class="col-span-1 lg:col-span-2"><label for="message" class="block text-sm font-medium text-gray-700">Message</label>
					<div class="mt-1"><textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-secondary focus:border-secondary border border-gray-300 rounded-md bg-[#fdfdfd]"></textarea></div></div>
				<div style="position: absolute; left: -5000px;"><input type="checkbox" name="incredible_grey_cracked_tapir" value="1" tabindex="-1" autocomplete="no" class="svelte-12a7e1u"></div>
				<div class="pt-4 col-span-2 w-full"><button type="submit" class="disabled:bg-primary-200 disabled:cursor-default cursor-pointer w-full block mx-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-900" disabled${add_attribute("this", submitButton, 0)}>Let&#39;s talk
					</button></div></form></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-bmvgco_START -->${$$result.title = `<title>Gold Fox Dev</title>`, ""}<!-- HEAD_svelte-bmvgco_END -->`, ""}


${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}


${validate_component(Services, "Services").$$render($$result, {}, {}, {})}


${validate_component(About, "About").$$render($$result, {}, {}, {})}


${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
