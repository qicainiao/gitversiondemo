<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-tabs v-model="active">
        <jy-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <jy-tabs v-model="activeName">
        <jy-tab
          name="a"
          :title="$t('tab') + 1"
        >
          {{ $t('content') }} 1
        </jy-tab>
        <jy-tab
          name="b"
          :title="$t('tab') + 2"
        >
          {{ $t('content') }} 2
        </jy-tab>
        <jy-tab
          name="c"
          :title="$t('tab') + 3"
        >
          {{ $t('content') }} 3
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <jy-tabs>
        <jy-tab
          v-for="index in 8"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <jy-tabs @disabled="onClickDisabled">
        <jy-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <jy-tabs type="card">
        <jy-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <jy-tabs @click="onClick">
        <jy-tab
          v-for="index in 2"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <jy-tabs
        :active="active"
        sticky
      >
        <jy-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('title7')">
      <jy-tabs :active="active">
        <jy-tab
          v-for="index in 2"
          :key="index"
        >
          <template #title>
            <jy-icon name="more-o" />{{ $t('tab') }}
          </template>
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <jy-tabs animated>
        <jy-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>

    <demo-block :title="$t('title9')">
      <jy-tabs
        :active="active"
        swipeable
      >
        <jy-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </jy-tab>
      </jy-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '标签栏滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用',
      matchByName: '通过名称匹配'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled',
      matchByName: 'Match By Name'
    }
  },

  data() {
    return {
      active: 2,
      activeName: 'b',
      tabs: [1, 2, 3, 4]
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 300px;

  .van-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .van-tab__pane {
    padding: 25px 20px;
    background-color: @white;
  }

  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }
}
</style>
