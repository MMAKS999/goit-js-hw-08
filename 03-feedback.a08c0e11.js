!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o,n,l,i=a("1WSnx"),f=document.querySelector(".feedback-form");f.addEventListener("input",(0,i.throttle)((function(e){e.preventDefault();var t={email:e.currentTarget.email.value,message:e.currentTarget.message.value};console.log(t),localStorage.setItem("feedback-form-state",JSON.stringify(t))})),500),o=f.querySelector('textarea[name="message"]'),n=f.querySelector('input[name="email"]'),l=JSON.parse(localStorage.getItem("feedback-form-state"))||{},n&&(n.value=l.email||""),o&&(o.value=l.message||""),f.addEventListener("submit",(function(e){e.preventDefault(),JSON.parse(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),f.reset()}))}();
//# sourceMappingURL=03-feedback.a08c0e11.js.map