parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Emnz":[function(require,module,exports) {
const e=document.querySelector(".products__item.accent--pink"),t=document.querySelector(".products__item.accent--pink .products__btn");e.setAttribute("style","transition: transform 500ms ease;"),console.log(e),console.log(t);const c=document.querySelector(".products__item.accent--caramel"),o=document.querySelector(".products__item.accent--caramel .products__btn");c.setAttribute("style","transition: transform 350ms ease;"),console.log(c),console.log(o);const s=document.querySelector(".products__item.accent--green"),n=document.querySelector(".products__item.accent--green .products__btn");s.setAttribute("style","transition: transform 350ms ease;"),console.log(s),console.log(n),t.addEventListener("click",()=>{e.classList.toggle("products__item-pink")}),o.addEventListener("click",()=>{c.classList.toggle("products__item-caramel")}),s.addEventListener("click",()=>{s.classList.toggle("products__item-green")});
},{}]},{},["Emnz"], null)
//# sourceMappingURL=/team-project-1/products__button-animation.25c703ab.js.map