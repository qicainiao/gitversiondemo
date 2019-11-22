# Overlay

### Install

``` javascript
import Vue from 'vue';
import { Overlay } from 'jyt';

Vue.use(Overlay);
```

## Usage

### Basic Usage

```html
<jy-button type="primary" text="Show Overlay" @click="show = true" />

<jy-overlay :show="show" @click="show = false" />
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

### Embedded Content

```html
<jy-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</jy-overlay>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| show | Whether to show overlay | *boolean* | `false` | - |
| z-index | z-index | *string \| number* | `1` | - |
| duration | Animation duration | *string \| number* | `0.3` | - |
| class-name | ClassName | *string* | - | - |
| custom-class | Custom style | *object* | - | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### Slots

| Name | Description |
|------|------|
| default | Default slot |
