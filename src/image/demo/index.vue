<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-row>
        <jy-image
          width="100"
          height="100"
          :src="image"
        />
      </jy-row>
    </demo-block>

    <demo-block :title="$t('fitMode')">
      <jy-row gutter="20">
        <jy-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <jy-image
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </jy-col>
      </jy-row>
    </demo-block>

    <demo-block :title="$t('round')">
      <jy-row gutter="20">
        <jy-col
          v-for="fit in fits"
          span="8"
          :key="fit"
        >
          <jy-image
            round
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </jy-col>
      </jy-row>
    </demo-block>

    <demo-block :title="$t('loading')">
      <jy-row gutter="20">
        <jy-col span="8">
          <jy-image
            width="100%"
            height="27vw"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </jy-col>

        <jy-col span="8">
          <jy-image
            width="100%"
            height="27vw"
          >
            <template #loading>
              <jy-loading
                type="spinner"
                size="20"
              />
            </template>
          </jy-image>
          <div class="text">{{ $t('customTip') }}</div>
        </jy-col>
      </jy-row>
    </demo-block>

    <demo-block :title="$t('error')">
      <jy-row gutter="20">
        <jy-col span="8">
          <jy-image
            width="100%"
            height="27vw"
            src="x"
          />
          <div class="text">{{ $t('defaultTip') }}</div>
        </jy-col>

        <jy-col span="8">
          <jy-image
            width="100%"
            height="27vw"
            src="x"
          >
            <template #error>{{ $t('loadFail') }}</template>
          </jy-image>
          <div class="text">{{ $t('customTip') }}</div>
        </jy-col>
      </jy-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      fitMode: '填充模式',
      round: '圆形图片',
      loading: '加载中提示',
      error: '加载失败提示',
      defaultTip: '默认提示',
      customTip: '自定义提示',
      loadFail: '加载失败'
    },
    'en-US': {
      fitMode: 'Fit Mode',
      round: 'Round',
      loading: 'Loading',
      error: 'Error',
      defaultTip: 'Default Tip',
      customTip: 'Custom Tip',
      loadFail: 'Load failed'
    }
  },

  data() {
    return {
      image: 'https://img.yzcdn.cn/jyt/cat.jpeg',
      fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
    };
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .van-row {
    padding: 0 @padding-md;
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-darker;
    font-size: 14px;
    text-align: center;
  }
}
</style>
