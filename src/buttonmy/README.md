# Button

### Install

``` javascript
import Vue from 'vue';
import { Button } from 'jyt';

Vue.use(Button);
```

## Usage

### Type

```html
<jy-button type="default">Default</jy-button>
<jy-button type="primary">Primary</jy-button>
<jy-button type="info">Info</jy-button>
<jy-button type="danger">Danger</jy-button>
<jy-button type="warning">Warning</jy-button>
```

### Plain

```html
<jy-button plain type="primary">Primary</jy-button>
<jy-button plain type="info">Danger</jy-button>
```

### Hairline

```html
<jy-button plain hairline type="primary">Hairline</jy-button>
<jy-button plain hairline type="info">Hairline</jy-button>
```

### Disabled

```html
<jy-button disabled type="primary">Diabled</jy-button>
<jy-button disabled type="info">Diabled</jy-button>
```

### Loading

```html 
<jy-button loading type="primary" />
<jy-button loading type="primary" loading-type="spinner" />
<jy-button loading type="info" loading-text="Loading..." />
```

### Shape

```html 
<jy-button square type="primary">Square</jy-button>
<jy-button round type="info">Round</jy-button>
```

### Icon

```html 
<jy-button icon="star-o" type="primary" />
<jy-button icon="star-o" type="primary">Button</jy-button>
<jy-button icon="https://img.yzcdn.cn/jyt/logo.png" type="info">Button</jy-button>
```

### Size

```html 
<jy-button type="primary" size="large">Large</jy-button>
<jy-button type="primary" size="normal">Normal</jy-button>
<jy-button type="primary" size="small">Small</jy-button>
<jy-button type="primary" size="mini">Mini</jy-button>
```

### Route

```html
<jy-button type="primary" url="/jyt/mobile.html">URL</jy-button>
<jy-button type="primary" to="index">Vue Router</jy-button>
```

### Custom Color

```html
<jy-button color="#7232dd">Pure</jy-button>
<jy-button color="#7232dd" plain>Pure</jy-button>
<jy-button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient</jy-button>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | *string* | `default` | - |
| size | Can be set to `large` `small` `mini` | *string* | `normal` | - |
| text | Text | *string* | - | - |
| color | Color, support linear-gradient | *string* | - | 2.1.8 |
| icon | Left Icon | *string* | - | - |
| tag | HTML Tag | *string* | `button` | - |
| native-type | Native Type Attribute | *string* | `''` | - |
| plain | Whether to be plain button | *boolean* | `false` | - |
| block | Whether to set display block | *boolean* | `false` | - |
| round | Whether to be round button | *boolean* | `false` | - |
| square | Whether to be square button | *boolean* | `false` | - |
| disabled | Whether to disable button | *boolean* | `false` | - |
| loading | Whether show loading status | *boolean* | `false` | - |
| loading-text | Loading text | *string* | - | - |
| loading-type | Loading type, can be set to `spinner` | *string* | `circular` | - |
| loading-size | Loading icon size | *string* | `20px` | - |
| url | Link URL | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
