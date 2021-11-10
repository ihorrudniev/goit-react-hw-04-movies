(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2,6],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var a=r(57),n=r(0),c=r(6),s=r(58),o=r(53),u=r(54),i=r(55),l=r(94),p=r.n(l),v=r(56),d=r(1);var f=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),r=t[0],l=t[1],f=Object(n.useState)(null),m=Object(a.a)(f,2),g=m[0],h=m[1],A=Object(n.useState)(o.a.IDLE),b=Object(a.a)(A,2),j=b[0],E=b[1];return Object(n.useEffect)((function(){E(o.a.PENDING),u.a.getPopularMovies().then((function(e){l(e),E(o.a.RESOLVED)})).catch((function(e){console.log(e),h(e),E(o.a.REJECTED)}))}),[g]),Object(d.jsxs)("main",{className:p.a.container,children:[j===o.a.PENDING&&Object(d.jsx)(s.a,{}),j===o.a.REJECTED&&Object(d.jsx)(i.default,{}),j===o.a.RESOLVED&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("b",{className:p.a.titleMovies,children:"Trending movies"}),Object(d.jsx)("ul",{className:p.a.moviesList,children:r.map((function(e){var t=e.id,r=e.poster_path,a=e.title;return Object(d.jsxs)("li",{className:p.a.moviesItem,children:[Object(d.jsx)(c.b,{to:{pathname:"movies/".concat(t)},children:Object(d.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):v.a,alt:a,className:p.a.poster})}),Object(d.jsx)("div",{className:p.a.titleBox,children:Object(d.jsx)("p",{className:p.a.title,children:a})})]},t)}))})]})]})}},53:function(e,t,r){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},54:function(e,t,r){"use strict";var a=r(63),n=r.n(a),c=r(64),s=r(65),o=r.n(s);function u(){return(u=Object(c.a)(n.a.mark((function e(){var t,r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/day"},e.next=4,o()(t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function i(){return(i=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"search/movie",params:{query:t}},e.next=4,o()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,o()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,o()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,o()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}o.a.defaults.baseURL="https://api.themoviedb.org/3/",o.a.defaults.params={api_key:"b2ae4391fdcd9f56e763c0246ef56897",language:"en-US"};var d={getPopularMovies:function(){return u.apply(this,arguments)},getMoviesByKeyWord:function(e){return i.apply(this,arguments)},getMovieById:function(e){return l.apply(this,arguments)},getCastInfo:function(e){return p.apply(this,arguments)},getMovieReviews:function(e){return v.apply(this,arguments)}};t.a=d},55:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return n}));var a=r(1);function n(){return Object(a.jsx)("h1",{children:"404 - page not found "})}},56:function(e,t,r){"use strict";t.a="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA4ElEQVRIib3UMQrCMBiG4RecCg4OTtJJb6CLiO52ETyAp/IErs7i6KAgeAhB20kQ0clRByOENDZJY/pBoPT74SF/oVBRasAMiEMBY+AFnIF2CCACdqGRqQBUpA88pM50MiDRAUdl0AdJdcCvwY7oe8DNAbECfBBrQLeuu9IPgKEPYEKGwMgXcF1XKcAFsQYujutyAtZ8/lNL6d3VEjECJ6Apugg4AHugAWws1lUIPIGu0sdASzzXga3hJoXAQjegREZSDVIIlDkqkkv2ZySXpArEJ/I3WYUAvsgcmIQCqs8bpkQADx00Tt8AAAAASUVORK5CYII="},58:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(13),n=r.n(a),c=(r(62),r(59)),s=r.n(c),o=r(1);var u=function(){return Object(o.jsx)("div",{className:s.a.loader,children:Object(o.jsx)(n.a,{className:"Loader",type:"Circles",color:"#00BFFF",height:80,width:80})})}},59:function(e,t,r){e.exports={loader:"Loader_loader__2-s1o"}},94:function(e,t,r){e.exports={container:"HomePage_container__3IjnD",mainTitle:"HomePage_mainTitle__3T9GU",titleMovies:"HomePage_titleMovies__PV_0o",moviesList:"HomePage_moviesList__1HaZ_",moviesItem:"HomePage_moviesItem__3lE6d",titleBox:"HomePage_titleBox__3-CWx",poster:"HomePage_poster__OI98U",title:"HomePage_title__1xyRQ"}}}]);
//# sourceMappingURL=home-page.aab14584.chunk.js.map