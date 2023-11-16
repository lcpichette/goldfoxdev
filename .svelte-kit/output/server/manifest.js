export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fatface.ttf","favicon.ico","favicon.png","garamond.ttf","img/11.jpg","img/11.png","img/Gold-Fox-Dev-Icon-Transparent.webp","img/Gold-Fox-Dev-Logo-Transparent.webp","img/Gold-Fox-Dev-Logo-White-Transparent.png","img/Gold-Fox-Dev-Logo-White-Transparent.webp","img/Gold-Fox-Dev-Logo-White-gray-bg.png","img/Scene-1.png","img/Scene-1.webp","img/Scene-2.png","img/Scene-2.webp","img/code.png","img/component-images/navbar-1.png","img/component-images/navbar.ai","img/component-images/navbar.png","img/headshot.jpg","img/keanu_headshot.jpg","nautigal.ttf"]),
	mimeTypes: {".ttf":"font/ttf",".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".ai":"application/postscript"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ec7a31a0.js","imports":["_app/immutable/entry/start.ec7a31a0.js","_app/immutable/chunks/index.a0b72340.js","_app/immutable/chunks/singletons.9b80ea8e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.aa31fb2d.js","imports":["_app/immutable/entry/app.aa31fb2d.js","_app/immutable/chunks/index.a0b72340.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/components",
				pattern: /^\/components\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/delivered",
				pattern: /^\/delivered\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/jobs",
				pattern: /^\/jobs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/qualifications",
				pattern: /^\/qualifications\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
