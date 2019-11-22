# NoticeBar

### Install

``` javascript
import Vue from 'vue';
import { NoticeBar } from 'jyt';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<jy-notice-bar
  text="Notice Content"
  left-icon="volume-o"
/>
```

### Disable scroll

```html
<jy-notice-bar :scrollable="false">
  Notice Content
</jy-notice-bar>
```

### Wrapable

```html
<jy-notice-bar wrapable :scrollable="false">
  Notice Content
</jy-notice-bar>
```

### Mode

```html
<jy-notice-bar mode="closeable">
  Notice Content
</jy-notice-bar>

<jy-notice-bar mode="link">
  Notice Content
</jy-notice-bar>
```

### Custom Style

```html
<jy-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
>
  Notice Content
</jy-notice-bar>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| mode | Mode, can be set to `closeable` `link` | *string* | `''` | - |
| text | Notice text content | *string* | `''` | - | - |
| delay | Animation delay (s) | *number* | `1` | - |
| speed | Scroll speed (px/s) | *number* | `50` | - |
| scrollable | Whether to scroll content | *boolean* | `true` | - |
| wrapable | Whether to enable text wrap | *boolean* | `false` | - | - |
| left-icon | Left Icon | *string* | - | - |
| color | Text color | *string* | `#f60` | - |
| background | Background color | *string* | `#fff7cc` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click NoticeBar | event: Event |
| close | Triggered when closed | event: Event |

### Slots

| Name | Description |
|------|------|
| default | Notice text content |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
