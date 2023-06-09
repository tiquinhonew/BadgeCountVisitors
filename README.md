# Badge Count Visitors

A visit counter badge to include in your readme

![Visit](https://badgecountvisitors.onrender.com/badge)

## Usage

### Markdown

```md
![Visit](https://badgecountvisitors.onrender.com/badge)
```

## Parameters

parameters accepted in the URL:

```js
  label = 'Visit',  // (Optional) Badge label
  labelColor = '#555',  // (Optional) Label color
  color = '#4c1',  // (Optional) Message color

  // (Optional) One of: 'plastic', 'flat', 'flat-square', 'for-the-badge' or 'social'
  // Each offers a different visual design.
  style = 'flat',
  pageId = 'userName.repoName' // Use the unique string to best represent your page.
```

## Example

```bash
color       > 8939E4
style       > for-the-badge
label       > Visit
labelColor  > grey
pageId      > tiquinhonew.BadgeCountVisitors
```

```md
![Visit](https://badgecountvisitors.onrender.com/badge?color=8939E4&style=for-the-badge&label=Visit&labelColor=grey&pageId=tiquinhonew.BadgeCountVisitors)
```

![Visit](https://badgecountvisitors.onrender.com/badge?color=8939E4&style=for-the-badge&label=Visit&labelColor=grey&pageId=tiquinhonew.BadgeCountVisitors)

## Colors

There are three ways to specify `color` and `labelColor`:

1. One of the [Shields named colors](./lib/color.js):

- ![][brightgreen]
- ![][green]
- ![][yellow]
- ![][yellowgreen]
- ![][orange]
- ![][red]
- ![][blue]
- ![][grey] ![][gray] – the default `labelColor`
- ![][lightgrey] ![][lightgray] – the default `color`

- ![][success]
- ![][important]
- ![][critical]
- ![][informational]
- ![][inactive] – the default `color`

2. A three- or six-character hex color, optionally prefixed with `#`:

- ![][9cf]
- ![][#007fff]
- etc.

3. [Any valid CSS color][css color], e.g.

- `rgb(...)`, `rgba(...)`
- `hsl(...)`, `hsla(...)`
- ![][aqua] ![][fuchsia] ![][lightslategray] etc.

[brightgreen]: https://img.shields.io/badge/brightgreen-brightgreen.svg
[success]: https://img.shields.io/badge/success-success.svg
[green]: https://img.shields.io/badge/green-green.svg
[yellow]: https://img.shields.io/badge/yellow-yellow.svg
[yellowgreen]: https://img.shields.io/badge/yellowgreen-yellowgreen.svg
[orange]: https://img.shields.io/badge/orange-orange.svg
[important]: https://img.shields.io/badge/important-important.svg
[red]: https://img.shields.io/badge/red-red.svg
[critical]: https://img.shields.io/badge/critical-critical.svg
[blue]: https://img.shields.io/badge/blue-blue.svg
[informational]: https://img.shields.io/badge/informational-informational.svg
[grey]: https://img.shields.io/badge/grey-grey.svg
[gray]: https://img.shields.io/badge/gray-gray.svg
[lightgrey]: https://img.shields.io/badge/lightgrey-lightgrey.svg
[lightgray]: https://img.shields.io/badge/lightgray-lightgray.svg
[inactive]: https://img.shields.io/badge/inactive-inactive.svg
[9cf]: https://img.shields.io/badge/9cf-9cf.svg
[#007fff]: https://img.shields.io/badge/%23007fff-007fff.svg
[aqua]: https://img.shields.io/badge/aqua-aqua.svg
[fuchsia]: https://img.shields.io/badge/fuchsia-fuchsia.svg
[lightslategray]: https://img.shields.io/badge/lightslategray-lightslategray.svg
[css color]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
[css/svg color]: http://www.w3.org/TR/SVG/types.html#DataTypeColor

## Credits

The project is using the badge-maker - https://www.npmjs.com/package/badge-maker