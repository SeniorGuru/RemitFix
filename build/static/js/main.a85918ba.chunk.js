(this.webpackJsonpCaladex=this.webpackJsonpCaladex||[]).push([[0],{114:function(e,r){},123:function(e,r,n){"use strict";n.r(r);var t=n(3),o=n(41),i=n.n(o),a=n(142),s=n(138),c=n(94),u=n(141),d=n(80),g=n(70),p=Object(c.a)({layout:{headerHeight:80,contentWidth:1140,footerWidth:1400},palette:{primary:{main:"#183765",footer:"#055da6"},secondary:{main:"#ec2027"},common:{purple:"#4115DD",green:"#00CC00",red:"#F52C71"},warning:{light:"rgba(255, 246, 32, .3)",main:"#ffc107",dark:"rgba(255, 246, 32, .7)"},tonalOffset:.2,background:{default:"#fff",gray:"#f1f1f170"},spacing:8},breakpoints:{values:{xl:1920,lg:1280,md:960,sm:600,xs:0}},border:{borderColor:"#2e6da4",borderWidth:1},overrides:{},typography:{useNextVariants:!0}},d[g.a]),f=Object(u.a)(p),l=n(25),h={en:n(81),sp:n(82),fr:n(83),po:n(84),du:n(85)},b={en:"English",sp:"Spanish",fr:"French",po:"Portugeese",du:"Dutch"},x=n(13),m=Object(t.createContext)({userLanguage:"en",dictionary:h.en});function y(e){var r=e.children,n=Object(t.useState)("en"),o=Object(l.a)(n,2),i=o[0],a=o[1],s={userLanguage:i,dictionary:h[i],userLanguageChange:function(e){var r=b[e]?e:"en";a(r),window.localStorage.setItem("rcml-lang",r)}};return Object(x.jsx)(m.Provider,{value:s,children:r})}var C=n(62),O=n(40),j=n(51),k=n(74),E={isAuthenticated:!1,accessToken:null,error:null},S=Object(O.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case k.a.SignInUser:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,accessToken:r.payload.accessToken,error:null});default:return e}}}),L=n(87),U=Object(O.c)(S,{},Object(O.a)(L.a)),T=n(58),v=n(12),I=Object(t.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,517))})),P=function(){return Object(x.jsx)(T.a,{children:Object(x.jsx)(y,{children:Object(x.jsx)(C.a,{store:U,children:Object(x.jsxs)(a.a,{theme:f,children:[Object(x.jsx)(s.a,{}),Object(x.jsx)(t.Suspense,{fallback:Object(x.jsx)(t.Fragment,{}),children:Object(x.jsx)(v.e,{children:Object(x.jsx)(v.c,{path:"*",element:Object(x.jsx)(I,{})})})})]})})})})},N=n(95),w=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,516)).then((function(r){var n=r.getCLS,t=r.getFID,o=r.getFCP,i=r.getLCP,a=r.getTTFB;n(e),t(e),o(e),i(e),a(e)}))},B=n(67);i.a.render(Object(x.jsx)(N.a,{getLibrary:B.b,children:Object(x.jsx)(P,{})}),document.getElementById("root")),w()},67:function(e,r,n){"use strict";n.d(r,"d",(function(){return o})),n.d(r,"a",(function(){return a})),n.d(r,"c",(function(){return s})),n.d(r,"b",(function(){return c}));var t=n(93),o=function(e,r){var n=new Date;n.setTime(n.getTime()+36e5);var t="expires="+n.toUTCString();document.cookie=e+"="+r+";"+t+";path=/"},i=function(e){for(var r=e+"=",n=decodeURIComponent(document.cookie).split(";"),t=0;t<n.length;t++){for(var o=n[t];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(r))return o.substring(r.length,o.length)}return null},a=function(){return{headers:{Authorization:"Bearer "+i("access_token")}}},s=function(){return!!i("access_token")},c=function(e){return new t.a.providers.Web3Provider(e)}},70:function(e,r,n){"use strict";n.d(r,"a",(function(){return t})),n.d(r,"b",(function(){return o}));var t="EN",o="http://localhost:5000/remitfix/api/"},74:function(e,r,n){"use strict";r.a={SignUpUser:"SignUpUser",SignUpUserError:"SignUpUserError",SignInUser:"SignInUser",SignInUserError:"SignInUserError",ConfirmUser:"ConfirmUser",ConfirmUserError:"ConfirmUserError",Profile:"Profile",ProfileError:"ProfileError",ProfileEdit:"ProfileEdit",ProfileEditError:"ProfileEditError",CryptoPairList:"CryptoPairList",CryptoPairListError:"CryptoPairListError",CryptoOrderList:"CryptoOrderList",CryptoOrderListError:"CryptoOrderListError",MarketTradeList:"MarketTradeList",MarketTradeListError:"MarketTradeListError",UserOrderList:"UserOrderList",UserOrderListError:"UserOrderListError",ExchangeDepositHistory:"ExchangeDepositHistory",ExchangeDepositHistoryError:"ExchangeDepositHistoryError"}},81:function(e){e.exports=JSON.parse('{"cryptochange":"Exchange","tokenexchange":"Token Exchange","margintrading":"Token Info Base","futurestrading":"Token Listing","buycrypto":"Token Info Base","tokeninfobase":"Token Base Info","caxrewards":"Earn/Staking","aboutus":"Calahex","signup":"Sign Up","login":"Log In"}')},82:function(e){e.exports=JSON.parse('{"cryptochange":"Intercambio de Cripto","tokenexchange":"Intercambio de Token","margintrading":"Negociaci\xf3n del Margen","futurestrading":"Negociaci\xf3n de Futuros","buycrypto":"Comprar Cripto","tokeninfobase":"Base de informaci\xf3n del Token","caxrewards":"Recompensas CAX","aboutus":"Acerca de nosotros","signup":"Reg\xedstrate","login":"Iniciar sesi\xf3n"}')},83:function(e){e.exports=JSON.parse('{"cryptochange":"\xc9change de Crypto","tokenexchange":"\xc9change de Jeton","margintrading":"N\xe9gociation de Marge","futurestrading":"N\xe9gociation \xe0 Terme","buycrypto":"Acheter Crypto","tokeninfobase":"Base d\u2019informations de Jeton","caxrewards":"R\xe9compenses CAX","aboutus":"\xc0 propos de nous","signup":"S\'inscrire","login":"S\'identifier"}')},84:function(e){e.exports=JSON.parse('{"cryptochange":"Bolsa de Cripto","tokenexchange":"Bolsa de Token","margintrading":"Negocia\xe7\xe3o de Margem","futurestrading":"Negocia\xe7\xe3o de Futuros","buycrypto":"Compre Crypto","tokeninfobase":"Base de Informa\xe7\xf5es de Token","caxrewards":"Recompensas CAX","aboutus":"Sobre n\xf3s","signup":"Inscrever-se","login":"Conecte-se"}')},85:function(e){e.exports=JSON.parse('{"cryptochange":"Crypto Exchange de","tokenexchange":"Token Exchangede"}')}},[[123,1,3]]]);
//# sourceMappingURL=main.a85918ba.chunk.js.map