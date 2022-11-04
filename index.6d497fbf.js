!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,a=r("bpxeT"),l=r("2TvXO"),s=r("3SEMc"),u=r("iU1Pc"),c=r("hVYKj"),d=r("dZPjZ"),m=r("kvC6y"),f={logInBtn:document.getElementById("logIn"),logInForm:document.getElementById("logInForm"),signUpForm:document.getElementById("signUpForm"),emailInput:document.querySelector("#email"),passwordInput:document.querySelector("#password"),modal:document.querySelector(".auth-modal"),close:document.getElementById("auth-close"),logOutBtn:document.getElementById("logOutButton"),inputFile:document.getElementById("file"),removeFileBtn:document.getElementById("file-remove-button"),bodyEl:document.querySelector("body"),userAva:document.querySelector("#userAvatar")},v=/(?=.*?[A-Z])(?=.*?[a-z]).{6,}/,p=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,g=function(e){e.target==f.modal&&F()},h=function(e){"Escape"===e.key&&F()},y=function(){(0,d.onClickBtnHome)(),I()},w=function(){F()},L=function(){f.inputFile.style.background="unset",f.removeFileBtn.classList.toggle("hide"),f.inputFile.value=null},E=function(e){e.forEach((function(e){var t=e.el,n=e.message,o=t.closest(".form-control");o.querySelector("small").innerText=n,o.className="form-control error"}))},b=function(){document.querySelectorAll(".form-control").forEach((function(e){e.classList.contains("error")&&(e.querySelector("small").innerText="",e.classList.remove("error"))}))};function F(){var e,t;clearTimeout(i),f.bodyEl.className="";var n=document.querySelectorAll(".auth-form");null===(e=f.logInForm)||void 0===e||e.reset(),null===(t=f.signUpForm)||void 0===t||t.reset(),function(){var e,t,n;window.removeEventListener("click",g),window.removeEventListener("keyup",h),f.close.removeEventListener("click",w),null===(e=f.logInForm)||void 0===e||e.removeEventListener("submit",U),null===(t=f.signUpForm)||void 0===t||t.removeEventListener("submit",k),null===(n=f.removeFileBtn)||void 0===n||n.removeEventListener("click",L)}(),n.forEach((function(e){e.classList.contains("hide")||e.classList.add("hide")}))}var k=function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.password,r=t.username,a=t.confirmPassword,l=t.file,s=l.value?window.URL.createObjectURL(l.files[0]):null,u=n.value.trim(),c=r.value.trim(),d=o.value.trim(),f=a.value.trim(),g=p.test(u),h=[];c?(c.length<3||c.length>15)&&h.push({el:r,message:"name should be at least 3 symbols and not more than 15 symbols"}):h.push({el:r,message:"name cannot be empty"}),u?g||h.push({el:n,message:"fill correct email"}):h.push({el:n,message:"email cannot be empty"});var y=v.test(d);d?y?d!==f&&(h.push({el:o,message:"Your password and confirmation password do not match"}),h.push({el:a,message:"Your password and confirmation password do not match"})):h.push({el:o,message:"should contain at least one lower and one upper case and be 6 or more"}):h.push({el:o,message:"password cannot be empty"}),E(h),h.length?i=setTimeout((function(){b()}),5e3):((0,m.showLoader)(),function(e){B.apply(this,arguments)}({email:u,password:d,name:c,fileUrl:s}))},U=function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.password,r=n.value.trim(),i=o.value.trim();return r||E(n),i||E(o),i.length<6&&E(o),I(r,i)};function B(){return B=e(a)(e(l).mark((function t(n){var o,r,i,d;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.email,r=n.password,i=n.name,d=n.fileUrl,t.next=3,(0,s.createUserWithEmailAndPassword)(c.default,o,r).then(function(){var t=e(a)(e(l).mark((function t(n){var o,r,a,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.user,r={displayName:i},d&&(r.photoURL=d),!o){e.next=6;break}return e.next=6,(0,s.updateProfile)(o,r).catch((function(e){u.Notify.warning("Name wasn't saved")}));case 6:a=o.displayName,o.photoURL,(c=document.querySelector("#userContainer"))&&(c.innerText=a);case 10:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){(0,m.hideLoader)();e.code;var t=e.message;u.Notify.failure(t)}));case 3:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function I(e,t){c.default.currentUser?(x(),c.default.signOut()):((0,m.showLoader)(),(0,s.signInWithEmailAndPassword)(c.default,e,t).then((function(){(0,m.hideLoader)()})).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?u.Notify.failure("Wrong email or password!"):"auth/user-not-found"===t?u.Notify.failure("User doesn't exist"):u.Notify.failure(n),(0,m.hideLoader)()})))}function x(){document.querySelectorAll(".private-route").forEach((function(e){return e.classList.toggle("hide")}))}function q(){if(f.inputFile.value){var e=window.URL.createObjectURL(f.inputFile.files[0]);f.inputFile.style.background="url(".concat(e,") no-repeat 100px center / 30px calc(100% - 4px)"),f.removeFileBtn.classList.toggle("hide"),f.removeFileBtn.addEventListener("click",L)}else f.removeFileBtn.classList.toggle("hide"),f.inputFile.style.background="unset",f.removeFileBtn.removeEventListener("click",L)}c.default.onAuthStateChanged((function(e){if(e){if(x(),f.logOutBtn.addEventListener("click",y),e.displayName)document.querySelector("#userContainer");e.uid,e.providerData;(0,m.hideLoader)(),F()}else{var t;null===(t=f.logOutBtn)||void 0===t||t.removeEventListener("click",y),(0,m.hideLoader)()}})),document.querySelectorAll(".auth__button").forEach((function(e){e.addEventListener("click",(function(e){if("show-log-in-form"===e.target.getAttribute("auth")){if(c.default.currentUser)return x(),c.default.signOut();f.bodyEl.classList.add("overflow-hidden"),f.modal.classList.toggle("hide"),f.logInForm.classList.remove("hide"),window.addEventListener("click",g),window.addEventListener("keyup",h),f.close.addEventListener("click",w),f.emailInput.focus(),f.logInForm.addEventListener("submit",U)}else f.bodyEl.classList.add("overflow-hidden"),f.modal.classList.toggle("hide"),f.signUpForm.closest(".auth-form").classList.remove("hide"),f.inputFile.addEventListener("change",q),window.addEventListener("click",g),window.addEventListener("keyup",h),f.close.addEventListener("click",w),f.signUpForm.addEventListener("submit",k)}))}))}();
//# sourceMappingURL=index.6d497fbf.js.map