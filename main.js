/*
原生nodejs运行方式,不需要面板,下面配置好脚本和运行时间,在pm2挂载该主要程序脚本
安装pm2命令:npm install pm2 -g
挂载主程序命令:pm2 start main.js --name myserver
npm install pm2 -g     # 命令行安装 pm2 
pm2 start app.js -i 4 #后台运行pm2，启动4个app.js 
                                # 也可以把'max' 参数传递给 start
                                # 正确的进程数目依赖于Cpu的核心数目
pm2 start app.js --name my-api # 命名进程
pm2 list               # 显示所有进程状态
pm2 monit              # 监视所有进程
pm2 logs               #  显示所有进程日志
pm2 stop all           # 停止所有进程
pm2 restart all        # 重启所有进程
pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 stop 0             # 停止指定的进程
pm2 restart 0          # 重启指定的进程
pm2 startup            # 产生 init 脚本 保持进程活着
pm2 web                # 运行健壮的 computer API endpoint
pm2 delete 0           # 杀死指定的进程
pm2 delete all         # 杀死全部进程
*/
var request = require('sync-request');
var cronJob = require("cron").CronJob;

//在此处配置定时和脚本
//远程脚本
//cron('0 0 8 * * *', 'https://raw.githubusercontents.com/passerby-b/JDDJ/main/123.js');
//本地脚本

cron('21 7 * * *', './gua_MMdou.js');//升级领京豆

cron('20 */2 * * *', './jd_big_winner.js');//发财大赢家

cron('35 1,23 * * *', './jd_nzmh.js');//女装盲盒

cron('5 0 * * *', './he1pu/jd_bean_sign.js');//京东签到

cron('5 * * * *', './he1pu/jd_cfd.js');//财富岛

cron('5 0,23 * * *', './jd_club_lottery.js');//摇京豆

cron('10 * * * *', './jd_daily_egg.js');//天天提鹅

cron('13 1,22,23 * * *', './jd_daily_lottery.js');//小鸽有礼

cron('15 12 * * *', './jd_delCoupon.js');//删优惠券

cron('2 2 * * *', './jd_dpqd.js');//店铺签到

cron('13 1,22 * * *', './jd_gold_creator.js');//金榜创造营

cron('10 5 * * *', './jd_jin_tie.js');//领金贴

cron('59 7,15,23 * * *', './he1pu/jd_joy_reward 500.js');//宠汪汪兑换500豆

cron('15 */2 * * *', './jd_joy.js');//宠汪汪

cron('20 * * * *', './jd_joypark_joy.js');//汪汪乐园养joy

cron('20 7,9,17,20 * * *', './jd_joypark_task.js');//汪汪乐园每日任务

cron('4 2,10 * * *', './he1pu/jd_jxlhb.js');//京喜领88元红包

cron('20 0-23/3 * * *', './jd_jxmc.js');//京喜牧场



cron('10-20/5 12 * * *', './jd_live.js');//京东直播

cron('36 8 * * *', './jd_lotteryMachine.js');//京东抽奖机

cron('4 10 * * *', './jd_market_lottery.js');//幸运大转盘

cron('5 0,1-23/3 * * *', './jd_mohe.js');//5G超级盲盒

cron('12 0-23/6 * * *', './jd_pigPet.js');//京东金融养猪猪

cron('5 0 * * *', './jd_price.js');//京东价格保护

cron('0 0-18/6 * * *', './jd_rankingList.js');//排行榜



cron('0 6 * * *', './jd_sign_graphics.js');//京东签到

cron('16 8,20 * * *', './jd_small_home.js');//东东小窝

cron('0 1,3,5,7,11 * * *', './jd_speed_sign.js');//京东极速版签到+赚现金任务

cron('8 0-23/3 * * *', './jd_speed.js');//京东天天加速

cron('5 1,7 * * *', './jd_try.js');//试用

cron('0 12 * * *', './jd_ylyn2.js');//伊利养牛奶

cron('20 0 * * *', './jx_sign.js');//京喜签到

cron('0-6 0 * * *', './jxgc_tuan.js');//京喜工厂开团

cron('4-10 0 * * *', './jxgc_tuan2.js');//京喜工厂开团2

cron('8 4,11 * * *', './he1pu/jd_jxg.js');//京小鸽吾悦寄

cron('1 0,1,8 * * *', './he1pu/jd_jxSign.js');//京喜签到

cron('21 10 * * *', './jd_sign_graphics.js');//京东签到

cron('10 9,18 9-25 8 *', './he1pu/jd_star_shop.js');// 明星小店

cron('15 6-18/6 * * *', './he1pu/jd_DDMC.js');//东东萌宠

cron('1 7-21 * * *', './he1pu/jd_ZDDD.js');//种豆得豆

cron('5 6-18/6 * * *', './he1pu/jd_DDNC.js');//东东农场

cron('33 5,17 * * *', './he1pu/jd_dwapp.js');//京东积分换话费

cron('30 10,22 * * *', './jd_bean_change_new.js');//资产通知强化

cron('5 0 * * *', './jd_bean_sign.js');//京东签到

cron('10 0,1,2,3,6,8,11,17 * * *', './jddj_fruit.js');//京东到家果园任务

cron('5 * * * *', './jddj_fruit_collectWater.js');//京东到家果园水车收水滴任务

cron('10 0 * * *', './he1pu/jd_ccSign.js');//领券中心签到

cron('32 0,1,2 * * *', './he1pu/jd_cash.js');//签到领现金

cron('10 */6 * * *', './quguan.js');//取关
//cron('* * * * *', './');



function cron(time,file){new cronJob(time,()=>{try{if(file.indexOf('http://')>-1||file.indexOf('https://')>-1){let res=request('get',file);if(res.getBody('utf8'))eval(res.getBody('utf8'))}else{delete require.cache[require.resolve(file)];require(file)}}catch(error){console.log('\r\n '+file+"_erro:"+error)}},null,true)}
