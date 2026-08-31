export class COCOAnnotationsLoadingError extends Error {
    constructor(message) {
        super(message);
        this.name = "COCOAnnotationsLoadingError";
    }
}

export class COCOFormatValidationError extends COCOAnnotationsLoadingError {
    constructor(message) {
        super(message);
        this.name = "COCOFormatValidationError";
    }
}

export class COCOAnnotationReadingError extends COCOAnnotationsLoadingError {
    constructor() {
        super("读取文件中的标注时发生意外错误");
        this.name = "COCOAnnotationReadingError";
    }
}

export class COCOAnnotationDeserializationError extends COCOAnnotationsLoadingError {
    constructor() {
        super("COCO 标注文件需要是 JSON 格式");
        this.name = "COCOAnnotationDeserializationError";
    }
}

export class COCOAnnotationFileCountError extends COCOAnnotationsLoadingError {
    constructor() {
        super("COCO 标注只需要单个文件，但提供了多个文件");
        this.name = "COCOAnnotationFileCountError";
    }
}