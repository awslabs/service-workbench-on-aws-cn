FROM public.ecr.aws/docker/library/nginx:1.21.6
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.5.0 /lambda-adapter /opt/extensions/lambda-adapter
WORKDIR "/tmp"
ADD config/ /etc/nginx/
COPY website/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
