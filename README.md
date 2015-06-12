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
anchorize('http://bob:secret@any.host:1337/sub/path?foo=bar#jumpto');
```

```json
{"protocol":"http:","username":"bob","password":"secret","host":"any.host:1337","port":"1337","search":"?foo=bar","hash":"#jumpto"}
```