<template>
  <demo-section>
    <jy-grid :column-num="2" :border="false">
      <jy-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('basicUsage') }}</h3>
        <jy-sidebar v-model="activeKey1">
          <jy-sidebar-item :title="$t('title')" />
          <jy-sidebar-item :title="$t('title')" />
          <jy-sidebar-item :title="$t('title')" />
        </jy-sidebar>
      </jy-grid-item>

      <jy-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('showInfo') }}</h3>
        <jy-sidebar v-model="activeKey2">
          <jy-sidebar-item :title="$t('title')" dot />
          <jy-sidebar-item :title="$t('title')" info="5" />
          <jy-sidebar-item :title="$t('title')" info="99+" />
        </jy-sidebar>
      </jy-grid-item>

      <jy-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('disabled') }}</h3>
        <jy-sidebar v-model="activeKey3">
          <jy-sidebar-item :title="$t('title')" />
          <jy-sidebar-item :title="$t('title')" disabled />
          <jy-sidebar-item :title="$t('title')" />
        </jy-sidebar>
      </jy-grid-item>
    </jy-grid>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名',
      showInfo: '提示信息',
      disabled: '禁用选项'
    },
    'en-US': {
      showInfo: 'Show Info',
      disabled: 'Disabled'
    }
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  background-color: @white;

  .van-sidebar {
    margin-left: @padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: @gray-dark;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
