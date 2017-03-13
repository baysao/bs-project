#!/bin/sh
#cd /home/baysao/Project/gao/cms/services/gao/admin
#cd /opt/apps/gao/admin
version="--release 1.2.1"
PORT=30000
DB=gao
MONGO_URL=mongodb://localhost:27017/$DB meteor -p $PORT $version  --production $@
~                            
