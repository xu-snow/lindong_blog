<template>
  <div>
    <mu-dialog :open="isOpened" :title="title">
      <div>
        <mu-text-field v-if="isInput" hintText="输入" v-model="value" :fullWidth="true" />
        <p v-if="!isInput">{{value}}</p>
      </div>
      <mu-flat-button slot="actions" @click="cancel" primary label="取消" v-if="isShowCancel" />
      <mu-flat-button slot="actions" primary @click="confirm" label="确定" />
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: 'prompt',
  data() {
    return {
      isInput: false,
      isOpened: false,
      title: '',
      value: '',
      callback: undefined,
      isShowCancel: true,
    };
  },
  methods: {
    confirm() {
      this.isOpened = false;
      this.callback && this.callback(this.value);
    },
    cancel() {
      this.isOpened = false;
    },
  },
};
</script>

<style scoped>
p {
  color: rgba(71, 74, 79, 0.6);
}
</style>