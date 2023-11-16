const c = [
	() => import("../components/layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/qualifications/+page.svelte"),
	() => import("../../../src/routes/components/+page.svelte"),
	() => import("../../../src/routes/delivered/+page.svelte"),
	() => import("../../../src/routes/+layout.svelte"),
	() => import("../../../src/routes/pricing/+page.svelte"),
	() => import("../../../src/routes/+error.svelte"),
	() => import("../../../src/routes/+page.svelte"),
	() => import("../../../src/routes/blog/+page.svelte"),
	() => import("../../../src/routes/jobs/+page.svelte"),
	() => import("../../../src/routes/post/[slug]/+page.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/qualifications/+page.svelte
	[/^\/qualifications\/\+page\/?$/, [c[0], c[2]], [c[1]]],

	// src/routes/components/+page.svelte
	[/^\/components\/\+page\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/delivered/+page.svelte
	[/^\/delivered\/\+page\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/+layout.svelte
	[/^\/\+layout\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/pricing/+page.svelte
	[/^\/pricing\/\+page\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/+error.svelte
	[/^\/\+error\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/+page.svelte
	[/^\/\+page\/?$/, [c[0], c[8]], [c[1]]],

	,

	// src/routes/blog/+page.svelte
	[/^\/blog\/\+page\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/jobs/+page.svelte
	[/^\/jobs\/\+page\/?$/, [c[0], c[10]], [c[1]]],

	,

	// src/routes/post/[slug]/+page.svelte
	[/^\/post\/([^/]+?)\/\+page\/?$/, [c[0], c[11]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];