<template>
    <div>
        <div class="course" v-for="(item, index) in courseList" :key="index">
            <div class="course-bg">
                <img :src="item.coursePicture" height="100%" width="100%">
            </div>
            <div>
                <p class="coure-child-title">{{item.courseTitle}}</p>
                <p class="course-school">{{item.courseSchool}}</p>
                <p class="course-free" v-show="item.coursePrice === '免费'">免费</p>
                <p class="course-price" v-show="item.coursePrice !== '免费'">￥{{item.coursePrice}}</p>
            </div>
        </div>
        <div style="display: flex">
            <div class="course-more">
                <span class="more-titile">更多</span>
            </div>
            <div class="more-icon" >
                <img src="@/assets/images/icon_more.png" height="100%" width="100%" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hand-views",
        data(){
            return{
                courseList:[
                    {
                        coursePicture: 'http://front.513online.top/front/hot_img_01@2x.png',
                        courseTitle: '跨境电商之亚马逊',
                        courseSchool: 'Anne【北京大学】',
                        coursePrice: '免费',
                    },
                    {
                        coursePicture: 'http://front.513online.top/front/dianshang_img_04@2x.png"',
                        courseTitle: '跨境电商之亚马逊',
                        courseSchool: 'Anne【北京大学】',
                        coursePrice: '360',
                    },
                    {
                        coursePicture: 'http://front.513online.top/front/dianshang_img_03@2x.png',
                        courseTitle: '跨境电商之亚马逊',
                        courseSchool: 'Anne【北京大学】',
                        coursePrice: '免费',
                    },
                    {
                        coursePicture: 'http://front.513online.top/front/dianshang_img_02@2x.png',
                        courseTitle: '跨境电商之亚马逊',
                        courseSchool: 'Anne【北京大学】',
                        coursePrice: '12',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.course{
    margin-left: 20px;
    margin-top: 25px;
    display: flex;
    .course-bg{
        width: 160px;
        height: 90px;
    }
    .coure-child-title{
        margin-left: 11px;
        font-size:14px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:18px;
    }
    .course-school{
        margin-top: 12px;
        margin-left: 11px;
        font-size:12px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(153,153,153,1);
        line-height:18px;
    }
    .course-free{
        margin-top: 26px;
        margin-left: 11px;
        font-size:12px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,177,110,1);
        line-height:18px;
    }
    .course-price{
        margin-top: 26px;
        margin-left: 11px;
        font-size:12px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(233,45,8,1);
        line-height:18px;
    }
}
.course-more{
    height: 22px;
    margin-top: 21px;
    margin-left: 167px;
    .more-icon{
        height: 44px;
        width: 44px;
        margin-left: 380px;
    }
    span{
        font-size:13px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        color:rgba(153,153,153,1);
        line-height:21px
    }
}
</style>