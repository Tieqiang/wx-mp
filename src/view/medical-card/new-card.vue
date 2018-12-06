<template>
  <cube-page title="在线建卡">
    <div slot="content">
      <cube-button :primary="true" @click="showUserInfo">点击查看当前用户信息</cube-button>
    </div>
  </cube-page>
</template>

<script>
  /* eslint-disable */
  import CubePage from "../../components/CubePage";

  export default {
    components: {CubePage},
    name: "new-card",
    computed: {
      userInfo() {
        return this.$store.state.user.userInfo
      },
      jsapiSignature() {
        return this.$store.state.jsapiSignature
      }
    },
    methods:{
      showUserInfo:function(){
        alert(JSON.stringify(this.userInfo))
      }
    }
  }
</script>

<style scoped>

</style>
