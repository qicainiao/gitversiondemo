<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-submit-bar
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <jy-submit-bar
        disabled
        :price="3050"
        :button-text="$t('submit')"
        :tip="$t('tip1')"
        tip-icon="info-o"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <jy-submit-bar
        loading
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('adjycedUsage')">
      <jy-submit-bar
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      >
        <jy-checkbox v-model="checked">{{ $t('check') }}</jy-checkbox>
        <template #tip>
          {{ $t('tip2') }}
          <span
            class="edit-address"
            @click="onClickLink"
          >
            {{ $t('tip3') }}
          </span>
        </template>
      </jy-submit-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      submit: '提交订单',
      tip1: '你的收货地址不支持同城送, 我们已为你推荐快递',
      tip2: '你的收货地址不支持同城送, ',
      tip3: '修改地址',
      check: '全选',
      clickButton: '点击按钮',
      clickLink: '修改地址'
    },
    'en-US': {
      submit: 'Submit',
      tip1: 'Some tips',
      tip2: 'Some tips, ',
      tip3: 'Link',
      check: 'Label',
      clickButton: 'Click button',
      clickLink: 'Click Link'
    }
  },

  data() {
    return {
      checked: true
    };
  },

  methods: {
    onClickButton() {
      this.$toast(this.$t('clickButton'));
    },
    onClickLink() {
      this.$toast(this.$t('clickLink'));
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-submit-bar {
  .van-submit-bar {
    position: relative;
  }

  .edit-address {
    color: @blue;
  }

  .van-checkbox {
    margin-left: @padding-sm;
  }
}
</style>
