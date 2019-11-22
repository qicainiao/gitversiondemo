# Steps

### Install

``` javascript
import Vue from 'vue';
import { Step, Steps } from 'jyt';

Vue.use(Step).use(Steps);
```

## Usage

### Basic Usage

```html
<jy-steps :active="active">
  <jy-step>Step1</jy-step>
  <jy-step>Step2</jy-step>
  <jy-step>Step3</jy-step>
  <jy-step>Step4</jy-step>
</jy-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

### Custom Style

```html
<jy-steps
  :active="active"
  active-icon="success"
  active-color="#38f"
>
  <jy-step>Step1</jy-step>
  <jy-step>Step2</jy-step>
  <jy-step>Step3</jy-step>
  <jy-step>Step4</jy-step>
</jy-steps>
```

### Vertical Steps

```html
<jy-steps direction="vertical" :active="0">
  <jy-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </jy-step>
  <jy-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </jy-step>
  <jy-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </jy-step>
</jy-steps>
```

## API

### Steps Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| active | Active step | *number* | 0 | - |
| description | Description | *string* | - | - |
| direction | Can be set to `vertical` | *string* | `horizontal` | - |
| active-color | Active step color | *string* | `#07c160` | - |
| active-icon | Active icon name | *string* | `checked` | - |
| inactive-icon | Active icon name | *string* | - | - |

### Step Slots

| Name | Description |
|------|------|
| active-icon | Custom active icon |
| inactive-icon | Custom inactive icon |
