"use strict";(self.webpackChunkboom_widget_calendar=self.webpackChunkboom_widget_calendar||[]).push([[3207],{6797:function(a,i,n){n.r(i),n.d(i,{default:function(){return f}});var e={lessThanXSeconds:{one:"inqas minn sekonda",other:"inqas minn {{count}} sekondi"},xSeconds:{one:"sekonda",other:"{{count}} sekondi"},halfAMinute:"nofs minuta",lessThanXMinutes:{one:"inqas minn minuta",other:"inqas minn {{count}} minuti"},xMinutes:{one:"minuta",other:"{{count}} minuti"},aboutXHours:{one:"madwar sieg\u0127a",other:"madwar {{count}} sieg\u0127at"},xHours:{one:"sieg\u0127a",other:"{{count}} sieg\u0127at"},xDays:{one:"\u0121urnata",other:"{{count}} \u0121ranet"},aboutXWeeks:{one:"madwar \u0121img\u0127a",other:"madwar {{count}} \u0121img\u0127at"},xWeeks:{one:"\u0121img\u0127a",other:"{{count}} \u0121img\u0127at"},aboutXMonths:{one:"madwar xahar",other:"madwar {{count}} xhur"},xMonths:{one:"xahar",other:"{{count}} xhur"},aboutXYears:{one:"madwar sena",two:"madwar sentejn",other:"madwar {{count}} snin"},xYears:{one:"sena",two:"sentejn",other:"{{count}} snin"},overXYears:{one:"aktar minn sena",two:"aktar minn sentejn",other:"aktar minn {{count}} snin"},almostXYears:{one:"kwa\u017ci sena",two:"kwa\u017ci sentejn",other:"kwa\u017ci {{count}} snin"}},t=function(a,i,n){var t,r=e[a];return t="string"===typeof r?r:1===i?r.one:2===i&&r.two?r.two:r.other.replace("{{count}}",String(i)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"f'"+t:t+" ilu":t},r=n(8948),o={date:(0,r.Z)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.Z)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},l={lastWeek:"eeee 'li g\u0127adda' 'fil-'p",yesterday:"'Il-biera\u0127 fil-'p",today:"'Illum fil-'p",tomorrow:"'G\u0127ada fil-'p",nextWeek:"eeee 'fil-'p",other:"P"},s=function(a,i,n,e){return l[a]},d=n(9901),m={ordinalNumber:function(a,i){return Number(a)+"\xba"},era:(0,d.Z)({values:{narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]},defaultWidth:"wide"}),quarter:(0,d.Z)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,d.Z)({values:{narrow:["J","F","M","A","M","\u0120","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","\u0120un","Lul","Aww","Set","Ott","Nov","Di\u010b"],wide:["Jannar","Frar","Marzu","April","Mejju","\u0120unju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Di\u010bembru"]},defaultWidth:"wide"}),day:(0,d.Z)({values:{narrow:["\u0126","T","T","E","\u0126","\u0120","S"],short:["\u0126a","Tn","Tl","Er","\u0126a","\u0120i","Si"],abbreviated:["\u0126ad","Tne","Tli","Erb","\u0126am","\u0120im","Sib"],wide:["Il-\u0126add","It-Tnejn","It-Tlieta","L-Erbg\u0127a","Il-\u0126amis","Il-\u0120img\u0127a","Is-Sibt"]},defaultWidth:"wide"}),dayPeriod:(0,d.Z)({values:{narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"g\u0127odwa",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"g\u0127odwa",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"g\u0127odwa",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"lejl"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filg\u0127odu",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filg\u0127odu",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filg\u0127odu",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"billejl"}},defaultFormattingWidth:"wide"})},u=n(2735),f={code:"mt",formatDistance:t,formatLong:o,formatRelative:s,localize:m,match:{ordinalNumber:(0,n(9834).Z)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,u.Z)({matchPatterns:{narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(q|b)/i,/^(w|c)/i]},defaultParseWidth:"any"}),quarter:(0,u.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,u.Z)({matchPatterns:{narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|\u0121un|lul|aww|set|ott|nov|di\u010b)/i,wide:/^(jannar|frar|marzu|april|mejju|\u0121unju|lulju|awwissu|settembru|ottubru|novembru|di\u010bembru)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^\u0121/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^\u0121/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,u.Z)({matchPatterns:{narrow:/^[\u0127te\u0121s]/i,short:/^(\u0127a|tn|tl|er|\u0127a|\u0121i|si)/i,abbreviated:/^(\u0127ad|tne|tli|erb|\u0127am|\u0121im|sib)/i,wide:/^(il-\u0127add|it-tnejn|it-tlieta|l-erbg\u0127a|il-\u0127amis|il-\u0121img\u0127a|is-sibt)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0127/i,/^t/i,/^t/i,/^e/i,/^\u0127/i,/^\u0121/i,/^s/i],any:[/^(il-)?\u0127ad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?\u0121i/i,/^(is-)?si/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.Z)({matchPatterns:{narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (g\u0127odwa|wara nofsinhar|filg\u0127axija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (g\u0127odwa|wara nofsinhar|filg\u0127axija|lejl))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/g\u0127odwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filg\u0127axija/i,night:/lejl/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}}}]);