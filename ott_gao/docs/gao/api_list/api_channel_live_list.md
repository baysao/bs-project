# API Channel Live List


---



## API URL: 
```
 http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a23e6833c5a7c875d52a7a```



---


## Output:

 
giống entries API


---


Đặt biệt source video cần lấy qua trường "source_live_url".
* 
Nếu source_live_url có dạng "http://118.107.85.14:1935/tvnet/smil:vtv2.smil/playlist.m3u8?t=1453541006&token=29b3fcf736f0c70a6a41f6a9dd5b8630"
có nghĩa là source gốc và play trực tiếp.
* Nếu dạng "json|0.url|http://118.107.85.21:1337/get-stream.json?p=smil:vtv2.smil&t=l" nghĩa là cần lấy gián tiếp thông qua api.

Ví dụ:
 "source_live_url": "json|0.url|http://118.107.85.21:1337/get-stream.json?p=smil:vtv2.smil&t=l"
 
 Nếu URL dạng này, sẽ có 3 phần "json", "0.url" và "http://118.107.85.21:1337/get-stream.json?p=smil:vtv2.smil&t=l"
 
 * "json": định dạng data gọi api gián tiếp
 * "0.url" (khác nhau tùy api gián tiếp)
 * "http://118.107.85.21:1337/get-stream.json?p=smil:vtv2.smil&t=l": url api gián tiếp

 Cách lấy source video:
 1. Gọi URL http://118.107.85.21:1337/get-stream.json?p=smil:vtv2.smil&t=l để lấy JSON trả về
ví dụ:
```   [
    {
        name: " - Pop VN2",
        url: "http://118.107.85.14:1935/tvnet/smil:vtv2.smil/playlist.m3u8?t=1453541006&token=29b3fcf736f0c70a6a41f6a9dd5b8630"
    }
  ]
  ```

 2. Lấy trường video playable bằng cách access thuộc tính '0.url' (nghĩa là lấy phần tử 0, rồi thuộc tính "url")
 tham khảo: https://github.com/mariocasciaro/object-path
 3. Dùng url lấy được từ step 2 để play