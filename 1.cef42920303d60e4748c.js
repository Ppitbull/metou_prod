(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3Pt+":function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return wt}),n.d(e,"c",function(){return ot}),n.d(e,"d",function(){return Vt}),n.d(e,"e",function(){return at}),n.d(e,"f",function(){return Ct}),n.d(e,"g",function(){return At}),n.d(e,"h",function(){return g}),n.d(e,"i",function(){return l}),n.d(e,"j",function(){return T}),n.d(e,"k",function(){return U}),n.d(e,"l",function(){return N}),n.d(e,"m",function(){return ct}),n.d(e,"n",function(){return gt}),n.d(e,"o",function(){return Ot}),n.d(e,"p",function(){return m}),n.d(e,"q",function(){return _t});var r=n("fXoL"),i=n("ofXK"),s=n("Cfvw"),o=n("cp0P"),a=n("lJxs");const l=new r.r("NgValueAccessor"),u={provide:l,useExisting:Object(r.U)(()=>c),multi:!0},h=new r.r("CompositionEventMode");let c=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.t)()?Object(i.t)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.F),r.Mb(r.l),r.Mb(h,8))},t.\u0275dir=r.Hb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&r.Yb("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[r.Ab([u])]}),t})();function d(t){return null==t||0===t.length}function p(t){return null!=t&&"number"==typeof t.length}const g=new r.r("NgValidators"),_=new r.r("NgAsyncValidators"),f=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class m{static min(t){return function(t){return e=>{if(d(e.value)||d(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(t)}static max(t){return function(t){return e=>{if(d(e.value)||d(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(t)}static required(t){return function(t){return d(t.value)?{required:!0}:null}(t)}static requiredTrue(t){return function(t){return!0===t.value?null:{required:!0}}(t)}static email(t){return function(t){return d(t.value)||f.test(t.value)?null:{email:!0}}(t)}static minLength(t){return function(t){return e=>d(e.value)||!p(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static maxLength(t){return function(t){return e=>p(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static pattern(t){return function(t){if(!t)return y;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(d(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}(t)}static nullValidator(t){return null}static compose(t){return O(t)}static composeAsync(t){return E(t)}}function y(t){return null}function C(t){return null!=t}function b(t){const e=Object(r.sb)(t)?Object(s.a)(t):t;return Object(r.rb)(e),e}function V(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function v(t,e){return e.map(e=>e(t))}function A(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function O(t){if(!t)return null;const e=t.filter(C);return 0==e.length?null:function(t){return V(v(t,e))}}function w(t){return null!=t?O(A(t)):null}function E(t){if(!t)return null;const e=t.filter(C);return 0==e.length?null:function(t){const n=v(t,e).map(b);return Object(o.a)(n).pipe(Object(a.a)(V))}}function S(t){return null!=t?E(A(t)):null}function D(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function k(t){return t._rawValidators}function M(t){return t._rawAsyncValidators}let F=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=w(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=S(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Hb({type:t}),t})(),P=(()=>{class t extends F{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return j(e||t)},t.\u0275dir=r.Hb({type:t,features:[r.yb]}),t})();const j=r.Tb(P);class T extends F{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class x{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let U=(()=>{class t extends x{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(T,2))},t.\u0275dir=r.Hb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Eb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.yb]}),t})(),N=(()=>{class t extends x{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(P,10))},t.\u0275dir=r.Hb({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Eb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.yb]}),t})();function I(t,e){return[...e.path,t]}function H(t,e){L(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&$(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&$(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function R(t,e,n=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),z(t,e,!0),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function G(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function L(t,e,n){const r=k(t);null!==e.validator?t.setValidators(D(r,e.validator)):"function"==typeof r&&t.setValidators([r]);const i=M(t);if(null!==e.asyncValidator?t.setAsyncValidators(D(i,e.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]),n){const n=()=>t.updateValueAndValidity();G(e._rawValidators,n),G(e._rawAsyncValidators,n)}}function z(t,e,n){let r=!1;if(null!==t){if(null!==e.validator){const n=k(t);if(Array.isArray(n)&&n.length>0){const i=n.filter(t=>t!==e.validator);i.length!==n.length&&(r=!0,t.setValidators(i))}}if(null!==e.asyncValidator){const n=M(t);if(Array.isArray(n)&&n.length>0){const i=n.filter(t=>t!==e.asyncValidator);i.length!==n.length&&(r=!0,t.setAsyncValidators(i))}}}if(n){const t=()=>{};G(e._rawValidators,t),G(e._rawAsyncValidators,t)}return r}function $(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function J(t,e){L(t,e,!1)}function q(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}function B(t,e){t._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function Z(t,e){if(!e)return null;let n,r,i;return Array.isArray(e),e.forEach(t=>{t.constructor===c?n=t:Object.getPrototypeOf(t.constructor)===class{}?r=t:i=t}),i||r||n||null}function K(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const W="VALID",X="INVALID",Y="PENDING",Q="DISABLED";function tt(t){return(it(t)?t.validators:t)||null}function et(t){return Array.isArray(t)?w(t):t||null}function nt(t,e){return(it(e)?e.asyncValidators:t)||null}function rt(t){return Array.isArray(t)?S(t):t||null}function it(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class st{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=et(this._rawValidators),this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===W}get invalid(){return this.status===X}get pending(){return this.status==Y}get disabled(){return this.status===Q}get enabled(){return this.status!==Q}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=et(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=rt(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Y,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Q,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=W,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==W&&this.status!==Y||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Q:W}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Y,this._hasOwnPendingAsyncValidator=!0;const e=b(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof at?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof lt&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.n,this.statusChanges=new r.n}_calculateStatus(){return this._allControlsDisabled()?Q:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Y)?Y:this._anyControlsHaveStatus(X)?X:W}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){it(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ot extends st{constructor(t=null,e,n){super(tt(e),nt(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){K(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){K(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class at extends st{constructor(t,e,n){super(tt(e),nt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof ot?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class lt extends st{constructor(t,e,n){super(tt(e),nt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof ot?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const ut={provide:P,useExisting:Object(r.U)(()=>ct)},ht=(()=>Promise.resolve(null))();let ct=(()=>{class t extends P{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.n,this.form=new at({},w(t),S(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ht.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),H(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ht.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),K(this._directives,t)})}addFormGroup(t){ht.then(()=>{const e=this._findContainer(t.path),n=new at({});J(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ht.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){ht.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,B(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(g,10),r.Mb(_,10))},t.\u0275dir=r.Hb({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,e){1&t&&r.Yb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r.Ab([ut]),r.yb]}),t})();const dt={provide:T,useExisting:Object(r.U)(()=>gt)},pt=(()=>Promise.resolve(null))();let gt=(()=>{class t extends T{constructor(t,e,n,i){super(),this.control=new ot,this._registered=!1,this.update=new r.n,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Z(0,i)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),q(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?I(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){H(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){pt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;pt.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(P,9),r.Mb(g,10),r.Mb(_,10),r.Mb(l,10))},t.\u0275dir=r.Hb({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r.Ab([dt]),r.yb,r.zb]}),t})(),_t=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Hb({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),ft=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({}),t})();const mt=new r.r("NgModelWithFormControlWarning"),yt={provide:P,useExisting:Object(r.U)(()=>Ct)};let Ct=(()=>{class t extends P{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this,!1),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return H(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){R(t.control||null,t,!1),K(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,B(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(R(e||null,t),n instanceof ot&&(H(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);J(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);e&&function(t,e){return z(t,e,!1)}(e,t)&&e.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){L(this.form,this,!1),this._oldForm&&z(this._oldForm,this,!1)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(g,10),r.Mb(_,10))},t.\u0275dir=r.Hb({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&r.Yb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r.Ab([yt]),r.yb,r.zb]}),t})();const bt={provide:T,useExisting:Object(r.U)(()=>Vt)};let Vt=(()=>{class t extends T{constructor(t,e,n,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new r.n,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Z(0,i)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),q(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return I(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(P,13),r.Mb(g,10),r.Mb(_,10),r.Mb(l,10),r.Mb(mt,8))},t.\u0275dir=r.Hb({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r.Ab([bt]),r.yb,r.zb]}),t._ngModelWarningSentOnce=!1,t})(),vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[ft]]}),t})(),At=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[vt]}),t})(),Ot=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:mt,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[vt]}),t})(),wt=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r,i=null,s=null;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(i=null!=e.validators?e.validators:null,s=null!=e.asyncValidators?e.asyncValidators:null,r=null!=e.updateOn?e.updateOn:void 0):(i=null!=e.validator?e.validator:null,s=null!=e.asyncValidator?e.asyncValidator:null)),new at(n,{asyncValidators:s,updateOn:r,validators:i})}control(t,e,n){return new ot(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new lt(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof ot||t instanceof at||t instanceof lt?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(r.Ib)({factory:function(){return new t},token:t,providedIn:Ot}),t})()},"Tx//":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("ofXK"),i=n("tyNb"),s=n("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[r.b,i.e]]}),t})()},cp0P:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("HDdC"),i=n("DH7j"),s=n("lJxs"),o=n("XoHu"),a=n("Cfvw");function l(...t){if(1===t.length){const e=t[0];if(Object(i.a)(e))return u(e,null);if(Object(o.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return u(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return u(t=1===t.length&&Object(i.a)(t[0])?t[0]:t,null).pipe(Object(s.a)(t=>e(...t)))}return u(t,null)}function u(t,e){return new r.a(n=>{const r=t.length;if(0===r)return void n.complete();const i=new Array(r);let s=0,o=0;for(let l=0;l<r;l++){const u=Object(a.a)(t[l]);let h=!1;n.add(u.subscribe({next:t=>{h||(h=!0,o++),i[l]=t},error:t=>n.error(t),complete:()=>{s++,s!==r&&h||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}}}]);