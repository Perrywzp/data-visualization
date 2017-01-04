import * as ActionTypes from '../constants/ActionTypes';

export const initialState = {
  device: {
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
    'tags': [
      {
        'name': '应用类',
        'type': 'appinterest',
        'list': [
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
        ]
      },
      {
        'name': '消耗',
        'type': 'consumption',
        'list': []
      },
      {
        'name': '人口统计',
        'type': 'demography',
        'list': []
      },
      {
        'name': '设备信息',
        'type': 'deviceinfo',
        'list': []
      },
      {
        'name': '游戏',
        'type': 'gamedepth',
        'list': []
      },
      {
        'name': '游戏',
        'type': 'gameinterest',
        'list': [
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
        ]
      },
      {
        'name': '产业',
        'type': 'industry',
        'list': []
      }
    ]
  }
};

export default {
  [ActionTypes.UPDATE_DEVICE] (state, data) {
    state.device = data;
  }
};
