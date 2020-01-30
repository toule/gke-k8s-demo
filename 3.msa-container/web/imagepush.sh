#!/bin/sh

WEBTAG=`date +%s`
echo $WEBTAG

docker build -t asia.gcr.io/$my_project/web:$WEBTAG .
docker push asia.gcr.io/$my_project/web:$WEBTAG
