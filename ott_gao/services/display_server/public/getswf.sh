#!/usr/bin/env bash
#host=https://www.viewbix.com/layouts
agent='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36'
host=https://origin-www.viewbix.com
ver=811
dir=layouts/$ver/com/qoof/layouts/apps
mkdir -p $dir
dd=layouts/$ver
#wget https://origin-www.viewbix.com/layouts/0/nehi.swf -O $dd/nehi.swf
#for f in nehi viewbix jolt fizz;do
#    wget -U "$agent" $host/$dd/${f}.swf -O $dd/${f}.swf
#done
for f in Skype.swf MailForm.swf QRCode.swf RSSItem.swf SocialShare.swf;do
	wget $host/$dir/$f -O $dir/$f
done
