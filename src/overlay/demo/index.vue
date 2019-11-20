<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-button
        type="primary"
        :text="$t('showOverlay')"
        style="margin-left: 16px;"
        @click="show = true"
      />

      <jy-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block :title="$t('embeddedContent')">
      <jy-button
        type="primary"
        :text="$t('embeddedContent')"
        style="margin-left: 16px;"
        @click="showEmbedded = true"
      />

      <jy-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block" />
        </div>
      </jy-overlay>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showOverlay: '显示遮罩层',
      embeddedContent: '嵌入内容'
    },
    'en-US': {
      showOverlay: 'Show Overlay',
      embeddedContent: 'Embedded Content'
    }
  },

  data() {
    return {
      show: false,
      showEmbedded: false
    };
  }
};
</script>

<style lang="less">
.demo-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
}
</style>
