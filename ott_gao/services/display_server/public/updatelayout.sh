#!/usr/bin/env bash
v=192
p=http://www.viewbix.com
od=layouts/html5/$v
ad=app/$v
mkdir -p $ad
for f in vbxapp.js vbxapp.min.js vbxapp.css ;do
	echo /usr/bin/curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36' $p/app/$v/$f -o app/$v/$f
done
exit 0
mkdir -p $od
for f in fizz.css vbxapp.css vbxlayout.css jolt.css nehi.css common.css viewbix.css;do
    /usr/bin/curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36' $p/layouts/html5/$v/$f -o layouts/html5/$v/$f
done
for f in vbxlayout.js vbxlayout.js vbxlayout.min.js commonbase.js;do
	/usr/bin/curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36' $p/layouts/html5/$v/$f -o layouts/html5/$v/$f
done


mkdir -p plugins
for f in vpaid.js mraid.js;do
/usr/bin/curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36' $p/plugins/$f.js -o plugins/$f.js
done

p=https://origin-www.viewbix.com

mkdir -p layouts/html5/$v
/usr/bin/curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36' $p/layouts/html5/$v/vbxvpaidad.js -o layouts/html5/$v/vbxvpaidad.js
mkdir -p workspace/layouts/$v
/usr/bin/curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36' $p/workspace/layouts/vbxvpaidapi.min.js -o workspace/layouts/vbxvpaidapi.min.js
