<template>
    <div class="v-home">
        <div class="banner-image">
            <img src="@/assets/images/banner.png" width="100%" height="100%">
        </div>
        <div class="index-title">
            <span>关于513教育</span>
        </div>
        <div class="first-introduce first-bg">
            <div class="first-p">
                <span>跨境电商理论+实训</span>
            </div>
            <div class="second-p">
                <span>提供专业的在线学习平台供学生学习电商理论知识；提供跨境电商仿真实训创新平台，注重在线视频授课与实训教学的结合。</span>
            </div>
        </div>
        <div class="first-introduce second-bg">
            <div class="first-p">
                <span>实践课</span>
            </div>
            <div class="second-p">
                <span>通过实践课深入了解企业、跨境电商，了解将要从事的工作方向；开展素拓活动，让大学生感受深圳充满激情与活力的人文气息。</span>
            </div>
        </div>
        <p class="course-title">精选跨境电商课程</p>
        <hand-views></hand-views>
    </div>
</template>

<script>
    import HandPicks from '@/public-components/home-components/hand-views'
    export default {
        name: "home1",
        components:{
            'hand-views': HandPicks
        }
    }
</script>

<style lang="scss" scoped>
.v-home{
    .banner-image {
        width: 100%;
        height: 175px;
    }
    .index-title{
        width: 126px;
        height: 21px;
        margin: 0 auto;
        margin-top: 60px;
        span{
            font-size:21px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:21px;
        }
    }
    .first-introduce{
        width: 345px;
        height: 108px;
        margin: 25px auto;
        .first-p{
            margin-top: 16px;
            margin-left: 11px;
            height: 17px;
            span{
                font-size:18px;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:28px;
                text-shadow:0px 1px 0px rgba(36,194,187,0.68);
            }
        }
        .second-p{
            margin-top: 13px;
            margin-left: 10px;
            height: 44px;
            span{
                font-size:12px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:16px;
            }
        }
    }
    .first-bg{
        background: url("../../assets/images/img_bg01.png");
    }
    .second-bg{
        background: url("../../assets/images/img_bg02.png");
    }
    .course-title{
        margin-top: 62px;
        margin-left: 100px;
        font-size:22px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:21px;
    }
}


</style>