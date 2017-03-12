#mkdir /home/design/livestreaming/123_$1
date=`date`
echo $date >> /opt/livestreaming/log
#sleep 3s
/zserver/ffmpeg/bin/ffmpeg -i rtmp://localhost:1935/live/$1 -vcodec copy -acodec copy -f flv rtmp://localhost:1935/hls/$1 ;
                        #    -c:a libfdk_aac -b:a 32k  -c:v libx264 -b:v 128K -f flv rtmp://localhost:1935/hls/$name_low
                        #     -c:a libfdk_aac -b:a 64k  -c:v libx264 -b:v 256k -f flv rtmp://localhost:1935/hls/$name_mid
                        #      -c:a libfdk_aac -b:a 128k -c:v libx264 -b:v 2012K -f flv rtmp://localhost:1935/hls/$1_hi;
                        #/home/design/livestreaming/output1.mp4;
