<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <jy-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <jy-popup
        v-model="showList"
        position="bottom"
        :lazy-render="false"
      >
        <jy-contact-list
          v-model="chosenContactId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </jy-popup>

      <jy-popup
        v-model="showEdit"
        position="bottom"
        :lazy-render="false"
      >
        <jy-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </jy-popup>
    </demo-block>

    <demo-block :title="$t('uneditable')">
      <jy-contact-card
        type="edit"
        :name="mockContact.name"
        :tel="mockContact.tel"
        :editable="false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      name: '张三'
    },
    'en-US': {
      name: 'John Snow'
    }
  },

  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: []
    };
  },

  computed: {
    mockContact() {
      return {
        name: this.$t('name'),
        tel: '13000000000',
        id: 0
      };
    },

    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  created() {
    this.list.push(this.mockContact);
  },

  methods: {
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    onSelect() {
      this.showList = false;
    },

    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
</script>

<style lang="less">
.demo-contact-card {
  .van-popup {
    height: 100%;
    background-color: #f2f2f2;
  }
}
</style>
