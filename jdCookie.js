/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_pin=jd_42d587e672226;pt_key=app_openAAJhKf28ADAP-xliweU3aubgd_oWk59m15BQtVI6Z0MC5KD8JAfINnc9n40IxiFusK-geqw0V2s;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_pin=jd_tOxbkDfFLaoB;pt_key=app_openAAJhKQKtADCjFeUF3t-x3npLW6UGWYJxui0eFzkFPndgmcmIJuXBrxD0ZEK7TZdi9keaSPIsIps;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
'pt_pin=%E4%B9%9E%E5%84%BF%E8%92%99%E8%92%99;pt_key=app_openAAJhLLkiADDOHFWLJ4KFV5iKg8l5U6qtxQ907bpVK94avxB75h60BayPxon6EkmqDpzf9DPnz4c;',
'pt_pin=jd_791f47a446341;pt_key=app_openAAJhLCg5ADB4H-BWKGpFiQryyNRhUpSx0siP7GgXkISdSxtU9ee5pR3Y9pQivMPQ5BPAPiDMrc0;',//4hwh
'pt_pin=jd_58e5634d958d2;pt_key=app_openAAJhLL8yADD6ZnrYM1V8dDxPkKNac6S0UPLW0w_8eQ9jiDdFRdDU_ZSrfzbV-_SJ7kLTu3DgvJ0;',//5脑壳
'pt_pin=jd_606251ffaa284;pt_key=app_openAAJhLiCbADAEKgFx7amzPWz6L475hB7-hYub5xPEhtknIPJpaKD5LIvgBZKwwd5DgOH-H8YZaQ0;',//6骚猪
'pt_pin=jd_42dccf369ea94;pt_key=app_openAAJhLLsYADAs0lP1f_WXuEMQ43_GNKCyXo9dm41ZncQYzN_aTpfr3uUPCcmFIzrNU7J4BDRLPuY;',//7袄子
'pt_pin=jd_5cb46c7eb72fb;pt_key=app_openAAJhLL-ZADBnIz_CapLB9nwvgANz4giyPurDNdZebnpKTOSWlfS9Tl3puyGTkqJqbIfSL0gHdrs;',//8宾鹏
'pt_pin=jd_656af799a2bc8;pt_key=app_openAAJhLiHlADCc5KA9O6T34JQuVc75IDHSezq-9LhrvyGntGg4QvbinBPqdnD-Q1L_Kqv4UGCnRnU;',//9波波
'pt_pin=jd_647d5f0be46b9;pt_key=app_openAAJhLiJEADDq0n4vUBxNLBge-IThE_GD07Ji_deG4jd6WH5t7MpytmJbbgkPE04yFzyJV4jywP0;',//10陈辉
'pt_pin=wddVNsdoYNqloT;pt_key=app_openAAJhLiLpADAu_Mz9afjwkM9QO3ROFFMI_t0PgAzeOGb3NQ8NMUwQ-R6q6BmGrji84N8RdZw6Pnk;',//11黑鬼
'pt_pin=jd_739655cbaabd1;pt_key=app_openAAJhLiNRADATQZrrUnlTNMrZwEM6nfZLvT3knTW1S-CXqO1xdFpR6U_m6HuASBC9oMYTh_GxcYQ;',//12周渝
'pt_pin=jd_6014f5eb46b09;pt_key=app_openAAJhLNfhADBEZ0crEKPbe1H27icmgKx2Mh9HsK87K9GwqhdKzxSG_KWgFWidHHvLOU5PDsIayHs; ',//13李静
'pt_pin=jd_gKbpGgAmDMNn;pt_key=app_openAAJhLiOmADAQ-uv3UbTtoGqF87UW5eOSvZF9HwrsidaiLm7V11LyHextpvPVXZ_UVD5v-ThUuh0;',//14刘佳明
'pt_pin=jd_476aa7ab8b430;pt_key=app_openAAJhLeMvADCcC-q6cNkbjDNtrKBm0pawUd-vIfhnP-5E_yan57KCDAhBPeGHZfU_XX412POaQjo;',//15林灵
'pt_pin=jd_5ff5df79b0235;pt_key=app_openAAJhLdrDADA5PhjVUbXqImUEgMW6CMxz9OXPalUgLa-oz1f8NVxEzPqu6fW1gUHfWxDYssGHy1w;',//16李建强
'pt_pin=252799583lin;pt_key=app_openAAJhLePaADBiUQwQIvTiqbtKp522CrhL9Q6hnJ4UTpR4ZXJb0CqhRf9cfwDDdI13NRmteP9QxVg;',//17林毅
'pt_pin=jd_53de144ef58bd;pt_key=app_openAAJhLetXADDn_cgQM8lrhjmrUfHv5bVG1iSYjhPxLjiCCMv9uWZfzD7c6IFODP2LhNjkctYpWcU;',//18周广
'pt_pin=jd_4a67c5f4f4cb5;pt_key=app_openAAJhLetFADA3olnguyN6QqRhrfbExTBm6y-aDybsGxwgaa8doYWxEb11lokupAMx3DlKu06IivE;',//19刘
//'pt_pin=jd_699500943b447;pt_key=AAJhH5g4ADC5O48hq4wK69geayZO3KhzbSRQ2Xv1FhPj5CbR3jw8-yd8SLaNbqu99EzpeaI91R4;',//20周瑜姐
'pt_pin=15282068431_p;pt_key=app_openAAJhLaB8ADB40DlgmOzPnQb0AwmjKwtDLmbdwgC63_XES_Mles2yCvDzvB2k7gDJiRweL5Z1sZY;',//20邓
'',
//'pt_pin=FoxMTF;pt_key=AAJhFHDUADCrPrcUxcPKSBtBZigqfiOlpIw0FIxp_s1iNsBin1gOrrTN2JhYHdWYb-pAM-Auauc;',
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}

