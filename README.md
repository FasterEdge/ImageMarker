<div align="center">
  <img src="./Logo.png" alt="logo" width="100" />
  <h2>ImageMarker</h2>
  <h3>免费在线的照片标注工具</h3>
</div>

### 一、项目简介
- ImageMarker 是一款**免费在线**的照片标注工具，基于浏览器运行，无需任何复杂的安装——打开网页即可开始使用。
- 无论你运行的是哪种操作系统，我们都尽力做到真正的跨平台；非常适合小型计算机视觉深度学习项目，让数据集准备变得更简单、更快捷。
- 标注好的标签可以按多种支持的格式下载；应用使用 TypeScript 编写，基于 React / Redux 技术栈。

### 二、AI 集成
ImageMarker 力求显著减少你在照片标注上花费的时间，集成最新、最强大的 AI 模型，既能提供建议，也能自动化重复且繁琐的工作：

- **YOLOv5**：功能最强大的集成，借助 [yolov5js](https://github.com/SkalskiP/yolov5js) 不仅可以加载预训练模型，还可以加载你自己训练并导出为 tfjs 格式的模型。
- **SSD**：在 [COCO 数据集](http://cocodataset.org)上预训练，帮你完成照片边界框的绘制，某些情况下还能给出标签建议。
- **PoseNet**：一种视觉模型，通过估计人体关键关节的位置，可用于估计图像或视频中人物的姿态。

驱动 AI 功能的核心引擎是 [TensorFlow.js](https://www.tensorflow.org/js)。这个选择不仅能加快你的工作速度，还能保护数据隐私——与其他商业和开源工具不同，你的照片无需传输到服务器，AI 来到了你的设备上。

### 三、功能特点
- 支持多种标注类型：**矩形、线、点和多边形**，以及图像识别（标签）模式
- 支持 YOLO / VOC XML / VGG JSON / COCO JSON / CSV 等导入与导出格式
- 支持在浏览器本地加载 AI 模型（YOLOv5 / SSD / PoseNet），或连接 Roboflow 推理服务器
- 支持快捷键操作，提升标注效率

### 四、本地配置
```bash
# 克隆仓库
git clone https://github.com/FasterEdge/ImageMarker.git

# 进入主目录
cd ImageMarker

# 安装依赖
npm install

# 在 localhost:3000 启动并支持热重载
npm start
```
> 为确保应用在本地正常运行，需要 npm `8.x.x` 和 node.js `v16.x.x` 版本。

### 五、Docker 部署
```bash
# 构建 Docker 镜像
docker build -t imagemarker .

# 以服务方式运行 Docker 镜像
docker run -dit -p 3000:3000 --restart=always --name=imagemarker imagemarker

# 获取 Docker 容器日志
docker logs imagemarker

# 访问 application: http://localhost:3000/
```

### 六、键盘快捷键
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

### 七、导出格式
|               | CSV | YOLO | VOC XML | VGG JSON | COCO JSON |
|:-------------:|:---:|:----:|:-------:|:--------:|:---------:|
| **点**       | ✓   | ✗    | ☐       | ☐        | ☐         |
| **线**       | ✓   | ✗    | ✗       | ✗        | ✗         |
| **矩形**     | ✓   | ✓    | ✓       | ☐        | ☐         |
| **多边形**   | ☐   | ✗    | ☐       | ✓        | ✓         |
| **标签**     | ✓   | ✗    | ✗       | ✗        | ✗         |

> ✓ 表示支持的格式；☐ 表示尚未支持的格式；✗ 表示该格式对给定标签类型无意义。

### 八、导入格式
|               | CSV | YOLO | VOC XML | VGG JSON | COCO JSON |
|:-------------:|:---:|:----:|:-------:|:--------:|:---------:|
| **点**       | ☐   | ✗    | ☐       | ☐        | ☐         |
| **线**       | ☐   | ✗    | ✗       | ✗        | ✗         |
| **矩形**     | ☐   | ✓    | ✓       | ☐        | ✓         |
| **多边形**   | ☐   | ✗    | ☐       | ☐        | ✓         |
| **标签**     | ☐   | ✗    | ✗       | ✗        | ✗         |

> ✓ 表示支持的格式；☐ 表示尚未支持的格式；✗ 表示该格式对给定标签类型无意义。

### 九、隐私
我们不会存储你的图像，因为我们从一开始就不会把它们发送到任何地方。

### 十、许可证
本项目采用 GPL-3.0 许可证 —— 详情请参阅 [LICENSE](./LICENSE) 文件。