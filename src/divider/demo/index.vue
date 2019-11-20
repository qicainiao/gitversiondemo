<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-divider />
    </demo-block>

    <demo-block :title="$t('withText')">
      <jy-divider>
        {{ $t('text') }}
      </jy-divider>
    </demo-block>

    <demo-block :title="$t('contentPosition')">
      <jy-divider content-position="left">
        {{ $t('text') }}
      </jy-divider>

      <jy-divider content-position="right">
        {{ $t('text') }}
      </jy-divider>
    </demo-block>

    <demo-block :title="$t('dashed')">
      <jy-divider
        dashed
        :hairline="false"
      >
        {{ $t('text') }}
      </jy-divider>
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <jy-divider :style="{ borderColor: BLUE, color: BLUE, padding: '0 16px' }">
        {{ $t('text') }}
      </jy-divider>
    </demo-block>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      dashed: '虚线',
      withText: '展示文本',
      contentPosition: '内容位置',
      customStyle: '自定义样式'
    },
    'en-US': {
      text: 'Text',
      dashed: 'Dashed',
      withText: 'With Text',
      contentPosition: 'Content Position',
      customStyle: 'Custom Style'
    }
  },

  data() {
    return {
      BLUE
    };
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-divider {
  background-color: @white;

  .van-doc-demo-block__title {
    padding-top: @padding-md;
  }
}
</style>
