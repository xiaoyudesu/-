// 事件绑定
function addEvent(element, eType, handle, bol) {
 if(element.addEventListener){           //如果支持addEventListener
     element.addEventListener(eType, handle, bol);
 }else if(element.attachEvent){          //如果支持attachEvent
     element.attachEvent("on"+eType, handle);
 }else{                                  //否则使用兼容的onclick绑定
     element["on"+eType] = handle;
 }
}


// 事件解绑
function removeEvent(element, eType, handle, bol) {
 if(element.addEventListener){
     element.removeEventListener(eType, handle, bol);
 }else if(element.attachEvent){
     element.detachEvent("on"+eType, handle);
 }else{
     element["on"+eType] = null;
 }
}