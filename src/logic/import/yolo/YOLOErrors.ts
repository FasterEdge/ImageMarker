export class YOLOAnnotationsLoadingError extends Error {
    constructor(message) {
        super(message);
        this.name = 'YOLOAnnotationsLoadingError';
    }
}

export class YOLOLabelsReadingError extends YOLOAnnotationsLoadingError {
    constructor() {
        super('从 labels.txt 文件读取标签名称时发生意外错误');
        this.name = 'YOLOLabelsLoadingError';
    }
}

export class NoLabelNamesFileProvidedError extends YOLOAnnotationsLoadingError {
    constructor() {
        super('要正确加载 YOLO 标签，需要提供 labels.txt 文件');
        this.name = 'NoLabelNamesFileProvidedError';
    }
}

export class LabelNamesNotUniqueError extends YOLOAnnotationsLoadingError {
    constructor() {
        super('labels.txt 文件中列出的标签名称应该是唯一的');
        this.name = 'LabelNamesNotUniqueError';
    }
}

export class AnnotationsParsingError extends YOLOAnnotationsLoadingError {
    constructor(imageName: string) {
        super(`解析 ${imageName} 的标注文件时发生意外错误`);
        this.name = 'AnnotationsParsingError';
    }
}