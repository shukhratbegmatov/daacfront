(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(t,e,n){"use strict";n.r(e);n(4),n(49);var c={data:function(){return{site_title:{},description:{}}},mounted:function(){var t=this;this.$axios.get("main-page",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.site_title=e.data.site,t.description=e.data.about[0].description}))}},o=n(78),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_main"},[n("div",{staticClass:"main_container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-6 col-md-6 col-12"},[n("div",{staticClass:"section_text"},[n("div",[n("div",{staticClass:"section_title"},[t._v(t._s(t.site_title.logo_title))]),t._v(" "),n("div",{staticClass:"section_descripton"},[t._v(t._s(t.description)+" ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);