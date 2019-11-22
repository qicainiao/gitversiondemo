# Sidebar

### Install

``` javascript
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'jyt';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## Usage

### Basic Usage

```html
<jy-sidebar v-model="activeKey">
  <jy-sidebar-item title="Title" />
  <jy-sidebar-item title="Title" />
  <jy-sidebar-item title="Title" />
</jy-sidebar>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
```

### Show Info

```html
<jy-sidebar v-model="activeKey">
  <jy-sidebar-item title="Title" dot />
  <jy-sidebar-item title="Title" info="5" />
  <jy-sidebar-item title="Title" info="99+" />
</jy-sidebar>
```

### Disabled

```html
<jy-sidebar v-model="activeKey">
  <jy-sidebar-item title="Title" />
  <jy-sidebar-item title="Title" disabled />
  <jy-sidebar-item title="Title" />
</jy-sidebar>
```

## API

### Sidebar Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Index of chosen item | *string \| number* | `0` | - |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| title | Content | *string* | `''` | - |
| dot | Whether to show red dot | *boolean* | `false` | 2.2.1 |
| info | Content of the badge | *string \| number* | `''` | - |
| disabled | Whether to be disabled | *boolean* | `false` | 2.2.0 |
| url | Link | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | 2.0.4 |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | 2.0.4 |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |
