(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab23fee"],{"4d7e":function(e,o,t){"use strict";var n=t("727f"),s=t.n(n);s.a},"727f":function(e,o,t){},c72e:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"body"},[t("div",{staticClass:"down"},[e._v("往下滑")]),t("div",{staticClass:"sticky"},[t("h1",{style:"background-position-x: calc(100% - "+e.scrolled+"% );"},[e._v("Less bezel,more screen.")])])])},s=[],c={name:"text2",data:function(){return{scrolled:0}},mounted:function(){window.addEventListener("scroll",this.go_scroll)},methods:{go_scroll:function(e){var o=document.documentElement.scrollTop,t=document.documentElement.scrollHeight,n=document.documentElement.clientHeight;console.log(e),console.log(o),this.scrolled=100*o/(t-n),console.log(this.scrolled)}},beforeRouteLeave:function(e,o,t){this.$destroy(),t()},destroyed:function(){console.log("销毁监听"),window.removeEventListener("scroll",this.go_scroll),console.log("销毁完毕")}},l=c,i=(t("4d7e"),t("2877")),r=Object(i["a"])(l,n,s,!1,null,"583202ae",null);o["default"]=r.exports}}]);
//# sourceMappingURL=chunk-5ab23fee.8772b5da.js.map