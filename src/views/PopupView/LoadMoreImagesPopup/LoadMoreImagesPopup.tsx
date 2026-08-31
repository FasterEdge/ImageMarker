import React from 'react';
import './LoadMoreImagesPopup.scss';
import { AppState } from '../../../store';
import { connect } from 'react-redux';
import { addImageData } from '../../../store/labels/actionCreators';
import { GenericYesNoPopup } from '../GenericYesNoPopup/GenericYesNoPopup';
import { useDropzone } from 'react-dropzone';
import { ImageData } from '../../../store/labels/types';
import { PopupActions } from '../../../logic/actions/PopupActions';
import { ImageDataUtil } from '../../../utils/ImageDataUtil';

interface IProps {
    addImageData: (imageData: ImageData[]) => any;
}

const LoadMoreImagesPopup: React.FC<IProps> = ({ addImageData }) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.png']
        }
    });

    const onAccept = () => {
        if (acceptedFiles.length > 0) {
            addImageData(acceptedFiles.map((fileData: File) => ImageDataUtil.createImageDataFromFileData(fileData)));
            PopupActions.close();
        }
    };

    const onReject = () => {
        PopupActions.close();
    };

    const getDropZoneContent = () => {
        if (acceptedFiles.length === 0)
            return <>
                <input {...getInputProps()} />
                <img
                    draggable={false}
                    alt={'上传'}
                    src={'ico/box-opened.png'}
                />
                <p className='extraBold'>添加新图像</p>
                <p>或</p>
                <p className='extraBold'>点击此处选择文件</p>
            </>;
        else if (acceptedFiles.length === 1)
            return <>
                <img
                    draggable={false}
                    alt={'已上传'}
                    src={'ico/box-closed.png'}
                />
                <p className='extraBold'>已加载 1 张新图像</p>
            </>;
        else
            return <>
                <img
                    draggable={false}
                    key={1}
                    alt={'已上传'}
                    src={'ico/box-closed.png'}
                />
                <p key={2} className='extraBold'>已加载 {acceptedFiles.length} 张新图像</p>
            </>;
    };

    const renderContent = () => {
        return (<div className='LoadMoreImagesPopupContent'>
            <div {...getRootProps({ className: 'DropZone' })}>
                {getDropZoneContent()}
            </div>
        </div>);
    };

    return (
        <GenericYesNoPopup
            title={'加载更多图像'}
            renderContent={renderContent}
            acceptLabel={'加载'}
            disableAcceptButton={acceptedFiles.length < 1}
            onAccept={onAccept}
            rejectLabel={'取消'}
            onReject={onReject}
        />
    );
};

const mapDispatchToProps = {
    addImageData
};

const mapStateToProps = (state: AppState) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadMoreImagesPopup);