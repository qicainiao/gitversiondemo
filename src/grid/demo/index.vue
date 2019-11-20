<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-grid>
        <jy-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="$t('text')" />
      </jy-grid>
    </demo-block>

    <demo-block :title="$t('columnNum')">
      <jy-grid :column-num="3">
        <jy-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="$t('text')" />
      </jy-grid>
    </demo-block>

    <demo-block :title="$t('customContent')">
      <jy-grid :border="false" :column-num="3">
        <jy-grid-item>
          <jy-image fit="contain" src="https://img.yzcdn.cn/jyt/apple-1.jpg" />
        </jy-grid-item>
        <jy-grid-item>
          <jy-image fit="contain" src="https://img.yzcdn.cn/jyt/apple-2.jpg" />
        </jy-grid-item>
        <jy-grid-item>
          <jy-image fit="contain" src="https://img.yzcdn.cn/jyt/apple-3.jpg" />
        </jy-grid-item>
      </jy-grid>
    </demo-block>

    <demo-block :title="$t('square')">
      <jy-grid square>
        <jy-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="$t('text')" />
      </jy-grid>
    </demo-block>

    <demo-block :title="$t('gutter')">
      <jy-grid :gutter="10">
        <jy-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="$t('text')" />
      </jy-grid>
    </demo-block>

    <demo-block :title="$t('route')">
      <jy-grid clickable :column-num="2">
        <jy-grid-item icon="home-o" :text="$t('vueRoute')" to="/" />
        <jy-grid-item icon="search" :text="$t('urlRoute')" url="/jyt/mobile.html" />
      </jy-grid>
    </demo-block>

    <demo-block :title="$t('showInfo')">
      <jy-grid :column-num="2">
        <jy-grid-item icon="home-o" :text="$t('text')" dot />
        <jy-grid-item icon="search" :text="$t('text')" info="99+" />
      </jy-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      showInfo: '提示信息'
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      showInfo: 'Show Info'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
</style>
