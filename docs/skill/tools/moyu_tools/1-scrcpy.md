---
title: 1.Scrcpy 简介
sidebar_position: 10
---

简单来说，scrcpy可以通过adb调试将手机屏幕投到电脑上，并通过电脑控制Android设备。它可以通过USB或WiFi连接，不需要root权限，也不需要在手机里安装任何程序。scrcpy适用于GNU / Linux，Windows和macOS。

一些亮点：

- 原生亮度（仅显示设备屏幕）
- 高性能（30~60fps）
- 高质量（1920×1080或以上）
- 低延迟（35~70ms）
- 启动快（显示第一张图像约1秒）
- 非侵入性（设备上没有安装任何东西）
- 开源项目，Github地址：[Genymobile/scrcpy](https://github.com/Genymobile/scrcpy)

### 使用scrcpy的要求

- Android设备至少需要API 21（Android 5.0以上版本）;
- 确保在设备上启用了adb调试;
- 在某些设备上，还需要启用其他选项以使用键盘和鼠标控制它。

### 开启adb调试

以MIUI12为例，开启方法是：
“设置”->“我的设备”->“全部参数”->点击7下MIUI版本，开启“开发者选项”。然后在“设置”->“更多设置”->“开发者选项”中同时开启USB调试和USB调试(安全设置)。

**注意：USB调试(安全设置)必须开启，否则无法使用电脑控制手机。**


### 安装Scrapy和 ADB

#### Mac


#### Windows

首先下载scrcpy和 ADB


解压后的目录如下：

<!-- ![scrcpy解压目录](解压后的目录截图) -->

打开cmd定位到此目录（在地址栏中输入cmd并回车），或者将该目录加入系统环境变量中，所有操作在cmd命令行中进行。
### 连接手机和电脑

在Android手机中打开USB调试后，即可在电脑中使用adb进行调试。


### 使用USB进行连接

推荐使用这种方式，更加流畅。

1. 手机通过USB连接到PC，首次连接时会弹出是否信任该电脑，点击始终信任。
2. 运行`adb usb`查看是否连接成功：
   ```bash
   adb usb
   restarting in USB mode
   ```
3. 运行`scrcpy`即可：

### 使用无线连接

参考官方文档：[Scrcpy now works wirelessly](https://github.com/Genymobile/scrcpy#wireless)

这种方式更加方便快捷，宽带速率高时效果更佳。具体步骤：

1. 确保PC和手机在同一WiFi中。
2. 手机通过USB与PC相连。
3. 在PC上运行adb tcpip服务端口，如端口为5555：
   ```bash
   adb tcpip 5555
   restarting in TCP mode port: 5555
   ```
4. 拔下设备，断开USB连接。
5. 在PC上运行`adb connect 手机IP:服务端口`（手机IP可通过手机状态信息或路由器查看，一般以192.168开头）：
   ```bash
   adb connect 192.168.0.4:5555
   connected to 192.168.0.4:5555
   ```
6. 运行`scrcpy`：
   ```bash
   scrcpy.exe
   ```
7. 手机屏幕弹出，即投屏成功！默认scrcpy比特率是8Mbps，对于Wi-Fi连接可能太高。根据使用情况，降低比特率和分辨率可能是个好选择：
   ```bash
   scrcpy --bit-rate 2M --max-size 800
   # 或者简写
   scrcpy -b2M -m800
   ```
8. 若要切换回USB模式：
   ```bash
   adb usb
   ```

### 常用快捷键

查看已连接设备命令：
```bash
adb devices
List of devices attached
192.168.0.4:5555        device
```

在启动时镜像时关闭设备屏幕：
```bash
scrcpy --turn-screen-off
scrcpy -S
```

禁用音频：
```bash
scrcpy --no-audio
```

这样，我们就用USB和WiFi两种方式成功使用scrcpy了。更多功能详见README，如直接拖拽APK进行安装，手机录屏等。