(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"_frontmatter",function(){return p});a(28);var n=a(42),r=a.n(n),c=a(7),i=a.n(c),l=a(0),o=a.n(l),s=a(27),d=a(164),u={},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=d.a,a}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,a),components:t},o.a.createElement(s.MDXTag,{name:"h2",components:t},"Page not found"))},t}(o.a.Component);m.isMDXComponent=!0;var p={}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(41),o=a.n(l);a.d(t,"a",function(){return o.a});a(166);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),i=a.n(c),l=a(27),o=a(165),s=a(15),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(l.MDXProvider,null,i.a.createElement(s.Location,null,function(e){var t=e.location;return i.a.createElement(o.j,{location:t})}),i.a.createElement(o.c,null),i.a.createElement("div",{id:"main"},i.a.createElement(o.f,null),e))},t}(i.a.Component);t.a=d},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=function(e){return r.a.createElement("div",{className:"columns "+(e.className&&e.className||null)},e.children)},i=function(e){return r.a.createElement("div",{className:"column "+(e.className&&e.className||null)},e.children)},l=a(7),o=a.n(l),s=a(168),d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.links,t=e.github,a=e.email,n=e.linkedIn;return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"list-inline--spaced mx-0 px-0"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:t,className:"link link--icon"},r.a.createElement("i",{className:"icon icon--github"}),r.a.createElement("span",{className:"sr-only"},"Github"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:n,className:"link link--icon"},r.a.createElement("i",{className:"icon icon--linkedin"}),r.a.createElement("span",{className:"sr-only"},"LinkedIn"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"mailto:"+a},a)))))},t}(r.a.Component),u=a(163),m=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(u.b,{query:p,render:function(e){var t=e.site.siteMetadata,a=t.title,n=t.description,c=t.links,i=t.role;return r.a.createElement("header",{id:"header",className:"blue"},r.a.createElement("div",{className:"inner col-ml-auto"},r.a.createElement("h1",{className:"site-title"},a),r.a.createElement("h2",null,i),r.a.createElement("p",null,n),r.a.createElement(d,{links:c})))},data:s})},t}(r.a.Component),p="2649330470",f=m,b=function(e){var t=""+(e.type||"h2");return r.a.createElement(t,{className:" "+e.className+" spacing-bottom--sm",id:e.id||null,dangerouslySetInnerHTML:{__html:e.text}})},g=a(164),A=a(15),h=function(){return r.a.createElement(A.Location,null,function(e){var t=e.location;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("section",{className:"navbar-section"},r.a.createElement(u.a,{to:"/",className:"navbar-item "+("/"===t.pathname?"active":null)},"Home"),r.a.createElement(u.a,{to:"/about",className:"navbar-item "+("/about"===t.pathname?"active":null)},"About"),r.a.createElement(u.a,{to:"/projects",className:"navbar-item "+("/projects"===t.pathname?"active":null)},"Projects")))})},E=a(169),v=a(4),k=a.n(v),w=function(e){var t=e.number,a=E.data.allMdx,n=0===t?a.totalCount:t;return r.a.createElement(c,null,a.edges.slice(0,n).map(function(e){return r.a.createElement(i,{className:"col-6 col-sm-12 spacing-bottom--sm",key:"grid-"+e.node.id},r.a.createElement(M,{image:e.node.frontmatter.image?e.node.frontmatter.image.childImageSharp.fluid:null,title:e.node.frontmatter.title,slug:e.node.fields.slug,key:e.node.id}))}))};w.defaultProps={number:0},w.propTypes={number:k.a.number};var y=w,N=a(172),S=a.n(N),M=function(e){var t=e.image,a=e.title,n=e.slug;return r.a.createElement(u.a,{to:n},t&&r.a.createElement(S.a,{fluid:t}),!t&&r.a.createElement("h5",null,a))},x=function(e){var t=e.path;return r.a.createElement("p",{className:"ta-r spacing-top--sm"},r.a.createElement(u.a,{to:t},"read more"))},C=function(e){return r.a.createElement("section",{className:""+(e.className?e.className:"spacing-bottom--lg")},e.children)},I=a(170),j=function(){var e=I.data.site,t=[].concat(e.siteMetadata.skills);return r.a.createElement(c,null,r.a.createElement(i,{className:"col-6 col-sm-12"},r.a.createElement("dl",null,t.splice(0,3).map(function(e){return r.a.createElement(r.a.Fragment,{key:e.label},r.a.createElement("dt",null,r.a.createElement("strong",null,e.label)),r.a.createElement("dd",null,e.contents))}))),r.a.createElement(i,{className:"col-6 col-sm-12"},r.a.createElement("dl",null,t.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.label},r.a.createElement("dt",null,r.a.createElement("strong",null,e.label)),r.a.createElement("dd",null,e.contents))}))))},P=a(171),B=a(173),Q=a.n(B),T=function(e){var t,a=e.description,n=e.lang,c=e.meta,i=e.keywords,l=e.title,o=e.location,s=P.data.site,d="%s | "+s.siteMetadata.title;switch(o.pathname){case"/about":t="About me";break;case"/projects":t="Projects";break;case"/":t=s.siteMetadata.title+" - "+s.siteMetadata.role,d="%s ";break;default:t="Page not found"}var u=l||t,m=a||s.siteMetadata.description;return r.a.createElement(Q.a,{htmlAttributes:{lang:n},title:u,titleTemplate:d,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(c)})};T.defaultProps={lang:"en",meta:[],keywords:[],description:""},T.propTypes={description:k.a.string,lang:k.a.string,meta:k.a.arrayOf(k.a.object),keywords:k.a.arrayOf(k.a.string),title:k.a.string};var L=T;a.d(t,"a",function(){return c}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return f}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return g.a}),a.d(t,"f",function(){return h}),a.d(t,"h",function(){return y}),a.d(t,"g",function(){return M}),a.d(t,"i",function(){return x}),a.d(t,"k",function(){return C}),a.d(t,"l",function(){return j}),a.d(t,"j",function(){return L})},166:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},167:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(0),i=a.n(c),l=a(4),o=a.n(l),s=a(60),d=a(2),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",role:"Full-stack web developer based in London",links:{github:"https://github.com/openbook",email:"hello@openbook.uk.com",linkedIn:"https://linkedin.com/in/andrewbrace/"}}}}}},169:function(e){e.exports={data:{allMdx:{totalCount:4,edges:[{node:{id:"305c7558-5b42-56ad-9bba-6c4a32e317a5",frontmatter:{title:"Talk To Frank",date:"01 November, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzElEQVQoz2P4T2XAgMz59+8fnCYGI6vFbiCaoeiG//379/9fbAbiciE2G/EBbOoYkF0HcgEIrNt/+H9W54T/rfOW/K+dMe9//awF/xtnL/zfvXjl/4kr1oLZs9ZvAav9i8vLIME/UAPnbdr2f8qq9f+b5iz6H1ff/r+wf+r/3O5J/9Paev9ndvT/T2rq+t+zZCXEQKAe3GEIlfjx8xeY/v3nz/+v37////7jJ5j+A+T//g0S+/H/y7fvGOGNMwxxhQ8x4UhxsiHoQkoBAHI8AoENe2ShAAAAAElFTkSuQmCC",aspectRatio:1.974921630094044,src:"/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png",srcSet:"/static/b064b26a85da9cf7cab96ae04abb3ae5/28077/ttf.png 75w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/d0486/ttf.png 150w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png 300w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/e4982/ttf.png 450w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5c74c/ttf.png 600w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/aabe9/ttf.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/talk-to-frank/"},excerpt:"Talk to Frank is an independent government website that aims to help people in the UK find impartial advice on drugs taking & where to get…"}},{node:{id:"71ee4e5b-4822-54a4-aaa4-30b906e36ee8",frontmatter:{title:"Promonews",date:"01 September, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQoz2Mwt7L5T03MQHMDzSytwbSFte1/CxgNxxA+sjq8BsIUGZma/9czNPlvaGL238DYFCsNU49uMIqBIBeBFMfGJ/7PLSj87xcQ9D80IvJ/YEjo/+Cw8P8BwUA6NPy/X2Dwf1MLK+K8bGxm8T8iOuZ/SVnF/8bm1v81dfX/2zo6/ze1tP5vaWv/39nV/b+6qfm/qb3jf3MshmL1MshQPSMTsPf0gdgAjkn0Mkak4MFERcqgTIcAs1NXVtYckcMAAAAASUVORK5CYII=",aspectRatio:1.974921630094044,src:"/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png",srcSet:"/static/5b6cad314644c1435a760955a4937f4d/28077/promo.png 75w,\n/static/5b6cad314644c1435a760955a4937f4d/d0486/promo.png 150w,\n/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png 300w,\n/static/5b6cad314644c1435a760955a4937f4d/e4982/promo.png 450w,\n/static/5b6cad314644c1435a760955a4937f4d/5c74c/promo.png 600w,\n/static/5b6cad314644c1435a760955a4937f4d/aabe9/promo.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/promonews/"},excerpt:"Promonews is the industry go-to blog for daily music video releases.  I'm responsible for all things technical at Promonews and its a…"}},{node:{id:"c23463f4-2879-584a-b3ee-c81a9b03e38d",frontmatter:{title:"Should I Bake",date:"01 September, 2018",image:null},fields:{slug:"/projects/should-i-bake/"},excerpt:"TBD"}},{node:{id:"4a2c5103-cd45-5e31-a76c-e8e300e15457",frontmatter:{title:"Cancer Research UK",date:"01 June, 2017",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAwUlEQVQoz62SyQrCMBCG8/5P4QsICl6tt2IPautBFLSlKAh1Q602hCS/oYuEWE0VB4YZhi+zZQj+LMQMSCkhCyf3hSisqRVrT6glfid6QpMjNfQTYleKaLpBds4gVIwxDs7Fx4LkZdyqOmVwez6c9gTr2RbeOEZ/sIA7DJGmtFmHOnBXj7otF4EzR7JK4I1iLJUNoz2Op1vzkXVoFx3gdwKkyQWsHBWWHRPb4uuKffUpOVCejlQnI1RnTc7F2uGv8gAwtxOsyPRqNgAAAABJRU5ErkJggg==",aspectRatio:1.96875,src:"/static/5b5c90c876fcf6b74e1de7c0606d0334/5f3f7/cruk.png",srcSet:"/static/5b5c90c876fcf6b74e1de7c0606d0334/28077/cruk.png 75w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/d0486/cruk.png 150w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/5f3f7/cruk.png 300w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/e4982/cruk.png 450w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/5c74c/cruk.png 600w,\n/static/5b5c90c876fcf6b74e1de7c0606d0334/aabe9/cruk.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/cancer-research-uk/"},excerpt:" \nMy role at Cancer Research initially involved supporting their main site migration to a Drupal CMS.  As part of this, I mentored their in…"}}]}}}},170:function(e){e.exports={data:{site:{siteMetadata:{skills:[{label:"Front-end",contents:"Javascript, ES6, React, React Native, Gatsby, Grunt, Webpack, CSS, SASS"},{label:"Back-end",contents:"NodeJS, PHP, Elasticsearch, Postgres, MySQL"},{label:"Planning",contents:"System architecture, Sketch, Agile"},{label:"CMS",contents:"Drupal, Contentful"},{label:"Dev Ops",contents:"Docker, Ansible, Vagrant, AWS, Digital Ocean"}]}}}}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",author:"Andy Brace",role:"Full-stack web developer based in London"}}}}}}]);
//# sourceMappingURL=component---packages-gatsby-theme-andybrace-src-pages-404-mdx-b8735019956bb7a75de3.js.map