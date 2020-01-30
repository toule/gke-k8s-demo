#!/bin/bash

sed -i -e "s/my_project/$my_project/g" deploy.yaml
sed -i -e "s/APITAG/$APITAG/g" deploy.yaml
sed -i -e "s/POSTTAG/$POSTTAG/g" deploy.yaml
sed -i -e "s/THREADSTAG/$THREADSTAG/g" deploy.yaml
sed -i -e "s/USERSTAG/$USERSTAG/g" deploy.yaml
sed -i -e "s/WEBTAG/$WEBTAG/g" deploy.yaml
