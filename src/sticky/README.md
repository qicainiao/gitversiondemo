# Sticky

### Install

``` javascript
import Vue from 'vue';
import { Sticky } from 'jyt';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<jy-sticky>
  <jy-button type="primary">Basic Usage</jy-button>
</jy-sticky>
```

### Offset Top

```html
<jy-sticky :offset-top="50">
  <jy-button type="info">Offset Top</jy-button>
</jy-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <jy-sticky :container="container">
    <jy-button type="warning">Set Container</jy-button>
  </jy-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| offset-top | Offset top | *number* | `0` | - |
| z-index | z-index when sticky | *number* | `99` | - |
| container | Container DOM | *HTMLElement* | - | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
