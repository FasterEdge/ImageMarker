import {COCOBBox, COCOSegmentation} from "../../../data/labels/COCO";
import {IRect} from "../../../interfaces/IRect";
import {IPoint} from "../../../interfaces/IPoint";
import {chunk} from "lodash";

export class COCOUtils {
    public static bbox2rect(bbox: COCOBBox): IRect {
        // 严格校验(与 VOC/YOLO 导入同纪律): 缺元素时 bbox[0] 为 undefined,
        // Number(undefined)=NaN 静默产出坏框; 负/零宽高同理。
        if (!Array.isArray(bbox) || bbox.length < 4) {
            throw new Error('COCO bbox 必须至少有 4 个元素');
        }
        const [x, y, width, height] = bbox;
        if ([x, y, width, height].some((v: number) => typeof v !== 'number' || !isFinite(v))) {
            throw new Error('COCO bbox 元素必须为有限数值');
        }
        if (!(width > 0 && height > 0)) {
            throw new Error('COCO bbox 宽高必须为正');
        }
        return {x, y, width, height}
    }

    public static segmentation2vertices(segmentation: COCOSegmentation): IPoint[][] {
        return segmentation.map((segment: number[]) => {
            // 奇数长度的扁平段会静默丢掉尾点(生成错误多边形)——拒绝
            if (segment.length % 2 !== 0) {
                throw new Error('COCO segmentation 点数必须成对(flatten 坐标)');
            }
            return chunk(segment, 2).map((pair: number[]) => {
                return {x: pair[0], y: pair[1]}
            })
        })
    }
}