# apostrophe-toc
[![NPM](https://nodei.co/npm/apostrophe-toc.png?downloads=true&stars=true)](https://nodei.co/npm/apostrophe-toc/)

<a href="http://apostrophenow.org/"><img src="https://raw.github.com/punkave/jquery-bottomless/master/logos/logo-box-madefor.png" align="right" /></a>
apostrophe-toc is a widget for the [Apostrophe](http://github.com/punkave/apostrophe) content management system. Apostrophe TOC lets you display a table of contents generated from the markup of of any text in a given area.

## Usage
### Configuring the Module
In order to run the Apostrophe TOC widget in your Apostrophe project, you'll need to add it in app.js along with the other modules. There are currently no options for this widget.

```js
modules: {
  apostrophe-toc: {}
}
```
### Including the Widget in your Templates
Now that we've got the widget configured, we can simply add it to our template and use the bundled template in the module. In your page template, simply add "apostrophe-toc" to the controls array in your `aposArea` call:
```js
{{ aposArea(page, 'main', { controls: [ 'style', 'bold', 'italic', 'toc' ] } ) }}
```
## TO-DO
- [x] Build it
- [x] Publish to NPM
- [ ] Build some nice basic styles

<a href="http://punkave.com/"><img src="https://raw.github.com/punkave/jquery-bottomless/master/logos/logo-box-builtby.png" /></a>
