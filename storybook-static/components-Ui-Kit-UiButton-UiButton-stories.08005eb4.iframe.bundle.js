/*! For license information please see components-Ui-Kit-UiButton-UiButton-stories.08005eb4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkstar_wars=self.webpackChunkstar_wars||[]).push([[292],{"./src/components/Ui-Kit/UiButton/UiButton.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Disabled:function(){return Disabled},Light:function(){return Light},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiButton_stories}});var UiButton_module={button:"UiButton_button__meUeS",dark:"UiButton_dark__oyRXB",light:"UiButton_light__A+okV"},classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiButton=function UiButton(_ref){var text=_ref.text,onClick=_ref.onClick,disabled=_ref.disabled,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"dark":_ref$theme,classes=_ref.classes;return(0,jsx_runtime.jsx)("button",{className:classnames_default()(UiButton_module.button,UiButton_module[theme],classes),onClick:onClick,disabled:disabled,children:text})};UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:"'dark'",computed:!1},description:"",type:{name:"string"},required:!1},test:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};var _Light$parameters,_Light$parameters2,_Light$parameters2$do,_Dark$parameters,_Dark$parameters2,_Dark$parameters2$doc,_Disabled$parameters,_Disabled$parameters2,_Disabled$parameters3,UiButton_UiButton=UiButton,UiButton_stories={title:"Ui-Kit/UiButton",component:UiButton_UiButton},Template=function Template(args){return(0,jsx_runtime.jsx)(UiButton_UiButton,_objectSpread2({},args))},props={text:"Next`",onClick:function onClick(){return console.log("Button Click")},disabled:!1,theme:"light",classes:""},Light=Template.bind({});Light.args=_objectSpread2(_objectSpread2({},props),{},{theme:"light"});var Dark=Template.bind({});Dark.args=_objectSpread2(_objectSpread2({},props),{},{theme:"dark"});var Disabled=Template.bind({});Disabled.args=_objectSpread2(_objectSpread2({},props),{},{disabled:!0}),Light.parameters=_objectSpread2(_objectSpread2({},Light.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Light$parameters=Light.parameters)||void 0===_Light$parameters?void 0:_Light$parameters.docs),{},{source:_objectSpread2({originalSource:"args => <UiButton {...args} />"},null===(_Light$parameters2=Light.parameters)||void 0===_Light$parameters2||null===(_Light$parameters2$do=_Light$parameters2.docs)||void 0===_Light$parameters2$do?void 0:_Light$parameters2$do.source)})}),Dark.parameters=_objectSpread2(_objectSpread2({},Dark.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:_objectSpread2({originalSource:"args => <UiButton {...args} />"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2$doc=_Dark$parameters2.docs)||void 0===_Dark$parameters2$doc?void 0:_Dark$parameters2$doc.source)})}),Disabled.parameters=_objectSpread2(_objectSpread2({},Disabled.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread2({originalSource:"args => <UiButton {...args} />"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters3=_Disabled$parameters2.docs)||void 0===_Disabled$parameters3?void 0:_Disabled$parameters3.source)})});var __namedExportsOrder=["Light","Dark","Disabled"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);