(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(52)},19:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),i=(t(19),t(2)),o=t(12),m=t.n(o),s=function(){return l.a.createElement("h1",{className:"h1Main"},"Weather app")},u=t(3),d=t.n(u),v=function(e){return l.a.createElement("div",{className:"divCurrently"},l.a.createElement("div",null,e.icon?l.a.createElement("div",null,l.a.createElement("div",{className:"divIcon"},l.a.createElement(d.a,{name:"darksky",iconId:e.icon,flip:"horizontal",rotate:"90"}),l.a.createElement("h3",{className:"h3Temp"},e.temperature+"\xb0")),l.a.createElement("div",{className:"divSummary"},l.a.createElement("h5",{className:"h5Summary"},e.summary),l.a.createElement("h3",{className:"h3Location"},e.locationStr)),l.a.createElement("div",{className:"divCurrentGrid"},l.a.createElement("div",{className:"divCurrentGridItem"},l.a.createElement("p",null,"Rel Humidity"),e.humidity+" %"),l.a.createElement("div",{className:"divCurrentGridItem"},l.a.createElement("p",null,"Air Pressure"),e.pressure+" mbar"),l.a.createElement("div",{className:"divCurrentGridItem"},l.a.createElement("p",null,"Wind Speed"),e.windSpeed+" m/s"),l.a.createElement("div",{className:"divCurrentGridItem"},l.a.createElement("p",null,"Ozone"),e.ozone+" DU"),l.a.createElement("div",{className:"divCurrentGridItem"},l.a.createElement("p",null,"UV Index"),e.uvIndex+" UV"),l.a.createElement("div",{className:"divCurrentGridItem"},l.a.createElement("p",null,"Visibility"),e.visibility+" km")),l.a.createElement("div",{className:"divRestOfTheDay"},e.hourly)):null))},E=function(e){return console.log(e),l.a.createElement("div",null,e.title?l.a.createElement("div",{className:"divMainAlerts"},l.a.createElement("div",{className:"divAlertsContainer"},l.a.createElement("h4",null,"Alert - "+e.title),l.a.createElement("p",null,e.description))):null)},h=t(48),y=function(e){return l.a.createElement("div",null,e.data?l.a.createElement("div",null,l.a.createElement("h3",{className:"h3NextSevenDaysSummary"},e.summary),l.a.createElement("div",{className:"divNextSevenDays"},e.data.map(function(e,a){return l.a.createElement("div",{className:"divItemNextSevenDays",key:a},l.a.createElement("div",{className:"divItemNextSevenDaysIcon"},l.a.createElement("h5",{className:"h5DateNextSDays"},h().add(a,"days").format("ddd DD MMM")),l.a.createElement(d.a,{name:"darksky",iconId:e.icon,flip:"horizontal",rotate:"90"}),l.a.createElement("h5",{className:"h5DateNextSDays"},e.temperatureLow+"\xb0"," ",e.temperatureHigh+"\xb0")),l.a.createElement("div",{className:"divNextSDaysSummary"},l.a.createElement("h3",{className:"h3NextSDaysSummary"},e.summary)))}))):null)},N=(t(50),function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),o=Object(i.a)(c,2),u=o[0],d=o[1],h=Object(n.useState)({}),N=Object(i.a)(h,2),p=N[0],f=N[1],g=Object(n.useState)({}),S=Object(i.a)(g,2),b=S[0],I=S[1],w=Object(n.useState)(""),D=Object(i.a)(w,2),O=D[0],j=D[1];return Object(n.useEffect)(function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var a=e.coords.latitude,t=e.coords.longitude;console.log("userLatitude "+a),console.log("userLongitude "+t),m.a.get("/forecast/"+a+"/"+t).then(function(e){console.log(e.data);var a=e.data;r(a.alerts),d(a.currently),f(a.daily),I(a.hourly),j(a.location)}).catch(function(e){console.log(e)})},function(e){console.log("error in geolocation")}):console.log("location not supported")},[]),l.a.createElement("div",{className:"divMain"},l.a.createElement(s,null),u?l.a.createElement("div",null,l.a.createElement(v,Object.assign({hourly:b.summary,locationStr:O},u)),p?l.a.createElement(y,p):null,t?l.a.createElement(E,t):null):null)});t(51);var p=function(){return l.a.createElement("div",null,l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.50b0e490.chunk.js.map