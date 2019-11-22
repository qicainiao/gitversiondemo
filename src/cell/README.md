# Cell

### Install

``` javascript
import Vue from 'vue';
import { Cell, CellGroup } from 'jyt';

Vue.use(Cell).use(CellGroup);
```

## Usage

### Basic Usage

```html
<jy-cell-group>
  <jy-cell title="Cell title" value="Content" />
  <jy-cell title="Cell title" value="Content" label="Description" />
</jy-cell-group>
```

### Size

```html
<jy-cell-group>
  <jy-cell title="Cell title" value="Content" size="large" />
  <jy-cell title="Cell title" value="Content" size="large" label="Description" />
</jy-cell-group>
```

### Left Icon

```html
<jy-cell-group>
  <jy-cell title="Cell title" icon="location-o" />
</jy-cell-group>
```

### Value only

```html
<jy-cell-group>
  <jy-cell value="Content" />
</jy-cell-group>
```

### Link

```html
<jy-cell-group>
  <jy-cell title="Cell title" is-link />
  <jy-cell title="Cell title" is-link value="Content" />
  <jy-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</jy-cell-group>
```

### Router

```html
<jy-cell-group>
  <jy-cell title="URL" is-link url="/jyt/mobile.html" />
  <jy-cell title="Vue Router" is-link to="index" />
</jy-cell-group>
```

### Group Title

```html
<jy-cell-group title="Group 1">
  <jy-cell title="Cell title" value="Content" />
</jy-cell-group>
<jy-cell-group title="Group 2">
  <jy-cell title="Cell title" value="Content" />
</jy-cell-group>
```

### Use Slots

```html
<jy-cell value="Content" is-link>
  <template slot="title">
    <span class="custom-title">Cell title</span>
    <jy-tag type="danger">Tag</jy-tag>
  </template>
</jy-cell>

<jy-cell title="Cell title" icon="shop-o">
  <jy-icon
    slot="right-icon"
    name="search"
    style="line-height: inherit;"
  />
</jy-cell>
```

## API

### CellGroup Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| title | Group title | *string* | - | - |
| border | Whether to show outer border | *boolean* | `true` | - |

### Cell Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| icon | Left Icon | *string* | - | - |
| title | Title | *string \| number* | - | - |
| value | Right text | *string \| number* | - | - |
| label | Description below the title | *string* | - | - |
| size | Size，can be set to `large` | *string* | - | - |
| border | Whether to show inner border | *boolean* | `true` | - |
| center | Whether to center content vertically | *boolean* | `true` | - |
| url | Link URL | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` | - |
| is-link | Whether to show link icon | *boolean* | `false` | - |
| required | Whether to show required mark | *boolean* | `false` | - |
| arrow-direction | Can be set to `left` `up` `down` | *string* | - | - |
| title-style | Title style | *any* | - | - |
| title-class | Title className | *any* | - | - |
| value-class | Value className | *any* | - | - |
| label-class | Label className | *any* | - | - |

### Cell Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click cell | event: Event |

### CellGroup Slots

| Name | Description |
|------|------|
| default | Default slot |
| title | Custom title |

### Cell Slots

| Name | Description |
|------|------|
| default | Custom value |
| icon | Custom icon |
| title | Custom title |
| label | Custom label |
| right-icon | Custom right icon |
