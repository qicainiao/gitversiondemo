<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-cell-group>
        <jy-field
          v-model="value"
          :placeholder="$t('usernamePlaceholder')"
        />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <jy-cell-group>
        <jy-field
          v-model="username"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          required
          clearable
          right-icon="question-o"
          @click-right-icon="$toast('question')"
        />

        <jy-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
          required
        />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <jy-cell-group>
        <jy-field
          :value="$t('inputDisabled')"
          :label="$t('username')"
          left-icon="contact"
          disabled
        />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <jy-cell-group>
        <jy-field
          v-model="username2"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          error
        />
        <jy-field
          v-model="phone"
          :label="$t('phone')"
          :placeholder="$t('phonePlaceholder')"
          :error-message="$t('phoneError')"
        />
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('title6')">
      <jy-cell-group>
        <jy-field
          center
          clearable
          v-model="sms"
          :label="$t('sms')"
          :placeholder="$t('smsPlaceholder')"
        >
          <template #button>
            <jy-button
              size="small"
              type="primary"
            >
              {{ $t('sendSMS') }}
            </jy-button>
          </template>
        </jy-field>
      </jy-cell-group>
    </demo-block>

    <demo-block :title="$t('textareaAutosize')">
      <jy-cell-group>
        <jy-field
          v-model="message"
          :label="$t('message')"
          type="textarea"
          :placeholder="$t('messagePlaceholder')"
          rows="1"
          autosize
        />
      </jy-cell-group>
    </demo-block>

    <demo-block v-if="!$attrs.weapp" :title="$t('showWordLimit')">
      <jy-cell-group>
        <jy-field
          v-model="message2"
          :label="$t('message')"
          :placeholder="$t('messagePlaceholder')"
          rows="2"
          autosize
          maxlength="50"
          type="textarea"
          show-word-limit
        />
      </jy-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title6: '插入按钮',
      message: '留言',
      phone: '手机号',
      sms: '短信验证码',
      sendSMS: '发送验证码',
      showWordLimit: '显示字数统计',
      textareaAutosize: '高度自适应',
      smsPlaceholder: '请输入短信验证码',
      phonePlaceholder: '请输入手机号',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用',
      phoneError: '手机号格式错误'
    },
    'en-US': {
      title2: 'Custom Type',
      title3: 'Disabled',
      title4: 'Error Info',
      title6: 'Insert Button',
      message: 'Message',
      phone: 'Phone',
      sms: 'SMS',
      sendSMS: 'Send SMS',
      showWordLimit: 'Show Word Limit',
      textareaAutosize: 'Auto Resize',
      smsPlaceholder: 'SMS',
      phonePlaceholder: 'Phone',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled',
      phoneError: 'Invalid phone'
    }
  },

  data() {
    return {
      sms: '',
      value: '',
      password: '',
      username: '',
      username2: '',
      message: '',
      message2: '',
      phone: '1365577'
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;

  .van-field__right-icon .van-icon {
    color: @blue;
  }
}
</style>
