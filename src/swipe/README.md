# Swipe

### Install

``` javascript
import Vue from 'vue';
import { Swipe, SwipeItem } from 'jyt';

Vue.use(Swipe).use(SwipeItem);
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval

```html
<jy-swipe :autoplay="3000" indicator-color="white">
  <jy-swipe-item>1</jy-swipe-item>
  <jy-swipe-item>2</jy-swipe-item>
  <jy-swipe-item>3</jy-swipe-item>
  <jy-swipe-item>4</jy-swipe-item>
</jy-swipe>
```

### Image Lazyload

Use [Lazyload](#/en-US/lazyload) component to lazyload image

```html
<jy-swipe>
  <jy-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </jy-swipe-item>
</jy-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/jyt/apple-1.jpg',
        'https://img.yzcdn.cn/jyt/apple-2.jpg'
      ]
    }
  }
}
```

### change event

```html
<jy-swipe @change="onChange">
  <jy-swipe-item>1</jy-swipe-item>
  <jy-swipe-item>2</jy-swipe-item>
  <jy-swipe-item>3</jy-swipe-item>
  <jy-swipe-item>4</jy-swipe-item>
</jy-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    }
  }
}
```

### Vertical Scrolling

```html
<jy-swipe :autoplay="3000" vertical>
  <jy-swipe-item>1</jy-swipe-item>
  <jy-swipe-item>2</jy-swipe-item>
  <jy-swipe-item>3</jy-swipe-item>
  <jy-swipe-item>4</jy-swipe-item>
</jy-swipe>
```

### Set Swiper Item Size

```html
<jy-swipe :loop="false" :width="300">
  <jy-swipe-item>1</jy-swipe-item>
  <jy-swipe-item>2</jy-swipe-item>
  <jy-swipe-item>3</jy-swipe-item>
  <jy-swipe-item>4</jy-swipe-item>
</jy-swipe>
```

### Custom Indicator

```html
<jy-swipe @change="onChange">
  <jy-swipe-item>1</jy-swipe-item>
  <jy-swipe-item>2</jy-swipe-item>
  <jy-swipe-item>3</jy-swipe-item>
  <jy-swipe-item>4</jy-swipe-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</jy-swipe>
```

```js
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
```

## API

### Swipe Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| autoplay | Autoplay interval (ms) | *number* | - | - |
| duration | Animation duration (ms) | *number* | `500` | - |
| initial-swipe | Index of initial swipe, start from 0 | *number* | `0` | - |
| width | Set Swiper Item Width | *number* | `0` | - |
| height | Set Swiper Item Height | *number* | `0` | - |
| loop | Whether to enable loop | *boolean* | `true` | - |
| show-indicators | Whether to show indicators | *boolean* | `true` | - |
| indicator-color | Indicator color | *string* | `#1989fa` | - |
| vertical | Whether to be vertical Scrolling | *boolean* | `false` | - |
| touchable | Whether to allow swipe by touch gesture | *boolean* | `true` | - |
| stop-propagation | Whether to stop touchmove event propagation | *boolean* | `false` | 2.1.0 |

### Swipe Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe |

### SwipeItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### Swipe Methods

Use ref to get swipe instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| swipeTo | Swipe to target index | index: target index, options: Options | void |

### swipeTo Options

| Name | Description | Type |
|------|------|------|
| immediate | Whether to skip animation | *boolean* |

### Swipe Slots

| Name | Description |
|------|------|
| default | Content |
| indicator | Custom indicator |
