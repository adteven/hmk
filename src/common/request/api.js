import requestURL from './requestURL.js'
import request from './fetch.js'
/**
 * 请求API
 */
export default {
    /**
     * 
     * @param {*} 获取数据可以不入参
     */
    // 获取短信验证码接口请求
    getcode: async function (prams) {
        let response = await request.Fetch(requestURL.getcode,prams,'POST',false,false)
        return response;
    },
	//选择身份接口
	getid: async function (prams) {
        let response = await request.Fetch(requestURL.getid,prams,'POST',false)
        return response;		
	},
	//点击注册接口
	register: async function (prams) {
        let response = await request.Fetch(requestURL.register,prams,'POST',false,false)
        return response;		
	},
	//点击登陆接口
	login: async function (prams) {
	    let response = await request.Fetch(requestURL.login,prams,'POST',true,false)
	    return response;		
	},
	//忘记密码接口
	forgot: async function (prams) {
	    let response = await request.Fetch(requestURL.forgot,prams,'POST',true,false)
	    return response;		
	},
	//忘记密码获取验证码接口
	forgotcode: async function (prams) {
	    let response = await request.Fetch(requestURL.forgotcode,prams,'POST',true,false)
	    return response;		
	},
	//两个轮播图接口
	banner: async function (prams) {
	    let response = await request.Fetch(requestURL.banner,prams,'POST',true)
	    return response;		
	},
	//首页数据
	index: async function (prams) {
	    let response = await request.Fetch(requestURL.index,prams,'POST',true)
	    return response;		
	},
	//首页商品
	indexShop: async function (prams) {
		let response = await request.Fetch(requestURL.indexShop,prams,'POST',true)
		return response;		
	},
	//首页商城
	qbsp: async function (prams) {
		let response = await request.Fetch(requestURL.qbsp,prams,'POST',true)
		return response;		
	},
	//商品规格
	shopsku: async function (prams) {
		let response = await request.Fetch(requestURL.shopsku,prams,'POST',true)
		return response;		
	},
	//云课堂接口
	cloudClass: async function (prams) {
		let response = await request.Fetch(requestURL.cloudClass,prams,'POST',true)
		return response;		
	},
	//云课堂未购买接口
	NotPurchased: async function (prams) {
		let response = await request.Fetch(requestURL.NotPurchased,prams,'POST',true)
		return response;		
	},
	//音频视频播放接口
	play: async function (prams) {
		let response = await request.Fetch(requestURL.play,prams,'POST',true)
		return response;		
	},
	//收藏接口
	collect: async function (prams) {
		let response = await request.Fetch(requestURL.collect,prams,'POST',true)
		return response;		
	},
	//下载接口
	download: async function (prams) {
		let response = await request.Fetch(requestURL.download,prams,'POST',true)
		return response;		
	},
	//下载接口
	focus: async function (prams) {
		let response = await request.Fetch(requestURL.focus,prams,'POST',true)
		return response;		
	},
	//个人中心
	my: async function (prams) {
		let response = await request.Fetch(requestURL.my,prams,'POST',true)
		return response;		
	},
	//忘记密码
	Modify: async function (prams) {
		let response = await request.Fetch(requestURL.Modify,prams,'POST',true)
		return response;		
	},
	//设置
	set: async function (prams) {
		let response = await request.Fetch(requestURL.set,prams,'POST',true)
		return response;		
	},
	//添加地址
	AddAddress: async function (prams) {
		let response = await request.Fetch(requestURL.AddAddress,prams,'POST',true,true)
		return response;		
	},
	//地址列表
	AddressList: async function (prams) {
		let response = await request.Fetch(requestURL.AddressList,prams,'POST',true,true)
		return response;		
	},
	//获取地址
	GetAddress: async function (prams) {
		let response = await request.Fetch(requestURL.GetAddress,prams,'POST',true,true)
		return response;		
	},
	//编辑地址
	EditAddress: async function (prams) {
		let response = await request.Fetch(requestURL.EditAddress,prams,'POST',true,true)
		return response;		
	},
	//删除地址
	DelAddress: async function (prams) {
		let response = await request.Fetch(requestURL.DelAddress,prams,'POST',true,true)
		return response;		
	},
	//修改用户头像
	ModifyAvatar: async function (prams) {
		let response = await request.Fetch(requestURL.ModifyAvatar,prams,'POST',true)
		return response;		
	},
	//微信支付
	WXZF: async function (prams) {
		let response = await request.Fetch(requestURL.WXZF,prams,'POST',true)
		return response;		
	},
	//学员分享
	StudentSharing: async function (prams) {
		let response = await request.Fetch(requestURL.StudentSharing,prams,'POST',true)
		return response;		
	},
	//修改姓名
	ModifyName: async function (prams) {
		let response = await request.Fetch(requestURL.ModifyName,prams,'POST',true)
		return response;		
	},
	//修改职位
	ReviseJob: async function (prams) {
		let response = await request.Fetch(requestURL.ReviseJob,prams,'POST',true)
		return response;		
	},	
	//修改手机号
	RevisePhone: async function (prams) {
		let response = await request.Fetch(requestURL.RevisePhone,prams,'POST',true)
		return response;
	},
	//修改个性签名
	ReviseSignature: async function (prams) {
		let response = await request.Fetch(requestURL.ReviseSignature,prams,'POST',true)
		return response;
	},
	//商城接口
	shop: async function (prams) {
		let response = await request.Fetch(requestURL.shop,prams,'POST',true)
		return response;
	},
	//行业动态详情接口
	IndustryDetails: async function (prams) {
		let response = await request.Fetch(requestURL.IndustryDetails,prams,'POST',true)
		return response;
	},
	//行业动态更多接口
	IndustryMore: async function (prams) {
		let response = await request.Fetch(requestURL.IndustryMore,prams,'POST',true)
		return response;
	},
	//讲师介绍接口
	lecturer: async function (prams) {
		let response = await request.Fetch(requestURL.lecturer,prams,'POST',true)
		return response;
	},
	//扫码接口
	SweepCode: async function (prams) {
		let response = await request.Fetch(requestURL.SweepCode,prams,'POST',true,true)
		return response;
	},
	//线下课详情
	OfflineCourse: async function (prams) {
		let response = await request.Fetch(requestURL.OfflineCourse,prams,'POST',true)
		return response;
	},
	//APP微信支付
	APPWXZF: async function (prams) {
		let response = await request.Fetch(requestURL.APPWXZF,prams,'POST',true,true)
		return response;
	},
	//线下课报名
	enroll: async function (prams) {
		let response = await request.Fetch(requestURL.enroll,prams,'POST',true,true)
		return response;
	},
	//线下课报名确认支付
	xxkpay: async function (prams) {
		let response = await request.Fetch(requestURL.xxkpay,prams,'POST',true,true)
		return response;
	},
	//充值金额档次
	pay: async function (prams) {
		let response = await request.Fetch(requestURL.pay,prams,'POST',true,true)
		return response;
	},
	//充值
	recharge: async function (prams) {
		let response = await request.Fetch(requestURL.recharge,prams,'POST',true,true)
		return response;
	},
	//充值
	OfflineCourseSettlement: async function (prams) {
		let response = await request.Fetch(requestURL.OfflineCourseSettlement,prams,'POST',true,true)
		return response;
	},
	//精品课预约接口
	Course: async function (prams) {
		let response = await request.Fetch(requestURL.Course,prams,'POST',true,true)
		return response;
	},
	//精品课点击预约
	goCourse: async function (prams) {
		let response = await request.Fetch(requestURL.goCourse,prams,'POST',true,true)
		return response;
	},
	//顾问案列表
	gwaList: async function (prams) {
		let response = await request.Fetch(requestURL.gwaList,prams,'POST',true,true)
		return response;
	},
	//商品详情
	shopDetail: async function (prams) {
		let response = await request.Fetch(requestURL.shopDetail,prams,'POST',true,true)
		return response;
	},
	//人脉接口
	connection: async function (prams) {
		let response = await request.Fetch(requestURL.connection,prams,'POST',true,true)
		return response;
	},
	checkout2: async function (prams) {
		let response = await request.Fetch(requestURL.checkout2,prams,'POST',true,true)
		return response;
	},
	FavouriteList: async function (prams) {
		let response = await request.Fetch(requestURL.FavouriteList,prams,'POST',true,true)
		return response;
	},
	//视频/音频确认购买
	Purchase: async function (prams) {
		let response = await request.Fetch(requestURL.Purchase,prams,'POST',true,true)
		return response;
	},
	//发布心得
	experience: async function (prams) {
		let response = await request.Fetch(requestURL.experience,prams,'POST',true,true)
		return response;
	},
	//运营、营销、团队更多
	modelMore: async function (prams) {
		let response = await request.Fetch(requestURL.modelMore,prams,'POST',true,true)
		return response;
	},
	//文稿页的学习心得展示接口
	xinde: async function (prams) {
		let response = await request.Fetch(requestURL.xinde,prams,'POST',true,true)
		return response;
	},
	//回复接口
	huifu: async function (prams) {
		let response = await request.Fetch(requestURL.huifu,prams,'POST',true,true)
		return response;
	},
	//我的心得列表
	ExperienceList: async function (prams) {
		let response = await request.Fetch(requestURL.ExperienceList,prams,'POST',true,true)
		return response;
	},
	//卡券列表
	couponList: async function (prams) {
		let response = await request.Fetch(requestURL.couponList,prams,'POST',true,true)
		return response;
	},
	Settlement: async function (prams) {
		let response = await request.Fetch(requestURL.Settlement,prams,'POST',true,true)
		return response;
	},
	//结算台收货地址展示接口
	Receiving: async function (prams) {
		let response = await request.Fetch(requestURL.Receiving,prams,'POST',true,true)
		return response;
	},
	shopbuy: async function (prams) {
		let response = await request.Fetch(requestURL.shopbuy,prams,'POST',true,true)
		return response;
	},
	upgrade: async function (prams) {
		let response = await request.Fetch(requestURL.upgrade,prams,'POST',false,false)
		return response;
	},
	setDefault: async function (prams) {
		let response = await request.Fetch(requestURL.setDefault,prams,'POST',true,true)
		return response;
	},
	allOrder: async function (prams) {
		let response = await request.Fetch(requestURL.allOrder,prams,'POST',true,true)
		return response;
	},
	//订单列表--课程
	orderCurriculum: async function (prams) {
		let response = await request.Fetch(requestURL.orderCurriculum,prams,'POST',true,true)
		return response;
	},
	//订单列表--商品
	orderGoods: async function (prams) {
		let response = await request.Fetch(requestURL.orderGoods,prams,'POST',true,true)
		return response;
	},
	//物流信息
	LogisticsInformation: async function (prams) {
		let response = await request.Fetch(requestURL.LogisticsInformation,prams,'POST',true,true)
		return response;
	},
	//H5微信支付回调
	WXZFCallBack: async function (prams) {
		let response = await request.Fetch(requestURL.WXZFCallBack,prams,'POST',true,true)
		return response;
	},
	//H5支付充值
	H5WXCZ: async function (prams) {
		let response = await request.Fetch(requestURL.H5WXCZ,prams,'POST',true,true)
		return response;
	},
	//直播跳转判断
	zb: async function (prams) {
		let response = await request.Fetch(requestURL.zb,prams,'POST',true,true)
		return response;
	},
	//学员证
	xyz: async function (prams) {
		let response = await request.Fetch(requestURL.xyz,prams,'POST',true,true)
		return response;
	},
	//我的客服
	myService: async function (prams) {
		let response = await request.Fetch(requestURL.myService,prams,'POST',true,true)
		return response;
	},
	Search: async function (prams) {
		let response = await request.Fetch(requestURL.Search,prams,'POST',true,true)
		return response;
	},
	CourseList: async function (prams) {
		let response = await request.Fetch(requestURL.CourseList,prams,'POST',true,true)
		return response;
	},
	//秋梅文化
	qmwh: async function (prams) {
		let response = await request.Fetch(requestURL.qmwh,prams,'POST',true,true)
		return response;
	},
	//点赞
	dz: async function (prams) {
		let response = await request.Fetch(requestURL.dz,prams,'POST',true,true)
		return response;
	},
	indextop: async function (prams) {
		let response = await request.Fetch(requestURL.indextop,prams,'POST',true,true)
		return response;
	},
	//小节视频评论列表
	sppl_list: async function (prams) {
		let response = await request.Fetch(requestURL.sppl_list,prams,'POST',true,true)
		return response;
	},
	xjsppl: async function (prams) {
		let response = await request.Fetch(requestURL.xjsppl,prams,'POST',true,true)
		return response;
	},
	myserver: async function (prams) {
		let response = await request.Fetch(requestURL.myserver,prams,'POST',true,true)
		return response;
	},
	//商城购买
	h5shopplay: async function (prams) {
		let response = await request.Fetch(requestURL.h5shopplay,prams,'POST',true,true)
		return response;
	},
	//进驻企业
	zjqy: async function (prams) {
		let response = await request.Fetch(requestURL.zjqy,prams,'POST',true,true)
		return response;
	},
	//医美项目
	ymxm: async function (prams) {
		let response = await request.Fetch(requestURL.ymxm,prams,'POST',true,true)
		return response;
	},
	//生美项目
	smxm: async function (prams) {
		let response = await request.Fetch(requestURL.smxm,prams,'POST',true,true)
		return response;
	},
	//进驻企业、医美、生美详情
	xq: async function (prams) {
		let response = await request.Fetch(requestURL.xq,prams,'POST',true,true)
		return response;
	},
	//进驻企业更对
	zjqyMore: async function (prams) {
		let response = await request.Fetch(requestURL.zjqyMore,prams,'POST',true,true)
		return response;
	},
	//医美更多
	ymMore: async function (prams) {
		let response = await request.Fetch(requestURL.ymMore,prams,'POST',true,true)
		return response;
	},
	//生美更多
	smMore: async function (prams) {
		let response = await request.Fetch(requestURL.smMore,prams,'POST',true,true)
		return response;
	},
	//商品收藏
	spsc: async function (prams) {
		let response = await request.Fetch(requestURL.spsc,prams,'POST',true,true)
		return response;
	},
	//显示商品收藏
	xsspsc: async function (prams) {
		let response = await request.Fetch(requestURL.xsspsc,prams,'POST',true,true)
		return response;
	},
	//充值记录
	czjl: async function (prams) {
		let response = await request.Fetch(requestURL.czjl,prams,'POST',true,true)
		return response;
	},
	//邀请好友二维码
	ewm: async function (prams) {
		let response = await request.Fetch(requestURL.ewm,prams,'POST',true,true)
		return response;
	},
	//微信登录
	WXlogin: async function (prams) {
		let response = await request.Fetch(requestURL.WXlogin,prams,'POST',true,true)
		return response;
	},
	//绑定手机号
	bindPhone: async function (prams) {
		let response = await request.Fetch(requestURL.bindPhone,prams,'POST',true,true)
		return response;
	},
	//个人中心绑定微信
	bindWX: async function (prams) {
		let response = await request.Fetch(requestURL.bindWX,prams,'POST',true,true)
		return response;
	},
	//热门搜索展示
	getrs: async function (prams) {
		let response = await request.Fetch(requestURL.getrs,prams,'POST',true,true)
		return response;
	},
	//行业动态收藏
	hydtsc: async function (prams) {
		let response = await request.Fetch(requestURL.hydtsc,prams,'GET',true,true)
		return response;
	},
	//行业动态点赞
	hydtdz: async function (prams) {
		let response = await request.Fetch(requestURL.hydtdz,prams,'GET',true,true)
		return response;
	},
	//行业动态发表评论
	hydtpl: async function (prams) {
		let response = await request.Fetch(requestURL.hydtpl,prams,'GET',true,true)
		return response;
	},
	//商务合作
	swhz: async function (prams) {
		let response = await request.Fetch(requestURL.swhz,prams,'POST',true,true)
		return response;
	},
	//商品评论
	shoppl: async function (prams) {
		let response = await request.Fetch(requestURL.shoppl,prams,'POST',true,true)
		return response;
	},
	//落地版块详情点赞
	lddz: async function (prams) {
		let response = await request.Fetch(requestURL.lddz,prams,'GET',true,true)
		return response;
	},
	//落地版块详情收藏
	gwasc: async function (prams) {
		let response = await request.Fetch(requestURL.gwasc,prams,'GET',true,true)
		return response;
	},
	//落地版块详情评论
	gwapinglun: async function (prams) {
		let response = await request.Fetch(requestURL.gwapinglun,prams,'GET',true,true)
		return response;
	},
	/* 观看时长统计 */
	xxgc: async function (prams) {
		let response = await request.Fetch(requestURL.xxgc,prams,'GET',true,true)
		return response;
	},
	addsc: async function (prams) {
		let response = await request.Fetch(requestURL.addsc,prams,'GET',true,true)
		return response;
	},
	/* 首页通知详情 */
	sytxnr: async function (prams) {
		let response = await request.Fetch(requestURL.sytxnr,prams,'GET',true,true)
		return response;
	},
	jyzs: async function (prams) {
		let response = await request.Fetch(requestURL.jyzs,prams,'GET',true,true)
		return response;
	},
}