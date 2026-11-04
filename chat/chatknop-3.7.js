/* BDMNL chatknop 3.7 – alleen *.webflow.io; Fonio pas na klik */
(function(){
if(!/\.webflow\.io$/.test(location.hostname)||window.__bdmnlChat)return;window.__bdmnlChat=1;
var ID="8decda88-7a26-44fc-9470-5678fdc9e82c",K="bdmnl_chat_gestart",O="fonio:webchat-widget:open:"+ID,bezig=0,ss=window.sessionStorage,d=document,H=d.documentElement;
var c=d.createElement("style");
c.textContent="#bdmnl-chat-btn{position:fixed;right:16px;bottom:16px;z-index:9991;width:56px;height:56px;border-radius:50%;border:0;padding:0;background:#FE6801;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 20px #0005}#bdmnl-chat-btn:focus-visible{outline:3px solid #fff;outline-offset:3px}#bdmnl-chat-btn svg{width:26px;height:26px}#bdmnl-chat-btn[aria-busy=true] svg{animation:bdmnl-s .9s linear infinite}@keyframes bdmnl-s{to{transform:rotate(360deg)}}#bdmnl-chat-msg{position:fixed;right:16px;bottom:84px;z-index:9992;max-width:260px;background:#fff;color:#1a1a1a;border-left:4px solid #FE6801;border-radius:10px;padding:12px 32px 12px 14px;font:14px/1.4 sans-serif;box-shadow:0 6px 20px #0004}#bdmnl-chat-msg a{color:#c84f00;font-weight:600}#bdmnl-chat-msg button{position:absolute;top:4px;right:6px;border:0;background:none;font-size:18px;cursor:pointer}@media(max-width:479px){#bdmnl-chat-btn{right:12px;bottom:12px}#bdmnl-chat-msg{right:12px;bottom:80px}.bdmnl-co #CookiebotWidget{display:none!important}}.b2-wa{translate:0 -72px}";
d.head.appendChild(c);
var ICO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>',LAD='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9"/></svg>';
var b=d.createElement("button");b.id="bdmnl-chat-btn";b.type="button";b.setAttribute("aria-label","Chat met de digitale assistent van BDMNL");b.innerHTML=ICO;
function get(k){try{return ss.getItem(k)}catch(e){return null}}function set(k,v){try{ss.setItem(k,v)}catch(e){}}
function msg(on){var m=d.getElementById("bdmnl-chat-msg");if(m)m.remove();if(!on)return;m=d.createElement("div");m.id="bdmnl-chat-msg";m.setAttribute("role","status");m.innerHTML='De chat laadt niet. Probeer opnieuw, bel <a href="tel:+31850605627">085 060 56 27</a> of mail <a href="mailto:info@bdmnl.nl">info@bdmnl.nl</a>.<button type="button" aria-label="Melding sluiten">×</button>';m.lastChild.onclick=function(){msg(0)};d.body.appendChild(m)}
function zichtbaar(){var r=d.querySelector("fonio-webchat-widget-root");return!!(r&&r.shadowRoot&&r.shadowRoot.querySelector(".fonio-webchat-launcher,.fonio-webchat-window"))}
function script(p){var o=d.querySelectorAll('script[src*="widget.fonio.ai"]');for(var i=0;i<o.length;i++)o[i].remove();if(p>1){try{delete window.fonio}catch(e){window.fonio=void 0}}
var s=d.createElement("script");s.type="module";s.src="https://widget.fonio.ai/webchat-widget.js"+(p>1?"?poging="+p:"");s.setAttribute("data-fonio-webchat-widget-id",ID);s.setAttribute("data-fonio-webchat-widget-mode","floating");d.body.appendChild(s)}
function herstel(f){bezig=0;b.removeAttribute("aria-busy");b.innerHTML=ICO;b.style.cssText="";if(!b.isConnected)d.body.appendChild(b);if(f)msg(1)}
function laad(open){if(bezig)return;bezig=1;msg(0);set(K,"1");
/* Cookiebot-fix load-events */var CC=window.CookieConsent;if(CC&&CC.mutateEventListeners)CC.mutateEventListeners=!1;
if(open){b.setAttribute("aria-busy","true");b.innerHTML=LAD;set(O,"true")}
var p=1,n=0,sinds=0,gedaan=0;script(p);
var t=setInterval(function(){n++;
if(zichtbaar()){var w=window.fonio&&window.fonio.webchat;if(open&&!gedaan&&w&&w.open){gedaan=1;try{w.open()}catch(e){}}
b.style.cssText="opacity:0;pointer-events:none";if(!sinds)sinds=n;
if(n-sinds>=20){clearInterval(t);b.remove();setInterval(function(){H.classList.toggle("bdmnl-co",get(O)=="true")},500);setTimeout(function(){if(!zichtbaar())herstel(1)},5000)}return}
sinds=0;b.style.cssText="";if(n==70&&p==1){p=2;script(p)}if(n>200){clearInterval(t);herstel(1)}},100)}
b.addEventListener("click",function(){laad(1)});
function start(){d.body.appendChild(b);if(get(K)=="1"&&get(O)=="true")laad(0)}
if(d.readyState=="loading")d.addEventListener("DOMContentLoaded",start);else start();
})();
