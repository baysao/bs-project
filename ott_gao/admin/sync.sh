rsync -L --exclude=".meteor" --exclude="dump" --exclude="packages"  --exclude=".uploads" --exclude="settings.json" -avz $@ * root@113.171.23.124:/opt/apps/gao/admin/
#rsync -L -avz .meteor/packages root@113.171.23.124:/opt/apps/gao/admin/.meteor
#rsync -L -avz packages/meteor-senecajs root@113.171.23.124:/opt/apps/gao/admin/packages
#rsync -L -avz packages/meteor-webix root@113.171.23.124:/opt/apps/gao/admin/packages
