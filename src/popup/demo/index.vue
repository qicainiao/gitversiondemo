<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-cell :title="$t('buttonBasic')" is-link @click="showBasic = true" />
      <jy-popup v-model="showBasic" :style="{ padding: '30px 50px' }">{{ $t('content') }}</jy-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <jy-cell :title="$t('buttonTop')" is-link @click="showTop = true" />
      <jy-cell :title="$t('buttonBottom')" is-link @click="showBottom = true" />
      <jy-cell :title="$t('buttonLeft')" is-link @click="showLeft = true" />
      <jy-cell :title="$t('buttonRight')" is-link @click="showRight = true" />

      <jy-popup v-model="showTop" position="top" :style="{ height: '20%' }" />
      <jy-popup v-model="showBottom" position="bottom" :style="{ height: '20%' }" />
      <jy-popup v-model="showLeft" position="left" :style="{ width: '20%', height: '100%' }" />
      <jy-popup v-model="showRight" position="right" :style="{ width: '20%', height: '100%' }" />
    </demo-block>

    <demo-block :title="$t('closeIcon')">
      <jy-cell :title="$t('closeIcon')" is-link @click="showCloseIcon = true" />
      <jy-cell :title="$t('customCloseIcon')" is-link @click="showCustomCloseIcon = true" />
      <jy-cell :title="$t('customIconPosition')" is-link @click="showCustomIconPosition = true" />

      <jy-popup v-model="showCloseIcon" closeable position="bottom" :style="{ height: '20%' }" />
      <jy-popup
        v-model="showCustomCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '20%' }"
      />
      <jy-popup
        v-model="showCustomIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '20%' }"
      />
    </demo-block>

    <demo-block :title="$t('roundCorner')">
      <jy-cell :title="$t('roundCorner')" is-link @click="showRoundCorner = true" />
      <jy-popup v-model="showRoundCorner" round position="bottom" :style="{ height: '20%' }" />
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('getContainer')">
      <jy-cell :title="$t('getContainer')" is-link @click="showGetContainer = true" />
      <jy-popup v-model="showGetContainer" get-container="body" :style="{ padding: '30px 50px' }" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      buttonBasic: '展示弹出层',
      buttonTop: '顶部弹出',
      buttonBottom: '底部弹出',
      buttonLeft: '左侧弹出',
      buttonRight: '右侧弹出',
      getContainer: '指定挂载节点',
      roundCorner: '圆角弹窗',
      closeIcon: '关闭图标',
      customCloseIcon: '自定义图标',
      customIconPosition: '图标位置'
    },
    'en-US': {
      position: 'Position',
      buttonBasic: 'Show Popup',
      buttonTop: 'From Top',
      buttonBottom: 'From Bottom',
      buttonLeft: 'From Left',
      buttonRight: 'From Right',
      getContainer: 'Get Container',
      roundCorner: 'Round Corner',
      closeIcon: 'Close Icon',
      customCloseIcon: 'Custom Icon',
      customIconPosition: 'Icon Position'
    }
  },

  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showCloseIcon: false,
      showRoundCorner: false,
      showGetContainer: false,
      showCustomCloseIcon: false,
      showCustomIconPosition: false
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .van-row {
    margin-bottom: @padding-md;
  }

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
