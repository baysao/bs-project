rsync --exclude=*.log --exclude="config.json" --exclude="node_modules" -avz $@ * root@113.171.23.124:/opt/apps/gao/services/display_server/
