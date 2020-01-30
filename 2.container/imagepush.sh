#!/bin/sh
gcloud auth configure-docker

TAG=`date +%s`
echo $TAG

docker build -t mono:$TAG .
#docker tag mono:$TAG asia.gcr.io/architect-hslee/mono:$TAG
docker tag mono:$TAG asia.gcr.io/project-c-live-dev/mono:$TAG
#docker push asia.gcr.io/architect-hslee/mono:$TAG
docker push asia.gcr.io/project-c-live-dev/mono:$TAG
