<!----------------
 --@description
 --@author wangzhipei
 --@date 2017/1/3/0003.
------------------>
<template>
  <div v-if="device" v-show="showFlag" class="device-info" ref="deviceinfo">
    <div class="base-info-content">
      <div class="base-info" ref="baseinfo">
        <p>性别：{{deviceData.sex || '未知'}}</p>
        <p>年龄：{{deviceData.age || '未知'}}</p>
        <p>职业：{{deviceData.sex || '未知'}}</p>
        <p>婚姻情况：{{deviceData.sex || '未婚'}}</p>
        <p>车辆情况：{{deviceData.car || '无'}}</p>
        <div class="address-info">
          <div><span><i @click="location(deviceData.cityLoc, $event)" class="iconfont icon-track"></i>常驻城市</span>: {{deviceData.alwaysCities}}</div>
          <div><span><i @click="location(deviceData.comp, $event)" class="iconfont icon-track"></i> 工作场所</span>: {{deviceData.comp.name}}</div>
          <div><span><i @click="location(deviceData.home, $event)" class="iconfont icon-track"></i> 家庭地址</span>: {{deviceData.home.name}}</div>
          <div><span>常去场所</span>: {{deviceData.alwaysCities}}</div>
        </div>
      </div>
    </div>
    <div class="hobby">
      <div class="hobby-title">
        <span class="title">兴趣爱好</span>
      </div>
      <div v-if="item.list.length > 0" v-for="item in deviceData.tags" class="hobby-item clearfix">
        <div class="hobby-type">
          <span class="icon-type"></span> {{item.name}}
        </div>
        <ul class="hobby-list clearfix" ref="hobbylist">
          <li v-for="(app,index) in item.list" class="hobby-list-item" :class="{'app-end': (index+1) % 3 === 0}">
            <div class="app-content">
              <img v-if="app.url" :url="app.url">
              <span v-if="!app.url"><i class="default-app-icon"></i></span>
            </div>
            <div class="app-name">{{app.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import _ from 'lodash'
  import Ps from 'perfect-scrollbar'

  export default {
    props: {
      deviceData: {
        type: Object,
        default () {
          return {
            'age': '',
            'alwaysCities': '杭州市,贵阳市,黔南布依族苗族自治州,宣城市,六盘水市,宁波市,巴中市,绍兴市',
            'car': '',
            'cityLoc': [
              {
                'cnt': 5,
                'lat': '120.219375',
                'lng': '30.259244',
                'name': '杭州市'
              },
              {
                'cnt': 3,
                'lat': '106.709177',
                'lng': '26.629907',
                'name': '贵阳市'
              },
              {
                'cnt': 2,
                'lat': '107.523205',
                'lng': '26.264536',
                'name': '黔南布依族苗族自治州'
              },
              {
                'cnt': 1,
                'lat': '106.757916',
                'lng': '31.869189',
                'name': '巴中市'
              },
              {
                'cnt': 1,
                'lat': '104.852087',
                'lng': '26.591866',
                'name': '六盘水市'
              },
              {
                'cnt': 1,
                'lat': '121.579006',
                'lng': '29.885259',
                'name': '宁波市'
              }
            ],
            'comp': {
              'lat': '120.18974',
              'lng': '30.19524',
              'name': '滨兴西苑西243米'
            },
            'home': {
              'lat': '120.21572',
              'lng': '30.29397',
              'name': '新和嘉苑'
            },
            'id': 0,
            'localCity': null,
            'provinceLoc': [
              {
                'citys': [
                  {
                    'cnt': 5,
                    'lat': '120.219375',
                    'lng': '30.259244',
                    'name': '杭州市'
                  },
                  {
                    'cnt': 1,
                    'lat': '121.579006',
                    'lng': '29.885259',
                    'name': '宁波市'
                  }
                ],
                'lat': '119.957202',
                'lng': '29.159494',
                'name': '浙江'
              },
              {
                'citys': [
                  {
                    'cnt': 3,
                    'lat': '106.709177',
                    'lng': '26.629907',
                    'name': '贵阳市'
                  },
                  {
                    'cnt': 2,
                    'lat': '107.523205',
                    'lng': '26.264536',
                    'name': '黔南布依族苗族自治州'
                  },
                  {
                    'cnt': 1,
                    'lat': '104.852087',
                    'lng': '26.591866',
                    'name': '六盘水市'
                  }
                ],
                'lat': '106.734996',
                'lng': '26.902826',
                'name': '贵州'
              },
              {
                'citys': [
                  {
                    'cnt': 1,
                    'lat': '106.757916',
                    'lng': '31.869189',
                    'name': '巴中市'
                  }
                ],
                'lat': '102.89916',
                'lng': '30.367481',
                'name': '四川'
              }
            ],
            'sex': '',
            'tags': {
              'appinterest': [
                {
                  'label': '02010101',
                  'name': '网上商城',
                  'weight': '2'
                },
                {
                  'label': '02010102',
                  'name': '团购',
                  'weight': '1'
                },
                {
                  'label': '02010103',
                  'name': '导购',
                  'weight': '1'
                },
                {
                  'label': '02010104',
                  'name': '比价',
                  'weight': '1'
                },
                {
                  'label': '02010106',
                  'name': '海淘',
                  'weight': '1'
                },
                {
                  'label': '02010202',
                  'name': '课外辅导',
                  'weight': '1'
                },
                {
                  'label': '02010206',
                  'name': '管理',
                  'weight': '1'
                },
                {
                  'label': '02010209',
                  'name': '考试',
                  'weight': '1'
                },
                {
                  'label': '02010406',
                  'name': '科技资讯',
                  'weight': '1'
                },
                {
                  'label': '02010501',
                  'name': '微博',
                  'weight': '1'
                },
                {
                  'label': '02010503',
                  'name': '交友\\社区',
                  'weight': '1'
                },
                {
                  'label': '02010601',
                  'name': '即时通讯',
                  'weight': '1'
                },
                {
                  'label': '02010702',
                  'name': '音乐',
                  'weight': '1'
                },
                {
                  'label': '02010703',
                  'name': '视频',
                  'weight': '2'
                },
                {
                  'label': '02010801',
                  'name': '地图',
                  'weight': '1'
                },
                {
                  'label': '02010802',
                  'name': '导航',
                  'weight': '1'
                },
                {
                  'label': '02010804',
                  'name': '打车',
                  'weight': '2'
                },
                {
                  'label': '02010805',
                  'name': '租车',
                  'weight': '1'
                },
                {
                  'label': '02010806',
                  'name': '航班',
                  'weight': '2'
                },
                {
                  'label': '02010807',
                  'name': '公交',
                  'weight': '1'
                },
                {
                  'label': '02010808',
                  'name': '火车',
                  'weight': '1'
                },
                {
                  'label': '02010809',
                  'name': '酒店应用',
                  'weight': '1'
                },
                {
                  'label': '02010810',
                  'name': '旅游资讯',
                  'weight': '1'
                },
                {
                  'label': '02010811',
                  'name': '旅游产品',
                  'weight': '1'
                },
                {
                  'label': '02010812',
                  'name': '游记分享',
                  'weight': '1'
                },
                {
                  'label': '02010813',
                  'name': '长途客车',
                  'weight': '1'
                },
                {
                  'label': '02010902',
                  'name': '家电',
                  'weight': '1'
                },
                {
                  'label': '02010905',
                  'name': '智能家居',
                  'weight': '1'
                },
                {
                  'label': '02011002',
                  'name': '运动健身',
                  'weight': '1'
                },
                {
                  'label': '02011103',
                  'name': '外卖订餐',
                  'weight': '2'
                },
                {
                  'label': '02011111',
                  'name': '快递',
                  'weight': '1'
                },
                {
                  'label': '02011114',
                  'name': '车主服务',
                  'weight': '1'
                },
                {
                  'label': '02011115',
                  'name': '便民服务',
                  'weight': '2'
                },
                {
                  'label': '02011119',
                  'name': '生活综合',
                  'weight': '1'
                },
                {
                  'label': '02011201',
                  'name': '招聘求职',
                  'weight': '1'
                },
                {
                  'label': '02011208',
                  'name': '网盘',
                  'weight': '1'
                },
                {
                  'label': '02011308',
                  'name': '实用工具',
                  'weight': '1'
                },
                {
                  'label': '02011401',
                  'name': '财富管理',
                  'weight': '1'
                },
                {
                  'label': '02011403',
                  'name': '直销银行',
                  'weight': '2'
                },
                {
                  'label': '02011405',
                  'name': '证券',
                  'weight': '1'
                },
                {
                  'label': '02011411',
                  'name': '支付',
                  'weight': '1'
                },
                {
                  'label': '02011413',
                  'name': '手机银行',
                  'weight': '2'
                },
                {
                  'label': '02011501',
                  'name': '房屋咨询',
                  'weight': '1'
                },
                {
                  'label': '02011502',
                  'name': '买房',
                  'weight': '1'
                },
                {
                  'label': '02011504',
                  'name': '租房',
                  'weight': '1'
                },
                {
                  'label': '02011801',
                  'name': '汽车资讯',
                  'weight': '1'
                }
              ],
              'consumption': [],
              'demography': [],
              'deviceinfo': [],
              'gamedepth': [],
              'gameinterest': [
                {
                  'label': '01010801',
                  'name': '闯关',
                  'weight': '1'
                },
                {
                  'label': '01011102',
                  'name': '经营',
                  'weight': '1'
                },
                {
                  'label': '01011201',
                  'name': '宠物养成类',
                  'weight': '1'
                }
              ],
              'industry': [],
            }
          }
        }
      }
    },

    data () {
      return {
        showFlag: false
      }
    },
    updated () {
      this._initScroll()
    },
    computed: {
      device () {
        return !_.isEmpty(this.deviceData)
      }
    },
    methods: {
      show () {
        this.showFlag = true;
      },

      _initScroll () {
        if (!this.baseInfoScroll) {
          this.baseInfoScroll = Ps.initialize(this.$refs.baseinfo, {theme: 'blue'})
        } else {
          this.baseInfoScroll.update(this.$refs.baseinfo)
        }
        this.$refs.hobbylist.forEach((item) => {
          Ps.initialize(item, {theme: 'blue'})
        })
        this.$parent.initScroll();
      },

      location (posinfo, $event) {
        console.log(posinfo);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .device-info
    position relative
    width 380px
    .base-info-content
      box-sizing border-box
      width 360px
      height 380px
      margin-left 8px
      padding 15px 20px 30px 15px
      background url('imgs/devicelist.png') 2px 0 no-repeat
    .base-info
      box-sizing border-box
      position relative
      width 100%
      height 100%
      line-height 32px
      font-size 20px
      padding-right 20px
      color rgb(197, 250, 254)
      p
        text-indent 15px
        margin 0
        padding 0
      .address-info
        margin-top 10px
        span
          color rgb(255,253, 63)
          .iconfont
            display inline-block
            vertical-align top
            cursor pointer
    .hobby
      width 100%
      margin-top 20px
      .hobby-title
        width 100%
        height 85px
        background url('imgs/hobby_title.png') 0 0 no-repeat
        .title
          display inline-block
          margin-left 20px
          width 150px
          height 48px
          line-height 48px
          margin-top 7px
          color rgb(189, 255, 250)
          font-size 24px
      .hobby-item
        box-sizing border-box
        width 100%
        max-height 280px
        padding 0 10px 0 15px
        .hobby-type
          width 100%
          height 38px
          line-height 38px
          color rgb(188, 250, 255)
          font-size 22px
          .icon-type
            display inline-block
            width 35px
            height 20px
            vertical-align top
            margin-top 9px
            background url('imgs/hobby_type.png') 0 0 no-repeat
        .hobby-list
          position relative
          width 100%
          max-height 280px
          margin-right 0
          .hobby-list-item
            float left
            width 105px
            margin 0 10px 10px 0
            cursor pointer
            &:hover
              .app-content
                background url('imgs/app_bg_hover.png') 0 -3px no-repeat
            .app-content
              width 100%
              height 105px
              margin-bottom 5px
              background url('imgs/app_bg.png') 0 -2px no-repeat
              img
                width 45px
                height 55px
                outline none
                border none
                margin 25px 0 0 32px
              span
                display inline-block
                width 45px
                height 55px
                margin 25px 0 0 32px
                .default-app-icon
                  display inline-block
                  width 45px
                  height 55px
                  /* background url('imgs/app_default.png') 0 0 no-repeat */
            .app-name
              text-align center
              font-size 18px
              color rgb(10, 245, 248)
          .app-end
            margin-right 0
</style>
