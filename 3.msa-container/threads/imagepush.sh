#!/bin/sh

THREADSTAG=`date +%s`
echo $THREADSTAG

docker build -t asia.gcr.io/$my_project/threads:$THREADSTAG .
docker push asia.gcr.io/$my_project/threads:$THREADSTAG
