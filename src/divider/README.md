# Divider

### Install

``` javascript
import Vue from 'vue';
import { Divider } from 'jyt';

Vue.use(Divider);
```

## Usage

### Basic Usage

```html
<jy-divider />
```

### With Text

```html
<jy-divider>Text</jy-divider>
```

### Content Position

```html
<jy-divider content-position="left">Text</jy-divider>
<jy-divider content-position="right">Text</jy-divider>
```

### Dashed

```html
<jy-divider dashed>Text</jy-divider>
```

### Custom Style

```html
<jy-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  Text
</jy-divider>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| dashed | Whether to use dashed border | *boolean* | `false` | - |
| hairline | Whether to use hairline | *boolean* | `true` | - |
| content-position | Content position，can be set to `left` `right` | *string* | `center` | - |

### Slots

| Name | Description |
|------|------|
| default | content |
