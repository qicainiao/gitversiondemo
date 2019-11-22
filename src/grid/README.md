# Grid

### Install

``` javascript
import Vue from 'vue';
import { Grid, GridItem } from 'jyt';

Vue.use(Grid).use(GridItem);
```

## Usage

### Basic Usage

```html
<jy-grid>
  <jy-grid-item icon="photo-o" text="Text" />
  <jy-grid-item icon="photo-o" text="Text" />
  <jy-grid-item icon="photo-o" text="Text" />
  <jy-grid-item icon="photo-o" text="Text" />
</jy-grid>
```

### Column Num

```html
<jy-grid :column-num="3">
  <jy-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</jy-grid>
```

### Custom Content

```html
<jy-grid :border="false" :column-num="3">
  <jy-grid-item>
    <jy-image src="https://img.yzcdn.cn/jyt/apple-1.jpg" />
  </jy-grid-item>
  <jy-grid-item>
    <jy-image src="https://img.yzcdn.cn/jyt/apple-2.jpg" />
  </jy-grid-item>
  <jy-grid-item>
    <jy-image src="https://img.yzcdn.cn/jyt/apple-3.jpg" />
  </jy-grid-item>
</jy-grid>
```

### Square

```html
<jy-grid square>
  <jy-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</jy-grid>
```

### Gutter

```html
<jy-grid :gutter="10">
  <jy-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</jy-grid>
```

### Route

```html
<jy-grid clickable :column-num="2">
  <jy-grid-item icon="home-o" text="Vue Router" to="/" />
  <jy-grid-item icon="search" text="URL" url="/jyt/mobile.html" />
</jy-grid>
```

### Show Info

```html
<jy-grid :column-num="2">
  <jy-grid-item icon="home-o" text="Text" dot />
  <jy-grid-item icon="search" text="Text" info="99+" />
</jy-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| column-num | Column Num | *number* | `4` | 2.0.4 |
| gutter | Gutter | *string \| number* | `0` | - |
| border | Whether to show border | *boolean* | `true` | - |
| center | Whether to center content | *boolean* | `true` | - |
| square | Whether to be square shape | *boolean* | `false` | - |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` | - |
| icon-size | Icon size | *string \| number* | `28px` | 2.2.6 |

### GridItem Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| text | Text | *string* | - | - |
| icon | Icon name or URL | *string* | - | - |
| dot | Whether to show red dot | *boolean* | `false` | 2.2.1 |
| info | Content of the badge | *string \| number* | `''` | 2.2.1 |
| url | Link URL | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |

### GridItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### GridItem Slots

| Name | Description |
|------|------|
| default | Custom content |
| icon | Custom icon |
| text | Custom text |
