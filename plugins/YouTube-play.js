import _0xbce53b from'node-fetch';import _0x1c97e5 from'axios';import _0xffe792 from'yt-search';import{youtubedl,youtubedlv2}from'@bochilteam/scraper';import _0x5c1526 from'ytdl-core';import{bestFormat,getUrlDl}from'../lib/y2dl.js';import _0x48bf0c from'../lib/ytdll.js';import _0x31c974 from'fs';let limit1=0x64,limit2=0x190,limit_a1=0x32,limit_a2=0x190;const handler=async(_0x1c6114,{conn:_0x3e9fe3,command:_0x4c4bf0,args:_0x59a886,text:_0x5db726,usedPrefix:_0x12241c})=>{let _0x33b2c0={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x1c6114['sender']['split']('@')[0x0]+':'+_0x1c6114['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x5db726)return _0x3e9fe3['reply'](_0x1c6114['chat'],'[❗]\x20Ponga\x20el\x20nombre\x20de\x20su\x20video\x20o\x20musica\x20\x20\x0a\x0a\x20ejemplo:\x20\x0a\x20*'+(_0x12241c+_0x4c4bf0)+'\x20Killzn\x20bot\x20md',_0x33b2c0,_0x1c6114);try{_0x3e9fe3['reply'](_0x1c6114['chat'],''+wait,_0x33b2c0,_0x1c6114);const _0x512649=await search(_0x59a886['join']('\x20'));let _0x1e428a='';if(_0x4c4bf0==='play'||_0x4c4bf0=='play3'||_0x4c4bf0=='playdoc'||_0x4c4bf0=='musica'||_0x4c4bf0=='sonido')_0x1e428a='audio\x20🔊';else(_0x4c4bf0==='play2'||_0x4c4bf0=='video'||_0x4c4bf0=='play4'||_0x4c4bf0=='playdoc2'||_0x4c4bf0=='peliculas'||_0x4c4bf0=='pelis')&&(_0x1e428a='video\x20🎥');const _0x22b0ae=('┌──⊰🍁Y\x20O\x20U\x20T\x20U\x20B\x20E🍁⊰\x0a│⊳\x20\x20\x20\x20⇄\x20\x20\x20\x20◁\x20\x20\x20ㅤ\x20\x20❚❚ㅤ\x20\x20\x20▷ㅤ\x20\x20\x20\x20↻\x0a│⊳✍️\x20Autor:\x20'+_0x512649[0x0]['author']['name']+'\x0a│⊳📆\x20Publicado:\x20'+_0x512649[0x0]['ago']+'\x20\x0a│⊳🕟\x20Duración:\x20'+secondString(_0x512649[0x0]['duration']['seconds'])+'\x0a│⊳💬\x20visitas:\x20'+(''+MilesNumber(_0x512649[0x0]['views']))+'\x0a└──────────⊰')['trim']();await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'text':_0x22b0ae,'contextInfo':{'externalAdReply':{'title':_0x512649[0x0]['title'],'body':packname,'thumbnailUrl':_0x512649[0x0]['thumbnail'],'mediaType':0x1,'showAdAttribution':!![],'renderLargerThumbnail':!![]}}},{'quoted':_0x1c6114});if(_0x4c4bf0=='play'||_0x4c4bf0=='musica'||_0x4c4bf0=='sonido'){const _0x1a0142='128kbps',_0x58a905=_0x512649[0x0]['url'],_0x1ad6ef=await youtubedl(_0x58a905)['catch'](async _0x248c6f=>await youtubedlv2(_0x58a905)),_0x4755f7=await _0x1ad6ef['audio'][_0x1a0142]['download'](),_0x1accf9=await _0x1ad6ef['title'],_0xe3ad20=await _0x1ad6ef?.['size'],_0x1b4a85=_0xe3ad20?.['replace']('MB','')?.['replace']('GB','')?.['replace']('KB',''),_0x2e702a=await getBuffer(_0x4755f7),_0x227ae8=_0x2e702a['byteLength'],_0x2a7afc=_0x227ae8/0x400,_0x4ba7da=_0x2a7afc/0x400,_0x16d02c=_0x4ba7da['toFixed'](0x2);if(_0x16d02c>=limit_a2)return;if(_0x16d02c>=limit_a1&&_0x16d02c<=limit_a2){await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'document':_0x2e702a,'mimetype':'audio/mpeg','fileName':_0x1accf9+'.mp3'},{'quoted':_0x1c6114});return;}else{await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'audio':_0x2e702a,'mimetype':'audio/mpeg','fileName':_0x1accf9+'.mp3'},{'quoted':_0x1c6114});return;}}if(_0x4c4bf0=='play3'||_0x4c4bf0=='playdoc'){const _0x15f4ab='128kbps',_0xadb0e5=_0x512649[0x0]['url'],_0x4db21f=await youtubedl(_0xadb0e5)['catch'](async _0x5551a1=>await youtubedlv2(_0xadb0e5)),_0x59ab33=await _0x4db21f['audio'][_0x15f4ab]['download'](),_0x357a2f=await _0x4db21f['title'],_0x308767=await _0x4db21f?.['size'],_0x3de59b=_0x308767?.['replace']('MB','')?.['replace']('GB','')?.['replace']('KB',''),_0x204319=await getBuffer(_0x59ab33),_0xb95a4b=_0x204319['byteLength'],_0x35863c=_0xb95a4b/0x400,_0xabcc70=_0x35863c/0x400,_0xd3cc51=_0xabcc70['toFixed'](0x2);if(_0xd3cc51>=limit_a2)return;if(_0xd3cc51>=limit_a1&&_0xd3cc51<=limit_a2){await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'document':_0x204319,'mimetype':'audio/mpeg','fileName':_0x357a2f+'.mp3'},{'quoted':_0x1c6114});return;}else{await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'document':_0x204319,'mimetype':'audio/mpeg','fileName':_0x357a2f+'.mp3'},{'quoted':_0x1c6114});return;}}if(_0x4c4bf0=='play2'||_0x4c4bf0=='video'){const _0x44b64a='360',_0x32ea0f=_0x44b64a+'p',_0x79200f=_0x512649[0x0]['url'],_0x2c3458=await youtubedl(_0x79200f)['catch'](async _0x34e04d=>await youtubedlv2(_0x79200f)),_0x1337c6=await _0x2c3458['video'][_0x32ea0f]['download'](),_0xb83f86=await _0x2c3458['title'],_0xa781ca=await _0x2c3458?.['size'],_0x35cb53=_0xa781ca?.['replace']('MB','')?.['replace']('GB','')?.['replace']('KB',''),_0x80cb6e=await getBuffer(_0x1337c6),_0x488832=_0x80cb6e['byteLength'],_0x4e8c3a=_0x488832/0x400,_0xf1ce0a=_0x4e8c3a/0x400,_0x4acc6a=_0xf1ce0a['toFixed'](0x2);if(_0x4acc6a>=limit2)return;if(_0x4acc6a>=limit1&&_0x4acc6a<=limit2){await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'document':_0x80cb6e,'mimetype':'video/mp4','fileName':_0xb83f86+'.mp4'},{'quoted':_0x1c6114});return;}else{await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'video':_0x80cb6e,'mimetype':'video/mp4','fileName':_0xb83f86+'.mp4'},{'quoted':_0x1c6114});return;}}if(_0x4c4bf0=='play4'||_0x4c4bf0=='playdoc2'||_0x4c4bf0=='peliculas'||_0x4c4bf0=='pelis'){const _0x422ab6='360',_0x538f42=_0x422ab6+'p',_0x20df62=_0x512649[0x0]['url'],_0xe3bb94=await youtubedl(_0x20df62)['catch'](async _0x242ae2=>await youtubedlv2(_0x20df62)),_0xd1fa45=await _0xe3bb94['video'][_0x538f42]['download'](),_0xcb81d7=await _0xe3bb94['title'],_0x23ade6=await _0xe3bb94?.['size'],_0x4c3beb=_0x23ade6?.['replace']('MB','')?.['replace']('GB','')?.['replace']('KB',''),_0x591d59=await getBuffer(_0xd1fa45),_0x3f0397=_0x591d59['byteLength'],_0x1f0f2a=_0x3f0397/0x400,_0x1fbfe2=_0x1f0f2a/0x400,_0x4ad9ec=_0x1fbfe2['toFixed'](0x2);if(_0x4ad9ec>=limit2)return;if(_0x4ad9ec>=limit1&&_0x4ad9ec<=limit2){await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'document':_0x591d59,'mimetype':'video/mp4','fileName':_0xcb81d7+'.mp4'},{'quoted':_0x1c6114});return;}else{await _0x3e9fe3['sendMessage'](_0x1c6114['chat'],{'document':_0x591d59,'mimetype':'video/mp4','fileName':_0xcb81d7+'.mp4'},{'quoted':_0x1c6114});return;}}}catch(_0x5933d9){console['log'](_0x5933d9);throw'*❌\x20lo\x20siento\x20ha\x20corrido\x20un\x20error\x20verifique\x20que\x20su\x20enlace\x20o\x20el\x20de\x20YouTube\x20sea\x20correcto\x0a\x0a\x20en\x20caso\x20de\x20que\x20no\x20mande\x20tu\x20video\x20o\x20música\x20es\x20porque\x20pesa\x20demasiado\x20el\x20contenido\x20recomendación\x20para\x20descargarlo\x20usar\x0a\x0aplay3\x20y\x20play4❌*';}};handler['help']=['play','play2']['map'](_0x4a49a2=>_0x4a49a2+'\x20<\x20busqueda\x20>'),handler['help']=['pla3','play4']['map'](_0x1bceac=>_0x1bceac+'\x20<\x20busqueda\x20>'),handler['tags']=['downloader'],handler['command']=/^(play|play2|play3|play4|video|playdoc2|playdoc|musica|sonido|peliculas|pelis)$/i,handler['register']=!![],handler['group']=!![];export default handler;async function search(_0x5655f5,_0x11dd8c={}){const _0x43c676=await _0xffe792['search']({'query':_0x5655f5,'hl':'es','gl':'ES',..._0x11dd8c});return _0x43c676['videos'];}function MilesNumber(_0x55a5aa){const _0x325679=/(\d)(?=(\d{3})+(?!\d))/g,_0xef2ed7='$1.',_0x57cb03=_0x55a5aa['toString']()['split']('.');return _0x57cb03[0x0]=_0x57cb03[0x0]['replace'](_0x325679,_0xef2ed7),_0x57cb03[0x1]?_0x57cb03['join']('.'):_0x57cb03[0x0];}function secondString(_0x4b5f72){_0x4b5f72=Number(_0x4b5f72);const _0x2623d5=Math['floor'](_0x4b5f72/(0xe10*0x18)),_0xd8371=Math['floor'](_0x4b5f72%(0xe10*0x18)/0xe10),_0x4dc2bf=Math['floor'](_0x4b5f72%0xe10/0x3c),_0xde5ec5=Math['floor'](_0x4b5f72%0x3c),_0x3dd684=_0x2623d5>0x0?_0x2623d5+(_0x2623d5==0x1?'\x20día,\x20':'\x20días,\x20'):'',_0x1fc67a=_0xd8371>0x0?_0xd8371+(_0xd8371==0x1?'\x20hora,\x20':'\x20horas,\x20'):'',_0x2e1102=_0x4dc2bf>0x0?_0x4dc2bf+(_0x4dc2bf==0x1?'\x20minuto,\x20':'\x20minutos,\x20'):'',_0x2fa206=_0xde5ec5>0x0?_0xde5ec5+(_0xde5ec5==0x1?'\x20segundo':'\x20segundos'):'';return _0x3dd684+_0x1fc67a+_0x2e1102+_0x2fa206;}function bytesToSize(_0x400540){return new Promise((_0x15ae64,_0x13397b)=>{const _0x20f1ab=['Bytes','KB','MB','GB','TB'];if(_0x400540===0x0)return'n/a';const _0xc76e22=parseInt(Math['floor'](Math['log'](_0x400540)/Math['log'](0x400)),0xa);if(_0xc76e22===0x0)_0x15ae64(_0x400540+'\x20'+_0x20f1ab[_0xc76e22]);_0x15ae64((_0x400540/0x400**_0xc76e22)['toFixed'](0x1)+'\x20'+_0x20f1ab[_0xc76e22]);});}const getBuffer=async(_0x177808,_0x316654)=>{_0x316654?_0x316654:{};const _0x4f22c4=await _0x1c97e5({'method':'get','url':_0x177808,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x316654,'responseType':'arraybuffer'});return _0x4f22c4['data'];};