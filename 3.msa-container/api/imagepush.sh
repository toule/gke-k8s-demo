#!/bin/sh

APITAG=`date +%s`
echo $APITAG

docker build -t asia.gcr.io/$my_project/api:$APITAG .
docker push asia.gcr.io/$my_project/api:$APITAG
