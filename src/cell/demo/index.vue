<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-cell-group>
        <jy-cell :title="$t('cell')" :value="$t('content')" />
        <jy-cell :title="$t('cell')" :value="$t('content')" :label="$t('desc')" />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('largeSize')">
      <jy-cell :title="$t('cell')" :value="$t('content')" size="large" />
      <jy-cell :title="$t('cell')" :value="$t('content')" size="large" :label="$t('desc')" />
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <jy-cell :title="$t('cell')" :value="$t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('valueOnly')">
      <jy-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <jy-cell :title="$t('cell')" is-link />
      <jy-cell :title="$t('cell')" is-link :value="$t('content')" />
      <jy-cell :title="$t('cell')" is-link arrow-direction="down" :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('router')">
      <jy-cell :title="$t('urlRoute')" is-link url="/jyt/mobile.html" />
      <jy-cell :title="$t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="$t('groupTitle')">
      <jy-cell-group :title="`${$t('group')} 1`">
        <jy-cell :title="$t('cell')" :value="$t('content')" />
      </jy-cell-group>
      <jy-cell-group :title="`${$t('group')} 2`">
        <jy-cell :title="$t('cell')" :value="$t('content')" />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('useSlots')">
      <jy-cell :value="$t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ $t('cell') }}</span>
          <jy-tag type="danger">{{ $t('tag') }}</jy-tag>
        </template>
      </jy-cell>

      <jy-cell icon="shop-o" :title="$t('cell')">
        <template #right-icon>
          <jy-icon name="search" style="line-height: inherit;" />
        </template>
      </jy-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      useSlots: '使用插槽'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      useSlots: 'Use Slots'
    }
  }
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
