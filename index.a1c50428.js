var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var l=n("amyG6"),r=n("eWCmQ"),s=n("f1Qqb"),i=n("dqy6Z"),a=n("gjiCh");const d={logInBtn:document.getElementById("logIn"),logInForm:document.getElementById("logInForm"),signUpForm:document.getElementById("signUpForm"),emailInput:document.querySelector("#email"),passwordInput:document.querySelector("#password"),modal:document.querySelector(".auth-modal"),close:document.getElementById("auth-close"),logOutBtn:document.getElementById("logOutButton"),inputFile:document.getElementById("file"),removeFileBtn:document.getElementById("file-remove-button"),bodyEl:document.querySelector("body")},c=/(?=.*?[A-Z])(?=.*?[a-z]).{6,}/,u=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,m=e=>{e.target==d.modal&&w()},g=e=>{"Escape"===e.key&&w()},v=()=>{console.log("click, logOUT!!!"),(0,i.onClickBtnHome)(),b()},f=()=>{w()},p=()=>{d.inputFile.style.background="unset",d.removeFileBtn.classList.toggle("hide"),d.inputFile.value=null},h=e=>{e.forEach((({el:e,message:t})=>{const o=e.closest(".form-control");o.querySelector("small").innerText=t,o.className="form-control error"}))},y=()=>{document.querySelectorAll(".form-control").forEach((e=>{e.classList.contains("error")&&(e.querySelector("small").innerText="",e.classList.remove("error"))}))};function w(){var e,t;clearTimeout(L),d.bodyEl.className="";const o=document.querySelectorAll(".auth-form");null===(e=d.logInForm)||void 0===e||e.reset(),null===(t=d.signUpForm)||void 0===t||t.reset(),(()=>{var e,t,o;window.removeEventListener("click",m),window.removeEventListener("keyup",g),d.close.removeEventListener("click",f),null===(e=d.logInForm)||void 0===e||e.removeEventListener("submit",F),null===(t=d.signUpForm)||void 0===t||t.removeEventListener("submit",E),null===(o=d.removeFileBtn)||void 0===o||o.removeEventListener("click",p)})(),o.forEach((e=>{e.classList.contains("hide")||e.classList.add("hide")}))}let L;const E=e=>{e.preventDefault();const{elements:{email:t,password:o,username:n,confirmPassword:i,file:d}}=e.currentTarget,m=t.value.trim(),g=n.value.trim(),v=o.value.trim(),f=i.value.trim(),p=u.test(m);let w=[];g?(g.length<3||g.lenght>15)&&w.push({el:n,message:"name should be at least 3 symbols and not more than 15 symbols"}):w.push({el:n,message:"name cannot be empty"}),m?p||w.push({el:t,message:"fill correct email"}):w.push({el:t,message:"email cannot be empty"});const E=c.test(v);v?E?v!==f&&(w.push({el:o,message:"Your password and confirmation password do not match"}),w.push({el:i,message:"Your password and confirmation password do not match"})):w.push({el:o,message:"should contain at least one lower and one upper case and be 6 or more"}):w.push({el:o,message:"password cannot be empty"}),h(w),w.length?L=setTimeout((()=>{y()}),5e3):((0,a.showLoader)(),async function({email:e,password:t,name:o}){await(0,l.createUserWithEmailAndPassword)(s.default,e,t).then((async e=>{const t=e.user;t&&await(0,l.updateProfile)(t,{displayName:o}).then((()=>{})).catch((e=>{r.Notify.warning("Name wasn't saved")}));var n=t.displayName;const s=document.querySelector("#userContainer");s&&(s.innerText=n)})).catch((e=>{(0,a.hideLoader)();e.code;const t=e.message;r.Notify.failure(t)}))}({email:m,password:v,name:g}))},F=e=>{e.preventDefault();const{elements:{email:t,password:o}}=e.currentTarget,n=t.value.trim(),l=o.value.trim();return n||h(t),l||h(o),l.length<6&&h(o),b(n,l)};function b(e,t){console.log("come to toggle: "),s.default.currentUser?(B(),s.default.signOut()):((0,a.showLoader)(),(0,l.signInWithEmailAndPassword)(s.default,e,t).then((()=>{(0,a.hideLoader)()})).catch((function(e){var t=e.code,o=e.message;"auth/wrong-password"===t?r.Notify.failure("Wrong email or password!"):"auth/user-not-found"===t?r.Notify.failure("User doesn't exist"):r.Notify.failure(o),(0,a.hideLoader)()})))}function B(){document.querySelectorAll(".private-route").forEach((e=>e.classList.toggle("hide")))}function k(){const{value:e}=d.inputFile;if(e){console.log("  refs.removeFileBtn: ",d.removeFileBtn);const e=window.URL.createObjectURL(d.inputFile.files[0]);d.inputFile.style.background=`url(${e}) no-repeat 100px center / 30px calc(100% - 4px)`,d.removeFileBtn.classList.toggle("hide"),d.removeFileBtn.addEventListener("click",p)}else d.removeFileBtn.classList.toggle("hide"),d.inputFile.style.background="unset",d.removeFileBtn.removeEventListener("click",p)}s.default.onAuthStateChanged((function(e){if(e){B(),d.logOutBtn.addEventListener("click",v);let t=e.displayName;if(t){const e=document.querySelector("#userContainer");e&&(e.innerText=t)}e.uid,e.providerData;(0,a.hideLoader)(),w()}else{var t;null===(t=d.logOutBtn)||void 0===t||t.removeEventListener("click",v),(0,a.hideLoader)()}}));document.querySelectorAll(".auth__button").forEach((e=>{e.addEventListener("click",(e=>{if("show-log-in-form"===e.target.getAttribute("auth")){if(s.default.currentUser)return B(),s.default.signOut();d.bodyEl.classList.add("overflow-hidden"),d.modal.classList.toggle("hide"),d.logInForm.classList.remove("hide"),window.addEventListener("click",m),window.addEventListener("keyup",g),d.close.addEventListener("click",f),d.emailInput.focus(),d.logInForm.addEventListener("submit",F)}else d.bodyEl.classList.add("overflow-hidden"),d.modal.classList.toggle("hide"),d.signUpForm.closest(".auth-form").classList.remove("hide"),d.inputFile.addEventListener("change",k),window.addEventListener("click",m),window.addEventListener("keyup",g),d.close.addEventListener("click",f),d.signUpForm.addEventListener("submit",E)}))}));
//# sourceMappingURL=index.a1c50428.js.map