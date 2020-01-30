#!/bin/bash

sed -i '' "s/my_project/$my_project/g" deploy.yaml
sed -i '' "s/APITAG/$APITAG/g" deploy.yaml
sed -i '' "s/POSTTAG/$POSTTAG/g" deploy.yaml
sed -i '' "s/THREADSTAG/$THREADSTAG/g" deploy.yaml
sed -i '' "s/USERSTAG/$USERSTAG/g" deploy.yaml
sed -i '' "s/WEBTAG/$WEBTAG/g" deploy.yaml
