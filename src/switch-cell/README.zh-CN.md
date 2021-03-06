# SwitchCell 开关单元格

### 废弃提示

<b>SwitchCell 组件将在 3.0 版本中废弃</b>，请直接使用 Cell 和 Switch 组件代替

### 引入

``` javascript
import Vue from 'vue';
import { SwitchCell } from 'jyt';

Vue.use(SwitchCell);
```

## 代码演示

### 基础用法

```html
<jy-cell-group>
  <jy-switch-cell v-model="checked" title="标题" />
</jy-cell-group>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```

### 禁用状态

通过`disabled`属性可以将组件设置为禁用状态

```html
<jy-cell-group>
  <jy-switch-cell v-model="checked" disabled title="标题" />
</jy-cell-group>
```

### 加载状态

通过`loading`属性可以将组件设置为加载状态

```html
<jy-cell-group>
  <jy-switch-cell v-model="checked" loading title="标题" />
</jy-cell-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 开关状态 | *any* | `false` | - |
| title | 左侧标题 |  *string* | `''` | - |
| border | 是否展示单元格内边框 | *boolean* | `true` | - |
| cell-size | 单元格大小，可选值为 `large` | *string* | - |
| loading | 是否为加载状态 |  *boolean* | `false` | - |
| disabled | 是否为禁用状态 |  *boolean* | `false` | - |
| size | 开关尺寸 | *string* | `24px` | - |
| active-color | 开关时的背景色 | *string* | `#1989fa` | - |
| inactive-color | 开关时的背景色 | *string* | `#fff` | - |
| active-value | 打开时的值 | *any* | `true` | - |
| inactive-value | 关闭时的值 | *any* | `false` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |
