# Pravčická brána

- [Website](https://www.pbrana.cz/)
- [Example of integration](https://landsman.github.io/boom-widget-calendar/demo/pbrana.html)

## Production snippet

- [Connect page](https://connect.boomevents.org/cs/organizer/8fabf06c-0078-47e4-9c30-3f17827da0ab)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="8fabf06c-0078-47e4-9c30-3f17827da0ab">
!function(e,t){const n="boom-events-org-calendar",a=t.getElementById(n),o=t.createElement("script"),r=new Date,c=Math.floor(r.getTime()/1e3);o.async=!0,o.id=n+"__loader-js",o.src=a.getAttribute("data-cdn")+"api/loader.min.js?v="+c,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```

## Stage snippet

- [Connect page](https://connect.boomevents.dev/cs/organizer/37b08079-4066-4156-be9d-a5637d0d0ee7)


```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="37b08079-4066-4156-be9d-a5637d0d0ee7" data-prod="false">
!function(e,t){const n="boom-events-org-calendar",a=t.getElementById(n),o=t.createElement("script"),r=new Date,c=Math.floor(r.getTime()/1e3);o.async=!0,o.id=n+"__loader-js",o.src=a.getAttribute("data-cdn")+"api/loader.min.js?v="+c,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```
