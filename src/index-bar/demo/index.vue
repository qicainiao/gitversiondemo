<template>
  <demo-section>
    <jy-tabs v-model="activeTab" :color="BLUE">
      <jy-tab :title="$t('basicUsage')">
        <jy-index-bar>
          <div
            v-for="index in indexList"
            :key="index"
          >
            <jy-index-anchor :index="index" />
            <jy-cell :title="$t('text')" />
            <jy-cell :title="$t('text')" />
            <jy-cell :title="$t('text')" />
          </div>
        </jy-index-bar>
      </jy-tab>

      <jy-tab :title="$t('customIndexList')">
        <jy-index-bar :index-list="customIndexList">
          <div
            v-for="index in customIndexList"
            :key="index"
          >
            <jy-index-anchor :index="index">
              {{ $t('title') + index }}
            </jy-index-anchor>
            <jy-cell :title="$t('text')" />
            <jy-cell :title="$t('text')" />
            <jy-cell :title="$t('text')" />
          </div>
        </jy-index-bar>
      </jy-tab>
    </jy-tabs>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customIndexList: '自定义索引列表'
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List'
    }
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      BLUE,
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10]
    };
  }
};
</script>
