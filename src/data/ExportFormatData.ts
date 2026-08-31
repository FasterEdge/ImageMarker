import {ILabelFormatData} from '../interfaces/ILabelFormatData';
import {LabelType} from './enums/LabelType';
import {AnnotationFormatType} from './enums/AnnotationFormatType';

export type ExportFormatDataMap = Record<LabelType, ILabelFormatData[]>;

export const ExportFormatData: ExportFormatDataMap = {
    [LabelType.RECT]: [
        {
            type: AnnotationFormatType.YOLO,
            label: '包含 YOLO 格式文件的 .zip 压缩包。'
        },
        {
            type: AnnotationFormatType.VOC,
            label: '包含 VOC XML 格式文件的 .zip 压缩包。'
        },
        {
            type: AnnotationFormatType.CSV,
            label: '单个 CSV 文件。'
        }
    ],
    [LabelType.POINT]: [
        {
            type: AnnotationFormatType.CSV,
            label: '单个 CSV 文件。'
        }
    ],
    [LabelType.LINE]: [
        {
            type: AnnotationFormatType.CSV,
            label: '单个 CSV 文件。'
        }
    ],
    [LabelType.POLYGON]: [
        {
            type: AnnotationFormatType.VGG,
            label: 'VGG JSON 格式的单个文件。'
        },
        {
            type: AnnotationFormatType.COCO,
            label: 'COCO JSON 格式的单个文件。'
        }
    ],
    [LabelType.IMAGE_RECOGNITION]: [
        {
            type: AnnotationFormatType.CSV,
            label: '单个 CSV 文件。'
        },
        {
            type: AnnotationFormatType.JSON,
            label: '单个 JSON 文件。'
        }
    ]
}
