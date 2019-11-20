<template>
  <div>
    <demo-section>
      <jy-notice-bar>{{ $t('tips') }}</jy-notice-bar>
      <demo-block :title="$t('basicUsage')">
        <jy-swipe-cell>
          <template #left>
            <jy-button
              square
              type="primary"
              :text="$t('select')"
            />
          </template>
          <jy-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <jy-button
              square
              type="danger"
              :text="$t('delete')"
            />
            <jy-button
              square
              type="primary"
              :text="$t('collect')"
            />
          </template>
        </jy-swipe-cell>
      </demo-block>

      <demo-block :title="$t('title2')">
        <jy-swipe-cell :on-close="onClose">
          <template #left>
            <jy-button
              square
              type="primary"
              :text="$t('select')"
            />
          </template>
          <jy-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <jy-button
              square
              type="danger"
              :text="$t('delete')"
            />
          </template>
        </jy-swipe-cell>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      select: '选择',
      delete: '删除',
      collect: '收藏',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例'
    },
    'en-US': {
      select: 'Select',
      delete: 'Delete',
      collect: 'Collect',
      title: 'Cell',
      title2: 'Async close',
      confirm: 'Are you sure to delete?',
      tips: 'Please try this demo in mobile mode'
    }
  },

  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: this.$t('confirm')
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe-cell {
  user-select: none;
}
</style>
