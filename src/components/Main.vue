<template>
  <router-view></router-view>
</template>

<script>
  /* eslint-disable */
  import {userApi} from "../api/user";
  import {mapMutations} from 'vuex'
  import config from '../config/index'

  export default {
    name: "main",
    beforeMount:function(){
      let that = this ;
      userApi.getUserInfo(window.location.href.split('#')[0]).then(res => {
        this.setUserInfo(res.data.wxMpUser)
        this.setJsapiSignature(res.data.wxJsapiSignature)


      }).then(()=>{
        that.$router.push("user-info")
      })
    },
    methods:{
      ...mapMutations([
        'setUserInfo',
        'setJsapiSignature'
      ]),
    }
  }
</script>

<style scoped>

</style>
