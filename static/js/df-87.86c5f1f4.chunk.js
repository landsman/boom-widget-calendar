"use strict";(self.webpackChunkboom_widget_calendar=self.webpackChunkboom_widget_calendar||[]).push([[5212],{6139:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var i={lessThanXSeconds:{one:"1 \u0441\u043e\u043d\u0438\u044f\u0434\u0430\u043d \u043a\u0430\u043c",other:"{{count}} \u0441\u043e\u043d\u0438\u044f\u0434\u0430\u043d \u043a\u0430\u043c"},xSeconds:{one:"1 \u0441\u043e\u043d\u0438\u044f",other:"{{count}} \u0441\u043e\u043d\u0438\u044f"},halfAMinute:"\u044f\u0440\u0438\u043c \u0434\u0430\u049b\u0438\u049b\u0430",lessThanXMinutes:{one:"1 \u0434\u0430\u049b\u0438\u049b\u0430\u0434\u0430\u043d \u043a\u0430\u043c",other:"{{count}} \u0434\u0430\u049b\u0438\u049b\u0430\u0434\u0430\u043d \u043a\u0430\u043c"},xMinutes:{one:"1 \u0434\u0430\u049b\u0438\u049b\u0430",other:"{{count}} \u0434\u0430\u049b\u0438\u049b\u0430"},aboutXHours:{one:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d 1 \u0441\u043e\u0430\u0442",other:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d {{count}} \u0441\u043e\u0430\u0442"},xHours:{one:"1 \u0441\u043e\u0430\u0442",other:"{{count}} \u0441\u043e\u0430\u0442"},xDays:{one:"1 \u043a\u0443\u043d",other:"{{count}} \u043a\u0443\u043d"},aboutXWeeks:{one:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d 1 \u0445\u0430\u0444\u0442\u0430",other:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d {{count}} \u0445\u0430\u0444\u0442\u0430"},xWeeks:{one:"1 \u0445\u0430\u0444\u0442\u0430",other:"{{count}} \u0445\u0430\u0444\u0442\u0430"},aboutXMonths:{one:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d 1 \u043e\u0439",other:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d {{count}} \u043e\u0439"},xMonths:{one:"1 \u043e\u0439",other:"{{count}} \u043e\u0439"},aboutXYears:{one:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d 1 \u0439\u0438\u043b",other:"\u0442\u0430\u0445\u043c\u0438\u043d\u0430\u043d {{count}} \u0439\u0438\u043b"},xYears:{one:"1 \u0439\u0438\u043b",other:"{{count}} \u0439\u0438\u043b"},overXYears:{one:"1 \u0439\u0438\u043b\u0434\u0430\u043d \u043a\u045e\u043f",other:"{{count}} \u0439\u0438\u043b\u0434\u0430\u043d \u043a\u045e\u043f"},almostXYears:{one:"\u0434\u0435\u044f\u0440\u043b\u0438 1 \u0439\u0438\u043b",other:"\u0434\u0435\u044f\u0440\u043b\u0438 {{count}} \u0439\u0438\u043b"}},n=function(e,t,a){var n,r=i[e];return n="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?n+"\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d":n+" \u043e\u043b\u0434\u0438\u043d":n},r=a(8948),o={date:(0,r.Z)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.Z)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.Z)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})},d={lastWeek:"'\u045e\u0442\u0433\u0430\u043d' eeee p '\u0434\u0430'",yesterday:"'\u043a\u0435\u0447\u0430' p '\u0434\u0430'",today:"'\u0431\u0443\u0433\u0443\u043d' p '\u0434\u0430'",tomorrow:"'\u044d\u0440\u0442\u0430\u0433\u0430' p '\u0434\u0430'",nextWeek:"eeee p '\u0434\u0430'",other:"P"},u=function(e,t,a,i){return d[e]},s=a(9901),h={ordinalNumber:function(e,t){return String(e)},era:(0,s.Z)({values:{narrow:["\u041c.\u0410","\u041c"],abbreviated:["\u041c.\u0410","\u041c"],wide:["\u041c\u0438\u043b\u043e\u0434\u0434\u0430\u043d \u0410\u0432\u0432\u0430\u043b\u0433\u0438","\u041c\u0438\u043b\u043e\u0434\u0438\u0439"]},defaultWidth:"wide"}),quarter:(0,s.Z)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0447\u043e\u0440.","2-\u0447\u043e\u0440.","3-\u0447\u043e\u0440.","4-\u0447\u043e\u0440."],wide:["1-\u0447\u043e\u0440\u0430\u043a","2-\u0447\u043e\u0440\u0430\u043a","3-\u0447\u043e\u0440\u0430\u043a","4-\u0447\u043e\u0440\u0430\u043a"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,s.Z)({values:{narrow:["\u042f","\u0424","\u041c","\u0410","\u041c","\u0418","\u0418","\u0410","\u0421","\u041e","\u041d","\u0414"],abbreviated:["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"],wide:["\u044f\u043d\u0432\u0430\u0440","\u0444\u0435\u0432\u0440\u0430\u043b","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u0430\u0431\u0440","\u043e\u043a\u0442\u0430\u0431\u0440","\u043d\u043e\u044f\u0431\u0440","\u0434\u0435\u043a\u0430\u0431\u0440"]},defaultWidth:"wide"}),day:(0,s.Z)({values:{narrow:["\u042f","\u0414","\u0421","\u0427","\u041f","\u0416","\u0428"],short:["\u044f\u043a","\u0434\u0443","\u0441\u0435","\u0447\u043e","\u043f\u0430","\u0436\u0443","\u0448\u0430"],abbreviated:["\u044f\u043a\u0448","\u0434\u0443\u0448","\u0441\u0435\u0448","\u0447\u043e\u0440","\u043f\u0430\u0439","\u0436\u0443\u043c","\u0448\u0430\u043d"],wide:["\u044f\u043a\u0448\u0430\u043d\u0431\u0430","\u0434\u0443\u0448\u0430\u043d\u0431\u0430","\u0441\u0435\u0448\u0430\u043d\u0431\u0430","\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0430","\u043f\u0430\u0439\u0448\u0430\u043d\u0431\u0430","\u0436\u0443\u043c\u0430","\u0448\u0430\u043d\u0431\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,s.Z)({values:{any:{am:"\u041f.\u041e.",pm:"\u041f.\u041a.",midnight:"\u044f\u0440\u0438\u043c \u0442\u0443\u043d",noon:"\u043f\u0435\u0448\u0438\u043d",morning:"\u044d\u0440\u0442\u0430\u043b\u0430\u0431",afternoon:"\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d",evening:"\u043a\u0435\u0447\u0430\u0441\u0438",night:"\u0442\u0443\u043d"}},defaultWidth:"any",formattingValues:{any:{am:"\u041f.\u041e.",pm:"\u041f.\u041a.",midnight:"\u044f\u0440\u0438\u043c \u0442\u0443\u043d",noon:"\u043f\u0435\u0448\u0438\u043d",morning:"\u044d\u0440\u0442\u0430\u043b\u0430\u0431",afternoon:"\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d",evening:"\u043a\u0435\u0447\u0430\u0441\u0438",night:"\u0442\u0443\u043d"}},defaultFormattingWidth:"any"})},l=a(2735),m={code:"uz-Cyrl",formatDistance:n,formatLong:o,formatRelative:u,localize:h,match:{ordinalNumber:(0,a(9834).Z)({matchPattern:/^(\d+)(\u0447\u0438)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,l.Z)({matchPatterns:{narrow:/^(\u043c\.\u0430|\u043c\.)/i,abbreviated:/^(\u043c\.\u0430|\u043c\.)/i,wide:/^(\u043c\u0438\u043b\u043e\u0434\u0434\u0430\u043d \u0430\u0432\u0432\u0430\u043b|\u043c\u0438\u043b\u043e\u0434\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043c/i,/^\u0430/i]},defaultParseWidth:"any"}),quarter:(0,l.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-\u0447\u043e\u0440./i,wide:/^[1234]-\u0447\u043e\u0440\u0430\u043a/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,l.Z)({matchPatterns:{narrow:/^[\u044f\u0444\u043c\u0430\u043c\u0438\u0438\u0430\u0441\u043e\u043d\u0434]/i,abbreviated:/^(\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0439|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433|\u0441\u0435\u043d|\u043e\u043a\u0442|\u043d\u043e\u044f|\u0434\u0435\u043a)/i,wide:/^(\u044f\u043d\u0432\u0430\u0440|\u0444\u0435\u0432\u0440\u0430\u043b|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0435\u043b|\u043c\u0430\u0439|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043d\u0442\u0430\u0431\u0440|\u043e\u043a\u0442\u0430\u0431\u0440|\u043d\u043e\u044f\u0431\u0440|\u0434\u0435\u043a\u0430\u0431\u0440)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u044f/i,/^\u0444/i,/^\u043c/i,/^\u0430/i,/^\u043c/i,/^\u0438/i,/^\u0438/i,/^\u0430/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i],any:[/^\u044f/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0439/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i]},defaultParseWidth:"any"}),day:(0,l.Z)({matchPatterns:{narrow:/^[\u044f\u0434\u0441\u0447\u043f\u0436\u0448]/i,short:/^(\u044f\u043a|\u0434\u0443|\u0441\u0435|\u0447\u043e|\u043f\u0430|\u0436\u0443|\u0448\u0430)/i,abbreviated:/^(\u044f\u043a\u0448|\u0434\u0443\u0448|\u0441\u0435\u0448|\u0447\u043e\u0440|\u043f\u0430\u0439|\u0436\u0443\u043c|\u0448\u0430\u043d)/i,wide:/^(\u044f\u043a\u0448\u0430\u043d\u0431\u0430|\u0434\u0443\u0448\u0430\u043d\u0431\u0430|\u0441\u0435\u0448\u0430\u043d\u0431\u0430|\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0430|\u043f\u0430\u0439\u0448\u0430\u043d\u0431\u0430|\u0436\u0443\u043c\u0430|\u0448\u0430\u043d\u0431\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u044f/i,/^\u0434/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0436/i,/^\u0448/i],any:[/^\u044f\u043a/i,/^\u0434\u0443/i,/^\u0441\u0435/i,/^\u0447\u043e\u0440/i,/^\u043f\u0430\u0439/i,/^\u0436\u0443/i,/^\u0448\u0430\u043d/i]},defaultParseWidth:"any"}),dayPeriod:(0,l.Z)({matchPatterns:{any:/^(\u043f\.\u043e\.|\u043f\.\u043a\.|\u044f\u0440\u0438\u043c \u0442\u0443\u043d|\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d|(\u044d\u0440\u0442\u0430\u043b\u0430\u0431|\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d|\u043a\u0435\u0447\u0430\u0441\u0438|\u0442\u0443\u043d))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u043f\.\u043e\./i,pm:/^\u043f\.\u043a\./i,midnight:/^\u044f\u0440\u0438\u043c \u0442\u0443\u043d/i,noon:/^\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d/i,morning:/\u044d\u0440\u0442\u0430\u043b\u0430\u0431/i,afternoon:/\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d/i,evening:/\u043a\u0435\u0447\u0430\u0441\u0438/i,night:/\u0442\u0443\u043d/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}}}}]);