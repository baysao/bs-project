!function () {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    atob || (atob = function (d) {
        var b = String(d).replace(/=+$/, "");
        if (b.length % 4 != 1) {
            for (var X, W, V = 0, l = 0, s = ""; W = b.charAt(l++); ~W && (X = V % 4 ? 64 * X + W : W, V++ % 4) ? s += String.fromCharCode(255 & X >> (-2 * V & 6)) : 0)W = chars.indexOf(W);
            return s
        }
    })
}();