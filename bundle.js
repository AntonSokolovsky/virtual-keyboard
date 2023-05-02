(()=>{"use strict";const e=[["Esc","`","1","2","3","4","5","6","7","8","9","0","-","=","&#10229"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del"],["Caps","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","&#9650","Shift"],["Fn","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9664","&#9660","&#9654","&#9776"]],s=[["Esc","~","!","@","#","$","%","^","&","*","(",")","_","+","&#10229"],["Tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","Del"],["Caps","A","S","D","F","G","H","J","K","L",":",'"',"Enter"],["Shift","Z","X","C","V","B","N","M","<",">","?","&#9650","Shift"],["Fn","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9664","&#9660","&#9654","&#9776"]],t=[["Esc","ё","1","2","3","4","5","6","7","8","9","0","-","=","&#10229"],["Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del"],["Caps","ф","ы","в","а","п","р","о","л","д","ж","э","Enter"],["Shift","я","ч","с","м","и","т","ь","б","ю",".","&#9650","Shift"],["Fn","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9664","&#9660","&#9654","&#9776"]],a=[["Esc","Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","&#10229"],["Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","Del"],["Caps","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter"],["Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","&#9650","Shift"],["Fn","Ctrl","Win","Alt"," ","Alt","Ctrl","&#9664","&#9660","&#9654","&#9776"]];function r(e,t){"q"===e[16].innerHTML?e.forEach(((e,t)=>{e.innerHTML=s.flat()[t]})):"й"===e[16].innerHTML&&e.forEach(((e,s)=>{e.innerHTML=a.flat()[s]})),t.forEach((e=>e.classList.add("pressed")))}function n(s,a){"Q"===s[16].innerHTML?s.forEach(((s,t)=>{s.innerHTML=e.flat()[t]})):"Й"===s[16].innerHTML&&s.forEach(((e,s)=>{e.innerHTML=t.flat()[s]})),a.forEach((e=>e.classList.remove("pressed")))}function c(r){"Q"===r[16].innerHTML?r.forEach(((e,s)=>{e.innerHTML=a.flat()[s]})):"q"===r[16].innerHTML?r.forEach(((e,s)=>{e.innerHTML=t.flat()[s]})):"Й"===r[16].innerHTML?r.forEach(((e,t)=>{e.innerHTML=s.flat()[t]})):"й"===r[16].innerHTML&&r.forEach(((s,t)=>{s.innerHTML=e.flat()[t]}))}function l(l){l.preventDefault();let i=document.querySelector(".input"),o=l.currentTarget.querySelector(".backspace"),d=l.currentTarget.querySelector(".tab"),L=l.currentTarget.querySelector(".caps"),p=l.key,u=l.currentTarget.querySelector(".space"),T=l.currentTarget.querySelector(".arrow-up"),y=l.currentTarget.querySelector(".arrow-down"),f=l.currentTarget.querySelector(".arrow-left"),w=l.currentTarget.querySelector(".arrow-right"),h=(l.currentTarget.querySelectorAll(".arrow"),l.currentTarget.querySelectorAll(".shift")),v=l.currentTarget.querySelectorAll(".key"),M=l.currentTarget.querySelectorAll(".withTwoValue"),H=document.querySelectorAll(".ctrl"),g=document.querySelectorAll(".alt"),E=document.querySelector(".enter"),m=[];M.forEach((e=>m.push(e.innerHTML))),console.log(("Q"===v[16].innerHTML||l.target.classList.contains("shift"))&&!l.target.classList.contains("caps")&&!v[30].classList.contains("pressed")&&"keyup"!==l.type&&l.repeat),console.log(l.type,l.repeat),!l.target.classList.contains("shift")||"q"!==v[16].innerHTML&&"й"!==v[16].innerHTML||v[30].classList.contains("pressed")?"Q"!==v[16].innerHTML&&"Й"!==v[16].innerHTML&&!l.target.classList.contains("shift")||l.target.classList.contains("caps")||!l.target.classList.contains("key")||v[30].classList.contains("pressed")||"click"!==l.type||"true"===l.repeat?l.target.classList.contains("caps")&&!l.target.classList.contains("pressed")?(h.forEach((e=>e.classList.remove("pressed"))),function(e,t){"q"===e[16].innerHTML?e.forEach(((e,t)=>{e.innerHTML=s.flat()[t]})):"й"===e[16].innerHTML&&e.forEach(((e,s)=>{e.innerHTML=a.flat()[s]})),t.classList.add("pressed")}(v,L)):"keydown"!==l.type||["Escape","Tab","CapsLock","Shift","Control","Meta","Alt","Enter","Backspace","Delete"].includes(l.key)?l.target.classList.contains("caps")&&l.target.classList.contains("pressed")?function(s,a){"Q"===s[16].innerHTML?s.forEach(((s,t)=>{s.innerHTML=e.flat()[t]})):"Й"===s[16].innerHTML&&s.forEach(((e,s)=>{e.innerHTML=t.flat()[s]})),a.classList.remove("pressed")}(v,L):"Shift"!==p||"q"!==v[16].innerHTML&&"й"!==v[16].innerHTML||v[30].classList.contains("pressed")||"keydown"!==l.type?"Shift"===p&&"keyup"===l.type?n(v,h):l.target.classList.contains("withTwoValue")||l.target.classList.contains("space")?i.value=i.value+l.target.innerHTML:l.target.classList.contains("tab")?i.value=i.value+u.innerHTML.repeat(3):l.target.classList.contains("backspace")?i.value=i.value.slice(0,-1):"Backspace"===p&&"keydown"===l.type?(i.value=i.value.slice(0,-1),o.classList.add("pressed")):"Backspace"===p&&"keyup"===l.type?o.classList.remove("pressed"):m.includes(p)&&"keydown"===l.type?(i.value=i.value+p,function(e,s,t){t.map(((t,a)=>{t===s&&e[a].classList.add("pressed")}))}(M,p,m)):m.includes(p)&&"keyup"===l.type?function(e,s,t){t.map(((t,a)=>{t===s&&e[a].classList.remove("pressed")}))}(M,p,m):l.target.classList.contains("arrow")?i.value=i.value+l.target.innerHTML:"ArrowUp"!==p&&"ArrowDown"!==p&&"ArrowLeft"!==p&&"ArrowRight"!==p||"keydown"!==l.type?"ArrowUp"!==p&&"ArrowDown"!==p&&"ArrowLeft"!==p&&"ArrowRight"!==p||"keyup"!==l.type?"Space"===l.code&&"keydown"===l.type?(i.value=i.value+" ",u.classList.add("pressed")):"Space"===l.code&&"keyup"===l.type?u.classList.remove("pressed"):"Tab"===p&&"keydown"===l.type?(i.value=i.value+u.innerHTML.repeat(3),d.classList.add("pressed")):"Tab"===p&&"keyup"===l.type?d.classList.remove("pressed"):(l.target.classList.contains("ctrl")||"Control"===p&&"keydown"===l.type)&&!l.target.classList.contains("pressed")?H.forEach((e=>e.classList.add("pressed"))):(l.target.classList.contains("alt")||"Alt"===p&&"keydown"===l.type)&&!l.target.classList.contains("pressed")?g.forEach((e=>e.classList.add("pressed"))):(l.target.classList.contains("ctrl")||"Control"===p&&"keyup"===l.type)&&!document.querySelector(".alt").classList.contains("pressed")?H.forEach((e=>e.classList.remove("pressed"))):(l.target.classList.contains("alt")||"Alt"===p&&"keyup"===l.type)&&!document.querySelector(".ctrl").classList.contains("pressed")?g.forEach((e=>e.classList.remove("pressed"))):(l.target.classList.contains("ctrl")||"Control"===p&&"keyup"===l.type)&&document.querySelector(".alt").classList.contains("pressed")?(H.forEach((e=>e.classList.remove("pressed"))),g.forEach((e=>e.classList.remove("pressed"))),c()):(l.target.classList.contains("alt")||"Alt"===p&&"keyup"===l.type)&&document.querySelector(".ctrl").classList.contains("pressed")?(H.forEach((e=>e.classList.remove("pressed"))),g.forEach((e=>e.classList.remove("pressed"))),c(v)):l.target.classList.contains("enter")?i.value=i.value+"\n":"Enter"===p&&"keydown"===l.type?(i.value=i.value+"\n",E.classList.add("pressed")):"Enter"===p&&"keyup"===l.type&&E.classList.remove("pressed"):"ArrowUp"===p?T.classList.remove("pressed"):"ArrowDown"===p?y.classList.remove("pressed"):"ArrowLeft"===p?f.classList.remove("pressed"):"ArrowRight"===p&&w.classList.remove("pressed"):"ArrowUp"===p?(i.value=i.value+"▲",T.classList.add("pressed")):"ArrowDown"===p?(i.value=i.value+"▼",y.classList.add("pressed")):"ArrowLeft"===p?(i.value=i.value+"◀",f.classList.add("pressed")):"ArrowRight"===p&&(i.value=i.value+"▶",w.classList.add("pressed")):r(v,h):i.value=i.value+l.key:(console.log("hello, Peter"),"Shift"!==l.target.innerHTML&&(i.value=i.value+l.target.innerHTML),n(v,h)):r(v,h)}!function(){const e=document.querySelector("body"),s=document.createElement("div");e.append(s),s.classList.add("container");const t=document.createElement("textarea");s.append(t),t.classList.add("input"),t.setAttribute("row","5"),t.setAttribute("cols","50"),t.setAttribute("placeholder","The keyboard was made in Windows. To change language use any ctrl + alt");const a=document.createElement("div");s.append(a),a.classList.add("keyboard")}(),e.map(((e,s)=>function(e,s){const t=document.createElement("div");document.querySelector(".keyboard").append(t),t.classList.add("row"),t.classList.add(`row-${s}`),e.forEach((e=>{const s=document.createElement("div");t.append(s),s.classList.add("key"),s.innerHTML=`${e}`,function(e){"⟵"===e.innerHTML?e.classList.add("backspace"):"Esc"===e.innerHTML?e.classList.add("esc"):"Tab"===e.innerHTML?e.classList.add("tab"):"Del"===e.innerHTML?e.classList.add("del"):"Caps"===e.innerHTML?e.classList.add("caps"):"Enter"===e.innerHTML?e.classList.add("enter"):"Shift"===e.innerHTML?e.classList.add("shift"):"Fn"===e.innerHTML?e.classList.add("fn"):"Ctrl"===e.innerHTML?e.classList.add("ctrl"):"Win"===e.innerHTML?e.classList.add("win"):"Alt"===e.innerHTML?e.classList.add("alt"):"&#9776"===e.innerHTML?e.classList.add("menu"):"▲"===e.innerHTML?(e.classList.add("arrow-up"),e.classList.add("arrow"),e.classList.add("withTwoValue")):"◀"===e.innerHTML?(e.classList.add("arrow-left"),e.classList.add("arrow"),e.classList.add("withTwoValue")):"▼"===e.innerHTML?(e.classList.add("arrow-down"),e.classList.add("arrow"),e.classList.add("withTwoValue")):"▶"===e.innerHTML?(e.classList.add("arrow-right"),e.classList.add("arrow"),e.classList.add("withTwoValue")):" "===e.innerHTML?e.classList.add("space"):e.classList.add("withTwoValue")}(s)}))}(e,s))),document.querySelector(".keyboard").addEventListener("click",l),document.addEventListener("keydown",l),document.addEventListener("keyup",l)})();