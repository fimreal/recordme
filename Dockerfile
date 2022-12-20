FROM openresty/openresty:centos7
RUN luarocks install lua-resty-http
ADD wwwroot /wwwroot
ADD nginx/nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
ADD nginx/confd /usr/local/openresty/nginx/conf/confd

# 设置部分
# ENV SGID ""
# ENV MAILSUFFIX ""