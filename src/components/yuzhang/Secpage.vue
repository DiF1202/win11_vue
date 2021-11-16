<template>
<div class="bg">
    <div class="date-info" :style="styleObj">
        <div class="date-info__left">{{time}}</div>
        <div class="date-info__right">
            <div>{{date}}</div>
            <div>{{day}}</div>
        </div>
    </div>
</div>
</template>
<script>
import moment from 'moment';
export default{
    name:"Secpage",
    props:{
        styleObj:{
            required:false,
            type:Object
        }
    },
    data(){
        return{
            time:'',
            date:'',
            day:'',
            timeInterval:null
        }
    },
    created(){
        const momentNow=moment();
        this.date=momentNow.format('YYYY-MM-DD');
        const dayNameMapping=[
            '星期日','星期一','星期二','星期三','星期四','星期五','星期六'
        ];
        console.log("dsadas",momentNow.format('e'));
        this.day=dayNameMapping[momentNow.format('e')];
        this.updateTime();
    },
    methods:{
        updateTime(){
            const _this=this;
            this.timeInterval=setInterval(function(){
                _this.time=moment().format('HH:mm');
            },1000);
        }
    }
}
</script>
<style lang="scss" scoped>
.bg{
     height: 100vh;
  width: 100vw;
  background-size: cover;
  background-color: black;
  background-image: url(../../assets/img/login/lock.jpg);
}
.date-info {
    position: fixed;
    left: 50%;
    top: 400px;
    color: rgb(255, 255, 255);
    
   margin-left: -113px;
    & > * {
        display: inline-block;
        vertical-align: middle;
    }
    .date-info__left {
        font-size: 64px;
        margin-right: 5px;
    }
    .date-info__right {
        font-size: 20px;
        line-height: 1.5em;
    }
}
</style>