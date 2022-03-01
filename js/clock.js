function sayParam(param) {
    console.log(param);
}

setInterval(sayParam("interval"),3000);
setTimeout(sayParam("timeout"),3000);