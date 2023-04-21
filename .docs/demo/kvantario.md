# Kvantario

- [Website](https://www.kvantario.com/)
- [Example of integration](https://landsman.github.io/boom-widget-calendar/demo/kvantario.html)

## Production snippet

- [Connect page](https://connect.boomevents.org/cs/organizer/e637ebde-913c-4339-bb45-615293ef191c)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="e637ebde-913c-4339-bb45-615293ef191c">
!function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```

## Stage snippet

- [Connect page](https://connect.boomevents.dev/cs/organizer/e7af7792-38d0-4ba3-9024-330b6e273725)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="e7af7792-38d0-4ba3-9024-330b6e273725" data-prod="false">
!function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```
