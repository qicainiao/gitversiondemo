<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-tabbar v-model="active">
        <jy-tabbar-item icon="home-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="search">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="friends-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="setting-o">{{ $t('tab') }}</jy-tabbar-item>
      </jy-tabbar>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <jy-tabbar v-model="activeName">
        <jy-tabbar-item name="home" icon="home-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item name="search" icon="search">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item name="friends" icon="friends-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item name="setting" icon="setting-o">{{ $t('tab') }}</jy-tabbar-item>
      </jy-tabbar>
    </demo-block>

    <demo-block :title="$t('badge')">
      <jy-tabbar v-model="active2">
        <jy-tabbar-item icon="home-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="search" dot>{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="friends-o" info="5">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="setting-o" info="20">{{ $t('tab') }}</jy-tabbar-item>
      </jy-tabbar>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <jy-tabbar v-model="active3">
        <jy-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <template #icon="{ active }">
            <img :src="active ? icon.active : icon.inactive">
          </template>
        </jy-tabbar-item>
        <jy-tabbar-item icon="search">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="setting-o">{{ $t('tab') }}</jy-tabbar-item>
      </jy-tabbar>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <jy-tabbar v-model="active4" active-color="#07c160" inactive-color="#000">
        <jy-tabbar-item icon="home-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="search">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="friends-o">{{ $t('tab') }}</jy-tabbar-item>
        <jy-tabbar-item icon="setting-o">{{ $t('tab') }}</jy-tabbar-item>
      </jy-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      badge: '提示信息',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配'
    },
    'en-US': {
      badge: 'Show Badge',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      activeName: 'home',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
</script>

<style lang="less">
.demo-tabbar {
  .van-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
