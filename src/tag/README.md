# Tag

### Install

``` javascript
import Vue from 'vue';
import { Tag } from 'jyt';

Vue.use(Tag);
```

## Usage

### Basic Usage

```html
<jy-tag>Tag</jy-tag>
<jy-tag type="primary">Tag</jy-tag>
<jy-tag type="success">Tag</jy-tag>
<jy-tag type="danger">Tag</jy-tag>
<jy-tag type="warning">Tag</jy-tag>
```

### Round style

```html
<jy-tag round>Tag</jy-tag>
<jy-tag round type="primary">Tag</jy-tag>
<jy-tag round type="success">Tag</jy-tag>
<jy-tag round type="danger">Tag</jy-tag>
<jy-tag round type="warning">Tag</jy-tag>
```

### Mark style

```html
<jy-tag mark>Tag</jy-tag>
<jy-tag mark type="primary">Tag</jy-tag>
<jy-tag mark type="success">Tag</jy-tag>
<jy-tag mark type="danger">Tag</jy-tag>
<jy-tag mark type="warning">Tag</jy-tag>
```

### Plain style

```html
<jy-tag plain>Tag</jy-tag>
<jy-tag plain type="primary">Tag</jy-tag>
<jy-tag plain type="success">Tag</jy-tag>
<jy-tag plain type="danger">Tag</jy-tag>
<jy-tag plain type="warning">Tag</jy-tag>
```

### Custom Color

```html
<jy-tag color="#f2826a">Tag</jy-tag>
<jy-tag color="#f2826a" plain>Tag</jy-tag>
<jy-tag color="#7232dd">Tag</jy-tag>
<jy-tag color="#7232dd" plain>Tag</jy-tag>
<jy-tag color="#ffe1e1" text-color="#ad0000">Tag</jy-tag>
```

### Custom Size

```html
<jy-tag type="danger">Tag</jy-tag>
<jy-tag type="danger" size="medium">Tag</jy-tag>
<jy-tag type="danger" size="large">Tag</jy-tag>
```

### Closeable

```html
<jy-tag
  v-if="show.primary"
  closeable
  size="medium"
  type="primary"
  @close="close('primary')"
>
  Tag
</jy-tag>
<jy-tag
  v-if="show.success"
  closeable
  size="medium"
  type="success"
  @close="close('success')"
>
  Tag
</jy-tag>
```

```js
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    }
  },
  methods: {
    close(type) {
      this.show[type] = false;
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` `warning` | *string* | `default` | - |
| size | Size, can be set to `large` `medium` | *string* | - | - |
| color | Custom color | *string* | - | - |
| plain | Whether to be plain style | *boolean* | `false` | - |
| round | Whether to be round style | *boolean* | `false` | - |
| mark | Whether to be mark style | *boolean* | `false` | - |
| text-color | Text color | *string* | `white` | - |
| closeable | Whether to be closeable | *boolean* | `false` | 2.2.9 |

### Slots

| Name | Description |
|------|------|
| default | Default slot |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
| close | Triggered when click close icon | - |
