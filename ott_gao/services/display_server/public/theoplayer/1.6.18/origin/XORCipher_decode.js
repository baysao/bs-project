(function(myseed, mycode) {
  "use strict";

  var XORCipher = {
    decode: function(key, data) {
      data = b64_decode(data);
      return xor_decrypt(key, data);
    }
  };

  var b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function b64_decode(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
    if (!data) { return data; }
    data += "";
    do {
      h1 = b64_table.indexOf(data.charAt(i++));
      h2 = b64_table.indexOf(data.charAt(i++));
      h3 = b64_table.indexOf(data.charAt(i++));
      h4 = b64_table.indexOf(data.charAt(i++));
      bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
      o1 = bits >> 16 & 0xff;
      o2 = bits >> 8 & 0xff;
      o3 = bits & 0xff;
      result.push(o1);
      if (h3 !== 64) {
        result.push(o2);
        if (h4 !== 64) {
          result.push(o3);
        }
      }
    } while (i < data.length);
    return result;
  }

  function keyCharAt(key, i) {
    return key.charCodeAt( Math.floor(i % key.length) );
  }

  function xor_decrypt(key, data) {
    var c,r = [];
    for(var i = 0, len = data.length; i < len; i ++ ) {
      c = data[i];
      r.push(String.fromCharCode( c ^ keyCharAt(key, i) ));
    }
    return r.join("");
  }

  return XORCipher.decode(myseed, mycode);
})("test", "EgocFhUX");
