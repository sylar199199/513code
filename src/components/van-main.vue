<template>
  <div>
    <van-header></van-header>

    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from 'vant'
import VanHeader from './header/van-header'
export default {
  name: 'van-main',
  components: {
      [Button.name]: Button,
      'van-header': VanHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
  display: flex;
  height: 38pt;
  line-height: 38pt;
  width: 100%;
  border: 1px solid red;
}
.mobile-logo{
  margin: auto;
  width: 128pt;
  height: 23pt;
  background: yellow;
  margin-left: 15pt;
}
</style>
