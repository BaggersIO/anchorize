# anchorize

This is a super fast, tiny and solid client-side URL parser.

anchorize.js parses your URL natively without any regular expressions or string operations. Since it uses your browsers built in renderer you will get a quite safe result :)

## Installation

```shell
bower install anchorize
```

```html
<script type="text/javascript" src="bower_components/anchorize.js"></script>
```

## Example

```js
var parsed = anchorize('http://bob:secret@any.host:1337/sub/path?foo=bar#jumpto');

parsed.protocol; // http
parsed.username; // bob
parsed.password; // secret
parsed.host;     // any.host:1337
parsed.port;     // 1337
parsed.search;   // ?foo=bar
parsed.hash;     // #jumpto
```