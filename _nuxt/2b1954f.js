(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{370:function(t,n,e){"use strict";e.r(n);var r=e(135),o=e.n(r),l={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},c=e(21),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",[n("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(n){return n.preventDefault(),t.$emit("click")}}},[t._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(370).default})},584:function(t,n,e){"use strict";e.r(n);var r={},o=e(21),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex"},[n("Button",{staticClass:"mr:8",on:{click:function(n){return t.params.editHandler(t.params)}}},[t._v(t._s(t.$t("common.edit")))]),t._v(" "),n("Button",{attrs:{type:"negative"},on:{click:function(n){return t.params.deleteHandler(t.params)}}},[t._v(t._s(t.$t("common.delete")))])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(370).default})}}]);