# Layout

### Intro

Quickly and easily create layouts with `jy-row` and `jy-col`

### Install

``` javascript
import Vue from 'vue';
import { Row, Col } from 'jyt';

Vue.use(Row).use(Col);
```

## Usage

### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```html
<jy-row>
  <jy-col span="8">span: 8</jy-col>
  <jy-col span="8">span: 8</jy-col>
  <jy-col span="8">span: 8</jy-col>
</jy-row>

<jy-row>
  <jy-col span="4">span: 4</jy-col>
  <jy-col span="10" offset="4">offset: 4, span: 10</jy-col>
  <jy-col span="6">span: 6</jy-col>
</jy-row>

<jy-row>
  <jy-col offset="12" span="12">offset: 12, span: 12</jy-col>
</jy-row>
```


### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<jy-row gutter="20">
  <jy-col span="8">span: 8</jy-col>
  <jy-col span="8">span: 8</jy-col>
  <jy-col span="8">span: 8</jy-col>
</jy-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<jy-row type="flex">
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
</jy-row>

<jy-row type="flex" justify="center">
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
</jy-row>

<jy-row type="flex" justify="end">
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
</jy-row>

<jy-row type="flex" justify="space-between">
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
</jy-row>

<jy-row type="flex" justify="space-around">
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
  <jy-col span="6">span: 6</jy-col>
</jy-row>
```

## API

### Row Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| type | Layout type, can be set to `flex` | *string* | - | - |
| gutter | Grid spacing（px） | *string \| number* | - | - |
| tag | Custom element tag | *string* | `div` | - |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | *string* | `start` | - |
| align | Flex cross axis, be set to  center/bottom | *string* | `top` | - |

### Col Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| span | number of column the grid spans | *string \| number* | - | - |
| offset | number of spacing on the left side of the grid | *string \| number* | - | - |
| tag | Custom element tag | *string* | `div` | - |

### Row Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click row | event: Event |

### Col Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click col | event: Event |
