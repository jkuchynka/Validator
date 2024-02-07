"use strict";function _toPrimitive(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0===a)return("string"===t?String:Number)(e);a=a.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==typeof e?e:String(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var messages={accepted:"The :attr must be accepted.",after:"The :attr must be a date after :date.",alpha:"The :attr may only contain letters.",alpha_dash:"The :attr may only contain letters, numbers, and dashes.",alpha_num:"The :attr may only contain letters and numbers.",array:"The :attr must be an array.",before:"The :attr must be a date before :date.",between:{numeric:"The :attr must be between :min and :max.",file:"The :attr must be between :min and :max kilobytes.",string:"The :attr must be between :min and :max characters.",array:"The :attr must have between :min and :max items."},boolean:"The :attr field must be true or false.",confirmed:"The :attr confirmation does not match.",date:"The :attr is not a valid date.",date_format:"The :attr does not match the format :format.",different:"The :attr and :other must be different.",digits:"The :attr must be :digits digits.",digits_between:"The :attr must be between :min and :max digits.",email:"The :attr must be a valid email address.",exists:"The selected :attr is invalid.",filled:"The :attr field is required.",image:"The :attr must be an image.",in:"The selected :attr is invalid.",integer:"The :attr must be an integer.",ip:"The :attr must be a valid IP address.",json:"The :attr must be a valid JSON string.",max:{numeric:"The :attr may not be greater than :max.",file:"The :attr may not be greater than :max kilobytes.",string:"The :attr may not be greater than :max characters.",array:"The :attr may not have more than :max items."},mimes:"The :attr must be a file of type: :values.",min:{numeric:"The :attr must be at least :min.",file:"The :attr must be at least :min kilobytes.",string:"The :attr must be at least :min characters.",array:"The :attr must have at least :min items."},not_in:"The selected :attr is invalid.",numeric:"The :attr must be a number.",regex:"The :attr format is invalid.",required:"The :attr field is required.",required_if:"The :attr field is required when :other is :value.",required_unless:"The :attr field is required unless :other is in :values.",required_with:"The :attr field is required when :values is present.",required_with_all:"The :attr field is required when :values is present.",required_without:"The :attr field is required when :values is not present.",required_without_all:"The :attr field is required when none of :values are present.",same:"The :attr and :other must match.",size:{numeric:"The :attr must be :size.",file:"The :attr must be :size kilobytes.",string:"The :attr must be :size characters.",array:"The :attr must contain :size items."},string:"The :attr must be a string.",url:"The :attr format is invalid."},Validator=function(){function i(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};_classCallCheck(this,i),this.setData(e),this.rules=this.parseRules(t),this.failedRules=[],this.errors=null,this.customRules={},this.customMessages=a,this.customNames=r,this.customValues={}}return _createClass(i,[{key:"dateRules",get:function(){return["Before","After","DateBetween"]}},{key:"sizeRules",get:function(){return["Size","Between","Min","Max"]}},{key:"numericRules",get:function(){return["Numeric","Integer"]}},{key:"implicitRules",get:function(){return["Required","Filled","RequiredWith","RequiredWithAll","RequiredWithout","RequiredWithoutAll","RequiredIf","RequiredUnless","Accepted","Present"]}},{key:"dependentRules",get:function(){return["RequiredWith","RequiredWithAll","RequiredWithout","RequiredWithoutAll","RequiredIf","RequiredUnless","Confirmed","Same","Different","Unique","Before","After"]}},{key:"extend",value:function(e,t,a){this.customRules[this.titleCase(e,"_")]=t,a&&(this.customMessages[this.snakeCase(e)]=a)}},{key:"setData",value:function(e){this.data=e}},{key:"parseRules",value:function(e){var t,a=[];for(t in e)a.push({name:t,rules:this.parseItemRules(e[t])});return a}},{key:"parseItemRules",value:function(e){var t=this,a=[];return(e="string"==typeof e?e.split("|"):e).forEach(function(e){e.trim()&&(e=e.split(":"),a.push({name:t.titleCase(e[0],"_"),params:e[1]?"regex"===e[0]?e[1]:e[1].split(","):[]}))}),a}},{key:"titleCase",value:function(e,t){return e.split(t=t||" ").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}).join("")}},{key:"snakeCase",value:function(e,t){return e.replace(/((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))(?=[A-Z])/g,"$1"+(t=t||"_")).toLowerCase()}},{key:"getValue",value:function(e){return void 0===this.data[e]?"":this.data[e]}},{key:"isEmptyObject",value:function(e){return 0===Object.getOwnPropertyNames(e).length}},{key:"isImplicit",value:function(e){return-1<this.implicitRules.indexOf(e)}},{key:"hasData",value:function(e){return void 0!==this.data[e]}},{key:"hasRule",value:function(e,t){return null!==this.getRule(e,t)}},{key:"getRule",value:function(t,a){var e=this.rules.filter(function(e){return e.name===t});if(0===e.length)return null;e=e[0],Array.isArray(a)||(a=[a]);e=e.rules.filter(function(e){return 0<=a.indexOf(e.name)});return 0===e.length?null:[e[0].name,e[0].params]}},{key:"requireParameterCount",value:function(e,t,a){if(t.length<e)throw new Error("Validation rule "+a+" requires at least "+e+" parameters")}},{key:"isEmptyValueAndContainsNullableRule",value:function(e){return!this.getValue(e.name)&&0<e.rules.filter(function(e){return"Nullable"===e.name}).length}},{key:"passes",value:function(){var a=this,e=(this.errors={},this.failedRules={},this.rules.some(function(e){return e.rules.some(function(e){return"Required"===e.name})}));return!(!this.isEmptyObject(this.data)||e)||(this.rules.forEach(function(e){var t=e.name;if(a.isEmptyValueAndContainsNullableRule(e))return!1;void 0===a.data[t]&&!e.rules.some(function(e){return a.isImplicit(e.name)})||e.rules.filter(function(e){return"Nullable"!==e.name}).forEach(function(e){a.validate(t,e)})}),this.isEmptyObject(this.errors))}},{key:"fails",value:function(){return!this.passes()}},{key:"valid",value:function(){null===this.errors&&this.passes();var e,t=[];for(e in this.data)this.hasError(e)||t.push(e);return t}},{key:"invalid",value:function(){null===this.errors&&this.passes();var e,t=[];for(e in this.errors)t.push(e);return t}},{key:"getErrorMsg",value:function(e,t){var a=this.getMessage(e,t);return this.doReplacements(a,e,t)}},{key:"getMessage",value:function(e,t){var a=this.getCustomMessage(e,t);return("object"===_typeof(a)||void 0===a)&&(t=this.snakeCase(t.name),"object"===_typeof(a=messages[t])&&(e=this.getDataType(e),a=messages[t][e]),void 0===a)?"":a}},{key:"getCustomMessage",value:function(e,t){t=this.snakeCase(t.name),e=this.customMessages[e+"."+t];return void 0===e?this.customMessages[t]:e}},{key:"getDataType",value:function(e){return this.hasRule(e,this.numericRules)?"numeric":this.hasRule(e,["Array"])?"array":"string"}},{key:"doReplacements",value:function(e,t,a){if(""===e.trim())return"";t=this.getDataName(t),e=e.replace(":ATTR",t.toUpperCase()).replace(":Attr",this.titleCase(t)).replace(":attr",t);var r=this["replace"+a.name];return e="function"==typeof r?r.apply(this,[e,t,a.name,a.params]):e}},{key:"validate",value:function(e,t){var a=this.getValue(e);this.findRuleMethod(t).apply(this,[e,a,t.params])||this.addFailure(e,t)}},{key:"findRuleMethod",value:function(e){var t=this["validate"+e.name];return"function"!=typeof(t=t||this.customRules[e.name])&&console.error('"'+e.name+'" validation rule does not exist!'),t}},{key:"addFailure",value:function(e,t){this.addError(e,t),void 0===this.failedRules[e]&&(this.failedRules[e]={}),this.failedRules[e][t.name]=t.params}},{key:"addError",value:function(e,t){var a=this.getMessage(e,t);"object"===_typeof(a)&&console.log("***** ",JSON.stringify(t),JSON.stringify(a)),a=this.doReplacements(a,e,t),this.hasError(e)||(this.errors[e]=[]),this.errors[e].push(a)}},{key:"hasError",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return null===e?!this.isEmptyObject(this.errors):null!==this.getError(e)}},{key:"getError",value:function(e){return void 0===this.errors[e]?null:this.errors[e]}},{key:"getErrors",value:function(){return this.errors}},{key:"validateSometimes",value:function(){return!0}},{key:"validateBail",value:function(){return!0}},{key:"shouldStopValidating",value:function(e){return!!this.hasRule(e,["Bail"])&&this.hasError(e)}},{key:"validateRequired",value:function(e,t,a){return null!==t&&!("string"==typeof t&&""===t.trim()||Array.isArray(t)&&t.length<1)}},{key:"validatePresent",value:function(e,t,a){return void 0!==this.data[e]}},{key:"validateFilled",value:function(e,t){return!this.hasData(e)||this.validateRequired(e,t)}},{key:"anyFailingRequired",value:function(e){var t=this,a=!1;return e.forEach(function(e){t.validateRequired(e,t.getValue(e))||(a=!0)}),a}},{key:"allFailingRequired",value:function(e){var t=this,a=!0;return e.forEach(function(e){t.validateRequired(e,t.getValue(e))&&(a=!1)}),a}},{key:"validateRequiredWith",value:function(e,t,a){return!!this.allFailingRequired(a)||this.validateRequired(e,t)}},{key:"validateRequiredWithAll",value:function(e,t,a){return!!this.anyFailingRequired(a)||this.validateRequired(e,t)}},{key:"validateRequiredWithout",value:function(e,t,a){return!this.anyFailingRequired(a)||this.validateRequired(e,t)}},{key:"validateRequiredWithoutAll",value:function(e,t,a){return!this.allFailingRequired(a)||this.validateRequired(e,t)}},{key:"validateRequiredIf",value:function(e,t,a){this.requireParameterCount(2,a,"required_if");var r=this.getValue(a[0]);return"boolean"==typeof r&&(r=r.toString()),!(0<=a.slice(1).indexOf(r))||this.validateRequired(e,t)}},{key:"validateRequiredUnless",value:function(e,t,a){this.requireParameterCount(2,a,"required_unless");var r=this.getValue(a[0]);return!(a.slice(1).indexOf(r)<0)||this.validateRequired(e,t)}},{key:"getPresentCount",value:function(e){var t=this,a=0;return e.forEach(function(e){void 0!==t.data[e]&&a++}),a}},{key:"validateMatch",value:function(e,t,a){a instanceof Array||(a=[a]),t instanceof Array||(t=[t]);a=a[0];return a instanceof RegExp||(a=a.split("/"),a=new RegExp(a[1],a[2])),a.test(t)}},{key:"validateRegex",value:function(e,t,a){return this.validateMatch(e,t,a)}},{key:"validateAccepted",value:function(e,t){return this.validateRequired(e,t)&&0<=["yes","on","1",1,!0,"true"].indexOf(t)}},{key:"validateArray",value:function(e,t){return void 0===this.data[e]||null===t||Array.isArray(t)}},{key:"validateConfirmed",value:function(e,t){return this.validateSame(e,t,[e+"_confirmation"])}},{key:"validateSame",value:function(e,t,a){this.requireParameterCount(1,a,"same");a=this.data[a[0]];return void 0!==a&&t===a}},{key:"validateDifferent",value:function(e,t,a){this.requireParameterCount(1,a,"different");a=this.data[a[0]];return void 0!==a&&t!==a}},{key:"validateDigits",value:function(e,t,a){return this.requireParameterCount(1,a,"digits"),this.validateNumeric(e,t)&&t.toString().length==a[0]}},{key:"validateDigitsBetween",value:function(e,t,a){this.requireParameterCount(2,a,"digits_between");var r=t.toString().length;return this.validateNumeric(e,t)&&r>=a[0]&&r<=a[1]}},{key:"validateSize",value:function(e,t,a){return this.requireParameterCount(1,a,"size"),this.getSize(e,t)==a[0]}},{key:"validateBetween",value:function(e,t,a){this.requireParameterCount(2,a,"between");e=this.getSize(e,t);return e>=a[0]&&e<=a[1]}},{key:"validateMin",value:function(e,t,a){return this.requireParameterCount(1,a,"min"),this.getSize(e,t)>=a[0]}},{key:"validateMax",value:function(e,t,a){return this.requireParameterCount(1,a,"max"),this.getSize(e,t)<=a[0]}},{key:"getSize",value:function(e,t){e=this.hasRule(e,this.numericRules);return t?e&&!isNaN(parseFloat(t))?parseFloat(t):t.length:0}},{key:"validateIn",value:function(e,t,a){return Array.isArray(t)&&this.hasRule(e,"Array")?0===this.arrayDiff(t,a).length:0<=a.indexOf(t)}},{key:"arrayDiff",value:function(e,t){var a=[];return e.forEach(function(e){t.indexOf(e)<0&&a.push(e)}),a}},{key:"validateNotIn",value:function(e,t,a){return this.requireParameterCount(1,a,"not_in"),!this.validateIn(e,t,a)}},{key:"validateNumeric",value:function(e,t){return this.validateMatch(e,t,/^-?\d+(\.\d*)?$/)}},{key:"validateInteger",value:function(e,t){return this.validateMatch(e,t,/^-?\d+$/)}},{key:"validateString",value:function(e,t){return!this.hasData(e)||null===t||"string"==typeof t}},{key:"validateEmail",value:function(e,t){return this.validateMatch(e,t,/^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,8}$/i)}},{key:"validateIp",value:function(e,t){t=t.split(".");return!!(4===t.length&&this.validateBetween(e,t[0],[1,255])&&this.validateBetween(e,t[1],[0,255])&&this.validateBetween(e,t[2],[0,255])&&this.validateBetween(e,t[3],[1,255]))}},{key:"validateUrl",value:function(e,t){return this.validateMatch(e,t,/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/i)}},{key:"validateAlpha",value:function(e,t){return this.validateMatch(e,t,/^([a-z])+$/i)}},{key:"validateAlphaNum",value:function(e,t){return this.validateMatch(e,t,/^([a-z0-9])+$/i)}},{key:"validateAlphaDash",value:function(e,t){return this.validateMatch(e,t,/^([a-z0-9_\-])+$/i)}},{key:"validateBefore",value:function(e,t,a){return this.requireParameterCount(1,a,"before"),("string"==typeof t||"number"==typeof t||t instanceof Date)&&(a=this.hasData(a[0])?this.getValue(a[0]):a[0],!!this.validateDate(e,a))&&Date.parse(t)<Date.parse(a)}},{key:"validateBeforeOrEqual",value:function(e,t,a){return this.requireParameterCount(1,a,"before_or_equal"),("string"==typeof t||"number"==typeof t||t instanceof Date)&&(a=this.hasData(a[0])?this.getValue(a[0]):a[0],!!this.validateDate(e,a))&&Date.parse(t)<=Date.parse(a)}},{key:"validateAfter",value:function(e,t,a){return this.requireParameterCount(1,a,"after"),("string"==typeof t||"number"==typeof t||t instanceof Date)&&(a=this.hasData(a[0])?this.getValue(a[0]):a[0],!!this.validateDate(e,a))&&Date.parse(t)>Date.parse(a)}},{key:"validateAfterOrEqual",value:function(e,t,a){return this.requireParameterCount(1,a,"afterOrEqual"),("string"==typeof t||"number"==typeof t||t instanceof Date)&&(a=this.hasData(a[0])?this.getValue(a[0]):a[0],!!this.validateDate(e,a))&&Date.parse(t)>=Date.parse(a)}},{key:"validateDate",value:function(e,t){return t instanceof Date||("string"==typeof t||"number"==typeof t)&&!isNaN(Date.parse(t))}},{key:"validateBoolean",value:function(e,t){return!this.hasData(e)||null===t||0<=[!0,!1,0,1,"0","1"].indexOf(t)}},{key:"validateJson",value:function(e,t){try{return JSON.parse(t),!0}catch(e){return!1}}},{key:"strReplace",value:function(e,t,a){if(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),!Array.isArray(a))for(var r=0;r<a.length;r++)a=a.replace(e,t);for(var i=0;i<e.length;i++)a=a.replace(e[i],t[i]);return a}},{key:"getDisplayableValue",value:function(e,t){return void 0!==this.customValues[e]&&void 0!==this.customValues[e][t]?this.customValues[e][t]:t}},{key:"getDataNameList",value:function(e){var t,a=[];for(t in e)a.push({key:this.getDataName(e[t])});return a}},{key:"getDataName",value:function(e){return void 0!==this.customNames[e]?this.customNames[e]:this.strReplace("_"," ",this.snakeCase(e))}},{key:"setCustomNames",value:function(e){return this.customNames=e,this}},{key:"addCustomNames",value:function(e){for(var t in e)this.customNames[t]=e[t];return this}},{key:"getCustomValues",value:function(){return this.customValues}},{key:"addCustomValues",value:function(e){for(var t in e)this.customValues[t]=e[t];return this}},{key:"setValueNames",value:function(e){return this.customValues=e,this}},{key:"failed",value:function(){return this.failedRules}},{key:"replaceBetween",value:function(e,t,a,r){return this.strReplace([":min",":max"],r,e)}},{key:"replaceDifferent",value:function(e,t,a,r){return this.replaceSame(e,t,a,r)}},{key:"replaceDigits",value:function(e,t,a,r){return this.strReplace(":digits",r[0],e)}},{key:"replaceDigitsBetween",value:function(e,t,a,r){return this.replaceBetween(e,t,a,r)}},{key:"replaceMin",value:function(e,t,a,r){return this.strReplace(":min",r[0],e)}},{key:"replaceMax",value:function(e,t,a,r){return this.strReplace(":max",r[0],e)}},{key:"replaceIn",value:function(e,t,a,r){var i=this;return r=r.map(function(e){return i.getDisplayableValue(t,e)}),this.strReplace(":values",r.join(", "),e)}},{key:"replaceNotIn",value:function(e,t,a,r){return this.replaceIn(e,t,a,r)}},{key:"replaceRequiredWith",value:function(e,t,a,r){return r=this.getDataNameList(r),this.strReplace(":values",r.join(" / "),e)}},{key:"replaceRequiredWithAll",value:function(e,t,a,r){return this.replaceRequiredWith(e,t,a,r)}},{key:"replaceRequiredWithout",value:function(e,t,a,r){return this.replaceRequiredWith(e,t,a,r)}},{key:"replaceRequiredWithoutAll",value:function(e,t,a,r){return this.replaceRequiredWith(e,t,a,r)}},{key:"replaceRequiredIf",value:function(e,t,a,r){return r[1]=this.getDisplayableValue(r[0],this.data[r[0]]),r[0]=this.getDataName(r[0]),this.strReplace([":other",":value"],r,e)}},{key:"replaceRequiredUnless",value:function(e,t,a,r){var i=this.getDataName(r.shift());return this.strReplace([":other",":values"],[i,r.join(", ")],e)}},{key:"replaceSame",value:function(e,t,a,r){return this.strReplace(":other",t,e)}},{key:"replaceSize",value:function(e,t,a,r){return this.strReplace(":size",r[0],e)}},{key:"replaceBefore",value:function(e,t,a,r){return isNaN(Date.parse(r[0]))?this.strReplace(":date",this.getDataName(r[0]),e):this.strReplace(":date",r[0],e)}},{key:"replaceAfter",value:function(e,t,a,r){return this.replaceBefore(e,t,a,r)}},{key:"dependsOnOtherFields",value:function(e){return this.dependentRules.indexOf(e)}}],[{key:"make",value:function(e,t){return new i(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],3<arguments.length?arguments[3]:void 0)}}]),i}();module.exports=Validator;
