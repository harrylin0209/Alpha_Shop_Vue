(function(t){function a(a){for(var s,r,c=a[0],l=a[1],o=a[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(v.length)v.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,c=1;c<e.length;c++){var l=e[c];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/Alpha_Shop_Vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"076f":function(t,a,e){},"1fd7":function(t,a,e){"use strict";e("076f")},"22de":function(t,a,e){"use strict";e("8319")},"24f7":function(t,a,e){t.exports=e.p+"img/Product2.4c406359.png"},"364b":function(t,a,e){"use strict";e("c5d0")},"3d7f":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAADCAYAAACnI+4yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBlc1BDQBACAPB4uQknASkIgFpOICiAGgySX8rAB4p5gV5H6Nc+nItFAFjDslU3q6LAAAAAElFTkSuQmCC"},4487:function(t,a,e){"use strict";e("5992")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"alpha-shop"}},[e("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[e("router-view")],1)])},n=[],r=(e("4989"),e("ab8b"),{}),c=r,l=e("2877"),o=Object(l["a"])(c,i,n,!1,null,null,null),u=o.exports,d=e("8c4f"),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"title"},[t._v("結帳")]),e("Progress",{attrs:{stepper:t.stepper}}),1==t.stepper?e("Address",{attrs:{initialAddressData:t.userData.addressData},on:{addressData:t.saveAddressData}}):2==t.stepper?e("Shipping",{attrs:{initialShippingData:t.userData.shippingData},on:{shippingData:t.saveShippingData}}):e("Checkout",{attrs:{initialCheckoutData:t.userData.checkoutData},on:{checkoutData:t.saveCheckoutData}}),e("Button",{attrs:{stepper:t.stepper,userData:t.userData},on:{"handle-next-step":t.handleNextStep,"handle-last-step":t.handleLastStep}}),e("Basket",{attrs:{shippingFee:t.userData.shippingData.shippingFee,initialBasketData:t.userData.basketData},on:{basketData:t.saveBasketData}}),4==t.stepper?e("Modal",{attrs:{userData:t.userData},on:{"handle-leave-modal":t.handleLastStep}}):t._e()],1)},p=[],h=(e("e9c4"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[1==t.stepper?e("div",{attrs:{id:"Progress1"}},[t._m(0),e("div",{staticClass:"progress-bar-1"}),t._m(1),e("div",{staticClass:"progress-bar-2"}),t._m(2)]):2==t.stepper?e("div",{attrs:{id:"Progress2"}},[t._m(3),e("div",{staticClass:"progress-bar-1"}),t._m(4),e("div",{staticClass:"progress-bar-2"}),t._m(5)]):e("div",{attrs:{id:"Progress3"}},[t._m(6),e("div",{staticClass:"progress-bar-1"}),t._m(7),e("div",{staticClass:"progress-bar-2"}),t._m(8)])])}),m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-1"},[e("div",{staticClass:"step-number"},[e("div",{staticClass:"number"},[t._v("1")])]),e("div",{staticClass:"step-title"},[t._v(" 寄送地址 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-2"},[e("div",{staticClass:"step-number"},[e("div",{staticClass:"number"},[t._v("2")])]),e("div",{staticClass:"step-title"},[t._v(" 運送方式 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-3"},[e("div",{staticClass:"step-number"},[e("div",{staticClass:"number"},[t._v("3")])]),e("div",{staticClass:"step-title"},[t._v(" 付款資訊 ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"step-1"},[s("div",{staticClass:"step-number"},[s("img",{staticClass:"number",attrs:{src:e("f0c8")}})]),s("div",{staticClass:"step-title"},[t._v(" 寄送地址 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-2"},[e("div",{staticClass:"step-number"},[e("div",{staticClass:"number"},[t._v("2")])]),e("div",{staticClass:"step-title"},[t._v(" 運送方式 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-3"},[e("div",{staticClass:"step-number"},[e("div",{staticClass:"number"},[t._v("3")])]),e("div",{staticClass:"step-title"},[t._v(" 付款資訊 ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"step-1"},[s("div",{staticClass:"step-number"},[s("img",{staticClass:"number",attrs:{src:e("f0c8")}})]),s("div",{staticClass:"step-title"},[t._v(" 寄送地址 ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"step-2"},[s("div",{staticClass:"step-number"},[s("img",{staticClass:"number",attrs:{src:e("f0c8")}})]),s("div",{staticClass:"step-title"},[t._v(" 運送方式 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"step-3"},[e("div",{staticClass:"step-number"},[e("div",{staticClass:"number"},[t._v("3")])]),e("div",{staticClass:"step-title"},[t._v(" 付款資訊 ")])])}],C=(e("a9e3"),{props:{stepper:{type:Number,required:!0}}}),f=C,D=(e("c836"),Object(l["a"])(f,h,m,!1,null,null,null)),_=D.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Address"}},[e("div",{staticClass:"title"},[t._v("寄送地址")]),e("div",{staticClass:"input"},[e("div",{staticClass:"line-1"},[e("div",{staticClass:"left"},[e("div",{staticClass:"gender"},[t._v("稱謂")]),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.addressData.salutation,expression:"addressData.salutation"}],staticClass:"text-input",attrs:{name:"gender"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.addressData,"salutation",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"Mr."}},[t._v("先生")]),e("option",{attrs:{value:"Ms."}},[t._v("女士")])])])]),e("div",{staticClass:"right"},[e("div",{staticClass:"name"},[t._v("姓名")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.username,expression:"addressData.username"}],staticClass:"text-input",attrs:{type:"text",name:"name",placeholder:"請輸入姓名"},domProps:{value:t.addressData.username},on:{input:function(a){a.target.composing||t.$set(t.addressData,"username",a.target.value)}}})])])]),e("div",{staticClass:"line-2"},[e("div",{staticClass:"left"},[e("div",{staticClass:"phone"},[t._v("電話")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.phone,expression:"addressData.phone"}],staticClass:"text-input",attrs:{type:"text",name:"phone",placeholder:"請輸入行動電話"},domProps:{value:t.addressData.phone},on:{input:function(a){a.target.composing||t.$set(t.addressData,"phone",a.target.value)}}})])]),e("div",{staticClass:"right"},[e("div",{staticClass:"email"},[t._v("Email")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.email,expression:"addressData.email"}],staticClass:"text-input",attrs:{type:"text",name:"email",placeholder:"請輸入電子郵件"},domProps:{value:t.addressData.email},on:{input:function(a){a.target.composing||t.$set(t.addressData,"email",a.target.value)}}})])])]),e("div",{staticClass:"line-3"},[e("div",{staticClass:"left"},[e("div",{staticClass:"region"},[t._v("縣市")]),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.addressData.city,expression:"addressData.city"}],staticClass:"text-input",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.addressData,"city",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("請選擇縣市")]),e("option",{attrs:{value:"Taipei City"}},[t._v("台北市")]),e("option",{attrs:{value:"New Taipei City"}},[t._v("新北市")]),e("option",{attrs:{value:"Keelung City"}},[t._v("基隆市")]),e("option",{attrs:{value:"Taoyuan City"}},[t._v("桃園市")]),e("option",{attrs:{value:"Hsinchu County"}},[t._v("新竹縣")]),e("option",{attrs:{value:"Hsinchu City"}},[t._v("新竹市")]),e("option",{attrs:{value:"Miaoli County"}},[t._v("苗栗縣")]),e("option",{attrs:{value:"Taichung City"}},[t._v("台中市")]),e("option",{attrs:{value:"Nantou County"}},[t._v("南投縣")]),e("option",{attrs:{value:"Changhua City"}},[t._v("彰化縣")]),e("option",{attrs:{value:"Yunlin County"}},[t._v("雲林縣")]),e("option",{attrs:{value:"Chiayi County"}},[t._v("嘉義縣")]),e("option",{attrs:{value:"Chiayi City"}},[t._v("嘉義市")]),e("option",{attrs:{value:"Tainan City"}},[t._v("台南市")]),e("option",{attrs:{value:"Kaohsiung City"}},[t._v("高雄市")]),e("option",{attrs:{value:"Pingtung County"}},[t._v("屏東縣")]),e("option",{attrs:{value:"Yilan County"}},[t._v("宜蘭縣")]),e("option",{attrs:{value:"Hualien County"}},[t._v("花蓮縣")]),e("option",{attrs:{value:"Taitung County"}},[t._v("台東縣")]),e("option",{attrs:{value:"Penghu County"}},[t._v("澎湖縣")]),e("option",{attrs:{value:"Kinmen County"}},[t._v("金門縣")]),e("option",{attrs:{value:"Lienchiang County"}},[t._v("連江縣")])])])]),e("div",{staticClass:"right"},[e("div",{staticClass:"address"},[t._v("地址")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addressData.addr,expression:"addressData.addr"}],staticClass:"text-input",attrs:{type:"text",name:"address",placeholder:"請輸入地址"},domProps:{value:t.addressData.addr},on:{input:function(a){a.target.composing||t.$set(t.addressData,"addr",a.target.value)}}})])])])])])},A=[],b={props:{initialAddressData:{type:Object,required:!0}},data:function(){return{addressData:this.initialAddressData}},watch:{addressData:{handler:function(){this.$emit("addressData",this.addressData)},deep:!0}}},y=b,k=(e("1fd7"),Object(l["a"])(y,g,A,!1,null,"2c719c46",null)),x=k.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Shipping"}},[e("div",{staticClass:"title"},[t._v("運送方式")]),0==t.shippingData.shippingFee?e("div",{staticClass:"radio-default"},[t._m(0),e("div",{staticClass:"radio-2",on:{click:t.choose2}},[t._m(1),e("div",{staticClass:"tetl"},[t._v("DHL貨運")]),e("div",{staticClass:"price"},[t._v("$500")]),e("div",{staticClass:"description"},[t._v("48小時內送達")])])]):e("div",{staticClass:"radio-changed"},[e("div",{staticClass:"radio-1",on:{click:t.choose1}},[t._m(2),e("div",{staticClass:"tetl"},[t._v("標準運送")]),e("div",{staticClass:"price"},[t._v("免費")]),e("div",{staticClass:"description"},[t._v("約3~7個工作天")])]),t._m(3)])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"radio-1"},[e("div",{staticClass:"radio-outer"},[e("div",{staticClass:"radio-inner"})]),e("div",{staticClass:"tetl"},[t._v("標準運送")]),e("div",{staticClass:"price"},[t._v("免費")]),e("div",{staticClass:"description"},[t._v("約3~7個工作天")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"radio-outer"},[e("div",{staticClass:"radio-inner"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"radio-outer"},[e("div",{staticClass:"radio-inner"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"radio-2"},[e("div",[e("div",{staticClass:"radio-outer"},[e("div",{staticClass:"radio-inner"})])]),e("div",{staticClass:"tetl"},[t._v("DHL貨運")]),e("div",{staticClass:"price"},[t._v("$500")]),e("div",{staticClass:"description"},[t._v("48小時內送達")])])}],w={props:{initialShippingData:{type:Object,required:!0}},data:function(){return{shippingData:this.initialShippingData}},methods:{choose1:function(){this.shippingData.shippingFee=0},choose2:function(){this.shippingData.shippingFee=500}},watch:{shippingData:{handler:function(){this.$emit("shippingData",this.shippingData)},deep:!0}}},E=w,P=(e("4487"),Object(l["a"])(E,S,$,!1,null,null,null)),O=P.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Checkout"}},[e("div",{staticClass:"title"},[t._v("付款資訊")]),e("div",{staticClass:"input"},[e("div",{staticClass:"line-1"},[e("div",{staticClass:"card-name"},[t._v("持卡人姓名")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.ccname,expression:"checkoutData.ccname"}],staticClass:"text-input",attrs:{type:"text",name:"card-name",placeholder:"John Doe"},domProps:{value:t.checkoutData.ccname},on:{input:function(a){a.target.composing||t.$set(t.checkoutData,"ccname",a.target.value)}}})])]),e("div",{staticClass:"line-2"},[e("div",{staticClass:"card-number"},[t._v("卡號")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.cardnumber,expression:"checkoutData.cardnumber"}],staticClass:"text-input",attrs:{type:"text",name:"card-number",placeholder:"0000 1111 2222 3333"},domProps:{value:t.checkoutData.cardnumber},on:{input:function(a){a.target.composing||t.$set(t.checkoutData,"cardnumber",a.target.value)}}})])]),e("div",{staticClass:"line-3"},[e("div",{staticClass:"left"},[e("div",{staticClass:"expiration-date"},[t._v("有效期限")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.expdate,expression:"checkoutData.expdate"}],staticClass:"text-input",attrs:{type:"text",name:"expiration-date",placeholder:"MM/YY"},domProps:{value:t.checkoutData.expdate},on:{input:function(a){a.target.composing||t.$set(t.checkoutData,"expdate",a.target.value)}}})])]),e("div",{staticClass:"right"},[e("div",{staticClass:"cvc"},[t._v("CVC/CCV")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutData.cvv,expression:"checkoutData.cvv"}],staticClass:"text-input",attrs:{type:"text",name:"cvc",placeholder:"123"},domProps:{value:t.checkoutData.cvv},on:{input:function(a){a.target.composing||t.$set(t.checkoutData,"cvv",a.target.value)}}})])])])])])},B=[],N={props:{initialCheckoutData:{type:Object,required:!0}},data:function(){return{checkoutData:this.initialCheckoutData}},watch:{checkoutData:{handler:function(){this.$emit("checkoutData",this.checkoutData)},deep:!0}}},F=N,M=(e("364b"),Object(l["a"])(F,j,B,!1,null,"18bb1549",null)),q=M.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"button"},[t._m(0),1!==t.stepper?e("div",{attrs:{id:"LastStep"},on:{click:t.lastStep}},[t._m(1)]):t._e(),t.stepper<3?e("div",{attrs:{id:"NextStep"},on:{click:t.nextStep}},[t._m(2)]):e("div",{attrs:{id:"Confirm"},on:{click:t.confirmOrder}},[t._m(3)])])},T=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("hr",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-arrow"},[e("i",{staticClass:"arrow-arrow"}),e("hr",{staticClass:"arrow-line"})]),e("div",{staticClass:"button-text"},[t._v("上一步")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-text"},[t._v("下一步")]),e("div",{staticClass:"button-arrow"},[e("hr",{staticClass:"arrow-line"}),e("i",{staticClass:"arrow-arrow"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-text"},[t._v("確認下單")])])}],Q={props:{stepper:{type:Number,required:!0},userData:{type:Object,required:!0}},data:function(){return{orderData:{salutation:this.userData.addressData.salutation,username:this.userData.addressData.username,phone:this.userData.addressData.phone,email:this.userData.addressData.email,city:this.userData.addressData.city,addr:this.userData.addressData.addr,shippingFee:this.userData.shippingData.shippingFee,ccname:this.userData.checkoutData.ccname,cardnumber:this.userData.checkoutData.cardnumber,expdate:this.userData.checkoutData.expdate,cvv:this.userData.checkoutData.cvv,totalPrice:this.userData.basketData.totalPrice}}},methods:{nextStep:function(){this.$emit("handle-next-step")},lastStep:function(){this.$emit("handle-last-step")},confirmOrder:function(){console.log(JSON.stringify(this.orderData,null,2)),this.nextStep()}}},I=Q,U=(e("8274"),Object(l["a"])(I,Y,T,!1,null,null,null)),H=U.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart"},[e("div",{staticClass:"header"},[t._v("購物籃")]),e("div",{staticClass:"product-1"},[t._m(0),e("div",{staticClass:"name"},[t._v("破壞補丁修身牛仔褲")]),e("div",{staticClass:"price"},[t._v("$3999")]),e("div",{staticClass:"count"},[e("div",{attrs:{id:"Minus1"},on:{click:t.minus1}},[e("div",{staticClass:"oval"}),t._m(1)]),e("div",{attrs:{id:"Quantity1"}},[t._v(t._s(t.basketData.quantity1))]),e("div",{attrs:{id:"Plus1"},on:{click:t.plus1}},[e("div",{staticClass:"oval"}),t._m(2)])])]),e("div",{staticClass:"product-2"},[t._m(3),e("div",{staticClass:"name"},[t._v("刷色直筒牛仔褲")]),e("div",{staticClass:"price"},[t._v("$1299")]),e("div",{staticClass:"count"},[e("div",{attrs:{id:"Minus2"},on:{click:t.minus2}},[e("div",{staticClass:"oval"}),t._m(4)]),e("div",{attrs:{id:"Quantity2"}},[t._v(t._s(t.basketData.quantity2))]),e("div",{attrs:{id:"Plus2"},on:{click:t.plus2}},[e("div",{staticClass:"oval"}),t._m(5)])])]),e("div",{staticClass:"delivery"},[e("hr",{staticClass:"devider"}),e("div",{staticClass:"delivery-fee"},[t._v("運費")]),e("div",{staticClass:"fee"},[t._v("$"+t._s(t.shippingFee))])]),e("div",{staticClass:"total"},[e("hr",{staticClass:"devider"}),e("div",{staticClass:"amount"},[t._v("小計")]),e("div",{attrs:{id:"Total"}},[t._v("$"+t._s(t.basketData.totalPrice))])])])},R=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("img",{attrs:{src:e("f863")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"small-minus"},[s("img",{staticClass:"icon",attrs:{src:e("3d7f")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"small-plus"},[s("img",{staticClass:"icon1",attrs:{src:e("3d7f")}}),s("img",{staticClass:"icon2",attrs:{src:e("3d7f")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("img",{attrs:{src:e("24f7")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"small-minus"},[s("img",{staticClass:"icon",attrs:{src:e("3d7f")}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"small-plus"},[s("img",{staticClass:"icon1",attrs:{src:e("3d7f")}}),s("img",{staticClass:"icon2",attrs:{src:e("3d7f")}})])}],J={props:{shippingFee:{type:Number,required:!0},initialBasketData:{type:Object,required:!0}},data:function(){return{basketData:{quantity1:this.initialBasketData.quantity1,quantity2:this.initialBasketData.quantity2,totalPrice:this.initialBasketData.totalPrice}}},methods:{computeTotal:function(){this.basketData.totalPrice=3999*this.basketData.quantity1+1299*this.basketData.quantity2+this.shippingFee},plus1:function(){return this.basketData.quantity1+=1,this.computeTotal()},minus1:function(){if(this.basketData.quantity1>0)return this.basketData.quantity1-=1,this.computeTotal()},plus2:function(){return this.basketData.quantity2+=1,this.computeTotal()},minus2:function(){if(this.basketData.quantity2>0)return this.basketData.quantity2-=1,this.computeTotal()}},watch:{shippingFee:{handler:function(){this.computeTotal()}},basketData:{handler:function(){this.$emit("basketData",this.basketData)},deep:!0}}},K=J,V=(e("d960"),Object(l["a"])(K,L,R,!1,null,null,null)),G=V.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-mask",on:{click:t.leaveModal}},[e("div",{staticClass:"orderData"},[t._v(" { "),t._l(t.orderData,(function(a,s){return e("div",{key:a.key},[t._v('  "'+t._s(s)+'": "'+t._s(a)+'", ')])})),t._v(" } ")],2)])},Z=[],z={props:{userData:{type:Object,required:!0}},data:function(){return{orderData:{salutation:this.userData.addressData.salutation,username:this.userData.addressData.username,phone:this.userData.addressData.phone,email:this.userData.addressData.email,city:this.userData.addressData.city,addr:this.userData.addressData.addr,shippingFee:this.userData.shippingData.shippingFee,ccname:this.userData.checkoutData.ccname,cardnumber:this.userData.checkoutData.cardnumber,expdate:this.userData.checkoutData.expdate,cvv:this.userData.checkoutData.cvv,totalPrice:this.userData.basketData.totalPrice}}},methods:{leaveModal:function(){this.$emit("handle-leave-modal")}}},W=z,tt=(e("f301"),Object(l["a"])(W,X,Z,!1,null,"9c7aace6",null)),at=tt.exports,et="alpha-shop-vue",st={components:{Progress:_,Address:x,Shipping:O,Checkout:q,Button:H,Basket:G,Modal:at},data:function(){return{stepper:1,userData:{addressData:{salutation:"",username:"",phone:"",email:"",city:"",addr:""},shippingData:{shippingFee:0},checkoutData:{ccname:"",cardnumber:"",expdate:"",cvv:""},basketData:{quantity1:1,quantity2:1,totalPrice:5298}}}},methods:{handleNextStep:function(){this.stepper+=1},handleLastStep:function(){this.stepper-=1},saveStorage:function(){localStorage.setItem(et,JSON.stringify(this.userData))},saveAddressData:function(t){this.userData.addressData=t,this.saveStorage()},saveShippingData:function(t){this.userData.shippingData=t,this.saveStorage()},saveCheckoutData:function(t){this.userData.checkoutData=t,this.saveStorage()},saveBasketData:function(t){this.userData.basketData=t,this.saveStorage()}},created:function(){this.userData=JSON.parse(localStorage.getItem(et))||this.userData}},it=st,nt=(e("22de"),Object(l["a"])(it,v,p,!1,null,null,null)),rt=nt.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[t._v("404 Page Not Found")])},lt=[],ot={},ut=Object(l["a"])(ot,ct,lt,!1,null,null,null),dt=ut.exports;s["a"].use(d["a"]);var vt=[{path:"/",name:"root",redirect:"/main"},{path:"/main",name:"main",component:rt},{path:"*",name:"not-found",component:dt}],pt=new d["a"]({linkExactActiveClass:"active",routes:vt}),ht=pt;s["a"].config.productionTip=!1,new s["a"]({router:ht,render:function(t){return t(u)}}).$mount("#app")},5992:function(t,a,e){},6982:function(t,a,e){},8274:function(t,a,e){"use strict";e("d277")},8319:function(t,a,e){},"831a":function(t,a,e){},c5d0:function(t,a,e){},c812:function(t,a,e){},c836:function(t,a,e){"use strict";e("831a")},d277:function(t,a,e){},d960:function(t,a,e){"use strict";e("c812")},f0c8:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgBrVU9U8JAEN0kFJZYMUCDFZYRGjtT6gyM/ARtaMXSCujsxJZG7LTTobGEjoKvmsZUQGfsdIYP394cmRMIEwhvZiebS+69u927XY02wDTNsK7rN5qmWfP5PIFnQn5yYH3Y23Q6fe/3+7YXh+ZBnDAM4wmuRf5Qg1B5nZCxPJBOp2+w6he4x+QfJuZcRaPR39Fo1PIUSKVSRYThHu4BbY8DzD2HCEGkuSLAK5fkgcD5gsj3YiciBzLmPbhh2g8c5OSEc6LzG8hLeyRnhOUhIU2u/pMCIpvNEse/Wq26Y9jFYQjZz1FAMHmxWBR+p9MRxgB3QUdSLikAVHJe/YKcAe4zzoFJO2KZXA2PRIIFdkquD3JXYAWlUkkQBCQXCMFsVloMWJZFmUxGGKNer+9MDjhGLBbLqQK2bYsnbrYQw42kwWCwCzmjZeDsHvH1VkcXJ0EVSSaT25ITSvwjXzS+dV/rfsjn88JU+CVn4KIdGePx+AdhskgJ07qdbEsO1Hq93nNIKl17FTuV0C85QuPMZrMy+25HQy8oIBcPtAeA57bdblfYd/sB1+94PM6CFgUAyMsgd/vKv442HA4b3Czw0ylt2dU4LChudyr5igCDdxKJRF7x8yH5r1MNxPyi2+1+LH/QNs2SvYKrbQ4rNLGzsFytDZ+tOZlMKuhcjhfHH2l57IqGSjROAAAAAElFTkSuQmCC"},f301:function(t,a,e){"use strict";e("6982")},f863:function(t,a,e){t.exports=e.p+"img/Product1.01688c5c.png"}});
//# sourceMappingURL=app.ec2c788c.js.map