# Radio

### Install

``` javascript
import Vue from 'vue';
import { RadioGroup, Radio } from 'jyt';

Vue.use(RadioGroup);
Vue.use(Radio);
```

## Usage

### Basic Usage

Use `v-model` to bind the name of checked radio

```html
<jy-radio-group v-model="radio">
  <jy-radio name="1">Radio 1</jy-radio>
  <jy-radio name="2">Radio 2</jy-radio>
</jy-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

### Disabled

```html
<jy-radio-group v-model="radio" disabled>
  <jy-radio name="1">Radio 1</jy-radio>
  <jy-radio name="2">Radio 2</jy-radio>
</jy-radio-group>
```

### Custom Color

```html
<jy-radio-group v-model="radio">
  <jy-radio name="1" checked-color="#07c160">Radio 1</jy-radio>
  <jy-radio name="2" checked-color="#07c160">Radio 2</jy-radio>
</jy-radio-group>
```

### Custom Icon

Use icon slot to custom icon

```html
<jy-radio-group v-model="radio">
  <jy-radio name="1">
    Radio 1
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? activeIcon : inactiveIcon"
    >
  </jy-radio>
  <jy-radio name="2">
    Radio 2
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? activeIcon : inactiveIcon"
    >
  </jy-radio>
</jy-radio-group>
```

```js
export default {
  data() {
    return {
      radio: '1',
      activeIcon: 'https://img.yzcdn.cn/jyt/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/jyt/user-inactive.png'
    };
  }
};
```

### Inside a Cell

```html
<jy-radio-group v-model="radio">
  <jy-cell-group>
    <jy-cell title="Radio 1" clickable @click="radio = '1'">
      <jy-radio slot="right-icon" name="1" />
    </jy-cell>
    <jy-cell title="Radio 2" clickable @click="radio = '2'">
      <jy-radio slot="right-icon" name="2" />
    </jy-cell>
  </jy-cell-group>
</jy-radio-group>
```

## API

### Radio Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Radio name | *any* | - | - |
| shape | Can be set to `square` | *string* | `round` | - |
| disabled | Whether to disable radio | *boolean* | `false` | - |
| label-disabled | Whether to disable label click | *boolean* | `false` | - |
| label-position | Can be set to `left` | *string* | `right` | - |
| icon-size | Icon size | *string \| number* | `20px` | - |
| checked-color | Checked color | *string* | `#1989fa` | - | - |

### RadioGroup Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Name of checked radio | *any* | - | - |
| disabled | Disable all radios | *boolean* | `false` | - |
| icon-size | Icon size of all radios | *string \| number* | `20px` | 2.2.3 |
| checked-color | Checked color of all radios | *string* | `#1989fa` | - | 2.2.3 |

### Radio Events

| Event | Description | Parameters |
|------|------|------|
| click | Triggered when click radio | event: Event |

### RadioGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Radio Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |
