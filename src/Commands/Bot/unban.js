const a0_0x26d997=a0_0x30ab;(function(_0x18f1f0,_0x2f8123){const _0x4b12f2=a0_0x30ab,_0x33498b=_0x18f1f0();while(!![]){try{const _0x2b7159=parseInt(_0x4b12f2(0xe6))/0x1+-parseInt(_0x4b12f2(0xec))/0x2*(parseInt(_0x4b12f2(0xcd))/0x3)+-parseInt(_0x4b12f2(0xd4))/0x4+parseInt(_0x4b12f2(0xdd))/0x5+-parseInt(_0x4b12f2(0xea))/0x6+parseInt(_0x4b12f2(0xee))/0x7*(parseInt(_0x4b12f2(0xf2))/0x8)+-parseInt(_0x4b12f2(0xd1))/0x9*(parseInt(_0x4b12f2(0xd8))/0xa);if(_0x2b7159===_0x2f8123)break;else _0x33498b['push'](_0x33498b['shift']());}catch(_0x52e418){_0x33498b['push'](_0x33498b['shift']());}}}(a0_0x19e8,0x512ac));function a0_0x30ab(_0x37c21b,_0x7b3e8b){const _0x19e85f=a0_0x19e8();return a0_0x30ab=function(_0x30ab43,_0x357030){_0x30ab43=_0x30ab43-0xca;let _0x13aea0=_0x19e85f[_0x30ab43];return _0x13aea0;},a0_0x30ab(_0x37c21b,_0x7b3e8b);}const path=require('path'),{promises:fs}=require('fs'),{getList,reloadList,saveList}=require(a0_0x26d997(0xe9)),DATABASE_PATH=path[a0_0x26d997(0xda)](__dirname,'..','..',a0_0x26d997(0xcb)),BAN_LIST_PATH=path[a0_0x26d997(0xda)](DATABASE_PATH,'banList.json');async function saveBanList(_0xe78434){const _0x217e4a=a0_0x26d997;try{return await fs[_0x217e4a(0xdc)](DATABASE_PATH,{'recursive':!![]}),await fs[_0x217e4a(0xe0)](BAN_LIST_PATH,JSON[_0x217e4a(0xf1)](_0xe78434,null,0x2)),!![];}catch(_0x494904){return console[_0x217e4a(0xe4)](_0x217e4a(0xe7),_0x494904),![];}}function a0_0x19e8(){const _0x4ffacd=['sendErr','writeFile','message','Please\x20specify\x20a\x20user\x20to\x20unban\x20or\x20reply\x20to\x20their\x20message.','INVINCIBLE_MODE','error','exports','646979TaAQip','Error\x20saving\x20ban\x20list:','Unban\x20a\x20user,\x20allowing\x20them\x20to\x20use\x20the\x20bot\x20again.','../../Plugin/loaders','2633532vULHeF','ban','6EqvaeO','sendMessage','613438TjPzbN','filter','extendedTextMessage','stringify','32FVFlfh','includes','Database','settings','202314sYjkul','react','User\x20@','This\x20user\x20is\x20not\x20banned.','240633wfnMNn','key','participant','158980uedcKm','An\x20error\x20occurred\x20while\x20unbanning\x20the\x20user.','Error\x20in\x20unban\x20command:','remoteJid','40qeTmHv','contextInfo','join','Unban\x20Command','mkdir','614370qXQsXu','unban'];a0_0x19e8=function(){return _0x4ffacd;};return a0_0x19e8();}module[a0_0x26d997(0xe5)]={'usage':[a0_0x26d997(0xde)],'description':a0_0x26d997(0xe8),'isGroupOnly':![],'isGroupAdminOnly':![],'isOwnerOnly':!![],'execute':async(_0x2467d2,_0x59c062,_0x3c2ca1,_0x3f31a3)=>{const _0x2d717b=a0_0x26d997;try{let _0x24db4f;if(_0x59c062[_0x2d717b(0xe1)][_0x2d717b(0xf0)]?.[_0x2d717b(0xd9)]?.[_0x2d717b(0xd3)])_0x24db4f=_0x59c062[_0x2d717b(0xe1)][_0x2d717b(0xf0)][_0x2d717b(0xd9)][_0x2d717b(0xd3)];else{if(_0x3c2ca1[0x0]){const _0x28924b=_0x3c2ca1[0x0]['replace'](/[^\d]/g,'');_0x24db4f=_0x28924b+'@s.whatsapp.net';}}if(!_0x24db4f){const _0x1b480a=_0x2d717b(0xe2);global[_0x2d717b(0xcc)]?.[_0x2d717b(0xe3)]?(await _0x3f31a3[_0x2d717b(0xce)]('🚫'),await _0x3f31a3[_0x2d717b(0xdf)]({'target':_0x24db4f},{'context':'Unban\x20Command','info':_0x1b480a})):await _0x2467d2[_0x2d717b(0xed)](_0x59c062[_0x2d717b(0xd2)][_0x2d717b(0xd7)],{'text':_0x1b480a},{'quoted':_0x59c062});return;}const _0x366fc4=await reloadList(_0x2d717b(0xeb));if(!_0x366fc4[_0x2d717b(0xca)](_0x24db4f)){const _0x51df27=_0x2d717b(0xd0);global[_0x2d717b(0xcc)]?.[_0x2d717b(0xe3)]?(await _0x3f31a3[_0x2d717b(0xce)]('🚫'),await _0x3f31a3[_0x2d717b(0xdf)]({'target':_0x24db4f},{'context':_0x2d717b(0xdb),'info':_0x51df27})):await _0x2467d2['sendMessage'](_0x59c062['key'][_0x2d717b(0xd7)],{'text':_0x51df27},{'quoted':_0x59c062});return;}const _0x2f249b=_0x366fc4[_0x2d717b(0xef)](_0x2493bb=>_0x2493bb!==_0x24db4f),_0x4d6cc1=await saveBanList(_0x2f249b);if(!_0x4d6cc1)throw new Error('Failed\x20to\x20save\x20ban\x20list');await reloadList(_0x2d717b(0xeb));const _0x3c6a4f=_0x2d717b(0xcf)+_0x24db4f['split']('@')[0x0]+'\x20has\x20been\x20unbanned\x20and\x20can\x20now\x20use\x20the\x20bot.';global[_0x2d717b(0xcc)]?.[_0x2d717b(0xe3)]?await _0x3f31a3[_0x2d717b(0xce)]('✅'):await _0x2467d2[_0x2d717b(0xed)](_0x59c062['key'][_0x2d717b(0xd7)],{'text':_0x3c6a4f,'mentions':[_0x24db4f]},{'quoted':_0x59c062});}catch(_0x106ad9){console[_0x2d717b(0xe4)](_0x2d717b(0xd6),_0x106ad9);const _0x58358a=_0x2d717b(0xd5);global['settings']?.[_0x2d717b(0xe3)]?(await _0x3f31a3['react']('🚫'),await _0x3f31a3[_0x2d717b(0xdf)](_0x106ad9,{'context':_0x2d717b(0xdb),'info':_0x58358a})):await _0x2467d2[_0x2d717b(0xed)](_0x59c062[_0x2d717b(0xd2)][_0x2d717b(0xd7)],{'text':_0x58358a},{'quoted':_0x59c062});}}};