<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-row>
        <jy-col span="8">span: 8</jy-col>
        <jy-col span="8">span: 8</jy-col>
        <jy-col span="8">span: 8</jy-col>
      </jy-row>

      <jy-row>
        <jy-col span="4">span: 4</jy-col>
        <jy-col
          span="10"
          offset="4"
        >
          offset: 4, span: 10
        </jy-col>
      </jy-row>

      <jy-row>
        <jy-col
          offset="12"
          span="12"
        >
          offset: 12, span: 12
        </jy-col>
      </jy-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <jy-row gutter="20">
        <jy-col span="8">span: 8</jy-col>
        <jy-col span="8">span: 8</jy-col>
        <jy-col span="8">span: 8</jy-col>
      </jy-row>
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('title3')"
    >
      <jy-row type="flex">
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
      </jy-row>

      <jy-row
        type="flex"
        justify="center"
      >
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
      </jy-row>

      <jy-row
        type="flex"
        justify="end"
      >
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
      </jy-row>

      <jy-row
        type="flex"
        justify="space-between"
      >
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
      </jy-row>

      <jy-row
        type="flex"
        justify="space-around"
      >
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
        <jy-col span="6">span: 6</jy-col>
      </jy-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局'
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .van-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
