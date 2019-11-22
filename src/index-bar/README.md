# IndexBar

### Install

``` javascript
import Vue from 'vue';
import { IndexBar } from 'jyt';

Vue.use(IndexBar);
```

## Usage

### Basic Usage

```html
<jy-index-bar>
  <jy-index-anchor index="A" />
  <jy-cell title="Text" />
  <jy-cell title="Text" />
  <jy-cell title="Text" />

  <jy-index-anchor index="B" />
  <jy-cell title="Text" />
  <jy-cell title="Text" />
  <jy-cell title="Text" />

  ...
</jy-index-bar>
```

### Custom Index List

```html
<jy-index-bar :index-list="indexList">
  <jy-index-anchor index="1">Title 1</jy-index-anchor>
  <jy-cell title="Text" />
  <jy-cell title="Text" />
  <jy-cell title="Text" />

  <jy-index-anchor index="2">Title 2</jy-index-anchor>
  <jy-cell title="Text" />
  <jy-cell title="Text" />
  <jy-cell title="Text" />

  ...
</jy-index-bar>
```

```js
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
```

## API

### IndexBar Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| index-list | Index List | *string[] \| number[]* | `A-Z` | - |
| z-index | z-index | *number* | `1` | - |
| sticky | Whether to enable anchor sticky top | *boolean* | `true` | - |
| sticky-offset-top | Anchor offset top when sticky | *number* | `0` | 2.0.7 |
| highlight-color | Index character highlight color | *string* | `#07c160` | - | - |

### IndexAnchor Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| index | Index | *string \| number* | - | - |

### IndexBar Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when select index | index |

### IndexAnchor Slots

| Name | Description |
|------|------|
| default | Anchor content, show index by default |
