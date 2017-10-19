<template>
  <div>
  <mu-dialog :open="isOpened" :title="title">
    <p>{{content}}</p>
    <mu-flat-button slot="actions" @click="cancel" primary label="取消" v-if="isShowCancel" />
    <mu-flat-button slot="actions" primary @click="confirm" label="确定"/>
  </mu-dialog>
</div>
</template>

<script>
export default {
  
  data() {
    return {
      isOpened: false,
      title: '321',
      content: '123',
      callback: undefined,
      isShowCancel: false,
    };
  },
  methods: {
    confirm() {
      this.isOpened = false;
      this.callback && this.callback();
    },
    cancel() {
      this.isOpened = false;
    },
  },
};
</script>

<style scoped>
  p {
    color:rgba(71, 74, 79, 0.6);
  }
</style>