#!/bin/bash
 
USER_POOL_ID=ap-southeast-1_SlP7gRPwn
 
aws cognito-idp list-users --user-pool-id $USER_POOL_ID |
jq -r '.Users | .[] | .Username' |
while read uname; do
  echo "Deleting $uname";
  aws cognito-idp admin-delete-user --user-pool-id $USER_POOL_ID --username $uname;
done
