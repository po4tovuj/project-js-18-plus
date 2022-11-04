!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,l=r("bpxeT"),a=r("2TvXO"),s=r("3SEMc"),u=r("iU1Pc"),c=r("hVYKj"),d=r("dZPjZ"),m=r("kvC6y"),f={logInBtn:document.getElementById("logIn"),logInForm:document.getElementById("logInForm"),signUpForm:document.getElementById("signUpForm"),emailInput:document.querySelector("#email"),passwordInput:document.querySelector("#password"),modal:document.querySelector(".auth-modal"),close:document.getElementById("auth-close"),logOutBtn:document.getElementById("logOutButton"),inputFile:document.getElementById("file"),removeFileBtn:document.getElementById("file-remove-button"),bodyEl:document.querySelector("body")},v=/(?=.*?[A-Z])(?=.*?[a-z]).{6,}/,p=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,g=function(e){e.target==f.modal&&b()},h=function(e){"Escape"===e.key&&b()},y=function(){console.log("click, logOUT!!!"),(0,d.onClickBtnHome)(),I()},w=function(){b()},L=function(){f.inputFile.style.background="unset",f.removeFileBtn.classList.toggle("hide"),f.inputFile.value=null},E=function(e){e.forEach((function(e){var t=e.el,n=e.message,o=t.closest(".form-control");o.querySelector("small").innerText=n,o.className="form-control error"}))},F=function(){document.querySelectorAll(".form-control").forEach((function(e){e.classList.contains("error")&&(e.querySelector("small").innerText="",e.classList.remove("error"))}))};function b(){var e,t;clearTimeout(i),f.bodyEl.className="";var n=document.querySelectorAll(".auth-form");null===(e=f.logInForm)||void 0===e||e.reset(),null===(t=f.signUpForm)||void 0===t||t.reset(),function(){var e,t,n;window.removeEventListener("click",g),window.removeEventListener("keyup",h),f.close.removeEventListener("click",w),null===(e=f.logInForm)||void 0===e||e.removeEventListener("submit",B),null===(t=f.signUpForm)||void 0===t||t.removeEventListener("submit",k),null===(n=f.removeFileBtn)||void 0===n||n.removeEventListener("click",L)}(),n.forEach((function(e){e.classList.contains("hide")||e.classList.add("hide")}))}var k=function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.password,r=t.username,l=t.confirmPassword,a=(t.file,n.value.trim()),s=r.value.trim(),u=o.value.trim(),c=l.value.trim(),d=p.test(a),f=[];s?(s.length<3||s.lenght>15)&&f.push({el:r,message:"name should be at least 3 symbols and not more than 15 symbols"}):f.push({el:r,message:"name cannot be empty"}),a?d||f.push({el:n,message:"fill correct email"}):f.push({el:n,message:"email cannot be empty"});var g=v.test(u);u?g?u!==c&&(f.push({el:o,message:"Your password and confirmation password do not match"}),f.push({el:l,message:"Your password and confirmation password do not match"})):f.push({el:o,message:"should contain at least one lower and one upper case and be 6 or more"}):f.push({el:o,message:"password cannot be empty"}),E(f),f.length?i=setTimeout((function(){F()}),5e3):((0,m.showLoader)(),function(e){x.apply(this,arguments)}({email:a,password:u,name:s}))},B=function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.password,r=n.value.trim(),i=o.value.trim();return r||E(n),i||E(o),i.length<6&&E(o),I(r,i)};function x(){return x=e(l)(e(a).mark((function t(n){var o,r,i;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.email,r=n.password,i=n.name,t.next=3,(0,s.createUserWithEmailAndPassword)(c.default,o,r).then(function(){var t=e(l)(e(a).mark((function t(n){var o,r,l;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=n.user)){e.next=4;break}return e.next=4,(0,s.updateProfile)(o,{displayName:i}).then((function(){})).catch((function(e){u.Notify.warning("Name wasn't saved")}));case 4:r=o.displayName,(l=document.querySelector("#userContainer"))&&(l.innerText=r);case 7:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){(0,m.hideLoader)();e.code;var t=e.message;u.Notify.failure(t)}));case 3:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function I(e,t){console.log("come to toggle: "),c.default.currentUser?(U(),c.default.signOut()):((0,m.showLoader)(),(0,s.signInWithEmailAndPassword)(c.default,e,t).then((function(){(0,m.hideLoader)()})).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?u.Notify.failure("Wrong email or password!"):"auth/user-not-found"===t?u.Notify.failure("User doesn't exist"):u.Notify.failure(n),(0,m.hideLoader)()})))}function U(){document.querySelectorAll(".private-route").forEach((function(e){return e.classList.toggle("hide")}))}function q(){if(f.inputFile.value){console.log("  refs.removeFileBtn: ",f.removeFileBtn);var e=window.URL.createObjectURL(f.inputFile.files[0]);f.inputFile.style.background="url(".concat(e,") no-repeat 100px center / 30px calc(100% - 4px)"),f.removeFileBtn.classList.toggle("hide"),f.removeFileBtn.addEventListener("click",L)}else f.removeFileBtn.classList.toggle("hide"),f.inputFile.style.background="unset",f.removeFileBtn.removeEventListener("click",L)}c.default.onAuthStateChanged((function(e){if(e){U(),f.logOutBtn.addEventListener("click",y);var t=e.displayName;if(t){var n=document.querySelector("#userContainer");n&&(n.innerText=t)}e.uid,e.providerData;(0,m.hideLoader)(),b()}else{var o;null===(o=f.logOutBtn)||void 0===o||o.removeEventListener("click",y),(0,m.hideLoader)()}})),document.querySelectorAll(".auth__button").forEach((function(e){e.addEventListener("click",(function(e){if("show-log-in-form"===e.target.getAttribute("auth")){if(c.default.currentUser)return U(),c.default.signOut();f.bodyEl.classList.add("overflow-hidden"),f.modal.classList.toggle("hide"),f.logInForm.classList.remove("hide"),window.addEventListener("click",g),window.addEventListener("keyup",h),f.close.addEventListener("click",w),f.emailInput.focus(),f.logInForm.addEventListener("submit",B)}else f.bodyEl.classList.add("overflow-hidden"),f.modal.classList.toggle("hide"),f.signUpForm.closest(".auth-form").classList.remove("hide"),f.inputFile.addEventListener("change",q),window.addEventListener("click",g),window.addEventListener("keyup",h),f.close.addEventListener("click",w),f.signUpForm.addEventListener("submit",k)}))}))}();
//# sourceMappingURL=index.01785add.js.map