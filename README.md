# lightndown

## LWC that renders markdown, by a URL or String 🦄

### API

```url``` --- {String} url used in fetch to pull in markdown

```string``` --- {String} markdown to render

```html
<c-lightndown
    string="#markdown"
    url="https://raw.githubusercontent.com/jsmithdev/lightndown/master/README.md"
></c-lightndown>
```

<img src="https://i.imgur.com/xY2wqb8.png"/>

## Resources

Uses tweaked version of the wonderful project Marked 

https://github.com/markedjs/marked

Resets some inherited css using some of chrome's user agent values
 
https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css
