const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/qualifications.svelte"),
	() => import("../../../src/routes/components.svelte"),
	() => import("../../../src/routes/delivered.svelte"),
	() => import("../../../src/routes/pricing.svelte"),
	() => import("../../../src/routes/blog.svelte"),
	() => import("../../../src/routes/jobs.svelte"),
	() => import("../../../src/routes/post/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/qualifications.svelte
	[/^\/qualifications\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/components.svelte
	[/^\/components\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/delivered.svelte
	[/^\/delivered\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/pricing.svelte
	[/^\/pricing\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/blog.svelte
	[/^\/blog\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/jobs.svelte
	[/^\/jobs\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/post/[slug].svelte
	[/^\/post\/([^/]+?)\/?$/, [c[0], c[9]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];