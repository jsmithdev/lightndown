# lightndown

## LWC that takes a URL or String and renders markdown 🦄

### API

```html
<c-lightndown
    string="#markdown"
    url="https://raw.githubusercontent.com/jsmithdev/modal/master/README.md"
></c-lightndown>
```

```url``` --- {String} url used in GET fetch to pull in markdown

```string``` --- {String} markdown to render *TODO

<img src="https://i.imgur.com/NrNqy7r.png"/>

## Resources

Uses tweaked version of the wonderful project Marked 


https://github.com/markedjs/marked

 Resets some inherited css using some of chrome's user agent values
 
https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css
