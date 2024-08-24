#!/bin/bash

# 设置变量
PEM_FILE=~/Downloads/Downloader-temp/chengxuyuan_BJ_43_138.pem
REMOTE_USER=root
REMOTE_HOST=43.138.22.239
REMOTE_DIR=/www/wwwroot/www.chengxuyuancd.com
LOCAL_BUILD_ZIP=./build.zip
LOCAL_BUILD_DIRECTORY=build

# 删除本地build 文件
rm -rf $LOCAL_BUILD_ZIP

# 压缩 build 目录下的内容而不是 build 目录本身
cd $LOCAL_BUILD_DIRECTORY
zip -r ../$LOCAL_BUILD_ZIP ./*
cd ..


# 连接并删除远程服务器的build目录
echo "Deleting remote build directory..."
ssh -i $PEM_FILE $REMOTE_USER@$REMOTE_HOST "rm -rf $REMOTE_DIR/build"

# 上传本地的build.zip文件到远程服务器
echo "Uploading build.zip to remote server..."
scp -i $PEM_FILE $LOCAL_BUILD_ZIP $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

# 连接远程服务器，解压build.zip并删除压缩包
echo "Unzipping build.zip and removing the zip file..."
ssh -i $PEM_FILE $REMOTE_USER@$REMOTE_HOST << EOF
    cd $REMOTE_DIR
    unzip -o $LOCAL_BUILD_ZIP
    rm -f $LOCAL_BUILD_ZIP
EOF

echo "Done."
