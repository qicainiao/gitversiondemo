<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-panel
        :title="$t('title')"
        :desc="$t('desc')"
        :status="$t('status')"
      >
        <div>{{ $t('content') }}</div>
      </jy-panel>
    </demo-block>

    <demo-block :title="$t('adjycedUsage')">
      <jy-panel
        :title="$t('title')"
        :desc="$t('desc')"
        :status="$t('status')"
      >
        <div>{{ $t('content') }}</div>
        <template #footer>
          <jy-button size="small">{{ $t('button') }}</jy-button>
          <jy-button
            size="small"
            type="danger"
          >
            {{ $t('button') }}
          </jy-button>
        </template>
      </jy-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .van-panel__footer {
    text-align: right;

    .van-button {
      margin-left: 5px;
    }
  }

  .van-panel__content {
    padding: 20px;
  }
}
</style>
