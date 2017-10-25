<template lang="jade">
  div()
    mu-flexbox(class="position-wrap",justify="center",orient="vertical",style="background-color: #1fb5ad")
      mu-paper
        form(v-on:submit.prevent="submit")
          mu-content-block
            mu-text-field(label="用户名",ref="input",v-model="user",hintText="请输入用户名",type="text",:labelFloat="true",required,icon="account_circle")
            br
            mu-text-field(label="密码",v-model="password",hintText="请输入密码",type="password",:labelFloat="true",required,icon="lock")
            br
            mu-raised-button(label="登录",:fullWidth="true",secondary,type='submit',icon="near_me",labelPosition="before")
</template>

<style lang="scss">
.position-wrap {
  position: absolute !important;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
}
</style>
