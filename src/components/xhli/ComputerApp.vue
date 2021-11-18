<template>
    <div 
        class="bin floatTab dpShadow"
        :win-size="winSize"
        :win-max="winMax"
        :win-hide="winHide"
    >
        <!-- 标题栏 -->
        <div class="bin-toolbar">
            <!-- 图片与标题 -->
            <div class="bin-toolbar-icon">
                <img width="16" src="../../assets/img/binIcons/computer.png"/>
                <span>此电脑</span>
            </div>
            <!-- 窗口按钮 -->
            <div class="bin-toolbar-actbtn">
                <div @click="clickMinBtn">
                    <img width="8" src="../../assets/img/appIcons/minimize.png"/>
                </div>
                <div @click="clickMaxBtn">
                    <img width="8" src="../../assets/img/appIcons/maximize.png"/>
                </div>
                <div @click="clickCloseBtn">
                    <img width="8" src="../../assets/img/appIcons/close.png"/>
                </div>
            </div>
        </div>
        <!-- 菜单栏 -->
        <div class="bin-menu">
            <div class="bin-menu-new">
                <img width="16" src="../../assets/img/menuIcons/new.png"/>
                新建
                <img width="8" src="../../assets/img/taskbarIcons/arrowdown.png"/>
            </div>
            <div class="bin-menu-icon">
                <img src="../../assets/img/menuIcons/binMenuBar.png"/>
            </div>
            <div class="bin-menu-func">
                <div>
                    <img width="16" src="../../assets/img/menuIcons/sort.png">
                    排序
                    <img width="8" src="../../assets/img/taskbarIcons/arrowdown.png"/>
                </div>
                <div>
                    <img width="16" src="../../assets/img/menuIcons/check.png"/>
                    查看
                    <img width="8" src="../../assets/img/taskbarIcons/arrowdown.png"/>
                </div>
                
            </div>
            <div class="bin-memu-other">
                <img src="../../assets/img/menuIcons/binMenuOther.png">
            </div>
        </div>
        <!-- 主页面 -->
            <div class="bin-main">
                <div class="bin-main-searchBar">
                    <div class="bin-main-navIcons">
                        <img src="../../assets/img/binIcons/nav-icons.png"/>
                    </div>
                    <div class="bin-main-history">
                        <!-- 左侧图标 -->
                        <div>
                            <img width="16" src="../../assets/img/binIcons/computer.png"/>
                            <img width="8" src="../../assets/img/binIcons/shortArrowRight.png"/>
                            <span>此电脑</span>
                        </div>
                        <!-- 右侧图标 -->
                        <div>
                            <img src="../../assets/img/binIcons/bin-right.png"/>
                        </div>
                    </div>
                    <div class="bin-main-search">
                        <img width="15" src="../../assets/img/binIcons/search.png"/>
                        <span>搜索"此电脑"</span>
                    </div>
                </div>
                <div class="bin-main-container">
                    
                    <div 
                        class="bin-main-navBar"
                        
                    >
                        <div
                            v-for="(item,index) in list"
                            :key="index"                            
                        >
                            <div 
                                class="list-title" 
                                @click="handleListShow(index)"
                            >
                                <img v-if="item.isShow" width="10" src="../../assets/img/binIcons/shortArrowDown.png"/>
                                <img v-if="!item.isShow" width="10" src="../../assets/img/binIcons/shortArrowRight.png"/>
                                <img width="16" v-bind:src="item.icon"/>
                                <span>{{item.name}}</span>
                            </div>
                            <div class="list-content"
                                v-for="(child,indexC) in list[index].children"
                                :key="indexC" 
                                v-show="list[index].isShow"
                            >
                        
                                <div>
                                    <img width="18" v-bind:src="child.icon"/>
                                    <span>{{child.name}}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="bin-main-content">
                        <div class="floder">
                            <div class="floder-title">
                                <img width="10" src="../../assets/img/binIcons/ArrowGrey.png" />
                                <span>文件夹(6)</span>
                                <div ></div>
                            </div>
                            <div class="floder-content">
                                <div
                                    v-for="item,index in floder" 
                                    :key="index"
                                >
                                    <img width="42" v-bind:src="item.icon"/>
                                    <span>{{item.name}}</span>
                                </div>                                
                            </div>
                        </div>
                        <div class="device">
                            <div class="device-title">
                                <img width="10" src="../../assets/img/binIcons/ArrowGrey.png" />
                                <span>设备和驱动器(4)</span>
                                <div></div>
                            </div>
                            <div class="device-content">
                                <div 
                                    class="device-item"
                                    v-for="item,index in device"
                                    :key="index"
                                >
                                    <img width="45" v-bind:src="item.icon"/>
                                    <div>
                                        {{item.name}}
                                        <img width="190" src="../../assets/img/binIcons/processBar.png">
                                        <span>151 GB 可用, 共 280 GB</span>
                                    </div>
                                </div>                     
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'BinApp',
    props: {
        winSize: String, // 窗口尺寸：normal 还原窗口 max 最大化窗口
        winMax: String, // 窗口是否最大化：false 否 true 是
        winHide: String, // 窗口是否隐藏：false 否 true 是
    },
    data(){
        return {
            device: [
                { name: "Windows(C:)", icon: require('../../assets/img/binIcons/cDisk.png'), },
                { name: "Windows(D:)", icon: require('../../assets/img/binIcons/disk.png'), },
                { name: "Windows(E:)", icon: require('../../assets/img/binIcons/disk.png'), },
                { name: "Windows(F:)", icon: require('../../assets/img/binIcons/disk.png'), },
            ],
            floder: [
                { name: "视频", icon: require('../../assets/img/binIcons/radio.png'), },
                { name: "图片", icon: require('../../assets/img/binIcons/image-file.png'), },
                { name: "文档", icon: require('../../assets/img/binIcons/document-file.png'), },
                { name: "下载", icon: require('../../assets/img/binIcons/download.png'), },
                { name: "音乐", icon: require('../../assets/img/binIcons/music.png'), },
                { name: "桌面", icon: require('../../assets/img/binIcons/desktop.png'), },
            ],
            list: [
                {
                    name: '快速访问',
                    icon: require('../../assets/img/binIcons/star.png'),
                    isShow: true,
                    children: [
                        {
                            name: '桌面',
                            icon: require('../../assets/img/binIcons/desktop.png'),
                        },
                        {
                            name: '下载',
                            icon: require('../../assets/img/binIcons/download.png'),
                        },
                        {
                            name: '文档',
                            icon: require('../../assets/img/binIcons/document.png'),
                        },
                        {
                            name: '图片',
                            icon: require('../../assets/img/binIcons/image.png'),
                        }
                    ]
                },
                {
                    name: '此电脑',
                    icon: require('../../assets/img/binIcons/computer.png'),
                    isShow: true,
                    children: [
                        {
                            name: '视频',
                            icon: require('../../assets/img/binIcons/radio.png'),
                        },
                        {
                            name: '图片',
                            icon: require('../../assets/img/binIcons/image.png'),
                        },
                        {
                            name: '文档',
                            icon: require('../../assets/img/binIcons/document.png'),
                        },
                        {
                            name: '下载',
                            icon: require('../../assets/img/binIcons/download.png'),
                        },
                        {
                            name: '音乐',
                            icon: require('../../assets/img/binIcons/music.png'),
                        },
                        {
                            name: '桌面',
                            icon: require('../../assets/img/binIcons/desktop.png'),
                        },
                        {
                            name: 'Windows(C:)',
                            icon: require('../../assets/img/binIcons/cDisk.png'),
                        },
                        {
                            name: 'Windows(D:)',
                            icon: require('../../assets/img/binIcons/disk.png'),
                        }
                    ]
                },
                {
                    name: '网络',
                    icon: require('../../assets/img/binIcons/network.png'),
                    isShow: false,
                    children: null
                }   
            ]
        }
    },
            
    methods: {
         // 标题栏按钮点击事件
        clickMinBtn() {
        this.$emit("winStateChange", "computer", 1);
        },
        clickMaxBtn() {
        this.$emit("winStateChange", "computer", 2)
        },
        clickCloseBtn() {
        this.$emit("winStateChange", "computer", 0)
        },

        handleListShow(index) {
            this.list[index].isShow = !this.list[index].isShow
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_window.scss";

.bin {
    --bg0: rgb(241,244,244);
    background: var(--bg0);
    font-size: 12px;
    color: #000;
    
}

.bin-toolbar {
    position: relative;
    width: 100%;
    height: 26px;
    display: flex;
}

.bin-toolbar-icon {
    // background-color: red;
    top: 2px;
    left: 6px;
    height: 100%;
    display: flex;
    margin: 2px 0 0 3px;
    align-items: center;
    column-gap: 5px;
}

.bin-toolbar-actbtn {
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
}

.bin-toolbar-actbtn div {
  transition: all 60ms ease-out;
  height: 100%;
  padding: 0 14px;
  display: grid;
  place-items: center;
}

.bin-toolbar-actbtn div:nth-child(1):hover,
.bin-toolbar-actbtn div:nth-child(2):hover {
  background-color: rgba(212, 214, 216, 1);
}

.bin-toolbar-actbtn div:nth-child(3):hover {
  background-color: rgb(255,65,65);
}

.bin-menu {
    height: 60px;
    display: flex;
    align-items: center;
    // border: solid 1px #000;
}

.bin-menu-new {
    font-size: 16px;
    color: #9a9a9a;
    height: 50%;
    border-right: solid 1px #e3e6e6;
    width: 80px;
    display: flex;
    align-items: center;
    // column-gap: 10px;
    margin-left: 20px;
    // background-color: red;
}
.bin-menu-new img:first-child {
    padding-right: 10px;
}
.bin-menu-new img:last-child {
    padding-left: 5px;
}

.bin-menu-icon {
    height: 50%;
    width: 295px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: solid 1px #e3e6e6;
}

.bin-menu-func {
    font-size: 16px;
    height: 50%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-right: solid 1px #e3e6e6;
    column-gap: 10px;

}
.bin-menu-func div {
    width: 70px;
    display: flex;
    column-gap: 5px;
    align-items: center;
}
.bin-memu-other {
    padding-left: 15px;
}

.bin-main {
    height: calc(100% - 86px);
    background-color: #fff;
    box-shadow: -1px 0 1px rgba(0,0,0,0.4);
}

.bin-main-searchBar {
    width: 100%;
    height: 43px;
    padding: 5px 12px;
    margin: 0;
    display: flex;
    column-gap: 12px;
    align-items: center;
    // background-color: red;
}

.bin-main-navIcons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bin-main-history {
    height: 33px;
    width: 53%;
    border: solid 1px #d9d9d9;
    position: relative;
}
.bin-main-history div:first-child {
    position: absolute;
    top: 9px;
    left: 9px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: red;
}
.bin-main-history div:first-child img:first-child {
    padding-right: 8px;
}
.bin-main-history div:first-child span {
    padding-left: 10px;
}

.bin-main-history div:last-child {
    position: absolute;
    top: 3px;
    right: 3px;
    display: flex;
    height: 30px;
    width: 60px;
    align-items: center;
    justify-content: center;
}

.bin-main-search {
    
    height: 33px;
    width: 32%;
    border: solid 1px #d9d9d9;
    display: flex;
    align-items: center;
    color: #878787;
}

.bin-main-search img{
    padding: 10px;
}

.bin-main-container {
    width: 100%;
    display: flex;
    height: calc(100% - 86px - 43px);
}

.bin-main-navBar {
    height: 100%;
    width: 158px;
    border-right: solid 1px #f7f7f7;
}
.list-title {
    height: 30px;
    display: flex;
    column-gap: 10px;
    padding-left: 10px;
    align-items: center;
}
.list-content {
    width: 123px;
    padding-left: 35px;
}
.list-content div{
    display: flex;
    column-gap: 5px;
    height: 32px;
    align-items: center;
    margin-bottom: 5px;
}

.bin-main-content {
    width: calc(100% - 158px);
    padding: 10px;
    // background-color: red;
}
.floder-title, .device-title {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-size: 16px;
    color: #1e3287;
}
.floder-title div {
    width: calc(100% - 104px);
    height: 0;
    border: solid 1px #e5e5e5;
}

.floder-content, .device-content {
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    column-gap: 10px;
    row-gap: 20px;
}
.floder-content div{
    display: flex;
    align-items: flex-start;
    column-gap: 5px;
    height: 40px;
    width: 256px;
    // background-color: red;
}
.floder-content div span {
    padding-top: 5px;
}
.device-title span {
    width: 120px;
    // background-color: red;
}
.device-title div {
    width: calc(100% - 158px);
    height: 0;
    border: solid 1px #e5e5e5;
}

.device-item {
    display: flex;
    width: 245px;
    height: 50px;
    column-gap: 5px;
}
.device-item div {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}
.device-item div span {
    color: #6d6d6d;
}
</style>