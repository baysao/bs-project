# Detail & Related
## API Path:
http://a.gao.easyvideo.vn/api/custom/v1/dev_apis/56a6075d1d8003f1592926f4

## Params: 
* entryId: entry ID detail
* gao_token: token

## Output:
```json
{
  "entry": {
    "main": [
      ENTRY_DETAIL
    ],
    "related": ARRAY_RELATED
  }
}
```
## Example output:
```json
{
  "entry": {
    "main": [
      {
        "_id": "569c6a4f1689f7cb56f5bebb",
        "name": "MC Trấn Thành nhí nhảnh trong quảng cáo Huggies - Vũ điệu mông xinh",
        "sid": "4yeOtLBOg",
        "tags": "",
        "desc": "",
        "source_type": "vod_int",
        "thumbnail": "http://st.gao.easyvideo.vn/thumb/5/entryId/569c6a4f1689f7cb56f5bebb/rawId/569c6a4f1689f7cb56f5beba.png",
        "source_vod_url": "",
        "source_live_url": "",
        "promote": "false",
        "rating": "0",
        "url": "http://s.gao.easyvideo.vn/hls/vpub/entryId/569c6a4f1689f7cb56f5bebb/flavorId/5694433d6ee7dc5e65ce7724/rawId/569c6a4f1689f7cb56f5beba.mp4/index.m3u8",
        "url_backup": "http://s.gao.easyvideo.vn/raw/vpub/entryId/569c6a4f1689f7cb56f5bebb/flavorId/5694433d6ee7dc5e65ce7724/rawId/569c6a4f1689f7cb56f5beba.mp4"
      
      }  
    ],
    "related": [
      {
        "_id": "569c6a4f1689f7cb56f5bebb",
        "name": "MC Trấn Thành nhí nhảnh trong quảng cáo Huggies - Vũ điệu mông xinh",
        "sid": "4yeOtLBOg",
        "categories": [
          {
            "_id": "56a1fa9e1180eae23764e0db",
            "name": "Khám Phá Du Lịch"
          }
        
        ],
        "tags": "",
        "desc": "",
        "source_type": "vod_int",
        "thumbnail": "http://st.gao.easyvideo.vn/thumb/5/entryId/569c6a4f1689f7cb56f5bebb/rawId/569c6a4f1689f7cb56f5beba.png",
        "source_vod_url": "",
        "source_live_url": "",
        "promote": "false",
        "rating": "0",
        "url": "http://s.gao.easyvideo.vn/hls/vpub/entryId/569c6a4f1689f7cb56f5bebb/flavorId/5694433d6ee7dc5e65ce7724/rawId/569c6a4f1689f7cb56f5beba.mp4/index.m3u8",
        "url_backup": "http://s.gao.easyvideo.vn/raw/vpub/entryId/569c6a4f1689f7cb56f5bebb/flavorId/5694433d6ee7dc5e65ce7724/rawId/569c6a4f1689f7cb56f5beba.mp4"
      }
    ]
  }
}
```

