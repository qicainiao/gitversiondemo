# Collapse

### Install

``` javascript
import Vue from 'vue';
import { Collapse, CollapseItem } from 'jyt';

Vue.use(Collapse).use(CollapseItem);
```

## Usage

### Basic Usage

Use `v-model` to control the name of active panels

```html
<jy-collapse v-model="activeNames">
  <jy-collapse-item title="Title1" name="1">Content</jy-collapse-item>
  <jy-collapse-item title="Title2" name="2">Content</jy-collapse-item>
  <jy-collapse-item title="Title3" name="3" disabled>Content</jy-collapse-item>
</jy-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### Accordion

In accordion mode, only one panel can be expanded at the same time.

```html
<jy-collapse v-model="activeName" accordion>
  <jy-collapse-item title="Title1" name="1">Content</jy-collapse-item>
  <jy-collapse-item title="Title2" name="2">Content</jy-collapse-item>
  <jy-collapse-item title="Title3" name="3">Content</jy-collapse-item>
</jy-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### Custom title

```html
<jy-collapse v-model="activeNames">
  <jy-collapse-item name="1">
    <div slot="title">Title1 <jy-icon name="question-o" /></div>
    Content
  </jy-collapse-item>
  <jy-collapse-item
    title="Title2"
    name="2"
    icon="shop-o"
  >
    Content
  </jy-collapse-item>
</jy-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Names of current active panels | accordion mode： *string \| number*<br>non-accordion mode：*(string \| number)[]* | - | - |
| accordion | Whether to be accordion mode | *boolean* | `false` | - |
| border | Whether to show outer border | *boolean* | `true` | - |

### Collapse Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when switch panel | activeNames |

### CollapseItem Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Name | *string \| number* | `index` | - |
| icon | Left Icon | *string* | - | - |
| size | Title size，can be set to `large` | *string* | - | - |
| title | Title | *string \| number* | - | - |
| value | Right text | *string \| number* | - | - |
| label | Description below the title | *string* | - | - |
| border | Whether to show inner border | *boolean* | `true` | - |
| disabled | Whether to disabled collapse | *boolean* | `false` | - |
| is-link | Whether to show link icon | *boolean* | `true` | - |
| title-class | Title className | *string* | - | - |
| value-class | Value className | *string* | - | - |
| label-class | Label className | *string* | - | - |

### CollapseItem Slots

| Name | Description |
|------|------|
| default | Content |
| value | Custom value |
| icon | Custom icon |
| title | Custom title |
| right-icon | Custom right icon |
