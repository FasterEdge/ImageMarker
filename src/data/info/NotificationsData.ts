import {Notification} from '../enums/Notification';

export type NotificationContent = {
    header: string;
    description: string;
}

export type ExportFormatDataMap = Record<Notification, NotificationContent>;

export const NotificationsDataMap: ExportFormatDataMap = {
    [Notification.EMPTY_LABEL_NAME_ERROR]: {
        header: '标签名为空',
        description: '看起来你没有为其中一个标签指定名称。不幸的是，每个标签都必须有唯一的名称值。' +
            '请输入正确的名称，或删除空标签后重试。'
    },
    [Notification.NON_UNIQUE_LABEL_NAMES_ERROR]: {
        header: '标签名不唯一',
        description: '看起来你的标签名并非全部唯一。唯一的名称是确保你完成工作时数据正确导出的必要条件。' +
            '请让标签名保持唯一后重试。'
    },
    [Notification.MODEL_DOWNLOAD_ERROR]: {
        header: '模型无法下载',
        description: '看起来我们无法从外部服务器下载 tensorflow.js 模型。请确保你已连接网络后重试。'
    },
    [Notification.MODEL_INFERENCE_ERROR]: {
        header: '推理失败',
        description: '看起来我们无法对你的图像执行推理。请帮助我们改进 ImageMarker 并告知我们。'
    },
    [Notification.MODEL_LOAD_ERROR]: {
        header: '模型无法加载',
        description: '看起来我们无法从上传的文件中加载你的 tensorflow.js 模型。请确保你已上传所有模型分片文件，' +
            '并重新上传全部模型文件。'
    },
    [Notification.LABELS_FILE_UPLOAD_ERROR]: {
        header: '标签文件未上传',
        description: '看起来你忘记上传包含检测类别名称列表的文本文件。我们需要它来将 YOLOv5 模型输出映射到标签。' +
            '请重新上传所有模型文件。'
    },
    [Notification.ANNOTATION_FILE_PARSE_ERROR]: {
        header: '标注文件无法解析',
        description: '标注文件的内容不是有效的 JSON、CSV 或 XML。请修复所选要导入的文件后重试。',
    },
    [Notification.ANNOTATION_IMPORT_ASSERTION_ERROR]: {
        header: '标注文件不包含有效数据',
        description: '导入过程中缺少标注或提供了无效标注。请修复所选要导入的文件后重试。',
    },
    [Notification.UNSUPPORTED_INFERENCE_SERVER_MESSAGE]: {
        header: '所选推理服务器尚不支持',
        description: '与所选推理服务器的集成仍在建设中。请持续关注我们 GitHub 上的更多更新。'
    },
    [Notification.ROBOFLOW_INFERENCE_SERVER_ERROR]: {
        header: 'Roboflow 连接失败',
        description: '看起来我们无法连接到你的 Roboflow 模型。请确保模型配置和 Roboflow API 密钥正确。'
    }
}