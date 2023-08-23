# PubQuiz

- [Website](https://www.pubquiz.cz/)

## Production snippet

todo: to be replaced, now Matej Hules org id!!!

- [Connect page](https://connect.boomevents.org/cs/organizer/8f0e49eb-9416-4de9-a878-488e4665d682)

```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="8f0e49eb-9416-4de9-a878-488e4665d682">
!function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```

## Stage (dev) snippet

- [Connect page](https://connect.boomevents.dev/cs/organizer/46ca6cbc-7394-4efc-a270-63e43ceb1d4c)


```html
<!-- BoomEvents.org calendar -->
<script type="text/javascript" id="boom-events-org-calendar" data-cdn="https://landsman.github.io/boom-widget-calendar/" data-id="46ca6cbc-7394-4efc-a270-63e43ceb1d4c" data-prod="false">
    !function(e,t){const n="boom-events-org-calendar";const a=t.getElementById(n),o=t.createElement("script"),c=new Date,r=Math.floor(c.getTime()/1e3);o.async=!0,o.id=n+"__loader-"+"js";const s=a.getAttribute("data-cdn");var d;o.src=((d=s).endsWith("/")?d.slice(0,-1):d)+"/api/loader.min.js?v="+r,a.after(o)}(window,document);
</script>
<!-- /BoomEvents.org calendar -->
```
