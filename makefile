.EXPORT_ALL_VARIABLES:
REGION = us-east-2


deploy-www-proxy:
	aws cloudformation deploy --stack-name www-proxy \
		--template-file cloudfront-www-redirect.yml \
		--capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
		--region $$REGION

