FROM openresty/openresty:centos7
RUN luarocks install lua-resty-http
ADD wwwroot /wwwroot
ADD nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
