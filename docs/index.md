<h1 align="center">图像标注工具（ImageMarker）</h1>

<p align="center"> 
    <img width="120" src="https://user-images.githubusercontent.com/26109316/131229187-1d93dc42-963c-440e-8f38-53ee72a2260d.png" alt="ImageMarker">
</p>


[ImageMarker][1] 是一款免费在线的照片标注工具。得益于浏览器的运行方式，它不需要任何复杂的安装——只需访问网站即可开始使用。同时，无论你运行的是哪个操作系统，我们都会尽力做到真正的跨平台。它非常适合小型计算机视觉深度学习项目，能够让准备数据集的过程变得更容易、更快捷。标记好的标签可以按多种支持的格式下载。该应用使用 TypeScript 编写，基于 React/Redux 技术栈。

## 高级 AI 功能

[ImageMarker][1] 力求显著减少你在照片标注上花费的时间。为了实现这一目标，我们将使用许多不同的 AI 模型，它们既能为你提供建议，也能自动化那些重复且繁琐的工作。

* [SSD 模型][8] 在 [COCO 数据集][9]上预训练，能帮你完成部分在照片上绘制边界框的工作，并且在某些情况下还能给出标签建议。
* [PoseNet 模型][11] 是一种视觉模型，通过估计人体关键关节的位置，可用于估计图像或视频中人物的姿态。

未来，我们还计划添加对照片进行分类、检测人脸特征以及整个人脸的模型。驱动我们 AI 功能的核心引擎是 [TensorFlow.js][10]——最流行的神经网络训练框架的 JS 版本。这个选择不仅能加快你的工作速度，还能保护你的数据隐私，因为与其他商业和开源工具不同，你的照片无需传输到服务器。这一次，AI 来到了你的设备上！


[1]: http://makesense.ai
[8]: https://arxiv.org/abs/1512.02325
[9]: http://cocodataset.org
[10]: https://www.tensorflow.org/js
[11]: https://www.tensorflow.org/lite/models/pose_estimation/overview