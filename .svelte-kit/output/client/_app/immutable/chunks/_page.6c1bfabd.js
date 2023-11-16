import{G as a}from"./index.ebcd1fc4.js";async function s(e){const t=new a("https://api-us-west-2.graphcms.com/v2/ckx6em1th5ke501xq4z6t1q05/master",{headers:{}}),{post:r}=await t.request(`query PostPageQuery($slug: String!) {
			post(where: { slug: $slug }) {
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
					raw
					html
				}
				tags
				author {
					name
					picture {
						url
					}
				}
			}
		}`,{slug:e.page.params.slug});return{props:{post:r}}}const l=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{l as _,s as l};
