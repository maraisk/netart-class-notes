## HTML + CSS Review
***
### HTML
* **elements** are the building blocks of HTML these contain:
```HTML
<tag>attribute="value"</tag>
```
if a tag is nested in another tag, one is the parent and one is the child

#### where the Head goes

* **DOCTYPE** indicates version of **HTML** (5, 4.0, etc)
```html
<!DOCTYPE html>
```
* **metadata** exists in the head in a **meta tag** (check course site for more info)
    ```HTML
    <meta charset="utf-8">
    <meta name="sitename" content="description">
    <link rel="favicon" type="image.png" href="URL">
    ```

#### the Body follows

* **this is a header**
```HTML
<header>
    <h1>my title</h1>
    my page
    <nav>
        <a href="about.html">about</a>
        <a href="general.html">general</a>
    </nav>
</header>
```
* **this is a div**
```HTML
<div class="">
    generic box
</div>
```
* **this is a section**
```HTML
<section>
    <h3>MY THOUGHTS... VERY IMPORTANT</h3>
    <p>
        I HAVE MANY OF THEM
    </p>
</section>
```
***
#### Developer Tools
* inject JS into website to change elements etc
***
### CSS
There are 3 ways to include CSS in a page
1. **In-line styling**
```html
<header style="color:red">
    this is red
</header>
```
2. **Internal CSS** - style tag in the head puts CSS in HTML and allows you to modify entire classes
```HTML
<style>
    a {
        color:red
    }
</style>
```
3. **External CSS** - the patrician's choice
    1. First we include a link in the head
```HTML
<link rel="stylesheet" href="styles.css">
```
    2. Then we can put CSS in a stylesheet
```css
a {
    color:red;
    font-family: fantasy;
}
```

#### classes

***
read css-tricks WEBSITE
***
## Javascript
### Hello World
