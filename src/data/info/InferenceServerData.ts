import { InferenceServerType } from '../enums/InferenceServerType';

export interface IInferenceServer {
    name: string
    imageSrc: string
    imageAlt: string
    isDisabled: boolean
}

export const InferenceServerDataMap: Record<InferenceServerType, IInferenceServer> = {
    [InferenceServerType.ROBOFLOW]: {
        name: 'Roboflow 推理服务器',
        imageSrc: 'ico/roboflow-logo.png',
        imageAlt: 'roboflow 推理服务器',
        isDisabled: false
    },
    [InferenceServerType.MAKESENSE]: {
        name: 'Make Sense 推理服务器',
        imageSrc: 'ico/make-sense-ico-transparent.png',
        imageAlt: 'make-sense 推理服务器',
        isDisabled: true
    }
}