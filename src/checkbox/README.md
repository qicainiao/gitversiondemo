# Checkbox

### Install

``` javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'jyt';

Vue.use(Checkbox).use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<jy-checkbox v-model="checked">Checkbox</jy-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

### Disabled

```html
<jy-checkbox v-model="checked" disabled>Checkbox</jy-checkbox>
```

### Custom Shape

```html
<jy-checkbox v-model="checked" shape="square">Checkbox</jy-checkbox>
```

### Custom Color

```html
<jy-checkbox v-model="checked" checked-color="#07c160">Checkbox</jy-checkbox>
```

### Custom Icon

Use icon slot to custom icon

```html
<jy-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? activeIcon : inactiveIcon"
  >
</jy-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      activeIcon: 'https://img.yzcdn.cn/jyt/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/jyt/user-inactive.png'
    };
  }
};
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<jy-checkbox-group v-model="result">
  <jy-checkbox name="a">Checkbox a</jy-checkbox>
  <jy-checkbox name="b">Checkbox b</jy-checkbox>
  <jy-checkbox name="c">Checkbox c</jy-checkbox>
</jy-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      result: ['a', 'b']
    };
  }
};
```

### Maximum amount of checked options

```html
<jy-checkbox-group v-model="result" :max="2">
  <jy-checkbox name="a">Checkbox a</jy-checkbox>
  <jy-checkbox name="b">Checkbox b</jy-checkbox>
  <jy-checkbox name="c">Checkbox c</jy-checkbox>
</jy-checkbox-group>
```

### Toggle All

```html
<jy-checkbox-group v-model="result" ref="checkboxGroup">
  <jy-checkbox name="a">Checkbox a</jy-checkbox>
  <jy-checkbox name="b">Checkbox b</jy-checkbox>
  <jy-checkbox name="c">Checkbox c</jy-checkbox>
</jy-checkbox-group>

<jy-button type="primary" @click="checkAll">Check All</jy-button>
<jy-button type="info" @click="toggleAll">Toggle All</jy-button>
```

```js
export default {
  data() {
    return {
      result: []
    }
  },

  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    }
  }
}
```

### Inside a Cell

```html
<jy-checkbox-group v-model="result">
  <jy-cell-group>
    <jy-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <jy-checkbox
        :name="item"
        ref="checkboxes"
        slot="right-icon"
      />
    </jy-cell>
  </jy-cell-group>
</jy-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Checkbox name | *any* | - | - |
| shape | Can be set to `square` | *string* | `round` | - |
| v-model | Check status | *boolean* | `false` | - |
| disabled | Disable checkbox | *boolean* | `false` | - |
| label-disabled | Whether to disable label click | *boolean* | `false` | - |
| label-position | Can be set to `left` | *string* | `right` | - |
| icon-size | Icon size | *string \| number* | `20px` | - |
| checked-color | Checked color | *string* | `#1989fa` | - | - |
| bind-group | Whether to bind with CheckboxGroup | *boolean* | `true` | 2.2.4 |

### CheckboxGroup Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Names of all checked checkboxes | *any[]* | - | - |
| max | Maximum amount of checked options | *number* | `0`(Unlimited) | - |
| disabled | Disable all checkboxes | *boolean* | `false` | - |
| icon-size | Icon size of all checkboxes | *string \| number* | `20px` | 2.2.3 |
| checked-color | Checked color of all checkboxes | *string* | `#1989fa` | - | 2.2.3 |

### Checkbox Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
| click | Triggered when click checkbox | event: Event |

### CheckboxGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Checkbox Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |

### CheckboxGroup Methods

Use ref to get CheckboxGroup instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| toggleAll | Toggle check status of all checkboxes | checked?: boolean | - |

### Checkbox Methods

Use ref to get Checkbox instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| toggle | Toggle check status | checked?: boolean | - |
