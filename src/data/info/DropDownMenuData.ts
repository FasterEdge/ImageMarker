import {updateActivePopupType} from '../../store/general/actionCreators';
import {PopupWindowType} from '../enums/PopupWindowType';
import {store} from '../../index';

export type DropDownMenuNode = {
    name: string
    description?: string
    imageSrc: string
    imageAlt: string
    disabled: boolean
    onClick?: () => void
    children?: DropDownMenuNode[]
}

export const DropDownMenuData: DropDownMenuNode[] = [
    {
        name: '操作',
        imageSrc: 'ico/actions.png',
        imageAlt: '操作',
        disabled: false,
        children: [
            {
                name: '编辑标签',
                description: '修改标签列表',
                imageSrc: 'ico/tags.png',
                imageAlt: '标签',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.UPDATE_LABEL))
            },
            {
                name: '导入图像',
                description: '加载更多图像',
                imageSrc: 'ico/camera.png',
                imageAlt: '图像',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.IMPORT_IMAGES))
            },
            {
                name: '导入标注',
                description: '从文件导入标注',
                imageSrc: 'ico/import-labels.png',
                imageAlt: '导入标注',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.IMPORT_ANNOTATIONS))
            },
            {
                name: '导出标注',
                description: '将标注导出到文件',
                imageSrc: 'ico/export-labels.png',
                imageAlt: '导出标注',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.EXPORT_ANNOTATIONS))
            },
            {
                name: '本地运行 AI',
                description: '在浏览器中运行标注模型',
                imageSrc: 'ico/ai.png',
                imageAlt: '在浏览器中加载 AI 模型',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.LOAD_AI_MODEL))
            },
            {
                name: '连接 AI 服务器',
                description: '在服务器上运行标注模型',
                imageSrc: 'ico/api.png',
                imageAlt: '连接 AI 服务器',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.CONNECT_AI_MODEL_VIA_API))
            },
        ]
    },
    {
        name: '社区',
        imageSrc: 'ico/plant.png',
        imageAlt: '社区',
        disabled: false,
        children: [
            {
                name: '文档',
                description: '了解更多关于 ImageMarker',
                imageSrc: 'ico/documentation.png',
                imageAlt: '文档',
                disabled: false,
                onClick: () => window.open('https://github.com/FasterEdge/ImageMarker', '_blank')
            },
            {
                name: 'Bug 与功能',
                description: '报告 Bug 或提出新功能建议',
                imageSrc: 'ico/bug.png',
                imageAlt: 'Bug',
                disabled: false,
                onClick: () => window.open('https://github.com/FasterEdge/ImageMarker/issues', '_blank')
            }
        ]
    }
]

