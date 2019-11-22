# SwitchCell

### Deprecate Tip

The SwitchCell component will be deprecated in version 3.0. Please use the Cell and Switch components instead.

### Install

``` javascript
import Vue from 'vue';
import { SwitchCell } from 'jyt';

Vue.use(SwitchCell);
```

## Usage

### Basic Usage

```html
<jy-cell-group>
  <jy-switch-cell v-model="checked" title="Title" />
</jy-cell-group>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```

### Disabled

use `disabled` property to disable the component

```html
<jy-cell-group>
  <jy-switch-cell v-model="checked" disabled title="Title" />
</jy-cell-group>
```

### Loading

use `loading` property to keep component in loading state

```html
<jy-cell-group>
  <jy-switch-cell v-model="checked" loading title="Title" />
</jy-cell-group>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | on-off state of the switch | *any* | `false` | - |
| title | the left side title | *string* | `''` | - |
| border | whether to show cell border | *boolean* | `true` | - |
| cell-size | Cell size，can be set to `large` | *string* | - | - |
| loading | whether switch is loading | *boolean* | `false` | - |
| disabled | whether to disable switch | *boolean* | `false` | - |
| size | Size of switch | *string* | `24px` | - |
| active-color | Background of switch color when active | *string* | `#1989fa` | - |
| inactive-color | Background of switch color when inactive | *string* | `#fff` | - |
| active-value | Value when active | *any* | `true` | - |
| inactive-value | Value when inactive | *any* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | triggered when the on-off state is changed | checked: switch is on or not |
