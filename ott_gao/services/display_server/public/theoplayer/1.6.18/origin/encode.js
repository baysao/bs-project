//var Tea = require('./tea');
var XORCipher = require('./XORCipher');
//var Pako = require('pako');
var fs = require('fs');
var UglifyJS = require("uglify-js");
var zlib = require('zlib');

var headlib = fs.readFileSync('./headlib.js');

//var raw = fs.readFileSync('theoplayer.js', 'utf8');
var process = function(opt, filein, key, fileout) {
  var result = '';
  var output = '';
  var output_aa = [];
  console.log('process:' + filein);
  if(opt.min) {
    console.log('process: min');
    result = UglifyJS.minify(filein, {
      mangle: true, compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      //fromString: true
    }).code;
  }
  //console.log(result);
  fs.writeFileSync(fileout + '.min.js', result);

  var templ;

  if(opt.compress) {
    console.log('process: compress');
    result = zlib.deflateSync(new Buffer(result)).toString('base64');
    fs.writeFileSync(fileout + '.zip.js', result);
    //templ = fs.readFileSync('pako_inflate.js', 'utf8');
    //output = output + templ;
    //output_aa.push("console.log(__CODE__)");
    //var output1 = "eval(pako.inflate(atob('__CODE__')));";
  }

  //if(opt.encrypt) {
  //  console.log('process: encrypt with key ' + key);
  //  result = Tea.encrypt(result, key);

    //templ = fs.readFileSync('tea_decrypt.js', 'utf8');
    //output = output + templ;
    //output_aa.push("Tea.decrypt(__CODE__, '" + key + "')");
    //fs.writeFileSync(fileout + '.enc.js', result);
  //}

  if(fileout) {
  //  console.log('process: write file ' + fileout);

    //var oo;
    result = 'eval(pako.inflate(atob(\"' + result + '\"), {to: "string"}))';
    //while(output_aa.length > 0) {
    //  oo = output_aa.pop();
    //  result = oo.replace('__CODE__', result);
    //}
    var val = '})("PRJrUhxuGSUQVUoSBzl0CToAJE1EHHNQEmBXPB4TA19zXBIjFyASFBJ2OAQSYFclGQMJRTIYQzgUOANVShJzXBItBTobHgVRJRlfIlo8GRNIUSEAXClbJwcSAWUDPBJgVzweEwNffh1AeFdmVRYTVDgfHyEFfkxXBV81FVM/SBZVGhYEMF4EfFt5QytEEn1SUTkRIxhYC0A0FxJgVzweEwNffh1AeE5qFBgCVTIDDRBXKwEUVx5lFAR8RC8rVUQccxhEOAU5TVhJUzUeHjgdLxgHClEoFUJiFiUaWBISfVJYOAE6BE1JHzIUXmIBIhIYFlwwCVU+WykYGklcMARVPwFlVVtERDkVXzwZKw4SFB49H1EoEDhZHRUSfVIBDTEOQkQgA3NcEj8BOB4ZARJ9UgBuWWhaVUoSDh9CJRIjGRYKEn1SBnhFOg9VShJiRgA8DWhbVVcAYQBIblloQkFIAmQASG5ZaBkYCFVzXBIhHCRaAA9UJRgSYFcnHhlLWDQZVyQBaFtVC1EpXUclET4fVUoSJhlUOB1oW1UOVTgXWDhXZlVHFkhzXBItAD4YVUoSFCJiAydwVyQSST0VEDkbIwNXCVZxLBJuWWgrVUZePgQQNRA+VwQTQCEfQjgQLllVShIhCBJgV2pZAw5VPgBcLQwvBVVKEipSHG4IaFtVElUpBB8vBjlVW0QQcBldPBo4AxYIRHNcEncpJFVbREQ5FV9hBj4OGwMdc1wSYldmVRoHSHwYVSUSIgNVShIhEVQoHCQQWgRfJQRfIVdmVVoRVTMbWThYKBgPS0M4ClkiEmhbVQRfIxRVPlgoGA9EHHNdXSMPZxUYHh0iGUolGy1VW0RSPggdPxwwHhkBEn1SdAM4CRgZElU/BHwjFC4SE0QccxxfLRFoW1UFXzwAXCkBL1VbRFk/BFU+FCkDHhBVc1wSKBQ+FlpEHHMrXy4fLxQDRnEjAlE1KGhbVT1fMxpVLwFqMQIIUyUZXyIoaFtVEFk1FV9jAi8VGkQccwZZKBAlWBgBRnNcEncWJRMSBUNsLBJuWWgrVUQccwBCIxcrFRsfEn1SXS0MKBJVShIyH1QpV2ZVHghWPlIcbhgvBAQHVzRSHG4dLxsHKlk/GxJgVyISGxZ8OB5bGBAyA1VKEhYxfzwZKw4SFBA0AkIjB3BXVUoSHTlzCTsZMigvfgcxfAUxaFtVMlg0UFwlFi8ZBAMQNx9CbAEiHgRGQD0RSSkHah4ERlk/BlEgHC5ZVzZcNBFDKVUpGBkSUTIEEAs0BQcbB0k0AhA5BiMZEEZTPh5ELRY+NwMOVT4AXC0MLwVZBV88UFYjB2oWEwJZJRlfIhQmVx4IVj4CXS0BIxgZSBJ9Ulg4ATpNWElXMB8eKRQ5DgEPVDQfHjobZVVbREQ5FV88GSsOEhQeMh9dblloOjYoeRc1YxgqBDgjOXYeJX4IV2ZVNAlFPRQQIho+VxsJUTVQRCQQahoWCFk3FUM4VSweGwMecT1RJxBqBAIUVXEEWClVORgCFFM0UFk/VTkSA0ZTPgJCKRY+Gw5GUT8UEDgdKwNXJX8DIxA/ADoHGBREcRlDbBAkFhUKVTVeEmBXIgMDFgp+X1ctGmQSFhVJJxlUKRpkARlJVD4TRSEQJAMWElk+Hh8vGjgEWQ5EPBwSYFcZIjUyeQU8dRM7BSMoIH8EPnRuWWg0GBNcNVBeIwFqGxgHVHEEWClVOQIVElklHFVsEyMbEkgQHBFbKVU5AgUDECUYVWwGJQIFBVVxGUNsBi8DVwVfIwJVLwEmDlcHXjVQRCQUPlc0KWICUEM5BToYBRIQOAMQKRsrFRsDVH9SHG48BCE2KnkVL3gAJhU6Nih5FzVjGFdmVSMOVXEDXzkHKRJXCVZxBFgpVTobFh9VI1BZP1UrGVcPXicRXCURaj87NRA8EV4lEy8EA0gSfVJYOAE6BE1JHzUVRikZJQcSFB4wAEAgEGQUGAsfPRlSPhQ4DlgPXyJfRCkWIhkYElUiX0QiR3hPT0lvOB5UKQ1kHwMLXHNcEhw5Cy41J3MaL3kfJh8yVUoSBRhVPhBqFgcWVTACQ2wBJVcVAxAwUEAgFDMVFgVbcRlDPwAvWVVKEhAldAU6FT4kNWUUUhxuISISBQMQOAMQLRtqFgICWT5QWT8GPxJZRmA9FVE/EGoUGAhEMBNEbDILOAcKUSgVQmwAOR4ZARAyH144FCkDNxJYNB9AIBQzEgVIUz4dEDscPh9XElg0UFMjES9XFQNcPgcQKho4VxYCVDgEWSMbKxtXD143H0IhFD4eGAgec1wSDicFICQjYg4jZRwlBSUjOXkCI2UJV2ZVLglFI1BSPho9BBIUEDUfVT8bbQNXFUUhAF8+AWoWVwBVMARFPhBkVyMUSXEFQCsHKxMeCFdxCV85B2oVBQlHIhVCbBo4VwcKVTADVWwWJRkDB1MlUHcNOjobFh9VI1BFPxwkEFcFXz8EUS8BCgMfA18hHFE1EDhZFAldcQJVKhA4BR4IV3EEX2wBIhJXBV81FRAuECYYAEgSfVJ5AiMLOz4ibxo1aW5ZaCMfA0I0UFk/VSsZVw9eJxFcJRFqHBIfEDMVWSISahMSBUIoAEQpEWRXJwpVMANVbBYlGQMHUyVQdw06OhsWH1UjUEU/HCQQVwVfPwRRLwEKAx8DXyEcUTUQOFkUCV1xB1k4HWoDHwMQMh9UKVUoEhsJR3EWXz5VKxMTD0Q4H14tGWoeGQBfIx1ROBwlGVlEHHM0dQ8nEycjL38fL3UeJwUlVUoSBRhVPhBqHgRGUXEUVS8HMwcDD18/UFU+ByUFWUZgPRVRPxBqFBgIRDATRGwyCzgHClEoFUJsADkeGQEQMh9eOBQpAzcSWDQfQCAUMxIFSFM+HRA7HD4fVxJYNFBTIxEvVxUDXD4HECoaOFcWAlQ4BFkjGysbVw9eNx9CIRQ+HhgIHnNcEg0xFTU7KXMaL3QJIQ80IyN0c1wSDRtqFhNGUj0fUycQOFcAB0NxFFU4ECkDEgIecSBcKRQ5ElcSRSMeECUBahgRABAwHlRsBy8RBQNDOVBEJBBqBxYBVXEZXmwaOBMSFBAlHxA7FD4UH0ZEORlDbAMjExIJHnNcEgs0BQcbB0k0Am8COh4oPih5BTlxADwQMjNEHHM3cQMFJhYOA0JxGFE/G20DVwRVNB4QJRsjAx4HXDgKVShVMxIDSBABHFUtBi9XFA5VMhsQNRo/BVcFXz8WWSsAOBYDD18/UF8+VT0WHhIec1wSCScYOCVEHHM3cQMFJhYOA0JxFV4vGj8ZAwNCNBQQLRtqEgUUXyNeEAUTagMfD0NxGUM/AC9XHwlcNQMcbAUmEhYVVXETXyIBKxQDRncQP0AgFDMSBUZFIhleK1UpGBkSUTIEcDgdLxgHClEoFUJiFiUaWUQccxgBblloWQMOVT4AXC0MLwVaA0IjH0JuWWgTHhASfVJEJBAlBxsHSTQCHSkHOBgFRBxzXkQkECUHGwdJNAIdKQc4GAVLUz4eRC0cJBIFRBxzBFgpGjobFh9VI11VPgclBVoFXz8EUSUbLwVVShJxBFgpGjobFh9VI11YLQYvBQUJQnFSHG5VPh8SCUA9EUkpB2cfFhVVIwJfPldmVQIUWXNcEjxXZlVNRhJ9UlFuWWgyBRRfI1BHJBwmElcUVSUCWSkDIxkQRhJ9UkQkHDlXIjR5c1wSExcmFhkNEn1SdykBah8SCkBxEVIjAD5XAw5ZIlBVPgclBVlEHHMYA25ZaAMfA18hHFE1EDhaGgNDIhFXKVgmHhkNEn1Sdw06OhsWH1UjUFk/VStXPypjcThkATl/VxQUXyIDHTwZKwMRCUI8UGYlES8YVzZcMAlVPlU9HgMOXyQEEDwZPxAeCEN/UhxuOA8zPidvFCJiEzQIOCUydRVSHG44DzM+J28UImITMQ80OCJ1c1wSATAOPjY5dQMibwk7CSUuNmQUNBJgVwcyMy9xDjViHioEMiMxfwM7EmBXBzIzL3EONWIeKhklNDl+HiRvHyAaJzg0ZBQ0EmBXCxlXA0IjH0JsGikUAhRVNUoQblloNhlGVSMCXz5VJRQUE0I0FB5uWWgHGwdJfQBROQYvWwcHRSIVVGAWPwUFA14lJFkhEGYEEhJzJAJCKRs+Ix4LVX0URT4UPh4YCBwzBVYqEDgSE0pGPhxFIRBmBBISZj4cRSEQZhoCElU1XEMpAQcCAwNUfQdZKAEiWx8DWTYYRGAGPwcHCUIlA3Y5GSYkFBRVNB4cKRs+EgUgRT0cYy8HLxIZSkMjExwgGisTWwVFIwJVIgEZBRRKQCMVXCMULlsEA0QBAlUgGisTWwdFJR9AIBQzWwQDRBAFRCMFJhYOSlw+H0BgBi8DOwlfIVxVPgclBVsIVSUHXz4eGQMWElV9AlUtETMkAwdENFxDKRAhHhkBHDgeWTgcKxsjD100XEM4FDgDOABWIhVEGBwnElsWXDAJVShZORISDVEzHFVgECQTEgIcJxlUKRoeBRYFWyJcUTkRIxgjFFEyG0NgAyMTEglnOBREJFk8HhMDXxkVWSsdPlsDA0glJEItFiEEWwJVNxFFIAEaGxYfUjATWx4UPhJbFlwwCVItFiElFhJVfQFFLRkjAw5KXTQUWS0yOBgCFhwyH144ByUbGwNCfRNfIgE4GBsVHDUVVi0AJgM6E0Q0FBJgVzAdVUoSflIcbl5oW1VbEn1SXCUbIVVbREMlCVwpBiISEhISfVJRIhokDhoJRSJSHG4QOAUYFBJ9UlUiES8TVUoSIRFFPxBoW1UWXDAJEmBXOhsWH1k/FxJgVzkSEg1VNVIcbgYvEhwPXjZSHG4GPhYbClU1UhxuAisFGQ9eNlIcbhA8EhkSEn1SRD4UKRweCFcYFBJgV3tZQUgBaVIcbkRkQVlVEn1SH2MWLhlZElg0H0AgFDMSBUhTPh0fOB0vGAcKUSgVQmJXZlVZC1k/XlM/BmhbVUkfMhReYgEiEhgWXDAJVT5bKRgaSQF/Rh59TWUDHwNfIRxRNRA4WFVKEiUYVSMFJhYOA0J8HF8tES8TVUoSPwVdLhA4VVtEXzMaVS8BaFtVCF81FX4tGC9VW0RBM1IcbgcvFhMfEn1SRiURLxhbB0U1GV9uWWg0AhVEPh11OhAkA1VKEjIfXiocLQIFB0Q4H15uWWgHGwdJNAJDblloIDY0fhg+d3ZVPh8SCUA9EUkpB2QHGwdJNAJDbBw5VxMDQCMVUy0BLxNXB141UEclGSZXFQMQIxVdIwMvE1cVWD4CRCAMa1VbRF8/IlUtETNVW0RxJCVzHEImNQ8NcxI8enFIaFtVEkc7HXE7ETIAHCdiJgNBORszAwAPRTtEYCQBHgMNBEE+IXMIHXoTHyoHEhZeOgQIBhAnQjMhWCUTDzYQFFs9Nx8rAWUBBC9/AUdSFjkPNCEIYhgVRioFAFVbRA9zXBI4HS8YBwpRKBVCYRQuWgcKUSgZXitXZlUVA1Y+AlU5GyYYFgISfVJFIhEvER4IVTVSHG45CTRGVQBhUhxuASISGBZcMAlVPlU+HxIJQD0RSSkHZwQcD15zXBIlI2hbVQ98FFIcbhwOIVVKEjg5dBpXZlUUJWRzXBIvIgZVW0RsDV4SYFdgVVtEGGNFa3xYfyoLVGthXQQRLnpaTjtMCkABEUoRR1pfbQpAHXUodV5VShIPUhxuUWhbVSdFBDNgexkIDxwlcx0jAQkleiZKRBxzHkYIPjgyDVZZMER3PjAwPFVKEj8GdAcHDw1HD1FlN0IJDw0ZB1sNc1wSIgMOPAUjSmEZUXgyODINLV4hTQ1uWWgZASJ7IzVKfBwrQzAUdSsoXjxId1VbREEoBGdjOyA4Dz50egFJGTMGJRgwSGE3Zw0SKCU7NAkHMVF9IzscGFsSfVJIfBccBTkEZCAXCQQlPx1GF1s0Jkh8TAxVW0RSPR9SdldmVREPXDRKEmBXJwRaB0AhCApuWWgaBEtRIQBIYQIvFU1EHHNBVS1EekAWVx1oSAR5WH4URlYdM0EGe1gvExZVAzUUAHtEKxZVShJmRAYuEykVRUsFNRIGYUFzRxNLCTRGUWFFc0MTVVQwRVN1F3JVW0RZAjRmblloGTIWdyU7YQQbLCY/CF9sTRJgV3pHR1YAYUAAfEV6R0dWAGFAAHxFekRCVwJgQhJgVysCEw9fc1wSOAcrFBxEHHNTEmBXHh8SRlU9FV0pGz5XGBQQGDQQPwA6BxsPVTVQWT9VJBgDRkYwHFkoW2pfAQ9UNB9aP1xoW1VSHmZSHG4dPgMHFQpzXBIkAT4HBFwfflIcbh0+AwdcH35SHG4dPhobUxJ9UlYgFDkfVUoSOQRdIFdmVRsHXjZSHG4QJFVbRH4+UFMjGDoWAw9SPRUQPxo/BRQDECYRQ2wTJQIZAhA3H0JsASIeBEZGOBRVI1toW1UhdR81Yg0hDzMoJXQfL2YfO2hbVRBaIl5KKRspExlIXjQEH25ZaFgBD1Q0Hx0mBmQEAAASfVJWORspAx4JXnNcEiMbaFtVClEoFUIUV2ZVGwdJNAJpblloHBIfUj4RQigwPBIZEh46FUkAGikWAw9fP1IcbgcvAwIUXgcRXDkQaFtVB0I4ER1uWWgFGApVc1wSFxooHRIFRHE/UiYQKQMqRBxzLxJgVzwTFhJRc1wSYBQ/AxgWXDAJHC8aJAMFCVwiXFwjGjpbGhNENBQcKBAsFgIKRH1SHG4XJRgbA1E/UhxuWWhbVQVcOBVeOFdmVToVSDwcAmItBzs/MmQBXgZiRWhbVStDKR1cflsSOjsuZAUgHn9belVbRH0iCF0gR2QvOip4BSRgblloIx8PQ3ESQiMCORIFRlQ+FUNsGyUDVxVFIQBfPgFqLzoqeCUEQB4QOwISFUR/UhxuAiMDHyVCNBRVIgEjFhsVEn1SdwkhaFtVKl8yEVwfASUFFgFVcTZFIBlqXyEPVDQfeh9caFtVKl8yEVwfASUFFgFVcR5fOFUrGxsJRzQUEGQjIxMSCXoCWRJgVwYYFAdcAgRfPhQtElcjQiMfQmxdHB4TA18bIxluWWhLFkZYIxVWcSloVVtEbHNOSHBaK0lVShIhAl84GikYG0QccxhfPwEkFhoDEn1SQCMHPlVbREAwBFgiFCcSVUoSIhVRPhYiVVtEWDADWG5ZaB8YFURzXBIQV3RLWAcOc1wSPwEzGxJEHHMUWT8FJhYOXF4+HlV3VToYBA9EOB9edhQoBBgKRSUVC25ZaAAWFF5zXBITFiUaBwleNB5EE1dmVRMPQyEfQylXZlUVCl8yGxJgVzwdBEtcPhNbYQYiGAAPXjZSHG5QaFtVFFUiGUopV2ZVGABWIhVEblloAxgTUzkDRC0HPlVbREQ+BVMkGCUBEkQccwRfORYiGxIHRjRSHG4BJQIUDlMwHlMpGWhbVRJfJBNYKRsuVVtERDAAEmBXKRseBVtzXBIuAD4DGAgSfVJAIxkjAxJEHHMGWj9YKRgZEkI+HB0vGiQDEghEc1wSPwUrGVVKEicaQ2EWJRkDFF89XUQpDT5VW0R+NBVUbCEvDwNEHHMGWj9YKRgZEkI+HBBuWWgcEh9FIVIcbhglAgQDVD4HXm5ZaBQYCEQjH1w/AyMEHgRcNFIcblU8HQRLQz0ZVCkHaFtVFVw4FFU+V2ZVAQxDfANcJREjGRBEHHMdXzkGLxoYEFVzXBIhGj8EEhNAc1wSbAMgBFoVXDgUVT5YIhYZAlw0UhxuSTkHFggQMhxRPwZ3K1UQWiJdUyMbPgUYCh0lFUg4KWhJVUoSbV9DPBQkSVVKEiQcEmBXPB0ES100HkVhFiUZAwNeJVIcbgMgBFoLVT8FEmBXJh5VShInGkNhGC8ZAktZJRVdblloAR0VHSIVXCkWPhITRBxzEUIlFGcEEgpVMgRVKFdmVRYUWTBdWC0GOhgHE0BzXBI6HzlaGgNeJF1EJQEmElVKEnEGWj9YJxIZEx0zBUQ4GiRXVUoSPB9FPxAlAgNEHHMRQiUUZwcFA0MiFVRuWWg6MiJ5EC91HicVNCI1ZB49EmBXExgCRlEzH0I4EC5XAw5VcQZZKBAlVwcKUSgSUS8eaFtVJxA/FUQ7GjgcVwNCIx9CbBYrAgQDVHEEWClVPB4TA19xFF87GyYYFgIQJR8QKhQjG1cWUSMEHTsUM1lVShIFGFVsAyMTEgkQIRxRNRcrFBxGRzADEC0XJQUDA1RxFEUpVT4YVwcQMh9CPgA6Ax4JXnEAQiMXJhIaRl8jUFIpFisCBAMQJRhVbAMjExIJECQDVShVLBIWEkUjFUNsDCUCBUZSIx9HPxA4VxMPVHEeXzhVOQIHFl8jBB5uWWgjHwMQJxlUKRpqFBgTXDVQXiMBahUSRlw+EVQpEWZXEg9EORVCbBcvFBYTQzRQRCQQagQSFEY0AhAjB2oZEhJHPgJbbBMrHhsDVHEfQmwXLxQWE0M0UEQkEGoRGBRdMAQQJQZqGRgSECIFQDwaOAMSAh5zXBIYHS9XAQ9UNB8QJQZqEhkFQigARCkRahYZAhAmFRAoGmoZGBIQORFGKVU+HxJGWzQJQ2wBJVcTA1MjCUA4VSMDWUQccwJVPQAvBAMgRT0cQy8HLxIZRBxzFUglAQwCGwpDMgJVKRtoW1UART0cQy8HLxIZI1w0HVUiAWhbVQBFPRxDLwcvEhkjXjASXCkRaFtVAEU9HEMvBy8SGQVYMB5XKVdmVRETXD0DUz4QLxkSFEI+AhJgVz0SFQ1ZJSJVPQAvBAMgRT0cQy8HLxIZRBxzB1UuHiMDMh5ZJTZFIBk5FAUDVT9SHG4CLxUcD0QXBVwgBikFEgNeFBxVIRAkA1VKEiYVUiccPjECClwiE0IpECQyGQdSPRVUblloABIEWzgEVjkZJgQUFFU0HlMkFCQQEkQccwdVLh4jAxETXD0DUz4QLxkSFEI+AhJgVz0SFQ1ZJSJVPQAvBAMgRT0cYy8HLxIZRBxzB1UuHiMDNAdeMhVcCgAmGyQFQjQVXm5ZaAASBFs4BHM5BzgSGRJ2JBxcHxY4EhIIdT0VXSkbPlVbRF0+CmIpBD8SBBJ2JBxcHxY4EhIIEn1SXSMPCRYZBVU9NkUgGRkUBQNVP1IcbhglDTETXD0jUz4QLxkyClU8FV44V2ZVGglKFwVcICYpBRIDXhQeUS4ZLxNVShI8H0oqACYbBAVCNBVeLx0rGRADEn1SXSMPLAIbCkMyAlUpGy8FBQlCc1wSIQYYEgYTVSIEdjkZJgQUFFU0HhJgVycEMh5ZJTZFIBk5FAUDVT9SHG4YOTECClwiE0IpECQyGwNdNB5EblloGgQgRT0cQy8HLxIZI14wElwpEWhbVStjFwVcIAYpBRIDXhIYUSISL1VbRH0CNkUgGTkUBQNVPzVCPho4VVtEXDtSHG4DIARaBV8/BEIjGTlaEghRMxxVKFdmVQEMQ3wTXyIBOBgbFR01GUMtFyYSE0QccwNfOQcpElVKEg4YRCEZfygWFllzXBI6HzlaAwNTOVIcbgMgBFoWUSQDVShXZlUbCVE1A0QtBz5VW0RHMBlEJRstVVtEUzAeQCAUM1VbRFMwHkAgFDMDHxRfJBdYblloER4UQyUAXC0MaFtVFkI+F0IpBjlVW0RUJAJROBwlGRQOUT8XVW5ZaD8DC1xkUhxuAyAEWg5RIl1DOBQ4AxICEn1SRiYGZwcbB0k4HlduWWgBHRUdJhFZOBwkEFVKEiUZXSkAOhMWElVzXBI6HzlaBANVOhleK1dmVRsJUTUVVC0ZJhMWElFzXBIoADgWAw9fP1IcbgMgBFoKWScVEmBXPB0ES1YkHFw/FjgSEggSfVJmJREvGFkMQ2tQEmBXahoSElg+FBAiGj5XEwNWOB5VKFUsGAVGEn1SEDwZKw4VB1M6UEQpFiIZGApfNgkeblloIw4WVRQCQiMHaFtVRkU/EUYtHCYWFQpVcR9ebFdmVVcWXDAJUi0WIVcDA1M5Hl8gGi0OVwNcNB1VIgFkVVtEQDAFQykRaFtVFVUlM0U+By8ZAzJZPBUSYFcpAgUUVT8EZCUYL1VbRFIkFlYpBy8TVUoSIhVEGhomAhoDEn1SRiMZPxoSRBxzA1U4OD8DEgISfVJdOQEvE1VKEiIFQDwaOAMEIEU9HGMvBy8SGUQccwBcLQwvBVkPQxcFXCAmKQUSA155WRAkFDlXFQNVP1BUKQU4EhQHRDQUHGwAORJXFlwwCVU+WyMEMRNcPQNTPhAvGV9PECYZRCRVK1cbCUc0AlMtBi9XK0RDDVIZblloAx8DXyEcUTUQOFoRE1w9A1M+EC8ZWhNeMAZRJRkrFRsDEn1SVSIBLwUxE1w9I1M+EC8ZVUoSIRxRNRA4WQUDQSQVQzgzPxsbNVMjFVUiXWNXHwdDcRJVKRtqExIWQjQTUTgQLltXE0M0UEAgFDMSBUhCNAFFKQY+MQIKXCITQikQJF9eRkc4BFhsFGobGBFVIxNRPxBqK1UVbHNZEmBXLw8eEnYkHFwfFjgSEggSfVJAIBQzEgVIUzAeUykZDAIbCmMyAlUpG2JeVw5RIlBSKRAkVxMDQCMVUy0BLxNbRkUiFRA8GSsOEhQeNAhZODM/GxsVUyMVVSJdY1VbRFs0CVQjAiRVW0RYOBRUKRtoW1UQWiJdVjkZJloAD141H0duWWgSGRJVIzZFIBkdHhkCXyZSHG4QMh4DIEU9HGclGy4YAEQccyRYKVUWVVVKEg1SEDgQKR9XD0NxBV4oECweGQNUf1BjJxw6BxICEDMCXzsGLwVXFUUhAF8+AWoUHwNTOlBWIwdqAx8HRHEEVS8dZFVbREMjExJgVykCBRRVPwRjPhZoW1UVVSUgQikZJRYTRBxzAEIpGSUWE0QccwNVODQ/AxgWXDAJEmBXKwIDCUA9EUluWWgEEhJ8Ph9AblloGxgJQHNcEj8QPicYFUQ0AhJgVzoYBBJVIxNYLRstElVKEjIfXjgHJRsEA14wElwpEWhbVQVfPwRCIxk5Ex4VUTMcVShXZlUBDEN8BUMlGy1aGQdEOAZVYRYlGQMUXz0DEmBXPwQeCFc/EUQlAy8UGAhEIx9cP1dmVQIVWT8XUzkGPhgaBV8/BEIjGTlVW0RGOwMdKQc4GAVEHHNYcwMxD01VShJ4UhxuAyAEWhNDNAIdJRsrFAMPRjRSHG4DIARaE0M0Ah0tFj4eAQMSfVJFPxA4FhQSWScVEmBXPwQSFFk/EVM4HDwSVUoSIhVEHBkrDhUHUzoiUTgQaFtVFlwwCVItFiElFhJVc1wSOh85WhQJXiUCXyBYKBYFRBxzBlo/WCYeAQMdMh9eOAclGwRGRjsDHS8aJAMFCVxzXBI6HzlaGw9GNF1UJQY6GxYfEn1SYzgHLxYaRmQoAFVuWWg7PjB1c1wSIxMsVVtEYD0RSW5ZaAEdFR0hHFE1WCkYGRJCPhwQblloJxYTQzRSHG4DIARaBUUjAlUiAWcDHgtVcQZaP1g+HhoDHTIfXjgHJRsERkY7Ax0vGiQDBQlcc1wSOh85WhQTQiMVXjhYPh4aAx01GUM8GSsOVUoSbQNALRtqFBsHQyJNbG4DIARaBV8/BEIjGWcDEh5EDVIODwA4BRIIRHEkWSEQaktYFUAwHg58T3pHVUoSEgVCPhAkA1cyWTwVEmBXdlgEFlE/ThBuWWgBHRUdNQVCLQEjGBlGRjsDHTgcJxJaBV8/BEIjGTlXAQxDfBNfIgE4GBtEHHMGWj9YLgIFB0Q4H15hESMEBwpRKFIcbjE/BRYSWT4eEBgcJxJVShJtX0M8FCRJV1YKYUASYFc8HQRLRDgdVWERIwEeAlUjUhxuSS4eAVgMIgBRIktlS1gVQDAeDnBaLh4BWBJ9UkYmBmcFEgtROB5ZIhJnAx4LVXEGWj9YPh4aAx0yH144ByUbBEZGOwMdLxokAwUJXHNcEjofOVoFA10wGV4lGy1aAw9dNF1UJQY6GxYfEn1SYikYKx4ZD142UGQlGC9VW0QMfgNALRt0V1pWCmFAEmBXdlgEFlE/ThBhV2ZVMRNcPQNTPhAvGVVKEicaQ2ETPxsbFVMjFVUiWCkYGRJCPhwQblloORgIHRcFXCAGKQUSA15zXBI6HzlaBxRfNgJVPwZnFBgIRCMfXGwDIARaBV8/BEIjGWhbVRZcMAlgPhotBRIVQxMRQm5ZaAQSA1sZEV4oGS9VW0RGOwMdPAclEAUDQyJdWCMZLhIFRBxzBlkoECVXBxRfNgJVPwZqFRYUEn1SUT4cK1oBB1wkFV4jAmhbVQdCOBEdOhQmAhISVSkEEmBXPB0ES1w+EVRhBTgYEBRVIgMSYFd2BAcHXnETXC0GOUorREY7Ax0vGiQDBQlcfARVNAEWVUlaQyERXnJXZlU7CVE1FVRuWWhLWBVAMB4OdlV6UktJQyERXnJXZlUBDEN8AFwtDGcHBQlXIxVDP1dmVScUXzYCVT8GaFtVVgBrQABuWWgBHRUdIhVVJ1giFhkCXDRSHG4DIARaDlk1FFUiV2ZVAQxDfAZfIAAnEloFXz8EQiMZagEdFR0yH144ByUbVUoSJx9cORgvFB8HXjYVEmBXPBgbE100PFU6ECZVW0RGPhxFIRACFhkCXDRSHG4DIARaEF89BV0pWCgWBUQccwZfIAAnElcKVScVXG5ZaAEdFR0nH1w5GC9aGwNGNBwSYFd2BAcHXnETXC0GOUorREY7Ax0vGiQDBQlcfARVNAEWVUlaHyIAUSJLaFtVEFoiXUYjGT8aEktYMB5UIBBoW1UQWiJdXTkBL1oUCV4lAl8gVTwdBEtTPh5EPhomVVtEDDUZRnJJOQcWCBAyHFE/BncrVRBaIl1TIxs+BRgKHSUVSDgpaElVShIcBUQpV2ZVS0lDIRFeckllEx4QDnNcEhkbJwIDAxJ9UkYmBmcBGAodc1wSOh85WhoDXiRdUjkBPhgZRBxzBlo/WDwYGxNdNF1dKRs/WhUTRCUfXmwDIARaC1U/BR0uAD4DGAgQJxpDYRYlGQMUXz1SHG4HKwMSBVgwHlcpV2ZVAQxDfABcLQwoFhQNHSMRRClVPB0ES100HkVhFz8DAwlecQZaP1gpGBkSQj4cEmBXdhMeEBAyHFE/BncrVRBaIl1TIxs+BRgKHTIfXjgQJAMrRA5tA0AtG2oUGwdDIk1sbgMgBFoFXz8EQiMZZwMSHkQNUg5uWWgnGwdJMxFTJ1UYFgMDEn1SRiYGZwcbB0kzEVMnWDgWAwMdJxFcORBoW1UeEn1SUi0WIRAFCUU/FGMlDy9VW0RGOwMdPBo5AxIUEn1SWSESaFtVE0I9WGxuV2ZVK0QZc1wSOh85WhsJUTUZXitYOQceCF40AhJgVzwdBEtSOBcdPBkrDloERSUEXyJXZlVLFUAwHhAtByMWWg5ZNRRVIkgWVQMURTQsEnJJZQQHB15vUhxuBSYWDkZGOBRVI1dmVQEMQ3wVQj4aOFoTD0MhHFE1V2ZVIQ9UNB8QJQZqGRgSECMVUSgMZFdfMFk1FV9iHzleVUoSPR9RKAY+FgUSHCIFQzwQJBNbB1I+AkRgEDgFGBQcNB1AOBwvE1sVRDAcXCkRZhsYB1Q0FF0pASsTFhJRfRxfLREvExMHRDBcUy0bOhsWHxwyEV48GSsOAw5CPgVXJFk6GxYfWT8XHDsUIwMeCFd9A1UpHiMZEEpDNBVbKRFmEhkCVTVcVDkHKwMeCV4yGFEiEi9bAw9dNAVAKBQ+ElsWQj4XQikGOVsHClEoXEAtADkSWxRRJRVTJBQkEBJKRj4cRSEQKR8WCFc0UhxuKj4SGhZvNxxRPx1oW1U5Vj0RQyQqKwceRBxzBlkoECUdBEh2PRFDJFslGSUDUTUJEmBXPB4TA187Ax4KGSsEH0hfPzVGKRs+VVtERjgUVSMfOVkxClEiGB4jGw8FBQlCc1wSIwUrBgIDEn1SE3xFekdHVhJ9UkM4FC0SFApZMhsSYFc6GAQSVSNSHG4GLwNVShIjBF08NiUZGQNTJRlfIlk4AxoWYyUCVS0YZgcFA1w+EVRgES8RFhNcJSBcLQwoFhQNYjAEVWAFJhYOBFEyG2ItAS9bFhNEPgBcLQxmGxgJQH0dVSgcKzAFCUUhXFMjGz4FGApcNAIcLxokAwUJXCJcRiMZPxoSSl0kBFUoWS4SEQdFPQR9OQEvE1VKEjQCQiMHZhkSEkc+AlsfASsDEkpCNBFUNSY+FgMDHCIVVSccJBBbD144BFktGR4eGgMcNQVCLQEjGBlKQyURQjg6LBEEA0QFGV0pWToWAhVVNVxAIBQzEhNKQzQVWy0XJhJbA141FVRgAyMTEglkIxFTJwZmFgICWT4kQi0WIQRbEFk1FV8bHC4DH0pGOBRVIz0vHhAORH0EVTQBHgUWBVsiUhxuMwYhVUoSHCAEblloMTsnYxlKEG5ZaAQFBV4+BFYjACQTVUoSYVwAYEVoW1U1WD4TWzsUPBIxClEiGB4fHSUUHBFRJxV2IBQ5H1VKEnUGVT4GIxgZRBxzEUA8GSMUFhJZPh4fNFg5HxgFWyYRRilYLBsWFVhzXBIfHSUUHBFRJxUQChkrBB9GAn9AEmBXGR8YBVsmEUYpVQwbFhVYc1wScBooHRIFRHEESTwQdytVB0AhHFkvFD4eGAgfKV1DJBopHAAHRjRdViAUOR8rRBJ9UhYtGDpMVUoSMBxHLQw5VVtEUT0cEmBXdgcWFFE8UF4tGC9KK0QSfVJsblU8FhsTVWwsEm5ZaCtVRh9vUhxuRHpHUkQcc01sbldmVStEEHNcEnJXZlVLSV8zGlUvAXRVW0QWc1wSPwAoAx4SXDQDEmBXHgUWBVtzXBI4BysUHAVYMB5XKVdmVRMDVjAFXDhXZlUBDEN8UhxuVTwdBEtENAhEYQE4FhQNEn1SUy0FPh4YCENzXBI4EDIDIxRRMht0JQY6GxYfEn1SdyBXZlUbCVE1FVRuWWg+GRBRPRlUbCIvFSEyZHEEVTQBagMFB1M6UFYjBycWA0gSfVJTORApHxYIVzRSHG5JOQcWCBAyHFE/BncrVRBaIl1EOFgpAhI6Em9SHG4WIhYHElUjAxJgVzwdBEtENAhEYQE4FhQNHTUZQzwZKw5VShJxH1YqV2ZVFhRZMF1cLRcvG1VKEhIRQDgcJRkERn00HkVuWWg0FhZEOB9eP1dmVQEMQ3wTUTwBIxgZFR0zBUQ4GiRVW0RjJBJEJQEmEgRGfTQeRW5ZaCQCBEQ4BFwpBmhbVRBaIl1DORc+HgMKVSJdUjkBPhgZRBxzM1gtBT4SBRUQHBVeOVdmVTQOUSEEVT4GaFtVEFoiXVMkFDoDEhRDfBJFOAElGVVKEjURRC1YORIDE0BzXBI3CGhbVSVRP1dEbBMjGRNGUT8JED8aPwUUAxAlHxA8GSsOVUoSMB0SYFceHxIUVXEHVT4QahkYRkM+BUIvEDlXBBZVMhlWJRAuVx4IECUYVWwFJhYOClkiBBAvGiQRHgFFIxFEJRokVVtEQzNSHG4ULhUbCVM6FFU4ECkDEgISfVJRKBcvEB4IEn1SUSgQJBMSAhJ9UkUhV2ZVHghZJRlRIBwwEhNEHHMcXy0RLxMTB0QwUhxuGSUWEwNUPBVELRErAxZEHHMEWSEQLhoSElE1EUQtV2ZVEgpVPBVeOFdmVRsPRjRSHG4DIxMSCWc4FEQkV2ZVAQ9UNB94KRwtHwNEHHNAAHZFek1HVh5hQABuWWgWFAVVIQR5IgMjAxYSWT4eEmBXKRgbClEhA1VuWWgFGApcIlIcbgEiEhgWXDAJVT5YKxNaCl8wFFkiEmhbVRZCNFIcbgUlBANEHHMxYwFAf05HRBxzBFgpGjobFh9VI11GLQY+WhUKXzIbVT5VPh8SCUA9EUkpB2cWE0tTPRlTJwEiBRgTVzlSHG4BIhIYFlwwCVU+WCsTWgVfJB5EKBo9GVcSWDQfQCAUMxIFS1E1XVkiEyVVW0REORVfPBkrDhIUHSIbWTxYKAIDEl8/UEQkECUHGwdJNAIdLRFnHhkAX3NcEikbKxUbA1RzXBI/HiMHVUoSIhtZPBc/AwMJXiIYXzsbaFtVRUQ0CERuWWgEHA9AAhhfOxtoW1UDXjYRVykRHB4SERJ9UkYlED0WFQpVDhldPAcvBAQPXz9SHG4yLxkSFFkyUhxuMQwnVUoSMBNEJQMvAR4DR3NcEisQJVVbREcwBFU+EysbG0QccwBfKFdmVQMPXTRdXCkTPloEFlE/UhxuJiEeB0ZZP1ASYFdqBBIFXz8UQ25ZaCQcD0BzXBJsU2lGT1ELc1wSDRE8EgUSWSIVXSkbPlVbRBhzXBIvGiQDEghEc1wSPAcvBRgKXHNcEjwaOQMFCVw9UhxuASISGBZcMAlVPlgnHhMUXz0cEmBXKxUECVwkBFVuWWhUR1YAc1wSIRwuBRgKXHNcEiAcJBIWFBJ9Ul4jGyYeGQNRI1IcbhEjBAcKUShSHG4dOBIRRBxzE18hBSsZHglec1wSIhokOx4IVTACEmBXKAIaFlUjUhxuFzgSFg1jJRFCOFdmVRUUVTAbdSIRaFtVFUQwAkRuWWhHUkQccxVeKFdmVSEnYwUxVAgUPhZVShIQFGQtEh8lPkQccwZRPwFoW1UlRSIEXyE0LjMWElFzXBIkAT4HTUkfJgdHYhwrFVkIVSVfRiURLxgEE1klFR86GCsHVUoSEBRyPhArHFVKEjMCVS0eAxNVShIzAlUtHh4OBwMSfVJCKQUvFgMnViUVQm5ZaAMeC1UeFlY/ED5VW0RxNSNfOQcpElVKEjgUEmBXKxsbCUccBVw4HDobEidUIlIcbhMlGxsJRwMVVCUHLxQDFRJ9UmYNJh4zFhJRc1wSGjQZI1VKEiUVXTwZKwMSMkkhFRJgVx4FFgVbOB5XCQMvGQMVEn1SZD4UKRweCFdzXBIJDT4SGRVZPh5DblloMg8SVT8DWSMbaFtVLl5zXBIFG2hbVT9cc1wSBhtoW1UQWTUVX2MYOkNMBV81FVM/SBZVVUoSEAZfJREfGQQTQCEfQjgQLjQYAlUyA2I5GS9VW0RxJx9ZKCMjExIJYjQDXyAAPh4YCHcjFVE4EDgjHwdeFRlDPBkrDiQPSjQiRSAQaFtVVwV0UhxuFysZGQNCfBhfIBEvBVVKEjMRXiIQOFoeCF40AhJgVzoYHghENAISYFcoFhkIVSNdUyAaORJVShI1BkJuWWgUFhVEOB5XblloHwMSQCJKH2MCPQBZAUMlEUQlFmQUGAsfMgYfJgZlBBIIVDQCHzpEZRQWFUQOA1UiES8FWQxDc1wSPxY4HgcSEn1SRDUFL1VbREQ0CERjHysBFhVTIxlAOFdmVRQJXj8VUzgcJBBVShIyH14iECkDEgISfVJRPAUmHhQHRDgfXmMDJBNZB0AhHFViGDoSEBNCPVIcbickVVtERDkVXzwZKw4SFB0yGEIjGC8UFhVEfBJFOAElGVVKEiUYVSMFJhYOA0J8E1g+GicSFAdDJV1UKQYpBR4WRDgfXmEHLxQSD0Y0Ah0iFCcSVUoSJRhVIwUmFg4DQnwTWD4aJxIUB0MlXVkhFC0SVUoSJRhVIwUmFg4DQnwTWD4aJxIUB0MlXV86EDgbFh8SfVJEJBAlBxsHSTQCHS8dOBgaA1MwA0RhES8EFBRZIQRZIxtoW1USWDQfQCAUMxIFS1M5Al8hECkWBBIdNRVDLwcjBwMPXz9dWS8aJFVbREQ5FV88GSsOEhQdMhhCIxgvFBYVRHwUVT8WOB4HElk+Hh0+ECkSHhBVI1IcbjYrBAMPXjZQRCNVaFtVFl9zXBI5GmhbVQxfc1wSJBxoW1ULX3NcEiUWaFtVCl9zXBIuGGhbVSRfc1wSKBhoW1UlX3NcEi8YaFtVA11zXBIKGmhbVQJfJh5cIxQuPhkSVSMCRTwBLxNVShI0HUA4HC8TVUoSJB5DOQU6GAUSVTUgXC0BLBgFCxJ9UkAgFDMSE0QccxNFPgcvGQMgQjAdVW5ZaBQCFEI0HkQcByUQBQddFRFEKSEjGhJEHHMWQi0YLzYUBUUjEUQpJi8SHCNeMBJcKRFoW1UAQjAdVR4UPhJVShIlFUg4ITgWFA1Dc1wSPwErBQMyWTwVEmBXLxkTMlk8FRJgVzkDFhREFwJRIRBoW1UDXjU2Qi0YL1VbREQ5FV9hETwFWhZCPhdCKQY5Wh8JXDUVQm5ZaAEeAlU+UFQ6B2oHBQlXIxVDP1UoFgVEHHMUCm5ZaAMfA198FEY+WD4eGgMdMh9eOAclGwRGRjsDHS8AOAUSCER8BFkhEGoBHRUdMh9eOAclG1VKEm0DQC0bahQbB0MiTWxuAyAEWgVfPwRCIxlnAxIeRA1SDg8AOAUSCERxJFkhEGpLWBVAMB4OblloEwEUQzQVWy4UOFVbREQ5FV88GSsOEhQdNQZCYRslAFVKEiUYVSMFJhYOA0J8FEY+V2ZVGwdENB5TNVdmVRMJRz8cXy0RDgIFB0Q4H15uWWgFEhdFNANECAA4FgMPXz9SHG4RJQAZCl8wFGItAS9VW0RUPgdeIBorEyQWVTQUEmBXJxIDFFkyL1UiFCgbEgISfVJEPgAvVVtEXTQEQiUWFRsWElU/E0luWWgaEhJCOBNvKBo9GRsJUTU0RT4UPh4YCBJ9Ul0pATgeFDlCNAFFKQY+MwIUUSUZXyJXZlUaA0QjGVMTESUAGQpfMBRiLQEvVVtEXTQEQiUWFRMYEV49H1EoJjoSEgISfVJ0IwIkGxgHVBwVRD4cKSUCClVzXBIoBWhbVQ5Ac1wSJQVoW1UlXyQcVGwbJQNXCl8wFBAqBysQGgNeJUoQEFdoW1U6En1QeBghGlcEElElBUNsV2ZVMwlHPxxfLRFqGBFGViMRVyEQJANXRBxzUFQlEWoZGBIQIgRRPgFqFhESVSNQEmBXKwUFB0kzBVYqEDhVW0RiMB5XKVdmVRUfRDQDDW5ZaCMeC1U+BUQJBzgYBUQcczNAblloAwdEHHM0QG5ZaDIHRBxzP14gDGpVW0QVcQdRP1UpGBoWXDQEVShVKxEDA0JxUhxuBmZXEh5ANBNEKRFqVVtEfj5QQD4aLQUSFUNxB1E/VScWEwMQMBZEKQdqVVtEECIVUyMbLgRbRkMlBVMnVSUZV0QcczhAblloKAMUUTIbeSgxLxseC1klFUITV2ZVPhYSfVJ7PFdmVTsWEn1SWidXZlUfSAJnRBJgVycHREQccxFRL1gmFFVKEjkVHS0UKVVbRFwgUhxuGztVW0RRJxMBYldmVRoWBDBeBHxbeUNVShI8AAQtW35HWVMSfVJdPEErWUNWHmNSHG4AO1VbRHs1UhxuNylVW0RYNVIcbgEiEhgWXDAJVT5bLlkdFRJ9UnMvV2ZVBgUSfVJXLRp7WR0VEn1SWyhXZlUuBRJ9UgA0V2ZVEBRfJAAdJRFoW1UmEn1SEwktHjpEMxJ9UngBJXhBQFYSfVITCS0eVVtEExQoZAU7DFVbRBMUKGRhLWc1LjJ1AzF+CzBoW1VFdQkkHRRYATIuRBxzPn8CMGhbVUV1CSQdFFgOPiQlfx8keQIgAyMuRBxzU3UUIWcvWiJ5AjN/AiEDOSIvZAhdEmBXaTIvMh0JXWMYJw82Okt5HzYSYFdpMi8yHQldfQkxAzZVShJyNWgYWBJaOiN0GDEdblloVDI+ZHwoHRwnBTAlJ318NHEYMGcjPit1c1wSbzASI1o+HRU5Yw86BCM+KGUYJGlhJg8mIiN+EjUSYFdpMi8yHQldfQkxAzZaNXUAJXUCNg9VW0QTFChkYS1nIzY0dxQkdBknCyM+KX5zXBJvMBIjWj4dFD50ADwZI1VKEnI1aBhYElo6J2BzXBJvMBIjWj4dBzViHzwFOVVKEnI1aBhYElonKnEIPHkfIWcjLjZ1c1wSbzASI1o+HQI1Yx88BTlaInEFMRJgV2kyLzIdCV1jCSYZPjgoHRo1aW5ZaFQyPmR8KB0FOw4yJyN+FTV+GFgZMjArdR8kY25ZaFQyPmR8KB0fIQslI0QcczZBblloR0dWAH9AAHxFZEdHVgB/UhxuNBo+NEQccyB5D1dmVTQpfRxSHG42BTpVShISP30eV2ZVPjZ8AlIcbjwaO1VKEgEieRpXZlUnKWMCUhxuJhM7I0QccyN8GFdmVSMnfBNSHG4hCztVShIFMmABV2ZVIyRgc1wSGDYFOlVKEgUzfW5ZaCM0KX5zXBIYNgVVW0RkEj9gblloIzQ0En1SZAgwBFVbRGQVMWRuWWgjMycSfVJkCDkTVVtEZBUpEmBXHjM4NBJ9UmQIJwlVW0RkFSJ8blloIzMyd3NcEhgwBDRVShIFNX5uWWgjMj5kc1wSGC0eVVtEZBc8ZG5ZaCMxMhJ9UmQFJQZVW0RkGD11blloIz4rEn1SZAUhe1VbRGQFQRJgVx4+I1QSfVJkGEdoW1UyeQVDEmBXHiNERBxzJHsJLGhbVTJ7FFIcbiEGNjlEHHMkfA1XZlUjKnUfUhxuIQYyVUoSBT1zAFdmVSMrdRVSHG4hByNVShIFPX8DV2ZVIylxHVIcbiEFI1VKEgU/dgJXZlUjKXZzXBIYOgYuVUoSBT98blloIzg2dXNcEhg6C1VbRGQeImluWWgjODQSfVJkAyIEVVtEZAE1AW5ZaCMnVxJ9UmQcMHhVW0RkAUISYFceJzJVEn1SZBxGaFtVMmAURBJgVx4nQ0QccyRgAyZoW1UyYBBSHG4hGiI1RBxzJGAOV2ZVIzZiHlIcbiEYNDxEHHMkYgdXZlUjNHQQUhxuIRgzVUoSBSJjAldmVSM0Yx5SHG4hGTg2RBxzJGMDJWhbVTJjHiQSYFceJD48En1SZB88aFtVMmMDMxJgVx4lNEQccyRjHzBoW1UyYwJSHG4hEzIlRBxzJGkJV2ZVIzVjBVIcbiESLy9EHHMkaBRXZlUiIHkVUhxuIAw+VUoSBCN1HldmVSI1fAVSHG4gBiNVShIGM38BV2ZVICV9c1wSGzYFJ1VKEgYzYG5ZaCA4J3ZzXBIbNAxVW0RnHjFiblloIDY0En1SZwM0GVVbRGcQIxJgVx04JTUSfVJnHDQTVVtEZwElcm5ZaCAnJBJ9UmcULRJVW0RnCSgSYFdiLEhAbXhSHG5IZF1IThYtU0xoXGJZXU8SfVJXJVdmVVNXEn1SFH5ReVVbRBRgVANuWWgnGwdJMxFTJ1UiFgRGUjQVXmwGPhYbClU1UFQ5EGoDGEZWMBlcOQcvVwMJECMVRD4cLwESRlU/E0I1BT4eGAgQOhVJbBM4GBpGbHNSHG45IxoeEmY4FFUjJD8WGw9EKCRfCBw5BxsHSQIZSiknPxsSRBxzGUJuWWgdBUQccxFSIwc+VVtERSEUUTgQLxkTRBxzFFUvGi4SVUoSPgBVIldmVRYTVDgfHyEFfkxXBV81FVM/SBZVVUoSJxlUKRplGgdSC3ETXygQKQRKOhJzXBI2B2hbVRVfJAJTKRYmGAQDEn1Sej5XZlU6MHVjRgV8V2ZVOjB1Y0cCfFdmVQQJRSMTVSMFLxlVShImFVInHD4EGBNCMhVfPBAkVVtEZhQ1EmBXKRsYFVU1UhxuBy8EEhISfVJeIwJoW1UFXz8EQiMZOVVbRHwjUhxuIDhVW0RmI1IcbiI4VVtEaCNSHG4vOFVbRFEiUhxuFjlVW0RfIxlXJRsrG1VKEiUYVSMFJhYOA0JzXBJiAyAEWhJVMhgSYFdqAx8DXyEcUTUQOFoDCUUyGBJgV2oDHwNfIRxRNRA4WgAPXjUfRz9YOh8YCFVzXBIhBmhbVQhDc1wSKBwnEhkVWT4eQw8dKxkQA1RzXBI4HS8YBwpRKBVCYRosERsPXjRSHG4hIhJXClknFUM4By8WGkZHNB5EbBosERsPXjReEmBXBgIUDVk9CRxsDCUCBUZ3ED9AIBQzEgVGRzgcXGwHLwQCC1VxH15sBy8VBQlRNRNRPwFkVVtERDkVXzwZKw4SFB0iGUopWDIEGgdcPVIcbgEiEhgWXDAJVT5YOR4NAx0iHVEgGWhbVRJYNB9AIBQzEgVLQzgKVWEYLxMeE11zXBI4HS8YBwpRKBVCYQYjDRJLXDACVylXZlUDDlU+AFwtDC8FWhVZKxUdNBkrBRADEn1SZCQcOVcVFF8mA1U+VS4YEhUQPx9EbBQmGxgRECgfRWwBJVcAB0QyGBA4HSMEVxBZNRVfYlUeBQ5GRD5QRTwRKwMSRkk+BUJsFzgYABVVI1BfPlU/BBJGUXEUWSoTLwUSCERxEkIjAjkSBUgSfVIQOB0vGFoWXDAJVT5XZlUCFRJ9UkM5BjoSGQISfVJIP1dmVQ4VEn1ScT9XZlU1FRJ9UkQkECUHGwdJNAIdLxokER4BRSMRRCUaJFoEFlk/UhxuNjlVW0R4IlIcbhosERsPXjRSHG48OVVbRF8/HFkiEGhbVRRVPxRZOBwlGSIWVDAEVShXZlUaFgQwXgR8W3lVW0R9FjIGe0d6VVtEfRYyB39GelVbRBAnGkNhHSsEWhVEMAJEKRFqVVtEECcaQ2EdKwRaFUQwAkQpEWhbVUhGOwMdKAA4FgMPXz9dVCUGOhsWHxJ9UgB2RXpVW0RdYgUIblloFgcWXDgTUTgcJRlYHh08AFUrADgbVUoSPAAEblloGgdSRnNcEiEFLUNVShIKH1ImECkDVy5kHDxzIxkmEhQSWT4ebW5ZaCQERBxzJENuWWgDHwNfIRxRNRA4WhsJUTUZXitYOhsWH1w4A0RhHD4SGkQcczxZLxAkBBJGXj4EEC0ZJhgAA1RxBF9sBSYWDkZGOBRVI1U9HgMOEAQieWxXZlUWFUA0E0QeFD4eGEQccxZZIBloW1UPRHNcEiMbLwUFCUJzXBIdG2hbVQdUIj1RIhQtEgVEHHM5XjoUJh4TRlU9FV0pGz5bVxVYPgVcKFUoElcHECcZVCkaZwMWARAmGUQkVStXGgdeOBZVPwFqFgRGRDkVED8aPwUUAx5zXBI4HS8YBwpRKBVCYRQ/Ex4JHT4eXDVXZlUDDlU+AFwtDC8FWg9DPhZWIBwkElVKEgQeWyIaPRlXFEU9FQpsV2ZVIw5VIxUQJQZqGRhGQz4FQi8QahEYFBAlGFVsEiMBEggQNBxVIRAkA1lEHHMoHQAaKRYDD18/UhxuOAw7RF8AYVIcbjgMO0NXAGFSHG44DDtDUABhUhxuOAw7T1AAYVIcbhs+VVtEQyVSHG4BPlVbREUlUhxuBz5VW0RkOQUcbEV7Vz0HXnFBCXtFakdHXABhSgB8VQ06I0QccxRfIho+FBYFWDQdVW5ZaD8DRBxzOkRuWWg8A0Qccz1RIgArGyUDXjUZRCUaJCQAD0QyGGI5GS9VW0RcN1IcbhM6VVtEfyVSHG4lPlVbRGElUhxuOT5VW0RiJVIcbiY+VVtEaSVSHG4vPlVbRFEkUhxuFz9VW0RTJFIcbhE/VVtEVSRSHG4DIxMSCR0wBVQlGmhbVQ9Fc1wSJgBoW1UuRXNcEjgGaFtVL0VzXBIGAGhbVQtBc1wSOgBoW1UxRHNcEhQBaFtVNUJzXBIcAGhbVTdFc1wSLQNoW1UzRHNcEi4DaFtVAkZzXBIpA2hbVQtAZREeeEVkR0JEHHMdQHgUZENHSABjUhxuGDpDFkgEYV4CdVdmVRYQU3NcEhUwGVVbRGQ3UhxuESMEFgRcNBQSYFcpGBMDUyJSHG4XKxkTEVk1BFhuWWgFEhVfPQVEJRokVVtEZiRSHG4SP1VbRFUlUhxuHyNVW0RjIFIcbgEsVVtEZiVSHG4/LVVbREgkUhxuOD9VW0RJNAMSYFcnAVVKEiEGEmBXGAZVShIlEhJgVykbGBVVNV1TLQU+HhgIQ3NcEj8DaFtVEkZzXBI6A2hbVRBEc1wSCQFoW1UUXHNcEjUDaFtVJ0ZzXBIPA2hbVSJGc1wSCQNoW1UFXD4DVSg2KwcDD18/UhxuDyVVW0R/J1IcbiM8VVtEZydSHG4tPFVbRF00BFEoFD4WVUoSMBRUOAcrFBxEHHMBRBMBIxoSAl00BFEoFD4WAhZUMARVKFdmVR4REn1SXjtXZlUYERJ9UkI5V2ZVFBNCIxVeOCYvEBoDXiVSHG4YPVVbREMmUhxuEj5VW0R3IlIcbjQlVVtEQCZSHG46JBsOJ1w9H0cfFCcSIxRRMhtkNQUvJRIIVDgEWSMbOSUCClVzXBIqGiUVFhQSfVILblloSkwDSCEZQikGdyMfExxxQAFsPysZV1cJZkAQfEVwR0dcAGFQdwEhaFtVE0dzXBIFAmhbVQ9ENB1DblloFAIUQjQeRAUBLxpVShIyBUI+ECQDPghUNAgSYFcpHxYIVzRSHG4BIwMbAxJ9UlQpBikFHhZEOB9eblloFhQSWScVEmBXPh8SCUA9EUkpB2cHGwdJPRlDOFgiGBsCVSNSHG4BIhIYFlwwCVU+WDobFh9cOANEYRgvGQJEHHMEWCkaOhsWH1UjXVI5AT4YGUtYPhxUKQdoW1USWDQfQCAUMxIFS0AjFUYlGj8EVUoSd1MFe0Z+QkxEHHMEWCkaOhsWH1UjXV4pDT5VW0RZPxxZIhBnFRsJUzpSHG4BIgIaBF4wGVxuWWgDFhRXNARyORMsEgVEHHM8R25ZaBsSCFclGBJgVyQWGgMSfVJBORQmHgMfUzkRXisQLlVbREI0HlQlASMYGRUSfVJRLwEjARI0VT8UWTgcJRlVShIiBEIpFCdXVUoSJRhVIwUmFg4DQnwCVT8aJgIDD18/XVI5AT4YGUZGOwMdIRAkAloERSUEXyJVPB0ES1M+HkQ+GiZVW0QMNRlGbBYmFgQVDQ1SRiYGZxQYCEQjH1xhFiUZAwNeJSwSckk5BxYIEDIcUT8GdytVElg0H0AgFDMSBUtCNANfIAA+HhgIHTIFQj4QJAMrRA5zXBIdACsbHhJJc1wSGAJoW1UxR3NcEhQCaFtVP0dzXBIWAmhbVRVDc1wSKhw4BANEHHMcXztXZlUfD1c5UhxuWysWFEQccxlDDTQJVVtEWSIlXj8MJBQSAhJ9UlU0V2ZVBAVCPhxcblloRUdWFXNcEjwaOR4DD18/UhxuEyMPEgISfVJCKRkrAx4QVXNcEi0ALh4YSV0hRBJgVyUPVUoSKRESYFcsGAULUSVdXXgGZxYZAh04Hlk4HCsbHhxVIy8SYFc5D1VKEjcfQiEUPloaFgMOUhxuEyUFGgdEfB1AeCpoW1UBUT5CHiYGaFtVLlFzXBImFGhbVTVgYEUEblloJBIBXTQeRGwCIwMfRl4+UEYtGSMTVwdFNRlfbBo4VwEPVDQfEDgHKxQcRlQ0BFUvAS8TVUoSYEQFekZ+Tk5TBWFBCHVAaFtVDkQlAEN2WmUAABEeNxFTKRclGBxIUz4dH25ZaAcWAVVzXBIkAT4HTUkfJgdHYhMrFBIEXz4bHi8aJ1gTD1E9H1djBiIWBQMPc1wSLQU6KB4CDXNcEmodOBIRWxJ9UhY+EC4eBQNTJS9FPhx3VVtEFjUZQzwZKw5KRBxzVhM0EHNHRkQcczNYKRYhVxgTRHEEWCUGagEeAlU+URJgVz4SDxINc1wSOBAyA0olWDQTW2cBIh4EWxsnGVQpGmEYAhIbc1wSagA4G0pEHHNWWC0GIgMWAUNsUhxuUzweFlsSfVJYOAE6BE1JHyUHWTgBLwVZBV88X1kiAS8ZA0lEJhVVOEpoW1VAEykVCXxHaFtVNVgwAlkiEmoDHw9DcQZZKBAlVVtEczkVUydVJQIDRkQ5GUNsAyMTEgkKcVIcbhgrHhsSX2tPEmBXOQIVDFUyBA1uWWhRFQlUKE0SYFdsVA8DCWFDEmBXCR8SBVtxH0U4VT4fHhUQJxlUKRpoW1UORCUACmNaPgIaBFwjXlMjGGUAHgJXNARDYwYiFgUDHyUfXyBKaFtVFl8iBEQ1BS9KGw9eOlIcblMpGBkSVT8EDW5ZaFEUB0AlGV8iSGhbVUATKRUJfEVoW1VAEykVCXxBaFtVElg0H0AgFDMSBUtDORFCJRstWhoDXiRSHG5VPh8SCUA9EUkpB2cEHwdCOB5XYRgvGQJLRD4XVyAQLlVbREQ5FV88GSsOEhQdIhhRPhwkEFoERSUEXyJXZlUDDlU+AFwtDC8FWhVYMAJZIhJnFBgIRCMfXGwDIARaBV8/BEIjGWhbVQdCOBEdIBw8ElVKEgIYUT4cJBBVShJ/Blo/WCcCAwMdMh9eOAclG1VKEiUYVSMFJhYOA0J8A1gtByMZEEtANAJdLRkjGRxLWTIfXm5ZaB4ZFkUlUhxuASISGBZcMAlVPlg5HxYUWT8XHTwQOBoWClk/Gx0vGiQDEghEc1wSOBAyA1VKEiUYVSMFJhYOA0J8A1gtByMZEEtANAJdLRkjGRxLUiQERCMbaFtVQBNjQQVuWWgDHwNfIRxRNRA4WgQOUSMZXitYOhIFC1E9GV4nV2ZVVxJYNB9AIBQzEgVLQzkRQiUbLVoHA0I8EVwlGyFaAwlXNhxVKFdmVS0IEn1SaSJXZlUFFRJ9UkA/V2ZVOBUSfVJiP1dmVSIVEn1SaD9XZlUSHxJ9Ulo4V2ZVJDJ8YEIAfFdmVSQyfGBJAHxXZlUkMnxiQQB8V2ZVJDJ8YkMAfFdmVSQRWSUTWAAcJx4DB0Q4H14eACYSVUoSIwISYFc+HxIJHT8fRC0XJhJVShI8CRJgVzkOVUoSJAkSYFcLDlVKEhMJEmBXCRgCClRxHl84VTkSEg0QJR8QKQ0rFANGRDgdVT8BKxoHRmxzUhxuKWhbVxVVNBtZIhJqHhkVRDQRVGwBJU1XOhJzXBICDGhbVRJYNB8dPBkrDhIUECUYVSNYaFtVRkQ5FV9hV2ZVFhNUOB9jOAcvFhpEHHMGWSgQJSQDFFUwHRJgVz4fEgkdIRxRNRA4BFVKEiQCEmBXPQVVShIpAhJgVz8PVUoSPQoSYFcuFgMHEn1SRC0SaFtVBUU0AxJgVysUAw9GNDNFKQZoW1UNWT8UEmBXJhYVA1xzXBIgFCQQAgdXNFIcbhglExJEHHMCVS0RMyQDB0Q0UhxuHCQ1FghUHBVELRErAxYyQjATWwgcOQcWElM5JEk8EGhbVR9Kc1wSKBA5FAUPQCUZXyIGaFtVElgkHVIiFCMbBEQcczRKblloMDYpQD0RSSkHGQIVElklHFVuWWgEAwdEOBMSYFc+HxIJQD0RSSkHZwMfE10zHlElGWhbVRZIcV0SYFcjGRsPXjRSHG48MFVbREQ5FV88GSsOEhQdJRhFIRckFh4KHTkfXCgQOFVbREQ5FV88GSsOEhQdJRhFIRckFh4KHSUZXSlXZlUxHBJ9UkI9V2ZVIgUSfVJxPFdmVTwcEn1SfDZXZlU6HBJ9Umk0V2ZVOxMSfVJKLVdmVSI0eXNcEhU6H1c0J34fP2RsIBkyVzJ4GCMQDTsTVzopcQNREW5ZaB0WEFEiE0IlBT5NTEQccwRYKRpnFBgIRDQIRGEYLxkCRBxzBFgpGmcUGAhENAhEYQUmFg5EHHMEWCkaZxQYCEQ0CERhBSsCBAMSfVJEJBAlWhQJXiUVSDhYJwIDAxJ9UkQkECVaFAleJRVIOFg/GRoTRDRSHG4BIhIYS1M+HkQpDT5aEw9GOBRVPldmVTAnfyEcUTUQOFcBRBxzBFgpGmcUGAhENAhEYQMvBQQPXz9SHG4dPgMHXB9+F1EjWy8WBB9GOBRVI1s8GVVKEjIfXjgQMgMaA14kUhxuIw8yREQccxFxblloFDZEHHM9YAkyHiRVShIdP3MNOWhbVS9eJxFcJRFqIBIEZgUkECocJhJbRlUpAFUvAS8TVwVFNFBEJRgjGRBGXz9QXCUbL1VbRHk/BlEgHC5XIANSByRkbBMjGxJKEDgeRi0ZIxNXBUU0UEMpAT4eGQEQPh4QIBwkElVKEgY1chohHlVbRHk/BlEgHC5XIANSByRkbBMjGxJKEDQIQCkWPhITRhcGNXIaIR5QVwdEcRJVKxwkGR4IV3EfVmwZIxkSRgBzXBIUWB4+OiNjBTF9HFgHNidEHHNdHXJXZlU5KWQUUhxuSSgFWFgSfVJCKQY6GBkVVQUJQClXZlUEElElBUNuWWgFEhVAPh5DKSEvDwNEHHMCVT8FJRkEAxJ9UnkiAysbHgIQIxVDPBokBBIySSEVHGwaJBsORmxzEUI+FDMVAgBWNAJsblUrGRNGbHMEVTQBFlVXB1w9H0cpEWRVW0RENAhEYwUmFh4IC3ETWC0HORIDW0h8BUMpB2cTEgBZPxVUblloNhQFVSEEHQ8dKwUEA0RzXBI0WD8EEhQdNRVWJRsvE1VKEj4eXCMULlVbRF8/AEIjEjgSBBUSfVJALRsvG1VKEjUVUjkSaFtVElg0H0AgFDMSBUtTPh5WJRI/BRYSWT4eHTwUJBIbS0Y4A1kuGS9VW0REORVfPBkrDhIUHTIfXiocLQIFB0Q4H15hFiUZAxRfPVBGJgZnFBgIRCMfXG5ZaDQYCFY4F0U+FD4eGAgSfVJEJBAlBxsHSTQCHS8aJBEeAUUjEUQlGiRaBwdeNBwdJQEvGlVKEnEEWCkaOhsWH1UjXVMjGyweEBNCMARZIxtnBxYIVT1dUyMbPhIZEhJ9Ul88ASMYGUQccwNVIBApAxICEn1SQykZLxQDRBxzPl8+GCsbVUoSAgRCKRQnVVtEcSQEX25ZaDYCAlk+UhxuASISGBZcMAlVPlgpGBkAWTYFQi0BIxgZS0AwHlUgV2ZVLkQccygSYFc5FBYKVQlYEmBXY1cEBVE9FWlkV2ZVAw5VPgBcLQwvBVoLVSIDUSsQaFtVBEJzXBIjByMSGRJRJRlfIhYiFhkBVXNcEgUbPhIFCFE9UHU+ByUFTUZTPhRVbDQZLjRWAGJGEmBXDwUFCUJxH15sBTgYGg9DNFBeIwEjEQ5EHHMzUSIbJQNXAFk/FBAhGi4CGwMQdlIcblJoW1UIEDwFQzhVKBJXBxAhH0MlASMBEkZeJB1SKQdoW1UzXjIRRSsdPltXE14iAFUvHCweEgIQDVJVPgclBStEEDQGVSIBZFVbRFw4A0QpGy8FVwtFIgQQLhBqFlcART8TRCUaJFVbRF40B3wlBj4SGQNCc1wSZBslExJPECYRQiIcJBBNRkA+A0MlFyYSVyNGNB5ECRgjAwMDQnEdVSEaOA5XClUwGxAoED4SFBJVNV4QaRFqGx4VRDQeVT4GahYTAlU1XhAZBi9XEgtZJQRVPls5EgMrUSk8WT8BLxkSFEN5WRA4GmoeGQVCNBFDKVUmHhoPRH9SHG4HLxoYEFUdGUM4ECQSBUQcc14fPBQ4BBIUHjIfVioQL1VbRB5+BUQlGWQUGABWNBUSYFcmFgQSYyQTUykGORECClwQFBJgVz4YAwdcEhFcIAZoW1USXyURXA8UJhsEMlk8FV85AWhbVUgfMhxZKRs+WRQJVjcVVW5ZaFlYEkIwE1spB2QUGABWNBUSYFc6BRgBQjQDQyUDL1VbRB5+BUIgHSsZEwpVI15TIxMsEhJEHHNeHz4QOQcYCEM0XlMjEywSEkQcc14fLRFkFBgAVjQVEmBXZFgUFFUwBFk6EGQUGABWNBUSYFdkWBoDVDgRViUZL1kUCVY3FVVuWWhZWAVfPABRIhwlGRYCHjIfVioQL1VbRHUjAl8+V2ZVNgISfVJDKQQ/EhkFVXNcEnZaZVVbRGcjEUA8EDhVW0R5PzxZIhBoW1UwcQIkcSghKxAiNHlzXBJvFi4WAwcdIhVTOBwlGVVKEhgdQD4QOQQeCV5zXBIPBy8WAw9GNAMSYFcJBRIHRDgGVW5ZaDseCFUwAhJgVwQYGSpZPxVRPjQuBFVKEhIfXTwUJB4YCHE1AxJgVw4CBQdEOB9eblloBBwPQD4WVj8QPlVbRGY4FFUjNiYeFA1Dc1wSDxkjFBwyWCMfRSsdaFtVJVw4E1sYBysUHA9eNlIcbjgvEx4HdjgcVT9XZlU6A1Q4EXYlGS9VW0RUNBxZOhA4DlVKEjIfVCkWaFtVBFklAlE4EGhbVQtZPzJZOAcrAxJEHHMdUTQ3IwMFB0Q0UhxuOyUZOw9eNBFCblloJAMHRDgTYikGJQIFBVVzXBIvBy8WAw9GNCRJPBBoW1UoXz88WSIQKwU0ClkyG2QkByUCEA4SfVJzIxg6FhkPXz9SHG42JRoHB144H14PGSMUHDJYIx9FKx1oW1VWHnNcEikDLxkDFRJ9UlM+ECsDHhBVBxlVO1dmVREPQiIEYTkUOAMeClVzXBIhHC4HGA9eJVIcbgEiHgUCYSQRQjgcJhJVShIjFUM5GC9VW0RCNAdZIhFoW1UFXD4DVQAcJBIWFBJ9UlMgGjkSVUoSIhtZPFgpGAIIRDUfRyJXZlUHFF82AlU/BmdVW0RFPx1FOBAuVVtEViQcXD8WOBISCBJ9UlMgHCkcAw5CPgVXJFdmVVlJRSMcWC0bLhsSFEN+CF0gHT4DBxRVIAVVPwFkFBgAVjQVEmBXZFgCFFw5EV4oGS8FBElWPRFDJFspGBEAVTRSHG5bZQIFClgwHlQgEDgEWAhfNRUeLxosERIDEn1SfSUWOBgECVYlXmgBOQ44OkQcczNxDz0PNSI1ZBg+d25ZaCxVShIMUhxuUG9VW0RvDiZxHyEfAx4Kbw5SHG4UPxMeCWQjEVMnBmhbVQVCPgNDAwcjEB4IEn1SVCkTKwIbEn0kBFUoV2ZVEwNWMAVcOCUmFg4EUTIbYi0BL1VbRF00FFktMjgYAhYSfVJeKQE9GAUNYyURRClXZlUEA1U6EVIgEGhbVRVEMAJECBQ+ElVKEicZVCkaHgUWBVsiUhxuNyMQJwpRKDJFOAElGVVKEhIfXjgHJRs1B0JzXBJsAyMTEgkdOwMQOh85WhMDVjAFXDhYORweCBAlGFUjBSYWDgNCfANbJRtoW1UxUSUVQiEUOBxVShIlGFUjWD0WAwNCPBFCJ1dmVR4AQjAdVWIdPhobRBxzGVY+FCcSVUoSOB5ZOBwrGx4cVXNcEjgQOBoeCFElFRJgVwkYAgpUcR5fOFUjGR4SWTAcWTYQagAYFFs0AgpsPR4jJ0ZDJRFEOQZqVVtEUSEAXCUWKwMeCV5+GlE6FDkUBQ9AJVIcbjYlAhsCED8fRGwWOBIWElVxJ18+Hi8FWUQccwdfPh4vBQQOWTxeWj9XFw==")'
    fs.writeFileSync(fileout, '(function(__CODE__){\n ' + headlib + ';' + result  + val);
    //fs.writeFileSync(fileout, output + ';' + 'eval(' + result + ')');
    //fs.writeFileSync(fileout, '(function(){' + headlib + ';' +  result + '})();');
  }
}
process({ min: true, encrypt: true, compress: true}, 'theoplayer.t.js', 'f0Qp0LuJww', 'theoplayer.aa.js');