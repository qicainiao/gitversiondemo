# Card

### Install

``` javascript
import Vue from 'vue';
import { Card } from 'jyt';

Vue.use(Card);
```

## Usage

### Basic Usage

```html
<jy-card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img.yzcdn.cn/jyt/t-thirt.jpg"
/>
```

### Discount Info

```html
<jy-card
  num="2"
  tag="Tag"
  price="2.00"
  title="Title"
  desc="Description"
  origin-price="10.00"
  thumb="https://img.yzcdn.cn/jyt/t-thirt.jpg"
/>
```

### Custom Content

Use slot to custom content.

```html
<jy-card
  num="2"
  title="Title"
  desc="Description"  
  price="2.00"
  thumb="https://img.yzcdn.cn/jyt/t-thirt.jpg"
>
  <div slot="tags">
    <jy-tag plain type="danger">Tag</jy-tag>
    <jy-tag plain type="danger">Tag</jy-tag>
  </div>
  <div slot="footer">
    <jy-button size="mini">Button</jy-button>
    <jy-button size="mini">Button</jy-button>
  </div>
</jy-card>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| thumb | Left thumb image URL | *string* | - | - |
| title | Title | *string* | - | - |
| desc | Description | *string* | - | - |
| tag | Tag | *string* | - | - |
| num | number | *string \| number* | - | - |
| price | Price | *string \| number* | - | - |
| origin-price | Origin price | *string \| number* | - | - |
| centered | Whether content vertical centered | *boolean* | `false` | - |
| currency | Currency symbol |  *string* | `¥` | - |
| thumb-link | Thumb link URL | *string* | - | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
| click-thumb | Triggered when thumb clicked | event: Event |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| desc | Custom description |
| num | Custom num |
| price | Custom price |
| origin-price | Custom origin price |
| bottom | Custom price bottom |
| thumb | Custom thumb |
| tag | Custom thumb tag |
| tags | Custom tags |
| footer | Custom footer |
