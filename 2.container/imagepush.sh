#!/bin/sh
gcloud auth configure-docker

TAG=`date +%s`
echo $TAG

docker tag mono:test asia.gcr.io/$my_project/mono:$TAG
docker push asia.gcr.io/$my_project/mono:$TAG
