"use strict";(self.webpackChunkboom_widget_calendar=self.webpackChunkboom_widget_calendar||[]).push([[2755],{7115:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(4800),r=n(9489);function a(e,t,n){(0,o.Z)(2,arguments);var a=(0,r.Z)(e,n),i=(0,r.Z)(t,n);return a.getTime()===i.getTime()}},9544:function(e,t,n){function o(e,t,n){var o=function(e,t){return 1===t&&e.one?e.one:t>=2&&t<=4&&e.twoFour?e.twoFour:e.other}(e,t);return o[n].replace("{{count}}",String(t))}function r(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="pribli\u017ene"),t.length>0?t+" ":""}function a(e){var t="";return"lessThan"===e&&(t="menej ne\u017e"),"over"===e&&(t="viac ne\u017e"),t.length>0?t+" ":""}n.r(t),n.d(t,{default:function(){return k}});var i={xSeconds:{one:{present:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{present:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{present:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{present:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{present:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{present:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{present:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{present:"hodina",past:"hodinou",future:"hodinu"},twoFour:{present:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{present:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{present:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{present:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{present:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xWeeks:{one:{present:"t\xfd\u017ede\u0148",past:"t\xfd\u017ed\u0148om",future:"t\xfd\u017ede\u0148"},twoFour:{present:"{{count}} t\xfd\u017edne",past:"{{count}} t\xfd\u017ed\u0148ami",future:"{{count}} t\xfd\u017edne"},other:{present:"{{count}} t\xfd\u017ed\u0148ov",past:"{{count}} t\xfd\u017ed\u0148ami",future:"{{count}} t\xfd\u017ed\u0148ov"}},xMonths:{one:{present:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{present:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{present:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{present:"rok",past:"rokom",future:"rok"},twoFour:{present:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{present:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}},u=function(e,t,n){var u,d=function(e){return["lessThan","about","over","almost"].filter((function(t){return!!e.match(new RegExp("^"+t))}))[0]}(e)||"",s=(u=e.substring(d.length)).charAt(0).toLowerCase()+u.slice(1),p=i[s];return null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?r(d)+"o "+a(d)+o(p,t,"future"):r(d)+"pred "+a(d)+o(p,t,"past"):r(d)+a(d)+o(p,t,"present")},d=n(8948),s={date:(0,d.Z)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},defaultWidth:"full"}),time:(0,d.Z)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,d.Z)({formats:{full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},p=n(7115),m=["nede\u013eu","pondelok","utorok","stredu","\u0161tvrtok","piatok","sobotu"];function c(e){return 4===e?"'vo' eeee 'o' p":"'v "+m[e]+" o' p"}var l={lastWeek:function(e,t,n){var o=e.getUTCDay();return(0,p.Z)(e,t,n)?c(o):function(e){var t=m[e];switch(e){case 0:case 3:case 6:return"'minul\xfa "+t+" o' p";default:return"'minul\xfd' eeee 'o' p"}}(o)},yesterday:"'v\u010dera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,n){var o=e.getUTCDay();return(0,p.Z)(e,t,n)?c(o):function(e){var t=m[e];switch(e){case 0:case 4:case 6:return"'bud\xfacu "+t+" o' p";default:return"'bud\xfaci' eeee 'o' p"}}(o)},other:"P"},f=function(e,t,n,o){var r=l[e];return"function"===typeof r?r(t,n,o):r},v=n(9901),h={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,v.Z)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},defaultWidth:"wide"}),quarter:(0,v.Z)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. \u0161tvr\u0165rok","2. \u0161tvr\u0165rok","3. \u0161tvr\u0165rok","4. \u0161tvr\u0165rok"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,v.Z)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1ra","febru\xe1ra","marca","apr\xedla","m\xe1ja","j\xfana","j\xfala","augusta","septembra","okt\xf3bra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,v.Z)({values:{narrow:["n","p","u","s","\u0161","p","s"],short:["ne","po","ut","st","\u0161t","pi","so"],abbreviated:["ne","po","ut","st","\u0161t","pi","so"],wide:["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,v.Z)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"r\xe1no",afternoon:"popoludnie",evening:"ve\u010der",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"r\xe1no",afternoon:"popoludn\xed",evening:"ve\u010der",night:"v noci"}},defaultFormattingWidth:"wide"})},b=n(2735),k={code:"sk",formatDistance:u,formatLong:s,formatRelative:f,localize:h,match:{ordinalNumber:(0,n(9834).Z)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,b.Z)({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[\u0161s][\xedi]m letopo[\u010dc]tom|po Kristovi|n[\xe1a][\u0161s]ho letopo[\u010dc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,b.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [\u0161s]tvr[\u0165t]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,b.Z)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[\xe1a]j|j[\xfau]n|j[\xfau]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[\xe1a]ra?|febru[\xe1a]ra?|(marec|marca)|apr[\xedi]la?|m[\xe1a]ja?|j[\xfau]na?|j[\xfau]la?|augusta?|(september|septembra)|(okt[\xf3o]ber|okt[\xf3o]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[\xe1a]j/i,/^j[\xfau]n/i,/^j[\xfau]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,b.Z)({matchPatterns:{narrow:/^[npus\u0161p]/i,short:/^(ne|po|ut|st|\u0161t|pi|so)/i,abbreviated:/^(ne|po|ut|st|\u0161t|pi|so)/i,wide:/^(nede[\u013el]a|pondelok|utorok|streda|[\u0161s]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^\u0161/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(\u0161t|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,b.Z)({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[\xe1a]no|popoludn(ie|\xed|i)|ve[\u010dc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[\xe1a]no/i,afternoon:/^pop/i,evening:/^ve[\u010dc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}}}]);