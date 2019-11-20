<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-cell-group>
        <jy-switch-cell
          v-model="checked"
          :title="$t('title')"
        />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <jy-cell-group>
        <jy-switch-cell
          v-model="checked"
          disabled
          :title="$t('title')"
        />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <jy-cell-group>
        <jy-switch-cell
          v-model="checked"
          loading
          :title="$t('title')"
        />
      </jy-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
