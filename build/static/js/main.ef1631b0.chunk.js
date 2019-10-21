(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{17:function(e,t,a){},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(3),c=a(4),o=a(6),i=a(5),l=a(7),s=a(0),u=a.n(s),m=a(20),d=a.n(m),p=(a(29),a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(){a.props.productCounter(a.props.product)},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.product,t=parseFloat(e.price).toFixed(2)-parseFloat(e.price)*parseInt(e.discount)/100;return u.a.createElement("div",{style:{height:"20%",borderTop:"solid black 1px",position:"relative"}},u.a.createElement("div",{className:"left",style:{position:"absolute",top:"3px"}},e.name),u.a.createElement("div",{style:{display:"flex"}},u.a.createElement("div",{className:"left",style:{textDecoration:"line-through",position:"absolute",bottom:"3px"}},"$",e.price),u.a.createElement("div",{className:"left",style:{position:"absolute",left:"40px",bottom:"3px"}},"$",t)),u.a.createElement("div",{className:"column",style:{position:"absolute",right:"5px",top:"5px"}},u.a.createElement("button",{style:{height:"70%"},onClick:this.onClick},"Add to Cart")))}}]),t}(s.PureComponent)),v=(a(30),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"cartBox"},u.a.createElement("div",{className:"left discount-tag"}," ",this.props.discount,"%"),u.a.createElement("div",{className:"productImage"},u.a.createElement("img",{src:this.props.imgUrl,alt:"Book Cover Not available"})))}}]),t}(s.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.product;return u.a.createElement("div",{className:"Product"},u.a.createElement(v,{discount:e.discount,imgUrl:e.img_url}),u.a.createElement(p,{product:e,productCounter:this.props.productCounter}))}}]),t}(s.Component),f=(a(31),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).productCounter=function(e){a.props.setProductCounter(e)},a.fetchData=function(){fetch("https://api.myjson.com/bins/qhnfp").then((function(e){return e.json()})).then((function(e){return a.setState({data:e,isLoading:!1})})).catch((function(e){return a.setState({error:e,isLoading:!1})}))},a.state={isLoading:!0,data:[],error:null},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.props.history;return u.a.createElement("div",null,u.a.createElement("div",{className:"header"},u.a.createElement("div",{className:"column left"}," All items"),u.a.createElement("div",{className:"column middle"},this.props.counter," Item Added into cart"),u.a.createElement("div",{className:"column right"},u.a.createElement("button",{onClick:function(){return t.push("/cart")}},"Go to Cart "))),u.a.createElement("div",{style:{display:"inline"}},this.state.data.map((function(t){return u.a.createElement("div",{className:"inline-display",key:t.id},u.a.createElement(b,{product:t,productCounter:e.productCounter}))}))))}}]),t}(s.Component)),h=(a(32),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).totalCost=function(e){var t=0;return Object.keys(e).forEach((function(a){t+=e[a].price*e[a].count})),t},a.totalDiscount=function(e){var t=0;return Object.keys(e).forEach((function(a){t+=e[a].price*e[a].discount/100})),t},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"onClickRemove",value:function(e){this.props.onClickRemove(e)}},{key:"render",value:function(){var e=this,t=this.props.productCart,a=this.totalCost(t),n=this.totalDiscount(t);return u.a.createElement("div",null,u.a.createElement("div",{className:"basket"},u.a.createElement("div",{className:"basket-module"}),u.a.createElement("div",{className:"basket-labels"},u.a.createElement("ul",null,u.a.createElement("li",{className:"item item-heading"},"Item"),u.a.createElement("li",{className:"price"},"Price"),u.a.createElement("li",{className:"quantity"},"Quantity"),u.a.createElement("li",{className:"subtotal"},"Subtotal"))),Object.keys(t).map((function(a,n){return u.a.createElement("div",{key:n,className:"basket-product"},u.a.createElement("div",{className:"item"},u.a.createElement("div",{className:"product-frame"},u.a.createElement("div",{style:{width:"90%"}},t[a].name),u.a.createElement("div",{style:{backgroundColor:"white",display:"relative",top:"10px",right:"5px",alignContent:"center"}},u.a.createElement("button",{className:"remove-button",onClick:function(){return e.props.onClickRemove(t[a])}},"X")))),u.a.createElement("div",{className:"price"},t[a].price),u.a.createElement("div",{className:"quantity"},u.a.createElement("div",null,t[a].count)),u.a.createElement("div",{className:"subtotal"},t[a].price*t[a].count),u.a.createElement("div",{className:"remove"}))}))),u.a.createElement("aside",null,u.a.createElement("div",{className:"summary"},u.a.createElement("div",{className:"summary-total-items"},u.a.createElement("span",{className:"total-items"})," Items in your Bag"),u.a.createElement("div",null,u.a.createElement("div",{className:"subtotal-title"},"Total"),u.a.createElement("div",{className:"subtotal-value final-value",id:"basket-subtotal"},a)),u.a.createElement("div",null,u.a.createElement("div",{className:"subtotal-title"},"Discount"),u.a.createElement("div",{className:"subtotal-value final-value",id:"basket-subtotal"},n)),u.a.createElement("div",{className:"summary-total"},u.a.createElement("div",{className:"total-title"},"Total"),u.a.createElement("div",{className:"total-value final-value",id:"basket-total"},a-n)),u.a.createElement("div",{className:"summary-checkout"},u.a.createElement("button",{className:"checkout-cta"},"Go to Secure Checkout")))))}}]),t}(s.Component)),E=a(21),y=a(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={productCounter:{},counter:0},a.setProductCounter=function(e){var t=j({},a.state.productCounter);t[e.id]||(t[e.id]=j({count:0},e)),t[e.id].count+=1,a.setState({productCounter:t}),a.counter()},a.removeProductFromCart=function(e){var t=j({},a.state.productCounter),n=0;t[e.id]&&(n=t[e.id].count,delete t[e.id]),a.setState({productCounter:t}),a.setState((function(e,t){return{counter:e.counter-n}}))},a.counter=function(){a.setState((function(e){return e.counter++}))},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(E.a,null,u.a.createElement(y.c,null,u.a.createElement(y.a,{exact:!0,path:"/cart",render:function(){return u.a.createElement(h,{productCart:e.state.productCounter,onClickRemove:e.removeProductFromCart})}}),u.a.createElement(y.a,{path:"/",render:function(t){return u.a.createElement(f,Object.assign({},t,{counter:e.state.counter,productCounter:e.state.productCounter,setProductCounter:e.setProductCounter}))}})))}}]),t}(u.a.PureComponent);d.a.render(u.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ef1631b0.chunk.js.map