# NavBar

### Install

``` javascript
import Vue from 'vue';
import { NavBar } from 'jyt';

Vue.use(NavBar);
```

## Usage

### Basic Usage

```html
<jy-nav-bar
  title="Title"
  left-text="Back"
  right-text="Button"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      Toast('Back');
    },
    onClickRight() {
      Toast('Button');
    }
  }
}
```

### Adjyced Usage

```html
<jy-nav-bar title="Title" left-text="Back" left-arrow>
  <jy-icon name="search" slot="right" />
</jy-nav-bar>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| title | Title | *string* | `''` | - |
| left-text | Left Text | *string* | `''` | - |
| right-text | Right Text | *string* | `''` | - |
| left-arrow | Whether to show left arrow | *boolean* | `false` | - |
| fixed | Whether to fixed top | *boolean* | `false` | - |
| border | Whether to show bottom border | *boolean* | `true` | - |
| z-index | Z-index | *number* | `1` | - |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| left | Custom left side content |
| right | Custom right side content |

### Events

| Event | Description | Arguments |
|------|------|------|
| click-left | Triggered when click left button | - |
| click-right | Triggered when click right button | - |