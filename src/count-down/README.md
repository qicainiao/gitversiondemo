# CountDown

### Install

``` javascript
import Vue from 'vue';
import { CountDown } from 'jyt';

Vue.use(CountDown);
```

## Usage

### Basic Usage

```html
<jy-count-down :time="time" />
```

```js
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
}
```

### Custom Format

```html
<jy-count-down
  :time="time"
  format="DD Day, HH:mm:ss"
/>
```

### Millisecond

```html
<jy-count-down
  millisecond
  :time="time"
  format="HH:mm:ss:SSS"
/>
```

### Custom Style

```html
<jy-count-down :time="time">
  <template v-slot="timeData">
    <span class="item">{{ timeData.hours }}</span>
    <span class="item">{{ timeData.minutes }}</span>
    <span class="item">{{ timeData.seconds }}</span>
  </template>
</jy-count-down>

<style>
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
```

### Manual Control

```html
<jy-count-down
  ref="countDown"
  millisecond
  :time="3000"
  :auto-start="false"
  format="ss:SSS"
  @finish="finished"
/>
<jy-grid clickable :column-num="3">
  <jy-grid-item text="Start" icon="play-circle-o" @click="start" />
  <jy-grid-item text="Pause" icon="pause-circle-o" @click="pause" />
  <jy-grid-item text="Reset" icon="replay" @click="reset" />
</jy-grid>
```

```js
export default {
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      this.$toast('Finished');
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| time | Total time | *number* | - | - |
| format | Time format，DD-day，HH-hour，mm-minute，ss-second，SSS-millisecond | *string* | `HH:mm:ss` | - |
| auto-start | Whether to auto start count down | *boolean* | `true` | - |
| millisecond | Whether to enable millisecond render | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| finish | Triggered when count down finished | - |

### Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom Content | timeData |

### timeData Structure

| Name | Description | Type |
|------|------|------|
| days | Remain days | *number* |
| hours | Remain hours | *number* |
| minutes | Remain minutes | *number* |
| seconds | Remain seconds | *number* |
| milliseconds | Remain milliseconds | *number* |

### Methods

Use ref to get CountDown instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| start | Start count down | - | - |
| pause | Pause count down | - | - |
| reset | Reset count down | - | - |
