[![Github Stars](https://img.shields.io/badge/stars-nominate-brightgreen?logo=github)](https://stars.github.com/nominate/)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/SkalskiP/make-sense?include_prereleases)
[![codecov](https://codecov.io/gh/SkalskiP/make-sense/branch/develop/graph/badge.svg?token=lWsADbAey2)](https://codecov.io/gh/SkalskiP/make-sense)
[![Gitter](https://badges.aleen42.com/src/gitter.svg)](https://gitter.im/make-sense-ai/community)
[![Discord](https://badges.aleen42.com/src/discord.svg)](https://discord.gg/ASCjCrNdA7)

<h1 align="center">图像标注工具（ImageMarker）</h1>

<p align="center">
    </br>
    <img width="100" src=".//public/favicon.png" alt="ImageMarker 标志">
    </br>
</p>

[ImageMarker][1] 是一款免费在线的照片标注工具。得益于浏览器的运行方式，它不需要任何复杂的安装——只需访问网站即可开始使用。同时，无论你运行的是哪个操作系统，我们都会尽力做到真正的跨平台。它非常适合小型计算机视觉深度学习项目，能够让准备数据集的过程变得更容易、更快捷。标记好的标签可以按多种支持的格式下载。该应用使用 TypeScript 编写，基于 React/Redux 技术栈。

## 📄 文档

你可以从我们最新发布的[文档][14]中了解更多关于本工具的信息——目前仍在🚧建设中。请告诉我们你最想先了解哪些主题。

## 🤖 高级 AI 集成

[ImageMarker][1] 力求显著减少你在照片标注上花费的时间。我们正在尽最大努力集成最新、最强大的 AI 模型，它们既能为你提供建议，也能自动化那些重复且繁琐的工作。

* [YOLOv5][16] 是我们目前功能最强大的集成。借助 [yolov5js][17]，你不仅可以加载 [yolov5js-zoo](18) 中的预训练模型，最重要的是还可以加载你自己使用 YOLOv5 训练并[导出](19)为 tfjs 格式的模型。
* [SSD][8] 在 [COCO 数据集][9]上预训练，能帮你完成部分在照片上绘制边界框的工作，并且在某些情况下还能给出标签建议。
* [PoseNet][11] 是一种视觉模型，通过估计人体关键关节的位置，可用于估计图像或视频中人物的姿态。

驱动我们 AI 功能的核心引擎是 [TensorFlow.js][10]——最流行的神经网络训练框架的 JS 版本。这个选择不仅能加快你的工作速度，还能保护你的数据隐私，因为与其他商业和开源工具不同，你的照片无需传输到服务器。这一次，AI 来到了你的设备上！

https://user-images.githubusercontent.com/26109316/193255987-2d01c549-48c3-41ae-87e9-e1b378968966.mov

## 💻 本地配置

```bash
# 克隆仓库
git clone https://github.com/SkalskiP/make-sense.git

# 进入主目录
cd make-sense

# 安装依赖
npm install

# 在 localhost:3000 启动并支持热重载
npm start
```
为确保应用在本地正常运行，需要 npm `8.x.x` 和 node.js `v16.x.x` 版本。有关此问题的更多信息，请参阅 [#16][4]。

## 🐳 Docker 部署

```bash
# 构建 Docker 镜像
docker build -t make-sense -f docker/Dockerfile .

# 以服务方式运行 Docker 镜像
docker run -dit -p 3000:3000 --restart=always --name=make-sense make-sense

# 获取 Docker 容器日志
docker logs make-sense

# 访问 make-sense: http://localhost:3000/
```

## ⌨️ 键盘快捷键

| 功能                              | 使用场景 | Mac | Windows / Linux  |
|:-----------------------------------|:--------:|:---:|:----------------:|
| 多边形自动补全                    | 编辑器   | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| 取消多边形绘制                    | 编辑器   | <kbd>Escape</kbd> | <kbd>Escape</kbd> |
| 删除当前选中的标签                | 编辑器   | <kbd>Backspace</kbd> | <kbd>Delete</kbd> |
| 加载上一张图片                    | 编辑器   | <kbd>⌥</kbd> + <kbd>Left</kbd> | <kbd>Ctrl</kbd> + <kbd>Left</kbd> |
| 加载下一张图片                    | 编辑器   | <kbd>⌥</kbd> + <kbd>Right</kbd> | <kbd>Ctrl</kbd> + <kbd>Right</kbd> |
| 放大                              | 编辑器   | <kbd>⌥</kbd> + <kbd>+</kbd> | <kbd>Ctrl</kbd> + <kbd>+</kbd> |
| 缩小                              | 编辑器   | <kbd>⌥</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> |
| 移动图像                          | 编辑器   | <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd> | <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd> |
| 选择标签                          | 编辑器   | <kbd>⌥</kbd> + <kbd>0-9</kbd> | <kbd>Ctrl</kbd> + <kbd>0-9</kbd> |
| 退出弹窗                          | 弹窗     | <kbd>Escape</kbd> | <kbd>Escape</kbd> |

**表 1.** 支持的键盘快捷键

## ⬆️ 导出格式

|               | CSV | YOLO | VOC XML | VGG JSON | COCO JSON | PIXEL MASK |
|:-------------:|:---:|:----:|:-------:|:--------:|:---------:|:----------:|
| **点**       | ✓   | ✗    | ☐       | ☐        | ☐         | ✗          |
| **线**       | ✓   | ✗    | ✗       | ✗        | ✗         | ✗          |
| **矩形**     | ✓   | ✓    | ✓       | ☐        | ☐         | ✗          |
| **多边形**   | ☐   | ✗    | ☐       | ✓        | ✓         | ☐          |
| **标签**     | ✓   | ✗    | ✗       | ✗        | ✗         | ✗          |

**表 2.** 支持的标签导出格式矩阵，其中：
* ✓ - 支持的格式
* ☐ - 尚未支持的格式
* ✗ - 该格式对给定标签类型无意义  

你可以在我们的 [Wiki][7] 上找到导出文件的示例以及说明和结构。

## ⬇️ 导入格式

|               | CSV | YOLO | VOC XML | VGG JSON | COCO JSON | PIXEL MASK |
|:-------------:|:---:|:----:|:-------:|:--------:|:---------:|:----------:|
| **点**       | ☐   | ✗    | ☐       | ☐        | ☐         | ✗          |
| **线**       | ☐   | ✗    | ✗       | ✗        | ✗         | ✗          |
| **矩形**     | ☐   | ✓    | ✓       | ☐        | ✓         | ✗          |
| **多边形**   | ☐   | ✗    | ☐       | ☐        | ✓         | ☐          |
| **标签**     | ☐   | ✗    | ✗       | ✗        | ✗         | ✗          |

**表 3.** 支持的标签导入格式矩阵
* ✓ - 支持的格式
* ☐ - 尚未支持的格式
* ✗ - 该格式对给定标签类型无意义  

## 🔐 隐私

我们不会存储你的图像，因为我们从一开始就不会把它们发送到任何地方。

## 🚀 教程

如果你刚刚开始你的深度学习之旅，并且希望在途中学习并做出一些很酷的东西，[ImageMarker][1] 可以帮到你。利用我们的边界框标注功能准备一个数据集，并用它来训练你的第一个最先进的目标检测模型。请按照[说明][12]和[示例][13]操作，但最重要的是，释放你的创造力。


## 🏆 贡献

<p align="center"> 
    <a href="https://github.com/SkalskiP/make-sense/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=SkalskiP/make-sense" />
    </a>
</p>

## 💬 引用

如果 Make Sense 对你的研究有帮助，请在发表的作品中引用它。这里是一个 BibTeX 示例：

```BibTeX
@MISC{make-sense,
   author = {Piotr Skalski},
   title = {{Make Sense}},
   howpublished = "\url{https://github.com/SkalskiP/make-sense/}",
   year = {2019},
}
```

## 🪧 许可证

本项目采用 GPL-3.0 许可证 —— 详情请参阅 [LICENSE][2] 文件。版权所有 &copy; 2019 Piotr Skalski。

[1]: http://makesense.ai
[2]: ./LICENSE
[3]: https://twitter.com/PiotrSkalski92
[4]: https://github.com/SkalskiP/make-sense/issues/16
[5]: https://gitter.im/make-sense-ai/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link
[6]: https://github.com/SkalskiP/make-sense/wiki/Road-Map
[7]: https://github.com/SkalskiP/make-sense/wiki/Supported-Output-Formats
[8]: https://arxiv.org/abs/1512.02325
[9]: http://cocodataset.org
[10]: https://www.tensorflow.org/js
[11]: https://www.tensorflow.org/lite/models/pose_estimation/overview
[12]: https://towardsdatascience.com/chess-rolls-or-basketball-lets-create-a-custom-object-detection-model-ef53028eac7d
[13]: https://github.com/SkalskiP/ILearnDeepLearning.py/tree/master/02_data_science_toolkit/02_yolo_object_detection
[14]: https://skalskip.github.io/make-sense/
[15]: https://github.com/SkalskiP/make-sense/issues
[16]: https://github.com/ultralytics/yolov5
[17]: https://github.com/SkalskiP/yolov5js 
[18]: https://github.com/SkalskiP/yolov5js-zoo
[19]: https://github.com/ultralytics/yolov5/blob/master/export.py