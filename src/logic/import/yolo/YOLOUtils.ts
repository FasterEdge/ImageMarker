import {LabelName, LabelRect} from '../../../store/labels/types';
import {LabelUtil} from '../../../utils/LabelUtil';
import {AnnotationsParsingError, LabelNamesNotUniqueError} from './YOLOErrors';
import {ISize} from '../../../interfaces/ISize';
import {uniq} from 'lodash';

export class YOLOUtils {
    public static parseLabelsNamesFromString(content: string): LabelName[] {
        const labelNames: string[] = content
            .split(/[\r\n]/)
            .filter(Boolean)
            .map((name: string) => name.replace(/\s/g, ''))

        if (uniq(labelNames).length !== labelNames.length) {
            throw new LabelNamesNotUniqueError()
        }

        return labelNames
            .map((name: string) => LabelUtil.createLabelName(name))
    }

    public static loadLabelsList(
        fileData: File,
        onSuccess: (labels: LabelName[]) => void,
        onFailure: (error: Error) => void
    ) {
        const reader = new FileReader();
        reader.onloadend = (evt: ProgressEvent<FileReader>) => {
            try {
                const content: string = evt.target.result as string;
                const labelNames = YOLOUtils.parseLabelsNamesFromString(content);
                onSuccess(labelNames);
            } catch (error) {
                onFailure(error as Error)
            }
        };
        reader.readAsText(fileData);
    }

    public static parseYOLOAnnotationsFromString(
        rawAnnotations: string,
        labelNames: LabelName[],
        imageSize: ISize,
        imageName: string
    ): LabelRect[] {
        return rawAnnotations
            .split(/[\r\n]/)
            .filter(Boolean)
            .map((rawAnnotation: string) => YOLOUtils.parseYOLOAnnotationFromString(
                rawAnnotation, labelNames, imageSize, imageName
            ));
    }

    public static parseYOLOAnnotationFromString(
        rawAnnotation: string,
        labelNames: LabelName[],
        imageSize: ISize,
        imageName: string
    ): LabelRect {
        const components = rawAnnotation.split(' ');
        if (!YOLOUtils.validateYOLOAnnotationComponents(components, labelNames.length)) {
            throw new AnnotationsParsingError(imageName);
        }
        const labelIndex: number = parseInt(components[0]);
        const labelId: string = labelNames[labelIndex].id;
        const rectX: number = parseFloat(components[1]);
        const rectY: number = parseFloat(components[2]);
        const rectWidth: number = parseFloat(components[3]);
        const rectHeight: number = parseFloat(components[4]);
        const rect = {
            x: (rectX - rectWidth /2) * imageSize.width,
            y: (rectY - rectHeight /2) * imageSize.height,
            width: rectWidth * imageSize.width,
            height: rectHeight * imageSize.height
        }
        return LabelUtil.createLabelRect(labelId, rect);
    }

    public static validateYOLOAnnotationComponents(components: string[], labelNamesCount: number): boolean {
        const validateCoordinateValue = (rawValue: string): boolean => {
            // 空串陷阱: Number("") === 0, 孤立双空格("0  0.5 ...")会让
            // 组件变空串并通过 0<=x<=1 校验, 静默产出 0 点错误框——先拒空;
            // 组件数不足时索引越界为 undefined, 也一并拒绝(旧实现 Number(undefined)=NaN 恰好拒绝, 新路径必须先判类型)。
            if (typeof rawValue !== 'string' || rawValue.trim() === '') return false;
            const floatValue: number = Number(rawValue);
            return !isNaN(floatValue) && 0.0 <= floatValue && floatValue <= 1.0;
        }
        const validateLabelIdx = (rawValue: string): boolean => {
            // Number 而非 parseInt: parseInt("0abc")===0 / parseInt("1.5")===1
            // 部分解析, 畸形 class 索引会被宽松接受。Number 失败得 NaN,
            // 非整数值(如 1.5)也一并拒绝——只认纯数字整数;
            // 负零("-0")在 JS 中 Number.isInteger 为真且 -0>=0 为真, 需显式拒绝。
            if (typeof rawValue !== 'string') return false;
            const intValue: number = Number(rawValue);
            return Number.isInteger(intValue) && !Object.is(intValue, -0) && 0 <= intValue && intValue < labelNamesCount;
        }

        return [
            components.length === 5,
            validateLabelIdx(components[0]),
            validateCoordinateValue(components[1]),
            validateCoordinateValue(components[2]),
            validateCoordinateValue(components[3]),
            validateCoordinateValue(components[4])
        ].every(Boolean)
    }
}
