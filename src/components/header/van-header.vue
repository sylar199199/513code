<template>
    <div class="van-header">
        <div class="tab">
            <div class="mobile-logo"><img src="@/assets/images/logo@2x.png" height="100%" width="100%" /></div>
            <div class="mobile-meun"><img src="@/assets/images/nav_icon_menu.png" height="100%" width="100%" /></div>
            <div class="mobile-user"><img src="@/assets/images/nav_icon_logo.png" height="100%" width="100%" /></div>
        </div>
    </div>
</template>

<script>
    import { Image } from 'vant';
    export default {
        name: "van-eader",
        components: {
            [Image.name]: Image,
        }
    }
</script>

<style lang="scss" scoped>
.tab{
      display: flex;
      height: 68px;
      width: 100%;
    .mobile-logo{
        margin: auto;
        width: 128px;
        height: 28px;
        margin-left: 15px;
    }
    .mobile-meun{
        margin: auto;
        width: 33px;
        height: 33px;
        margin-left: 135px;
    }
    .mobile-user{
        margin: auto;
        width: 33px;
        height: 33px;
        margin-left: 22px;
    }
  }
</style>