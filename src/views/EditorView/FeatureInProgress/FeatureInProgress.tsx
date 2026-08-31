import React from 'react';
import './FeatureInProgress.scss';

export const FeatureInProgress: React.FC = () => {
    return(
        <div
            className="FeatureInProgress"
        >
            <img
                draggable={false}
                alt={"起飞"}
                src={"ico/take-off.png"}
            />
            <p className="extraBold">新功能<br/>即将推出...</p>
        </div>
    )
};