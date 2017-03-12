#!/bin/sh
version=1.6.18
cd $version
mkdir -p min


crun_1(){
	f=$1
	v=$2
	/home/baysao/bin/jscompiler origin/$f min/o.${v}.$f
	/home/baysao/bin/crun/crun min/o.${v}.$f min/${v}.$f
}

min_1(){
	f=$1
	v=$2
	/home/baysao/bin/jscompiler origin/$f min/${v}.$f
}
vv=$1
if [ -z $vv ];then
    exit 0;
fi
sed s/theoplayer\.js/gao\.js/g -i origin/theoplayer.loader.js
sed s/theoplayer\.js/gao0.js/g -i origin/theoplayer.js
sed s/theoplayer\.e.js/gao1.js/g -i origin/theoplayer.js
sed s/theoplayer\.p.js/gao2.js/g -i origin/theoplayer.js
exit 0
sed s/https\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i origin/theoplayer.js
sed s/https\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i origin/theoplayer.e.js
sed s/https\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i origin/theoplayer.p.js
sed s/http\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i origin/theoplayer.js
sed s/http\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i origin/theoplayer.e.js
sed s/http\:\\/\\/www\.theoplayer\.com/http\:\\/\\/gao\.easyvideo\.vn/g -i origin/theoplayer.p.js

sed s/THEOplayer/GAOplayer/g -i origin/theoplayer.js
sed s/THEOplayer/GAOplayer/g -i origin/theoplayer.e.js
sed s/THEOplayer/GAOplayer/g -i origin/theoplayer.p.js

sed s/THEOPLAYER/GAOplayer/g -i origin/theoplayer.js
sed s/THEOPLAYER/GAOplayer/g -i origin/theoplayer.e.js
sed s/THEOPLAYER/GAOplayer/g -i origin/theoplayer.p.js

for a in theoplayer.loader.js theoplayer.e.js theoplayer.p.js;do
	min_1 $a $vv
done

for a in theoplayer.js;do
	crun_1 $a $vv
done
