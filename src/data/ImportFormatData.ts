// FasterEdge 开源项目 - Github: https://github.com/FasterEdge - Gitee: https://gitee.com/FasterEdge
import {LabelType} from './enums/LabelType';
import {ILabelFormatData} from '../interfaces/ILabelFormatData';
import {AnnotationFormatType} from './enums/AnnotationFormatType';

export type ImportFormatDataMap = Record<LabelType, ILabelFormatData[]>

export const ImportFormatData: ImportFormatDataMap = {
    [LabelType.RECT]: [
        {
            type: AnnotationFormatType.COCO,
            label: 'COCO JSON 格式的单个文件。'
        },
        {
            type: AnnotationFormatType.YOLO,
            label: 'YOLO 格式的多个文件，以及标签名称定义文件 - labels.txt。'
        },
        {
            type: AnnotationFormatType.VOC,
            label: 'VOC XML 格式的多个文件。'
        }
    ],
    [LabelType.POINT]: [],
    [LabelType.LINE]: [],
    [LabelType.POLYGON]: [
        {
            type: AnnotationFormatType.COCO,
            label: 'COCO JSON 格式的单个文件。'
        }
    ],
    [LabelType.IMAGE_RECOGNITION]: []
}
