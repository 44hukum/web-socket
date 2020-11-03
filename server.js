var webSocket= require("ws").Server,
    wss=new webSocket({port:8989});

wss.on('connection',(e)=>{
    console.log("connected");
}); 