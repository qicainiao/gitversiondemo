<template>
  <demo-section name="pull-refresh">
    <jy-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <demo-block :title="$t('basicUsage')">
        <p>{{ $t('text') }}: {{ count }}</p>
      </demo-block>
    </jy-pull-refresh>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '刷新次数',
      success: '刷新成功'
    },
    'en-US': {
      text: 'Refresh Count',
      success: 'Refresh success'
    }
  },

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast(this.$t('success'));
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-pull-refresh {
  background-color: @white;

  .van-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px);
    }
  }

  p {
    margin: @padding-xs 0 0 @padding-md;
  }
}
</style>
