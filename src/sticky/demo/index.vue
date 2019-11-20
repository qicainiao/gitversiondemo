<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-sticky>
        <jy-button type="primary" style="margin-left: 15px;">{{ $t('basicUsage') }}</jy-button>
      </jy-sticky>
    </demo-block>

    <demo-block :title="$t('offsetTop')">
      <jy-sticky :offset-top="50">
        <jy-button type="info" style="margin-left: 115px;">{{ $t('offsetTop') }}</jy-button>
      </jy-sticky>
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('setContainer')">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <jy-sticky :container="container">
          <jy-button type="warning" style="margin-left: 215px;">{{ $t('setContainer') }}</jy-button>
        </jy-sticky>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      offsetTop: '吸顶距离',
      setContainer: '指定容器'
    },
    'en-US': {
      offsetTop: 'Offset Top',
      setContainer: 'Set Container'
    }
  },

  data() {
    return {
      container: null
    };
  },

  mounted() {
    this.container = this.$refs.container;
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
