# GoodsAction

### Install

``` javascript
import Vue from 'vue';
import {
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon
} from 'jyt';

Vue
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);
```

## Usage

### Basic Usage

```html
<jy-goods-action>
  <jy-goods-action-icon icon="chat-o" text="Icon1" @click="onClickIcon" />
  <jy-goods-action-icon icon="cart-o" text="Icon2" @click="onClickIcon" />
  <jy-goods-action-button type="warning" text="Button1" @click="onClickButton" />
  <jy-goods-action-button type="danger" text="Button2" @click="onClickButton" />
</jy-goods-action>
```

```javascript
export default {
  methods: {
    onClickIcon() {
      Toast('Click Icon');
    },
    onClickButton() {
      Toast('Click Button');
    }
  }
}
```

### Icon info

Use `info` prop to show badge in icon

```html
<jy-goods-action>
  <jy-goods-action-icon icon="chat-o" text="Icon1" />
  <jy-goods-action-icon icon="cart-o" text="Icon2" info="5" />
  <jy-goods-action-icon icon="shop-o" text="Icon3" info="12" />
  <jy-goods-action-button type="warning" text="Button1" />
  <jy-goods-action-button type="danger" text="Button2" />
</jy-goods-action>
```

### Custom Button Color

```html
<jy-goods-action>
  <jy-goods-action-icon icon="chat-o" text="Icon1" />
  <jy-goods-action-icon icon="shop-o" text="Icon2" />
  <jy-goods-action-button color="#be99ff" type="warning" text="Button1" />
  <jy-goods-action-button color="#7232dd" type="danger" text="Button2" />
</jy-goods-action>
```

## API

### GoodsAction Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `false` | - |

### GoodsActionIcon Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| text | Button text | *string* | - | - |
| icon | Icon | *string* | - | - |
| icon-class | Icon class name | *any* | `''` | - |
| info | Content of the badge | *string \| number* | - | - |
| url | Link | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |

### GoodsActionButton Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| text | Button text | *string* | - | - |
| type | Button type, Can be set to `primary` `info` `warning` `danger` | *string* | `default` | - |
| color | Button color, support linear-gradient | *string* | - | 2.1.8 |
| primary | Is primary button (red color) | *boolean* | `false` | - |
| disabled | Whether to disable button | *boolean* | `false` | - |
| loading | Whether show loading status | *boolean* | `false` | - |
| url | Link | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |

### GoodsActionIcon Slots

| Name | Description |
|------|------|
| default | Text |
| icon | Custom icon |

### GoodsActionButton Slots

| Name | Description |
|------|------|
| default | Button content |
