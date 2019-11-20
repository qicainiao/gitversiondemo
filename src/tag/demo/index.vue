<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-tag>{{ $t('tag') }}</jy-tag>
      <jy-tag type="primary">{{ $t('tag') }}</jy-tag>
      <jy-tag type="success">{{ $t('tag') }}</jy-tag>
      <jy-tag type="danger">{{ $t('tag') }}</jy-tag>
      <jy-tag type="warning">{{ $t('tag') }}</jy-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <jy-tag round>{{ $t('tag') }}</jy-tag>
      <jy-tag round type="primary">{{ $t('tag') }}</jy-tag>
      <jy-tag round type="success">{{ $t('tag') }}</jy-tag>
      <jy-tag round type="danger">{{ $t('tag') }}</jy-tag>
      <jy-tag round type="warning">{{ $t('tag') }}</jy-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <jy-tag mark>{{ $t('tag') }}</jy-tag>
      <jy-tag mark type="primary">{{ $t('tag') }}</jy-tag>
      <jy-tag mark type="success">{{ $t('tag') }}</jy-tag>
      <jy-tag mark type="danger">{{ $t('tag') }}</jy-tag>
      <jy-tag mark type="warning">{{ $t('tag') }}</jy-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <jy-tag plain>{{ $t('tag') }}</jy-tag>
      <jy-tag plain type="primary">{{ $t('tag') }}</jy-tag>
      <jy-tag plain type="success">{{ $t('tag') }}</jy-tag>
      <jy-tag plain type="danger">{{ $t('tag') }}</jy-tag>
      <jy-tag plain type="warning">{{ $t('tag') }}</jy-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <jy-tag color="#f2826a">{{ $t('tag') }}</jy-tag>
      <jy-tag color="#f2826a" plain>{{ $t('tag') }}</jy-tag>
      <jy-tag color="#7232dd">{{ $t('tag') }}</jy-tag>
      <jy-tag color="#7232dd" plain>{{ $t('tag') }}</jy-tag>
      <jy-tag color="#ffe1e1" text-color="#ad0000">{{ $t('tag') }}</jy-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <jy-tag type="success">{{ $t('tag') }}</jy-tag>
      <jy-tag type="success" size="medium">{{ $t('tag') }}</jy-tag>
      <jy-tag type="success" size="large">{{ $t('tag') }}</jy-tag>
    </demo-block>

    <demo-block :title="$t('closeable')">
      <jy-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ $t('tag') }}
      </jy-tag>
      <jy-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ $t('tag') }}
      </jy-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小'
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size'
    }
  },

  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .van-tag + .van-tag {
    margin-left: @padding-xs;
  }

  .van-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
