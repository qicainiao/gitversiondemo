<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <jy-button type="default">{{ $t('default') }}</jy-button>
        <jy-button type="primary">{{ $t('primary') }}</jy-button>
        <jy-button type="info">{{ $t('info') }}</jy-button>
      </div>
      <jy-button type="danger">{{ $t('danger') }}</jy-button>
      <jy-button type="warning">{{ $t('warning') }}</jy-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <jy-button plain type="primary" :text="$t('plain')" />
      <jy-button plain type="info" :text="$t('plain')" />
    </demo-block>

    <demo-block :title="$t('hairline')">
      <jy-button plain hairline type="primary" :text="$t('hairlineButton')" />
      <jy-button plain hairline type="info" :text="$t('hairlineButton')" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <jy-button disabled type="primary" :text="$t('disabled')" />
      <jy-button disabled type="info" :text="$t('disabled')" />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <jy-button loading type="primary" />
      <jy-button loading type="primary" loading-type="spinner" />
      <jy-button loading :loading-text="$t('loadingText')" type="info" />
    </demo-block>

    <demo-block :title="$t('shape')">
      <jy-button type="primary" square :text="$t('square')" />
      <jy-button type="info" round :text="$t('round')" />
    </demo-block>

    <demo-block :title="$t('icon')">
      <jy-button type="primary" icon="star-o" />
      <jy-button type="primary" icon="star-o" :text="$t('button')" />
      <jy-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/jyt/logo.png"
        :text="$t('button')"
      />
    </demo-block>

    <demo-block :title="$t('size')">
      <jy-button type="primary" size="large">{{ $t('large') }}</jy-button>
      <jy-button type="primary" size="normal">{{ $t('normal') }}</jy-button>
      <jy-button type="primary" size="small">{{ $t('small') }}</jy-button>
      <jy-button type="primary" size="mini">{{ $t('mini') }}</jy-button>
    </demo-block>

    <demo-block :title="$t('router')">
      <jy-button :text="$t('urlRoute')" type="primary" url="/jyt/mobile.html" />
      <jy-button :text="$t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="$t('customColor')">
      <jy-button color="#7232dd" :text="$t('pure')" />
      <jy-button plain color="#7232dd" :text="$t('pure')" />
      <jy-button color="linear-gradient(to right, #4bb0ff, #6149f6)" :text="$t('gradient')" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型aaaaaaa',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      pure: '单色按钮',
      gradient: '渐变色按钮'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      pure: 'Pure',
      gradient: 'Gradient'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-button {
  .jy-button {
    &--large {
      margin-bottom: @padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }

  .jy-doc-demo-block {
    padding: 0 @padding-md;
  }

  .jy-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
