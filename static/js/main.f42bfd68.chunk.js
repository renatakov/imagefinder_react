(this.webpackJsonpimagefinder_react=this.webpackJsonpimagefinder_react||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),r=n(18),i=n.n(r),s=(n(26),n(9)),l=n(4),u=n(5),h=n(7),m=n(6),p=(n(27),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:""},e.handleChange=function(t){t.target.value;e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.props);var n=e.props.onSubmit;console.log(n),n(e.state.inputValue)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(o.Component)),j=n(19),b=n.n(j);var g={getFetch:function(e,t){var n="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18650828-2cd427c2862082afea365d547","&image_type=photo&orientation=horizontal&per_page=").concat(12);return b.a.get(n).then((function(e){return console.log(e.data.hits),e.data.hits}))}};var d=function(e){var t=e.webformatURL,n=e.id,o=e.type,c=e.onClick;return Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:t,alt:o,onClick:c})},n)};var f=function(e){var t=e.props,n=e.showModal;return e.largeImageUrl,Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(a.jsx)(d,{id:e.id,webformatURL:e.webformatURL,type:e.type,onClick:function(){return n(e.largeImageURL)}})}))})},O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{type:"button",onClick:this.props.fetchImages,children:"Load more..."})})}}]),n}(o.Component),v=n(20),y=n.n(v),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(y.a,{type:"Oval",color:"#00BFFF",height:30,width:30})}}]),n}(o.Component),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).removeE=function(t){"Escape"===t.key&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.removeE)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.removeE)}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"Overlay",children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:this.props.largeImageUrl,alt:""})})})})}}]),n}(o.Component),k=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={query:"",page:1,images:[],isOpen:!1,largeImageUrl:""},e.closeModal=function(){e.setState({isOpen:!1})},e.getQuery=function(t){e.setState({query:t})},e.fetchImages=function(){var t=e.state,n=t.query,a=t.page;g.getFetch(n,a).then((function(t){console.log(t),t.length>0&&e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(e){return console.log(e)}))},e.showModal=function(t){e.setState({isOpen:!0,largeImageUrl:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("mount")}},{key:"componentDidUpdate",value:function(e,t){console.log("update"),t.query!==this.state.query&&this.fetchImages(),this.state.images!==t.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:" ImageFinder "}),Object(a.jsx)(p,{onSubmit:this.getQuery}),Object(a.jsx)(f,{props:this.state.images,showModal:this.showModal}),Object(a.jsx)(O,{fetchImages:this.fetchImages}),Object(a.jsx)(x,{}),!0===this.state.isOpen&&Object(a.jsx)(w,{largeImageUrl:this.state.largeImageUrl,onClose:this.closeModal})]})}}]),n}(o.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f42bfd68.chunk.js.map