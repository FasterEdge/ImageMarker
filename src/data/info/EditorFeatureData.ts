export interface IEditorFeature {
    displayText:string;
    imageSrc:string;
    imageAlt:string;
}

export const EditorFeatureData: IEditorFeature[] = [
    {
        displayText: '开源免费，遵循 GPLv3 许可证',
        imageSrc: 'ico/open-source.png',
        imageAlt: '开源',
    },
    {
        displayText: '无需复杂安装，只需打开浏览器即可使用',
        imageSrc: 'ico/online.png',
        imageAlt: '在线',
    },
    {
        displayText: '我们不会存储你的图像，因为我们不会把图像发送到任何地方',
        imageSrc: 'ico/private.png',
        imageAlt: '隐私',
    },
    {
        displayText: '支持多种标签类型——矩形、线、点和多边形',
        imageSrc: 'ico/labels.png',
        imageAlt: '标签',
    },
    {
        displayText: '支持 YOLO、VOC XML、VGG JSON、CSV 等输出文件格式',
        imageSrc: 'ico/file.png',
        imageAlt: '文件',
    },
    {
        displayText: '使用 AI 让你的工作更高效',
        imageSrc: 'ico/robot.png',
        imageAlt: '机器人',
    },
];