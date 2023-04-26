# Pravčická brána

- [Website](https://www.pbrana.cz/)
- [Example of integration](https://landsman.github.io/boom-widget-calendar/demo/pbrana.html)

## Production snippet

- [Connect page](https://connect.boomevents.org/cs/organizer/8fabf06c-0078-47e4-9c30-3f17827da0ab)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="8fabf06c-0078-47e4-9c30-3f17827da0ab">
!function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```

## Stage (dev) snippet

- [Connect page](https://connect.boomevents.dev/cs/organizer/714dbaac-adb1-472a-b00e-81da7eb7f216)


```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="714dbaac-adb1-472a-b00e-81da7eb7f216" data-prod="false">
    !function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```
