console['log']('✅ㅤIniciando...');import{join,dirname}from'path';import{createRequire}from'module';import{fileURLToPath}from'url';import{setupMaster,fork}from'cluster';import{watchFile,unwatchFile}from'fs';import _0x5481c4 from'cfonts';import{createInterface}from'readline';import _0x5dfed2 from'yargs';const __dirname=dirname(fileURLToPath(import.meta['url'])),require=createRequire(__dirname),{name,author}=require(join(__dirname,'./package.json')),{say}=_0x5481c4,rl=createInterface(process['stdin'],process['stdout']);say('HADES-BOT-MD\x0aCREADOR\x20YOVANI\x0aBOT\x20CREADO\x20EN\x202019\x0aLA\x20MEJOR\x20CALIDAD\x20WHATSAPP',{'font':'chrome','align':'center','gradient':['red','magenta']}),say('<|==================================================>\x0a[•]-SERVIDORM\x20=PRIVADO\x0a[•]-VERSIÓN\x20BOT\x20=19.47\x0a[•]-OWEN=OFC-YOVANI\x0a[•]-ESTADO=ACTIVO\x0a[•]-SUSCRÍBETE\x20AL\x20CANAL\x20DE\x20YOUTUBE\x0a[•]-GRACIAS\x20POR\x20TU\x20PREFERENCIA\x0a<|==================================================>',{'font':'console','align':'center','gradient':['red','magenta']});let isRunning=![];function start(_0x3d406a){if(isRunning)return;isRunning=!![];const _0x1c5d78=[join(__dirname,_0x3d406a),...process['argv']['slice'](0x2)];say('ADJUST\x20THE\x20SCREEN\x20TO\x20SCAN\x20THE\x20CODE\x0aAJUSTE\x20LA\x20PANTALLA\x20PARA\x20ESCANEAR\x20EL\x20CÓDIGO',{'font':'console','align':'center','gradient':['red','magenta']}),setupMaster({'exec':_0x1c5d78[0x0],'args':_0x1c5d78['slice'](0x1)});const _0x5d6d66=fork();_0x5d6d66['on']('message',_0x3b159c=>{console['log']('[RECEIVED]',_0x3b159c);switch(_0x3b159c){case'reset':_0x5d6d66['process']['kill'](),isRunning=![],start['apply'](this,arguments);break;case'uptime':_0x5d6d66['send'](process['uptime']());break;}}),_0x5d6d66['on']('exit',(_0x57c87b,_0x3b52bf)=>{isRunning=![],console['error']('❎ㅤOcurrio\x20un\x20error\x20inesperado:',_0x3b52bf),_0x5d6d66['process']['kill'](),isRunning=![],start['apply'](this,arguments),process['env']['pm_id']?process['exit'](0x1):process['exit']();});const _0x59648b=new Object(_0x5dfed2(process['argv']['slice'](0x2))['exitProcess'](![])['parse']());!_0x59648b['test']&&(!rl['listenerCount']()&&rl['on']('line',_0x4e0dcc=>{_0x5d6d66['emit']('message',_0x4e0dcc['trim']());}));}start('main.js');