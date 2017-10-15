<template>
  <div>
    <mu-toast :style="{ backgroundColor:color}" v-if="toast" :message="msg" @close="hideToast">
    </mu-toast>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toast: false,
      msg: '',
      color: ''
    }
  },


  methods: {
    showToast(msg, color) {
      debugger
      this.toast = true
      this.msg = msg
      this.color = color
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    hideToast() {
      this.toast = false
      if (this.toastTimer) clearTimeout(this.toastTimer)
    }
  }
}
</script>