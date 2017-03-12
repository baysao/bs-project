#!/bin/sh
crun_1(){
	f=$1
	v=$2
	/home/baysao/bin/jscompiler oo.$f o.${v}.$f
	/home/baysao/bin/crun/crun o.${v}.$f ${v}.$f
}
vv=$1
if [ -z $vv ];then
    exit 0;
fi
sed s/theoplayer\.js/gao\.js/g -i oo.theoplayer.loader.js
sed s/theoplayer\.js/gao0.js/g -i oo.theoplayer.js
sed s/theoplayer\.e.js/gao1.js/g -i oo.theoplayer.js
sed s/theoplayer\.p.js/gao2.js/g -i oo.theoplayer.js
sed s/https\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i oo.theoplayer.js
sed s/https\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i oo.theoplayer.e.js
sed s/https\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i oo.theoplayer.p.js
sed s/http\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i oo.theoplayer.js
sed s/http\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i oo.theoplayer.e.js
sed s/http\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i oo.theoplayer.p.js

sed s/THEOplayer/GAOplayer/g -i oo.theoplayer.js
sed s/THEOplayer/GAOplayer/g -i oo.theoplayer.e.js
sed s/THEOplayer/GAOplayer/g -i oo.theoplayer.p.js

sed s/THEOPLAYER/GAOplayer/g -i oo.theoplayer.js
sed s/THEOPLAYER/GAOplayer/g -i oo.theoplayer.e.js
sed s/THEOPLAYER/GAOplayer/g -i oo.theoplayer.p.js

for a in theoplayer.loader.js theoplayer.js theoplayer.e.js theoplayer.p.js;do
	crun_1 $a $vv
done
