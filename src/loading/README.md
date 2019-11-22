# Loading

### Install

``` javascript
import Vue from 'vue';
import { Loading } from 'jyt';

Vue.use(Loading);
```

## Usage

### Type

```html
<jy-loading />
<jy-loading type="spinner" />
```

### Color

```html
<jy-loading color="#1989fa" />
<jy-loading type="spinner" color="#1989fa" />
```

### Text

```html
<jy-loading size="24px">Loading...</jy-loading>
```

### Vertical

```html
<jy-loading size="24px" vertical>Loading...</jy-loading>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| color | Loading color | *string* | `#c9c9c9` | - |
| type | Can be set to `spinner` | *string* | `circular` | - |
| size | Icon size | *string \| number* | `30px` | - |
| text-size | Text font size | *string \| number* | `14px` | - |
| vertical | Whether to arrange icons and text content vertically | *boolean* | `false` | - |

### Slots

| Name | Description |
|------|------|
| default | Loading text |
