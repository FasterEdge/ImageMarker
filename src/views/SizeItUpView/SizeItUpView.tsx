import React from 'react';
import './SizeItUpView.scss';
import {Settings} from "../../settings/Settings";

export const SizeItUpView: React.FC = () => {
    return(<div className="SizeItUpView">
        <p className="extraBold">唉... 这个窗口对我来说太挤了！</p>
        <img
            draggable={false}
            alt={"窗口太小"}
            src={"ico/small_window.png"}
        />
        <p className="extraBold">请... 至少将其调整为 {Settings.EDITOR_MIN_WIDTH} x {Settings.EDITOR_MIN_HEIGHT} 像素。</p>
    </div>)
};