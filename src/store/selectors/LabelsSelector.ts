import {store} from '../..';
import {ImageData, LabelLine, LabelName, LabelPoint, LabelPolygon, LabelRect} from '../labels/types';
import {find} from 'lodash';
import {LabelType} from '../../data/enums/LabelType';

export class LabelsSelector {
    public static getLabelNames(): LabelName[] {
        return store.getState().labels.labels;
    }

    public static getLabelNameById(id: string): LabelName | undefined {
        const labelName: LabelName[] = LabelsSelector.getLabelNames()
        return find(labelName, {id});
    }

    public static getActiveLabelNameId(): string {
        return store.getState().labels.activeLabelNameId;
    }

    public static getActiveLabelType(): LabelType {
        return store.getState().labels.activeLabelType;
    }

    public static getImagesData(): ImageData[] {
        return store.getState().labels.imagesData;
    }

    public static getActiveImageIndex(): number {
        return store.getState().labels.activeImageIndex;
    }

    public static getActiveImageData(): ImageData | null {
        const activeImageIndex: number | null = LabelsSelector.getActiveImageIndex();

        if (activeImageIndex === null)
            return null;

        return LabelsSelector.getImageDataByIndex(activeImageIndex);
    }

    public static getImageDataByIndex(index: number): ImageData {
        const imagesData: ImageData[] = LabelsSelector.getImagesData();
        return imagesData[index];
    }

    public static getImageDataById(id: string): ImageData {
        const imagesData: ImageData[] = LabelsSelector.getImagesData();
        return find(imagesData, {id});
    }

    public static getActiveLabelId(): string | null {
        return store.getState().labels.activeLabelId;
    }

    public static getHighlightedLabelId(): string | null {
        return store.getState().labels.highlightedLabelId;
    }

    public static getActiveRectLabel(): LabelRect | null {
        const activeLabelId: string | null = LabelsSelector.getActiveLabelId();

        if (activeLabelId === null)
            return null;

        // activeImageIndex 与 activeLabelId 是独立状态, 存在前者为 null 而
        // 后者非 null 的窗口(切图/重置流程)——旧实现直接
        // getActiveImageData().labelRects, null 解引用 TypeError。
        const imageData: ImageData | null = LabelsSelector.getActiveImageData();
        return imageData ? find(imageData.labelRects, {id: activeLabelId}) : null;
    }

    public static getActivePointLabel(): LabelPoint | null {
        const activeLabelId: string | null = LabelsSelector.getActiveLabelId();

        if (activeLabelId === null)
            return null;

        const imageData: ImageData | null = LabelsSelector.getActiveImageData();
        return imageData ? find(imageData.labelPoints, {id: activeLabelId}) : null;
    }

    public static getActivePolygonLabel(): LabelPolygon | null {
        const activeLabelId: string | null = LabelsSelector.getActiveLabelId();

        if (activeLabelId === null)
            return null;

        const imageData: ImageData | null = LabelsSelector.getActiveImageData();
        return imageData ? find(imageData.labelPolygons, {id: activeLabelId}) : null;
    }

    public static getActiveLineLabel(): LabelLine | null {
        const activeLabelId: string | null = LabelsSelector.getActiveLabelId();

        if (activeLabelId === null)
            return null;

        const imageData: ImageData | null = LabelsSelector.getActiveImageData();
        return imageData ? find(imageData.labelLines, {id: activeLabelId}) : null;
    }
}
