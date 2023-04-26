# Michal Landsman

- [Connect - stage](https://connect.boomevents.dev/cs/organizer/e43780b9-a220-42d3-a026-cc97875a61e3)
- [Connect - production](https://connect.boomevents.org/cs/organizer/1bf341fa-7bbd-4ac7-ab1e-7b2bea081314)


## Production snippet

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="1bf341fa-7bbd-4ac7-ab1e-7b2bea081314">
!function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```

## Stage (dev) snippet

Following code snippet will render responsive iframe in your page [that looks like this](https://landsman.github.io/boom-widget-calendar/?organizerId=e43780b9-a220-42d3-a026-cc97875a61e3&isProduction=false).

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="e43780b9-a220-42d3-a026-cc97875a61e3" data-prod="false">
!function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```



