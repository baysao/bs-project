#!/usr/bin/env bash
find . -type f -iname '*.png' | while read f;do file $f | grep HTML; if [ $? -eq 0 ];then rm -f $f;fi ;done
find . -type f -iname '*.svg' | while read f;do file $f | grep HTML; if [ $? -eq 0 ];then rm -f $f;fi ;done
exit 0
host=https://www.viewbix.com/storage
agent="-A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36'"
while read f;do
    v=content/img/${f}.png
    echo curl $agent $host/$v -o $v
    v=content/icon/svg/${f}.svg
    echo curl $agent $host/$v -o $v
    v=content/icon/16/${f}.png
    echo curl $agent $host/$v -o $v
    v=content/icon/32/${f}.png
    echo curl $agent $host/$v -o $v
    v=content/icon/40/${f}.png
    echo curl $agent $host/$v -o $v
done < list.txt

