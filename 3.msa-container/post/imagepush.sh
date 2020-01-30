#!/bin/sh

POSTTAG=`date +%s`
echo $POSTTAG

docker build -t asia.gcr.io/$my_project/post:$POSTTAG .
docker push asia.gcr.io/$my_project/post:$POSTTAG
