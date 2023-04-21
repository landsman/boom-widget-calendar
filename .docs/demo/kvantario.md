# Kvantario

- [Website](https://www.kvantario.com/)
- [Example of integration](https://landsman.github.io/boom-widget-calendar/demo/kvantario.html)

## Production snippet

- [Connect page](https://connect.boomevents.org/cs/organizer/e637ebde-913c-4339-bb45-615293ef191c)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="e637ebde-913c-4339-bb45-615293ef191c">
!function(e,t){const n="boom-events-org-calendar",a=t.getElementById(n),o=t.createElement("script"),r=new Date,c=Math.floor(r.getTime()/1e3);o.async=!0,o.id=n+"__loader-js",o.src=a.getAttribute("data-cdn")+"api/loader.min.js?v="+c,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```

## Stage snippet

- [Connect page](https://connect.boomevents.dev/cs/organizer/e7af7792-38d0-4ba3-9024-330b6e273725)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="e7af7792-38d0-4ba3-9024-330b6e273725">
!function(e,t){const n="boom-events-org-calendar",a=t.getElementById(n),o=t.createElement("script"),r=new Date,c=Math.floor(r.getTime()/1e3);o.async=!0,o.id=n+"__loader-js",o.src=a.getAttribute("data-cdn")+"api/loader.min.js?v="+c,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```
