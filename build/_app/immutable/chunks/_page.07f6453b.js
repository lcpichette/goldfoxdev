import{G as r}from"./index.ebcd1fc4.js";async function a(){const t=new r("https://api-us-west-2.graphcms.com/v2/ckx6em1th5ke501xq4z6t1q05/master",{headers:{}}),{posts:e}=await t.request(`{ 
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
      }`);return{props:{posts:e}}}const o=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{o as _,a as l};
