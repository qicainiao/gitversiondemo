<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-collapse v-model="active1">
        <jy-collapse-item :title="$t('title') + 1">{{ $t('text') }}</jy-collapse-item>
        <jy-collapse-item :title="$t('title') + 2">{{ $t('text') }}</jy-collapse-item>
        <jy-collapse-item
          :title="$t('title') + 3"
          disabled
        >
          {{ $t('text') }}
        </jy-collapse-item>
      </jy-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <jy-collapse
        v-model="active2"
        accordion
      >
        <jy-collapse-item :title="$t('title') + 1">{{ $t('text') }}</jy-collapse-item>
        <jy-collapse-item :title="$t('title') + 2">{{ $t('text') }}</jy-collapse-item>
        <jy-collapse-item :title="$t('title') + 3">{{ $t('text') }}</jy-collapse-item>
      </jy-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <jy-collapse v-model="active3">
        <jy-collapse-item>
          <template #title>
            {{ $t('title') + 1 }}<jy-icon name="question-o" />
          </template>
          {{ $t('text') }}
        </jy-collapse-item>
        <jy-collapse-item
          :title="$t('title') + 2"
          :value="$t('content')"
          icon="shop-o"
        >
          {{ $t('text') }}
        </jy-collapse-item>
      </jy-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      text: '代码是写出来给人看的，附带能在机器上运行'
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      text: 'Content'
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .van-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
