"use strict";(self.webpackChunkboom_widget_calendar=self.webpackChunkboom_widget_calendar||[]).push([[1625],{1910:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var o={lessThanXSeconds:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0648\u0627\u0646\u064a",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0627\u0646\u064a\u0629"},xSeconds:{one:"\u062b\u0627\u0646\u064a\u0629",two:"\u062b\u0627\u0646\u064a\u062a\u064a\u0646",threeToTen:"{{count}} \u062b\u0648\u0627\u0646\u064a",other:"{{count}} \u062b\u0627\u0646\u064a\u0629"},halfAMinute:"\u0646\u0635 \u062f\u0642\u064a\u0642\u0629",lessThanXMinutes:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u0627\u064a\u0642",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u064a\u0642\u0629"},xMinutes:{one:"\u062f\u0642\u064a\u0642\u0629",two:"\u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"{{count}} \u062f\u0642\u0627\u064a\u0642",other:"{{count}} \u062f\u0642\u064a\u0642\u0629"},aboutXHours:{one:"\u062d\u0648\u0627\u0644\u064a \u0633\u0627\u0639\u0629",two:"\u062d\u0648\u0627\u0644\u064a \u0633\u0627\u0639\u062a\u064a\u0646",threeToTen:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0633\u0627\u0639\u0627\u062a",other:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0633\u0627\u0639\u0629"},xHours:{one:"\u0633\u0627\u0639\u0629",two:"\u0633\u0627\u0639\u062a\u064a\u0646",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a",other:"{{count}} \u0633\u0627\u0639\u0629"},xDays:{one:"\u064a\u0648\u0645",two:"\u064a\u0648\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u064a\u0627\u0645",other:"{{count}} \u064a\u0648\u0645"},aboutXWeeks:{one:"\u062d\u0648\u0627\u0644\u064a \u0623\u0633\u0628\u0648\u0639",two:"\u062d\u0648\u0627\u0644\u064a \u0623\u0633\u0628\u0648\u0639\u064a\u0646",threeToTen:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0623\u0633\u0627\u0628\u064a\u0639",other:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0623\u0633\u0628\u0648\u0639"},xWeeks:{one:"\u0623\u0633\u0628\u0648\u0639",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639",other:"{{count}} \u0623\u0633\u0628\u0648\u0639"},aboutXMonths:{one:"\u062d\u0648\u0627\u0644\u064a \u0634\u0647\u0631",two:"\u062d\u0648\u0627\u0644\u064a \u0634\u0647\u0631\u064a\u0646",threeToTen:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0623\u0634\u0647\u0631",other:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0634\u0647\u0631"},xMonths:{one:"\u0634\u0647\u0631",two:"\u0634\u0647\u0631\u064a\u0646",threeToTen:"{{count}} \u0623\u0634\u0647\u0631",other:"{{count}} \u0634\u0647\u0631"},aboutXYears:{one:"\u062d\u0648\u0627\u0644\u064a \u0633\u0646\u0629",two:"\u062d\u0648\u0627\u0644\u064a \u0633\u0646\u062a\u064a\u0646",threeToTen:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0633\u0646\u064a\u0646",other:"\u062d\u0648\u0627\u0644\u064a {{count}} \u0633\u0646\u0629"},xYears:{one:"\u0639\u0627\u0645",two:"\u0639\u0627\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645",other:"{{count}} \u0639\u0627\u0645"},overXYears:{one:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0633\u0646\u0629",two:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0633\u0646\u062a\u064a\u0646",threeToTen:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0633\u0646\u064a\u0646",other:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0633\u0646\u0629"},almostXYears:{one:"\u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u064b\u0627",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u064b\u0627",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u064b\u0627",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u064b\u0627"}},a=function(e,t,n){var a,r=o[e];return a="string"===typeof r?r:1===t?r.one:2===t?r.two:t<=10?r.threeToTen.replace("{{count}}",String(t)):r.other.replace("{{count}}",String(t)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"\u0641\u064a \u062e\u0644\u0627\u0644 ".concat(a):"\u0645\u0646\u0630 ".concat(a):a},r=n(6840),i={date:(0,r.Z)({formats:{full:"EEEE\u060c do MMMM y",long:"do MMMM y",medium:"dd/MMM/y",short:"d/MM/y"},defaultWidth:"full"}),time:(0,r.Z)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.Z)({formats:{full:"{{date}} '\u0627\u0644\u0633\u0627\u0639\u0629' {{time}}",long:"{{date}} '\u0627\u0644\u0633\u0627\u0639\u0629' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"eeee '\u0627\u0644\u0644\u064a \u062c\u0627\u064a \u0627\u0644\u0633\u0627\u0639\u0629' p",yesterday:"'\u0625\u0645\u0628\u0627\u0631\u062d \u0627\u0644\u0633\u0627\u0639\u0629' p",today:"'\u0627\u0644\u0646\u0647\u0627\u0631\u062f\u0629 \u0627\u0644\u0633\u0627\u0639\u0629' p",tomorrow:"'\u0628\u0643\u0631\u0629 \u0627\u0644\u0633\u0627\u0639\u0629' p",nextWeek:"eeee '\u0627\u0644\u0633\u0627\u0639\u0629' p",other:"P"},u=function(e,t,n,o){return d[e]},h=n(7325),s={ordinalNumber:function(e,t){return String(e)},era:(0,h.Z)({values:{narrow:["\u0642","\u0628"],abbreviated:["\u0642.\u0645","\u0628.\u0645"],wide:["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f","\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f"]},defaultWidth:"wide"}),quarter:(0,h.Z)({values:{narrow:["1","2","3","4"],abbreviated:["\u06311","\u06312","\u06313","\u06314"],wide:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,h.Z)({values:{narrow:["\u064a","\u0641","\u0645","\u0623","\u0645","\u064a","\u064a","\u0623","\u0633","\u0623","\u0646","\u062f"],abbreviated:["\u064a\u0646\u0627","\u0641\u0628\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u0640","\u064a\u0648\u0644\u0640","\u0623\u063a\u0633\u0640","\u0633\u0628\u062a\u0640","\u0623\u0643\u062a\u0640","\u0646\u0648\u0641\u0640","\u062f\u064a\u0633\u0640"],wide:["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"]},defaultWidth:"wide"}),day:(0,h.Z)({values:{narrow:["\u062d","\u0646","\u062b","\u0631","\u062e","\u062c","\u0633"],short:["\u0623\u062d\u062f","\u0627\u062b\u0646\u064a\u0646","\u062b\u0644\u0627\u062b\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],abbreviated:["\u0623\u062d\u062f","\u0627\u062b\u0646\u064a\u0646","\u062b\u0644\u0627\u062b\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],wide:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0627\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"]},defaultWidth:"wide"}),dayPeriod:(0,h.Z)({values:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631\u0627\u064b",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631\u0627\u064b",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u064b",night:"\u0644\u064a\u0644\u0627\u064b"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631\u0627\u064b",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",noon:"\u0638\u0647\u0631\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"}},defaultFormattingWidth:"wide"})},m=n(6884),c={code:"ar-EG",formatDistance:a,formatLong:i,formatRelative:u,localize:s,match:{ordinalNumber:(0,n(586).Z)({matchPattern:/^(\d+)/,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,m.Z)({matchPatterns:{narrow:/^(\u0642|\u0628)/g,abbreviated:/^(\u0642.\u0645|\u0628.\u0645)/g,wide:/^(\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f)/g},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0642/g,/^\u0628/g]},defaultParseWidth:"any"}),quarter:(0,m.Z)({matchPatterns:{narrow:/^[1234]/,abbreviated:/^\u0631[1234]/,wide:/^\u0627\u0644\u0631\u0628\u0639 (\u0627\u0644\u0623\u0648\u0644|\u0627\u0644\u062b\u0627\u0646\u064a|\u0627\u0644\u062b\u0627\u0644\u062b|\u0627\u0644\u0631\u0627\u0628\u0639)/},defaultMatchWidth:"wide",parsePatterns:{wide:[/\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644/,/\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a/,/\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b/,/\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639/],any:[/1/,/2/,/3/,/4/]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,m.Z)({matchPatterns:{narrow:/^(\u064a|\u0641|\u0645|\u0623|\u0633|\u0646|\u062f)/,abbreviated:/^(\u064a\u0646\u0627|\u0641\u0628\u0631|\u0645\u0627\u0631\u0633|\u0623\u0628\u0631\u064a\u0644|\u0645\u0627\u064a\u0648|\u064a\u0648\u0646\u0640|\u064a\u0648\u0644\u0640|\u0623\u063a\u0633\u0640|\u0633\u0628\u062a\u0640|\u0623\u0643\u062a\u0640|\u0646\u0648\u0641\u0640|\u062f\u064a\u0633\u0640)/,wide:/^(\u064a\u0646\u0627\u064a\u0631|\u0641\u0628\u0631\u0627\u064a\u0631|\u0645\u0627\u0631\u0633|\u0623\u0628\u0631\u064a\u0644|\u0645\u0627\u064a\u0648|\u064a\u0648\u0646\u064a\u0648|\u064a\u0648\u0644\u064a\u0648|\u0623\u063a\u0633\u0637\u0633|\u0633\u0628\u062a\u0645\u0628\u0631|\u0623\u0643\u062a\u0648\u0628\u0631|\u0646\u0648\u0641\u0645\u0628\u0631|\u062f\u064a\u0633\u0645\u0628\u0631)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u064a/,/^\u0641/,/^\u0645/,/^\u0623/,/^\u0645/,/^\u064a/,/^\u064a/,/^\u0623/,/^\u0633/,/^\u0623/,/^\u0646/,/^\u062f/],any:[/^\u064a\u0646\u0627/,/^\u0641\u0628\u0631/,/^\u0645\u0627\u0631\u0633/,/^\u0623\u0628\u0631\u064a\u0644/,/^\u0645\u0627\u064a\u0648/,/^\u064a\u0648\u0646/,/^\u064a\u0648\u0644/,/^\u0623\u063a\u0633/,/^\u0633\u0628\u062a/,/^\u0623\u0643\u062a/,/^\u0646\u0648\u0641/,/^\u062f\u064a\u0633/]},defaultParseWidth:"any"}),day:(0,m.Z)({matchPatterns:{narrow:/^(\u062d|\u0646|\u062b|\u0631|\u062e|\u062c|\u0633)/,short:/^(\u0623\u062d\u062f|\u0627\u062b\u0646\u064a\u0646|\u062b\u0644\u0627\u062b\u0627\u0621|\u0623\u0631\u0628\u0639\u0627\u0621|\u062e\u0645\u064a\u0633|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/,abbreviated:/^(\u0623\u062d\u062f|\u0627\u062b\u0646\u064a\u0646|\u062b\u0644\u0627\u062b\u0627\u0621|\u0623\u0631\u0628\u0639\u0627\u0621|\u062e\u0645\u064a\u0633|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/,wide:/^(\u0627\u0644\u0623\u062d\u062f|\u0627\u0644\u0627\u062b\u0646\u064a\u0646|\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621|\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621|\u0627\u0644\u062e\u0645\u064a\u0633|\u0627\u0644\u062c\u0645\u0639\u0629|\u0627\u0644\u0633\u0628\u062a)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u062d/,/^\u0646/,/^\u062b/,/^\u0631/,/^\u062e/,/^\u062c/,/^\u0633/],any:[/\u0623\u062d\u062f/,/\u0627\u062b\u0646\u064a\u0646/,/\u062b\u0644\u0627\u062b\u0627\u0621/,/\u0623\u0631\u0628\u0639\u0627\u0621/,/\u062e\u0645\u064a\u0633/,/\u062c\u0645\u0639\u0629/,/\u0633\u0628\u062a/]},defaultParseWidth:"any"}),dayPeriod:(0,m.Z)({matchPatterns:{narrow:/^(\u0635|\u0645|\u0646|\u0638|\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d|\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631|\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621|\u0641\u064a \u0627\u0644\u0644\u064a\u0644)/,abbreviated:/^(\u0635|\u0645|\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644|\u0638\u0647\u0631\u0627\u064b|\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d|\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631|\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621|\u0641\u064a \u0627\u0644\u0644\u064a\u0644)/,wide:/^(\u0635|\u0645|\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644|\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d|\u0638\u0647\u0631\u0627\u064b|\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631|\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621|\u0641\u064a \u0627\u0644\u0644\u064a\u0644)/,any:/^(\u0635|\u0645|\u0635\u0628\u0627\u062d|\u0638\u0647\u0631|\u0645\u0633\u0627\u0621|\u0644\u064a\u0644)/},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0635/,pm:/^\u0645/,midnight:/^\u0646/,noon:/^\u0638/,morning:/^\u0635/,afternoon:/^\u0628\u0639\u062f/,evening:/^\u0645/,night:/^\u0644/}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}}}]);
//# sourceMappingURL=df-2.0100fdb0.chunk.js.map