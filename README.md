# record-me
Openresty 中使用 lua 实现 Linux 账号自助申请服务，使用邮箱验证身份，方便研发申请跳板机账号

2022-12 添加阿里云安全组申请

配置使用环境变量配置，例如 centos 主机，容器启动：
```bash
    # 打包镜像
    docker build -t linuxuser:centos7 .

    docker run -d -v /data/home:/data/home -v /etc:/etc -p 172.17.0.1:9080:80 -e "SGID=sg-xxx" -e "MAILSUFFIX=qq.com" linuxuser:centos7
```