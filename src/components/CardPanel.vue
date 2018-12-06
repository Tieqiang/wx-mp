<template>
  <div class="cardPanel" :style="options" @click="cardClick">
    <slot></slot>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "card-panel",
    data() {
      return {}
    },
    props:{
      key:{
        type:String,
        default:""
      },
      data:{
        type:Object,
        default:{}
      },
      options:{
        type:Object,
        default:()=>{
          return {
            height:'100px'
          }
        }
      }
    },
    methods:{
      cardClick(){
        this.$emit("card-panel-click",this.data)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .cardPanel
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 5px
    transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
    overflow: hidden
    background-color: #19be6b



</style>
