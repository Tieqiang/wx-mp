<template>
  <cube-page title="用户信息" type="primary">
    <div slot="content">
      <div class="cube-scroll-wrapper" v-if="medicalCards.length">
        <cube-scroll ref="medicalCardScroll" :data="medicalCards" :options="options">
          <card-panel v-for="item in medicalCards" :key="item.id" :data="item"
                      @card-panel-click="panelClick"
                      :options="cardOptions">
          </card-panel>
        </cube-scroll>
      </div>
      <div v-else>
        <cube-button :primary="true" @click="createNewCard">尚未绑定就诊卡，请点击绑定</cube-button>
        <cube-button :primary="true" @click="openLocation">打开地址</cube-button>
      </div>
      <cube-toolbar :actions="actions" @click="clickHandler">在线建卡</cube-toolbar>
    </div>
  </cube-page>
</template>

<script>
  /* eslint-disable */

  import {userApi, MedicalCard} from '../../api'

  import CubePage from "../../components/CubePage";
  import CardPanel from "../../components/CardPanel";
  import wx from 'weixin-js-sdk'


  export default {
    components: {
      CardPanel,
      CubePage
    },
    name: 'user',
    data() {
      return {
        actions: [
          {
            text: '在线建卡',
            type: 'button',
            action: 'showUserInfo'
          }
        ],
        medicalCards: [],
        options: {
          scrollbar: true
        },
        cardOptions: {
          height: "150px"
        }
      }
    },
    beforeMount: function () {
      this.init();
    },
    computed: {
      userInfo() {
        return this.$store.state.user.userInfo
      },
      jsapiSignature() {
        return this.$store.state.jsapiSignature
      }
    },
    methods: {

      showUserInfo: function () {
        alert(JSON.stringify(this.userInfo))
      },
      clickHandler: function (item) {
        this[item.action]();
      },
      init() {
        let obj = {
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.$store.state.user.jsapiSignature.appId, // 必填，公众号的唯一标识
          timestamp:this.$store.state.user.jsapiSignature.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.$store.state.user.jsapiSignature.nonceStr, // 必填，生成签名的随机串
          signature: this.$store.state.user.jsapiSignature.signature,// 必填，签名
          jsApiList: ["openLocation","getLocation"] // 必填，需要使用的JS接口列表
        }
        wx.config(obj)
        this.getMedicalCards();
      },
      getMedicalCards() {
        this.medicalCards = []
        MedicalCard.findMedicalCardsByOpenId(this.userInfo.openId).then(res => {
          this.medicalCards = res.data;
        })
      },
      createEmptyMedicalCard() {
        let medicalCard = {
          patientName: "请绑定用户",
          idNo: "",
          cardNo: "",
          id: "",
          healthCardNo: "",
          openId: "",
          sex: "",
          nation: "",
          zipCode: "",
          address: ""
        }
        return medicalCard
      },
      panelClick: function (medicalCard) {
        this.$createDialog({
          title: "系统提示",
          content: JSON.stringify(medicalCard)
        }).show()
      },
      createNewCard:function(){
        this.$router.push("create-medical-card")
      },
      openLocation:function(){
        wx.openLocation({
          latitude: 0, // 纬度，浮点数，范围为90 ~ -90
          longitude: 0, // 经度，浮点数，范围为180 ~ -180。
          name: '', // 位置名
          address: '', // 地址详情说明
          scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        });
      }
    }
  }
</script>

<style scoped>

</style>
