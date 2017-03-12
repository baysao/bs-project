# Entries
## 1. Get list entries

Get list of entries
### Method: 
GET
### Path: 
http://a.gao.easyvideo.vn/api/v1/entries
### Params

Screen size params:
* width: screen width
* height: screen height
* or size: width x height

Filter params:
* tag: filter by tag
* category: filter by category
* skip/limit: pagination list 


### Result
* _id: video id
* sid: video short id (for embed) 
* name: video title
* categories: categories of video, separation by ,
* tags: tags of video, separation by ,
* desc: video's description
* thumbnail: thumbnail of video
* url: hls format video streaming link
* url_backup: mp4 format video streaming link

## 2. Get entry by entryID

Get entry info by entryID
### Method: 
GET
### Path: 
http://a.gao.easyvideo.vn/api/v1/entries/:entryID
### Params

Screen size params:
* width: screen width
* height: screen height
* or size: width x height

### Result
(the same as api entries list)