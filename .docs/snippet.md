# Snippet

When you are done with [build](build.md) of snippets and loader you can jump to using them.

There are two types:
- inline script
- script with html tag

It depends on your possibilities, but most-convenient is **inline script** I think.

## API

Both of these scripts has configuration via [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

**Attributes**

- `id` = organizerId
- `cdn` = url of hosting of the iframe content, this app basically
- `prod` = optional, you can set `false` to use BOOM's stage api
- `locale` = optional, you can force to show selected language
- `manual` = not implemented yet, but it allows you to use JS api of the loader, instead of running it automatically

