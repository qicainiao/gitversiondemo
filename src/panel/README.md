# Panel

### Install

``` javascript
import Vue from 'vue';
import { Panel } from 'jyt';

Vue.use(Panel);
```

## Usage

### Basic Usage

```html
<jy-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</jy-panel>
```

### Adjyced Usage

```html
<jy-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <div slot="footer">
    <jy-button size="small">Button</jy-button>
    <jy-button size="small" type="danger">Button</jy-button>
  </div>
</jy-panel>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| icon | Left Icon | *string* | - | - |
| title | Title | *string* | - | - |
| desc | Description | *string* | - | - |
| status | Status | *string* | - | - |

### Slots

| Name | Description |
|------|------|
| default | Default slot |
| header | Custom header |
| footer | Custom footer |
