#!/bin/sh

USERSTAG=`date +%s`
echo $USERSTAG

docker build -t asia.gcr.io/$my_project/users:$USERSTAG .
docker push asia.gcr.io/$my_project/users:$USERSTAG
