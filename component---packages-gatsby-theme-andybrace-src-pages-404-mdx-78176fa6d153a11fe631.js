(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"_frontmatter",function(){return p});a(28);var n=a(42),c=a.n(n),r=a(7),i=a.n(r),o=a(0),l=a.n(o),s=a(27),d=a(164),u={},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=d.a,a}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=c()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,a),components:t},l.a.createElement(s.MDXTag,{name:"h2",components:t},"Page not found"))},t}(l.a.Component);m.isMDXComponent=!0;var p={}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=a(41),l=a.n(o);a.d(t,"a",function(){return l.a});a(166);var s=c.a.createContext({}),d=function(e){return c.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,a){"use strict";var n=a(7),c=a.n(n),r=a(0),i=a.n(r),o=a(27),l=a(165),s=a(15),d=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.MDXProvider,null,i.a.createElement(s.Location,null,function(e){var t=e.location;return i.a.createElement(l.j,{location:t})}),i.a.createElement(l.c,null),i.a.createElement("div",{id:"main"},i.a.createElement(l.f,null),e))},t}(i.a.Component);t.a=d},165:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=function(e){return c.a.createElement("div",{className:"columns "+(e.className&&e.className||null)},e.children)},i=function(e){return c.a.createElement("div",{className:"column "+(e.className&&e.className||null)},e.children)},o=a(7),l=a.n(o),s=a(168),d=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.links,t=e.github,a=e.email,n=e.linkedIn;return c.a.createElement("div",{id:"footer"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"list-inline--spaced mx-0 px-0"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:t,className:"link link--icon"},c.a.createElement("i",{className:"icon icon--github"}),c.a.createElement("span",{className:"sr-only"},"Github"))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:n,className:"link link--icon"},c.a.createElement("i",{className:"icon icon--linkedin"}),c.a.createElement("span",{className:"sr-only"},"LinkedIn"))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:"mailto:"+a},a)))))},t}(c.a.Component),u=a(163),m=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return c.a.createElement(u.b,{query:p,render:function(e){var t=e.site.siteMetadata,a=t.title,n=t.description,r=t.links,i=t.role;return c.a.createElement("header",{id:"header",className:"blue"},c.a.createElement("div",{className:"inner col-ml-auto"},c.a.createElement("h1",{className:"site-title"},a),c.a.createElement("h2",null,i),c.a.createElement("p",null,n),c.a.createElement(d,{links:r})))},data:s})},t}(c.a.Component),p="2649330470",f=m,b=function(e){var t=""+(e.type||"h2");return c.a.createElement(t,{className:" "+e.className+" spacing-bottom--sm",id:e.id||null,dangerouslySetInnerHTML:{__html:e.text}})},A=a(164),g=a(15),h=function(){return c.a.createElement(g.Location,null,function(e){var t=e.location;return c.a.createElement("nav",{className:"navbar"},c.a.createElement("section",{className:"navbar-section"},c.a.createElement(u.a,{to:"/",className:"navbar-item "+("/"===t.pathname?"active":null)},"Home"),c.a.createElement(u.a,{to:"/about",className:"navbar-item "+("/about"===t.pathname?"active":null)},"About"),c.a.createElement(u.a,{to:"/projects",className:"navbar-item "+("/projects"===t.pathname?"active":null)},"Projects")))})},E=a(169),v=a(4),k=a.n(v),w=function(e){var t=e.number,a=E.data.allMdx,n=0===t?a.totalCount:t;return c.a.createElement(r,null,a.edges.slice(0,n).map(function(e){return c.a.createElement(i,{className:"col-6 col-sm-12 spacing-bottom--sm",key:"grid-"+e.node.id},c.a.createElement(M,{image:e.node.frontmatter.image?e.node.frontmatter.image.childImageSharp.fluid:null,title:e.node.frontmatter.title,slug:e.node.fields.slug,key:e.node.id}))}))};w.defaultProps={number:0},w.propTypes={number:k.a.number};var y=w,S=a(172),N=a.n(S),M=function(e){var t=e.image,a=e.title,n=e.slug;return c.a.createElement(u.a,{to:n},t&&c.a.createElement(N.a,{fluid:t}),!t&&c.a.createElement("h5",null,a))},C=function(e){var t=e.path;return c.a.createElement("p",{className:"ta-r spacing-top--sm"},c.a.createElement(u.a,{to:t},"read more"))},x=function(e){return c.a.createElement("section",{className:""+(e.className?e.className:"spacing-bottom--lg")},e.children)},I=a(170),B=function(){var e=I.data.site,t=[].concat(e.siteMetadata.skills);return c.a.createElement(r,null,c.a.createElement(i,{className:"col-6 col-sm-12"},c.a.createElement("dl",null,t.splice(0,3).map(function(e){return c.a.createElement(c.a.Fragment,{key:e.label},c.a.createElement("dt",null,c.a.createElement("strong",null,e.label)),c.a.createElement("dd",null,e.contents))}))),c.a.createElement(i,{className:"col-6 col-sm-12"},c.a.createElement("dl",null,t.map(function(e){return c.a.createElement(c.a.Fragment,{key:e.label},c.a.createElement("dt",null,c.a.createElement("strong",null,e.label)),c.a.createElement("dd",null,e.contents))}))))},P=a(171),Q=a(173),j=a.n(Q),L=function(e){var t,a=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title,l=e.location,s=P.data.site,d="%s | "+s.siteMetadata.title;switch(l.pathname){case"/about":t="About me";break;case"/projects":t="Projects";break;case"/":t=s.siteMetadata.title+" - "+s.siteMetadata.role,d="%s ";break;default:t="Page not found"}var u=o||t,m=a||s.siteMetadata.description;return c.a.createElement(j.a,{htmlAttributes:{lang:n},title:u,titleTemplate:d,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})};L.defaultProps={lang:"en",meta:[],keywords:[],description:""},L.propTypes={description:k.a.string,lang:k.a.string,meta:k.a.arrayOf(k.a.object),keywords:k.a.arrayOf(k.a.string),title:k.a.string};var T=L;a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return f}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return A.a}),a.d(t,"f",function(){return h}),a.d(t,"h",function(){return y}),a.d(t,"g",function(){return M}),a.d(t,"i",function(){return C}),a.d(t,"k",function(){return x}),a.d(t,"l",function(){return B}),a.d(t,"j",function(){return T})},166:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},167:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(60),d=a(2),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,c()({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",role:"Full-stack web developer based in London",links:{github:"https://github.com/openbook",email:"hello@openbook.uk.com",linkedIn:"https://linkedin.com/in/andrewbrace/"}}}}}},169:function(e){e.exports={data:{allMdx:{totalCount:4,edges:[{node:{id:"305c7558-5b42-56ad-9bba-6c4a32e317a5",frontmatter:{title:"Talk To Frank",date:"01 November, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzElEQVQoz2P4T2XAgMz59+8fnCYGI6vFbiCaoeiG//379/9fbAbiciE2G/EBbOoYkF0HcgEIrNt/+H9W54T/rfOW/K+dMe9//awF/xtnL/zfvXjl/4kr1oLZs9ZvAav9i8vLIME/UAPnbdr2f8qq9f+b5iz6H1ff/r+wf+r/3O5J/9Paev9ndvT/T2rq+t+zZCXEQKAe3GEIlfjx8xeY/v3nz/+v37////7jJ5j+A+T//g0S+/H/y7fvGOGNMwxxhQ8x4UhxsiHoQkoBAHI8AoENe2ShAAAAAElFTkSuQmCC",aspectRatio:1.974921630094044,src:"/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png",srcSet:"/static/b064b26a85da9cf7cab96ae04abb3ae5/28077/ttf.png 75w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/d0486/ttf.png 150w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png 300w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/e4982/ttf.png 450w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5c74c/ttf.png 600w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/aabe9/ttf.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/talk-to-frank/"},excerpt:"Talk to Frank is an independent government website that aims to help people in the UK find impartial advice on drugs taking & where to get…"}},{node:{id:"71ee4e5b-4822-54a4-aaa4-30b906e36ee8",frontmatter:{title:"Promonews",date:"01 September, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQoz2Mwt7L5T03MQHMDzSytwbSFte1/CxgNxxA+sjq8BsIUGZma/9czNPlvaGL238DYFCsNU49uMIqBIBeBFMfGJ/7PLSj87xcQ9D80IvJ/YEjo/+Cw8P8BwUA6NPy/X2Dwf1MLK+K8bGxm8T8iOuZ/SVnF/8bm1v81dfX/2zo6/ze1tP5vaWv/39nV/b+6qfm/qb3jf3MshmL1MshQPSMTsPf0gdgAjkn0Mkak4MFERcqgTIcAs1NXVtYckcMAAAAASUVORK5CYII=",aspectRatio:1.974921630094044,src:"/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png",srcSet:"/static/5b6cad314644c1435a760955a4937f4d/28077/promo.png 75w,\n/static/5b6cad314644c1435a760955a4937f4d/d0486/promo.png 150w,\n/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png 300w,\n/static/5b6cad314644c1435a760955a4937f4d/e4982/promo.png 450w,\n/static/5b6cad314644c1435a760955a4937f4d/5c74c/promo.png 600w,\n/static/5b6cad314644c1435a760955a4937f4d/aabe9/promo.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/promonews/"},excerpt:"Promonews is the industry go-to blog for daily music video releases.  I'm responsible for all things technical at Promonews and its a…"}},{node:{id:"c23463f4-2879-584a-b3ee-c81a9b03e38d",frontmatter:{title:"Should I Bake",date:"01 September, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABDklEQVQoz2PgmhD7n5qYAcbg7I8B09wT4oAYwSfLQJhmEM3YHf6fuTcCbCjMcGTMhSIeh+IYDBeCFOnML/mvPDv3P0tv5H+G7rD/jD3h/5l6IoAYYhErUBxkKUgcJA9Sh2woA8xGkITszKz/ILDn4eX/SrNy/odt6v9vtKgcjK2X1f63WFINZods7P1vu7zuv+uq5v8qs/P+s/VFYbqQvS/6v+DkxP+zLu75n71n7n+1Ofn/Y7dO/h+5ecL/qM0TgfTE/15r2v/rLSgBi4Vt7PsfAaRBloAcw40rDBk6Q8BeAVkAohm6w8HehXsZ6BqQd/F6GVmAZ2IcPLAhgR+HJVJQ5bBGCiWYE1s6pBYGAO1zlrq/a7ugAAAAAElFTkSuQmCC",aspectRatio:1.96875,src:"/static/c7d9f78d50b906141d44446f6fa48bc9/5f3f7/bake.png",srcSet:"/static/c7d9f78d50b906141d44446f6fa48bc9/28077/bake.png 75w,\n/static/c7d9f78d50b906141d44446f6fa48bc9/d0486/bake.png 150w,\n/static/c7d9f78d50b906141d44446f6fa48bc9/5f3f7/bake.png 300w,\n/static/c7d9f78d50b906141d44446f6fa48bc9/e4982/bake.png 450w,\n/static/c7d9f78d50b906141d44446f6fa48bc9/5c74c/bake.png 600w,\n/static/c7d9f78d50b906141d44446f6fa48bc9/aabe9/bake.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/should-i-bake/"},excerpt:"Should I Bake  is a single page web app that aims to help users make a better informed choice about when they should bake depending on the…"}},{node:{id:"4a2c5103-cd45-5e31-a76c-e8e300e15457",frontmatter:{title:"Cancer Research UK",date:"01 June, 2017",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAwUlEQVQoz62SyQrCMBCG8/5P4QsICl6tt2IPautBFLSlKAh1Q602hCS/oYuEWE0VB4YZhi+zZQj+LMQMSCkhCyf3hSisqRVrT6glfid6QpMjNfQTYleKaLpBds4gVIwxDs7Fx4LkZdyqOmVwez6c9gTr2RbeOEZ/sIA7DJGmtFmHOnBXj7otF4EzR7JK4I1iLJUNoz2Op1vzkXVoFx3gdwKkyQWsHBWWHRPb4uuKffUpOVCejlQnI1RnTc7F2uGv8gAwtxOsyPRqNgAAAABJRU5ErkJggg==",aspectRatio:1.96875,src:"/static/5b5c90c876fcf6b74e1de7c0606d0334/5f3f7/cruk.png",srcSet:"/static/5b5c90c876fcf6b74e1de7c0606d0334/28077/cruk.png 75w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/d0486/cruk.png 150w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/5f3f7/cruk.png 300w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/e4982/cruk.png 450w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/5c74c/cruk.png 600w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/aabe9/cruk.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/cancer-research-uk/"},excerpt:" \nMy role at Cancer Research initially involved supporting their main site migration to a Drupal CMS.  As part of this, I mentored their in…"}}]}}}},170:function(e){e.exports={data:{site:{siteMetadata:{skills:[{label:"Front-end",contents:"Javascript, ES6, React, React Native, Gatsby, Grunt, Webpack, CSS, SASS"},{label:"Back-end",contents:"NodeJS, PHP, Elasticsearch, Postgres, MySQL"},{label:"Planning",contents:"System architecture, Sketch, Agile"},{label:"CMS",contents:"Drupal, Contentful"},{label:"Dev Ops",contents:"Docker, Ansible, Vagrant, AWS, Digital Ocean"}]}}}}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",author:"Andy Brace",role:"Full-stack web developer based in London"}}}}}}]);
//# sourceMappingURL=component---packages-gatsby-theme-andybrace-src-pages-404-mdx-78176fa6d153a11fe631.js.map