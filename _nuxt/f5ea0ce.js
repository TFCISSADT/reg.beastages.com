(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{575:function(n,e,t){"use strict";t.r(e);var r=t(3),o=(t(20),t(68)),c={data:function(){return{loading:!0}},mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.$route.query,r=n.$route.params.provider,e.next=4,n.$axios("/api/me/oauth/"+r+"/callback",{params:t}).then((function(e){o.a.showSnackbar({message:n.$t("accountManage.messages.oauth_binding_bound"),colorType:"positive"})})).catch((function(n){o.a.showRequestError(n)}));case 4:n.$router.push(n.localePath("/accountManage"));case 5:case"end":return e.stop()}}),e)})))()}},l=t(21),component=Object(l.a)(c,(function(){var n=this._self._c;return n("div",[n("Loading",{attrs:{value:this.loading}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:t(136).default})}}]);