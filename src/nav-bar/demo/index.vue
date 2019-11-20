<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('adjycedUsage')">
      <jy-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        left-arrow
      >
        <template #right>
          <jy-icon name="search" />
        </template>
      </jy-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
