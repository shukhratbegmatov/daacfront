(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,6],{372:function(t,e,n){t.exports=n.p+"img/logo.4bf0fc5.png"},373:function(t,e,n){t.exports=n.p+"img/logogmenu.69f4d52.png"},374:function(t,e,n){t.exports=n.p+"img/logo2.37c1be0.png"},375:function(t,e,n){"use strict";n.r(e);var C=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n(373),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"tel:+998 71 205-06-00"}},[n("div",{staticClass:"message_link"},[t._v("\n            Позвони мне\n          ")])])}],l=(n(42),{data:function(){return{isActive:!1,isActiveMenu:!1,messengers:[],lang:""}},methods:{onScrollPosition:function(){var t=window.setInterval((function(){var e=window.pageYOffset;e>0?window.scrollTo(0,e-20):window.clearInterval(t)}),1.2)},change_lang:function(t){document.cookie=t,console.log(t)}},mounted:function(){var t=this;this.lang=document.cookie,this.$axios.get("main-page",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.messengers=e.data.site}))}}),r=n(78),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"circle_animation",class:{active:t.isActiveMenu}}),t._v(" "),n("div",{staticClass:"circle_animation1",class:{active:!t.isActiveMenu}},[n("div")]),t._v(" "),n("div",{staticClass:"side_phone_menu",class:{active:t.isActiveMenu}},[n("div",[t._m(0),t._v(" "),n("div",{staticClass:"menu_links"},[n("router-link",{attrs:{to:"/services"}},[t._v("Услуги")])],1),t._v(" "),n("div",{staticClass:"menu_links"},[n("router-link",{attrs:{to:"/portfolio"}},[t._v("Портфолио")])],1),t._v(" "),n("div",{staticClass:"menu_links"},[n("router-link",{attrs:{to:"/about"}},[t._v("О компании")])],1),t._v(" "),n("div",{staticClass:"menu_links"},[n("router-link",{attrs:{to:"/contact"}},[t._v("Контакты")])],1)]),t._v(" "),n("div",{staticClass:"message_father"},[n("div",{staticClass:"message_phone"},[t._v("\n          +998 71 205-06-00\n        ")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"phone_message"},[n("router-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78262 0.776024 2.17811 1.16978 1.67875 1.67875C1.1701 2.17837 0.776384 2.7828 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2182 19.2239 17.8223 18.8301 18.3212 18.3212C18.8775 17.765 19.2188 17.2075 19.475 16.55C19.7213 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7213 4.085 19.475 3.45C19.2237 2.78278 18.8299 2.17834 18.3212 1.67875C17.822 1.16959 17.2175 0.775807 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1213 0.06C13.0538 0.0125 12.715 0 9.9975 0H10.0013H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0413 1.86C15.0162 1.90375 15.5462 2.0675 15.8988 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3988 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1887 7.0125 18.1987 7.32875 18.1987 9.9975C18.1987 12.6663 18.1887 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6359 16.3279 17.38 16.7205 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0413 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66937 17.6299 3.27641 17.3745 2.95375 17.0425C2.62094 16.72 2.36465 16.3271 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6663 1.8025 9.995C1.8025 7.325 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1388 4.50491 14.1388 4.6625C14.1388 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.4467 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.4467 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.8854 6.66625 11.7334 7.01748 12.3586 7.64268C12.9838 8.26788 13.335 9.11583 13.335 10C13.335 10.8842 12.9838 11.7321 12.3586 12.3573C11.7334 12.9825 10.8854 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z",fill:"#183395"}})])]),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.695 8.937V10.314H9.687V11.997H10.695V17H12.767V11.997H14.157C14.157 11.997 14.288 11.19 14.351 10.307H12.775V9.157C12.775 8.984 13.001 8.753 13.225 8.753H14.353V7H12.818C10.644 7 10.695 8.685 10.695 8.937Z",fill:"#183395"}}),t._v(" "),n("path",{attrs:{d:"M6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2V2Z",fill:"#183395"}})])]),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M18.5194 0.00194539C18.2724 0.0209511 18.0299 0.0822365 17.8015 0.183411H17.7984C17.5791 0.275364 16.5366 0.7392 14.9516 1.44228L9.27185 3.97222C5.19629 5.78687 1.18999 7.57386 1.18999 7.57386L1.23769 7.55433C1.23769 7.55433 0.961475 7.65035 0.672947 7.85949C0.494697 7.97945 0.341312 8.13641 0.222074 8.32088C0.0805034 8.54059 -0.0333689 8.87667 0.00894855 9.22414C0.0781952 9.81167 0.438278 10.164 0.696799 10.3585C0.958397 10.5554 1.20769 10.6474 1.20769 10.6474H1.21384L4.97086 11.986C5.13936 12.5581 6.11574 15.953 6.35041 16.735C6.4889 17.2021 6.62355 17.4943 6.79205 17.7172C6.8736 17.8311 6.96901 17.9264 7.08365 18.0028C7.14325 18.0395 7.2068 18.0685 7.27292 18.0891L7.23445 18.0793C7.246 18.0826 7.25523 18.0924 7.26369 18.0956C7.29447 18.1046 7.31524 18.1078 7.35448 18.1143C7.94923 18.3047 8.42704 17.9141 8.42704 17.9141L8.45397 17.8914L10.6722 15.7553L14.3899 18.7718L14.4746 18.8101C15.2494 19.1698 16.0342 18.9696 16.4489 18.6164C16.8667 18.2608 17.029 17.8059 17.029 17.8059L17.0559 17.7327L19.9289 2.16651C20.0105 1.78242 20.0312 1.42275 19.9412 1.07365C19.8484 0.720342 19.6341 0.416474 19.3403 0.221657C19.0937 0.0630699 18.8076 -0.0134763 18.5194 0.00194539ZM18.4416 1.67013C18.4386 1.72139 18.4478 1.7157 18.4263 1.81416V1.82311L15.5802 17.2273C15.5679 17.2493 15.5471 17.2973 15.4902 17.3453C15.4302 17.3958 15.3825 17.4275 15.1324 17.3226L10.5852 13.6355L7.83844 16.2834L8.41549 12.3855L15.8449 5.06182C16.1511 4.76074 16.0488 4.69727 16.0488 4.69727C16.0703 4.32782 15.5864 4.58904 15.5864 4.58904L6.21807 10.7271L6.21499 10.7109L1.72473 9.11184V9.10859L1.71319 9.10615C1.72106 9.10338 1.72877 9.10012 1.73627 9.09638L1.76089 9.08336L1.78474 9.07441C1.78474 9.07441 5.79412 7.28742 9.86968 5.47277C11.9101 4.56381 13.966 3.64835 15.5471 2.94201C16.4848 2.52456 17.4235 2.10955 18.3632 1.69698C18.4263 1.67094 18.3963 1.67094 18.4416 1.67094V1.67013Z",fill:"#183395"}})])])],1)])]),t._v(" "),n("div",{staticClass:"side_nav"},[n("div",{staticClass:"side_menu"},[n("div",{staticClass:"side_benu_btn",class:{active:t.isActiveMenu},on:{click:function(e){t.isActiveMenu=!t.isActiveMenu}}},[n("div",{staticClass:"border_line line1"}),t._v(" "),n("div",{staticClass:"border_line line2"}),t._v(" "),n("div",{staticClass:"border_line line3"})])]),t._v(" "),n("div",{staticClass:"side_message"},[n("div",{staticClass:"message_absolute active"},[n("div",{staticClass:"lang"},[n("router-link",{attrs:{to:t.switchLocalePath("uz")}},[t._v("\n              Uz\n            ")])],1),t._v(" "),n("div",{staticClass:"lang"},[n("router-link",{attrs:{to:t.switchLocalePath("ru")}},[t._v("\n              Ru\n            ")])],1),t._v(" "),n("div",{staticClass:"lang"},[n("router-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("\n              En\n            ")])],1),t._v(" "),n("div",{staticClass:"messagers"},[n("div",[n("a",{attrs:{href:t.messengers.instagram_link}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78262 0.776024 2.17811 1.16978 1.67875 1.67875C1.1701 2.17837 0.776384 2.7828 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2182 19.2239 17.8223 18.8301 18.3212 18.3212C18.8775 17.765 19.2188 17.2075 19.475 16.55C19.7213 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7213 4.085 19.475 3.45C19.2237 2.78278 18.8299 2.17834 18.3212 1.67875C17.822 1.16959 17.2175 0.775807 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1213 0.06C13.0538 0.0125 12.715 0 9.9975 0H10.0013H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0413 1.86C15.0162 1.90375 15.5462 2.0675 15.8988 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3988 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1887 7.0125 18.1987 7.32875 18.1987 9.9975C18.1987 12.6663 18.1887 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6359 16.3279 17.38 16.7205 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0413 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66937 17.6299 3.27641 17.3745 2.95375 17.0425C2.62094 16.72 2.36465 16.3271 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6663 1.8025 9.995C1.8025 7.325 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1388 4.50491 14.1388 4.6625C14.1388 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.4467 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.4467 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.8854 6.66625 11.7334 7.01748 12.3586 7.64268C12.9838 8.26788 13.335 9.11583 13.335 10C13.335 10.8842 12.9838 11.7321 12.3586 12.3573C11.7334 12.9825 10.8854 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z",fill:"#183395"}})])])]),t._v(" "),n("div",[n("a",{attrs:{href:t.messengers.facebook_link}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.695 8.937V10.314H9.687V11.997H10.695V17H12.767V11.997H14.157C14.157 11.997 14.288 11.19 14.351 10.307H12.775V9.157C12.775 8.984 13.001 8.753 13.225 8.753H14.353V7H12.818C10.644 7 10.695 8.685 10.695 8.937Z",fill:"#183395"}}),t._v(" "),n("path",{attrs:{d:"M6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2V2Z",fill:"#183395"}})])])]),t._v(" "),n("div",[n("a",{attrs:{href:t.messengers.telegram_link}},[n("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M18.5194 0.00194539C18.2724 0.0209511 18.0299 0.0822365 17.8015 0.183411H17.7984C17.5791 0.275364 16.5366 0.7392 14.9516 1.44228L9.27185 3.97222C5.19629 5.78687 1.18999 7.57386 1.18999 7.57386L1.23769 7.55433C1.23769 7.55433 0.961475 7.65035 0.672947 7.85949C0.494697 7.97945 0.341312 8.13641 0.222074 8.32088C0.0805034 8.54059 -0.0333689 8.87667 0.00894855 9.22414C0.0781952 9.81167 0.438278 10.164 0.696799 10.3585C0.958397 10.5554 1.20769 10.6474 1.20769 10.6474H1.21384L4.97086 11.986C5.13936 12.5581 6.11574 15.953 6.35041 16.735C6.4889 17.2021 6.62355 17.4943 6.79205 17.7172C6.8736 17.8311 6.96901 17.9264 7.08365 18.0028C7.14325 18.0395 7.2068 18.0685 7.27292 18.0891L7.23445 18.0793C7.246 18.0826 7.25523 18.0924 7.26369 18.0956C7.29447 18.1046 7.31524 18.1078 7.35448 18.1143C7.94923 18.3047 8.42704 17.9141 8.42704 17.9141L8.45397 17.8914L10.6722 15.7553L14.3899 18.7718L14.4746 18.8101C15.2494 19.1698 16.0342 18.9696 16.4489 18.6164C16.8667 18.2608 17.029 17.8059 17.029 17.8059L17.0559 17.7327L19.9289 2.16651C20.0105 1.78242 20.0312 1.42275 19.9412 1.07365C19.8484 0.720342 19.6341 0.416474 19.3403 0.221657C19.0937 0.0630699 18.8076 -0.0134763 18.5194 0.00194539ZM18.4416 1.67013C18.4386 1.72139 18.4478 1.7157 18.4263 1.81416V1.82311L15.5802 17.2273C15.5679 17.2493 15.5471 17.2973 15.4902 17.3453C15.4302 17.3958 15.3825 17.4275 15.1324 17.3226L10.5852 13.6355L7.83844 16.2834L8.41549 12.3855L15.8449 5.06182C16.1511 4.76074 16.0488 4.69727 16.0488 4.69727C16.0703 4.32782 15.5864 4.58904 15.5864 4.58904L6.21807 10.7271L6.21499 10.7109L1.72473 9.11184V9.10859L1.71319 9.10615C1.72106 9.10338 1.72877 9.10012 1.73627 9.09638L1.76089 9.08336L1.78474 9.07441C1.78474 9.07441 5.79412 7.28742 9.86968 5.47277C11.9101 4.56381 13.966 3.64835 15.5471 2.94201C16.4848 2.52456 17.4235 2.10955 18.3632 1.69698C18.4263 1.67094 18.3963 1.67094 18.4416 1.67094V1.67013Z",fill:"#183395"}})])])])]),t._v(" "),n("div",{staticClass:"side_message_btn "},[n("button",{on:{click:function(e){return t.onScrollPosition()}}},[n("svg",{attrs:{width:"15",height:"4",viewBox:"0 0 17 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 6.5L8.5 2L16 6.5",stroke:"white","stroke-width":"2"}})])])])])])])])}),C,!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var C={data:function(){return{isActives:!1,menu:{},phone:{}}},mounted:function(){var t=this;this.$axios.get("main-page",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.menu=e.data.menu,t.phone=e.data.about[0]}))},computed:{}},l=n(78),component=Object(l.a)(C,(function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{staticClass:"nav_father"},[C("marquee",[t._v("Сайт работает в тестовом режиме")]),t._v(" "),C("div",{staticClass:"phone_navs",class:{active:t.isActives}},[C("div",{staticClass:"nav_menu"},[C("ul",{staticClass:"father_ul"},[C("li",[C("router-link",{staticClass:"logo_imge",attrs:{to:"/"}},[C("img",{attrs:{src:n(372),alt:""}})])],1)]),t._v(" "),C("ul",[C("li",{staticClass:"phone_links"},[C("div",{staticClass:"circle_phone"}),t._v(" "),C("a",{attrs:{href:"tel:+998 71 205-06-00"}},[t._v("\n           "+t._s(t.menu)+"\n          ")])])]),t._v(" "),C("button",{staticClass:"hb_buttons",on:{click:function(e){t.isActives=!t.isActives}}},[C("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[C("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M84.9407 448.942C78.6923 455.19 68.5616 455.19 62.3132 448.942C56.0649 442.693 56.0649 432.563 62.3132 426.314L233 255.628L62.3132 84.9417C56.0649 78.6933 56.0649 68.5626 62.3132 62.3142C68.5616 56.0658 78.6923 56.0658 84.9407 62.3142L255.627 233.001L426.313 62.3142C432.562 56.0658 442.692 56.0658 448.941 62.3142C455.189 68.5626 455.189 78.6933 448.941 84.9417L278.254 255.628L448.941 426.314C455.189 432.563 455.189 442.693 448.941 448.942C442.692 455.19 432.562 455.19 426.313 448.942L255.627 278.255L84.9407 448.942Z",fill:"black"}})])])]),t._v(" "),C("div",{staticClass:"phone_links"},[C("ul",t._l(t.menu,(function(e,n){return C("li",{key:n,staticClass:"navbar_link"},[C("NuxtLink",{attrs:{to:e.url}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),0)])]),t._v(" "),C("div",{staticClass:"main_container"},[C("div",{staticClass:"nav_menu"},[C("ul",{staticClass:"father_ul"},[C("li",[C("router-link",{staticClass:"logo_imge logo1",attrs:{to:"/"}},[C("img",{attrs:{src:n(372),alt:""}})]),t._v(" "),C("router-link",{staticClass:"logo_imge logo2",attrs:{to:"/"}},[C("img",{attrs:{src:n(374),alt:""}})])],1),t._v(" "),C("ul",{staticClass:"main_links"},t._l(t.menu,(function(e,n){return C("li",{key:n,staticClass:"navbar_link"},[C("router-link",{attrs:{to:e.url}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)})),0)]),t._v(" "),C("ul",[C("li",{staticClass:"phone_links"},[C("div",{staticClass:"circle_phone"}),t._v(" "),C("a",{attrs:{href:"tel:+998 71 205-06-00"}},[t._v("\n            "+t._s(t.phone.phone_number)+"\n          ")])])]),t._v(" "),C("button",{staticClass:"hb_buttons",on:{click:function(e){t.isActives=!t.isActives}}},[C("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve"}},[C("line",{attrs:{fill:"none",stroke:"#000000","stroke-width":"2","stroke-miterlimit":"10",x1:"12",y1:"21",x2:"52",y2:"21"}}),t._v(" "),C("line",{attrs:{fill:"none",stroke:"#000000","stroke-width":"2","stroke-miterlimit":"10",x1:"12",y1:"33",x2:"52",y2:"33"}}),t._v(" "),C("line",{attrs:{fill:"none",stroke:"#000000","stroke-width":"2","stroke-miterlimit":"10",x1:"12",y1:"45",x2:"52",y2:"45"}})])])])])],1)}),[],!1,null,null,null);e.default=component.exports},377:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAfCAYAAABqI6qaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALSSURBVHgB7ZpNbhMxFMf/Tls2VGqKhOimKIgVG+I1G8INWCI+pydgOEGHE7Q9QVNaKrGjJyDdsGGRAdYVUySksmm7KAJFJOY9Z2YURp1Pz87zkyzbGScj/f3y7OdngYZLkU9VDy10odCDgKS6Ez8UCKjPZYAJDvx94Rf9XYGG/5DPlEPVCyq9wl/iCQA8/43YyR/aoJGOkhhjA2WETsLCt/DA74sgbUgLDWzVLok9hInYDLudMb7J58pLG2K94KE4G6gThfU00a0WXItC4qQ9//HJhb8rqH6F0qSIbq0PJ5+t//5ZY76+W8Z4dK7b1247uHlvG6VR5NP3xCDq2mvhE3zIG3L9jhu3T4/6+P5xDaVpYZsmtx1152Ah4dbPyRu3eKNHPkDg4udA93+f+Rj9OsbS6kOUoE2T++fky+tD7thp4SLdbydZubuOla4X9ytZuoAbWbl1gusIcjZqLEANorfxl6JV2GjhQkeRpTEWPXyvjYJLVMRQ9N709ZZBC6aCIbQA4uSzF/cLbxnnsDxPFS+5XVjAwtXV9qxQJlxZ7GB0Eeg2WzqTJ7oYYYktnEc5aDAm6XKSiDE6zeFVjbDV58Eu5YBKAEsgK/RQA6dHOxQEBXGf/TiXLIb74pgFfx8WK6C/vENVBwbwOpAUO3fRVNBZIRtdipFxsdi8S4kovEMRtgqutAutRGWxmfF0oq08nqW9+Bk43C6Bkdi0RtK5+i1u2LlLUdgsM9xQbH5fP2raKfg8tlBwZ2YsNlv3noh/wErBKat+TlaXewhSg9jss53ZvrWBj057TZCZrDQVmybVG+6Kw9mPrI40/bdik0VJex6F6VXFnnUlEc1FIEI+US6ZXn1XJRRcEnvrskeN4CHyEWXxF3RiuYOqcDQ5wVrWXcNG8ATyMSWYW3hZKlHBlzpp60cuqrlbWBUSXpLw9zHNF7QTExCEZyM+JfUHyYUxi387hxb/vyuR/wAAAABJRU5ErkJggg=="},379:function(t,e,n){"use strict";n.r(e);n(4),n(49);var C={data:function(){return{site_title:{},description:{}}},mounted:function(){var t=this;this.$axios.get("main-page",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.site_title=e.data.site,t.description=e.data.about[0].description}))}},l=n(78),component=Object(l.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_main"},[n("div",{staticClass:"main_container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-6 col-md-6 col-12"},[n("div",{staticClass:"section_text"},[n("div",[n("div",{staticClass:"section_title"},[t._v(t._s(t.site_title.logo_title))]),t._v(" "),n("div",{staticClass:"section_descripton"},[t._v(t._s(t.description)+" ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){t.exports=n.p+"img/idea2.3f5c45e.png"},384:function(t,e,n){t.exports=n.p+"img/Group55236.4293b81.png"},396:function(t,e,n){t.exports=n.p+"img/frame.6696e53.png"},397:function(t,e,n){t.exports=n.p+"img/IMAGE.395eb77.png"},398:function(t,e,n){t.exports=n.p+"img/Group11.a31f465.png"},399:function(t,e,n){t.exports=n.p+"img/Group55237.5557858.png"},406:function(t,e,n){"use strict";n.r(e);var C=[function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("section",[C("div",{staticClass:"main_container"},[C("div",{staticClass:"row"},[C("div",{staticClass:"col-xl-6"},[C("div",{staticClass:"web_text"},[t._v("\n            Маркетинг и реклама\n          ")])]),t._v(" "),C("div",{staticClass:"col-xl-6"},[C("div",{staticClass:"web_text"},[C("img",{attrs:{src:n(396),alt:""}})])])]),t._v(" "),C("div",{staticClass:"marketing_title"},[C("div",{staticClass:"row"},[C("div",{staticClass:"col-xl-6 marketing_text"},[C("div",[t._v("\n             Используем\n             возможности для поиска\n             и привлечения\n             ваших клиентов.\n           ")])]),t._v(" "),C("div",{staticClass:"col-xl-6"},[C("img",{attrs:{src:n(397),alt:""}})])])]),t._v(" "),C("div",{staticClass:"main_container"},[C("div",{staticClass:"marketing_flex"},[C("div",[C("img",{attrs:{src:n(384),alt:""}})]),t._v(" "),C("div",{staticClass:"mar_card"},[C("div",{staticClass:"market_card_title"},[t._v("КОНТЕКСТНАЯ РЕКЛАМА")]),t._v(" "),C("div",{staticClass:"market_card_description"},[t._v("Скорость и точная фокусировка.")])])]),t._v(" "),C("div",{staticClass:"marketing_flex"},[C("div",{staticClass:"mar_card m_l"},[C("div",{staticClass:"market_card_title"},[t._v("КОНТЕКСТНАЯ РЕКЛАМА")]),t._v(" "),C("div",{staticClass:"market_card_description"},[t._v("Скорость и точная фокусировка.")])]),t._v(" "),C("div",[C("img",{attrs:{src:n(398),alt:""}})])]),t._v(" "),C("div",{staticClass:"marketing_flex"},[C("div",[C("img",{attrs:{src:n(384),alt:""}})]),t._v(" "),C("div",{staticClass:"mar_card"},[C("div",{staticClass:"market_card_title"},[t._v("SMM")]),t._v(" "),C("div",{staticClass:"market_card_description"},[t._v("Доверие и интерактивность.")])])]),t._v(" "),C("div",{staticClass:"marketing_flex"},[C("div",{staticClass:"mar_card  m_l"},[C("div",{staticClass:"market_card_title"},[t._v("КОНТЕНТ-МАРКЕТИНГ")]),t._v(" "),C("div",{staticClass:"market_card_description"},[t._v("Авторитет и экспертное мнение.")])]),t._v(" "),C("div",[C("img",{attrs:{src:n(399),alt:""}})])])])])])},function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("section",[C("div",{staticClass:"main_container"},[C("div",{staticClass:"idea"},[C("div",[C("div",[C("img",{attrs:{src:n(380),alt:""}})]),t._v(" "),C("div",{staticClass:"idea_title"},[t._v("\n            Начать проект\n            "),C("img",{attrs:{src:n(377),alt:""}})]),t._v(" "),C("div",{staticClass:"idea_description"},[t._v("\n            Расскажите о проекте за 60 секунд!\n          ")])])])])])}],l={data:function(){return{language:["PHP","Python","Laravel","Symfony","Django","SQLight","PostgreSQL","My SQL","CMS Brane","Wordpress"]}}},r=n(78),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SideBar"),t._v(" "),n("Navbar"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("Footer")],1)}),C,!1,null,null,null);e.default=component.exports;installComponents(component,{SideBar:n(375).default,Navbar:n(376).default,Section:n(379).default,Footer:n(378).default})}}]);