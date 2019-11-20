<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-card
        num="2"
        price="2.00"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="$t('discountInfo')">
      <jy-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="$t('tag')"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="$t('customContent')">
      <jy-card
        num="2"
        price="2.00"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      >
        <template #tags>
          <div>
            <jy-tag
              plain
              type="danger"
              style="margin-right: 5px;"
            >
              标签
            </jy-tag>
            <jy-tag
              plain
              type="danger"
            >
              标签
            </jy-tag>
          </div>
        </template>

        <template #footer>
          <div>
            <jy-button
              round
              size="mini"
            >
              {{ $t('button') }}
            </jy-button>
            <jy-button
              round
              size="mini"
            >
              {{ $t('button') }}
            </jy-button>
          </div>
        </template>
      </jy-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '商品名称',
      discountInfo: '营销信息',
      customContent: '自定义内容'
    },
    'en-US': {
      discountInfo: 'Discount Info',
      customContent: 'Custom Content'
    }
  },

  data() {
    return {
      imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-card {
  background-color: @white;
}
</style>
