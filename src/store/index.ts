// FasterEdge 开源项目 - Github: https://github.com/FasterEdge - Gitee: https://gitee.com/FasterEdge
import { combineReducers } from 'redux';
import {labelsReducer} from './labels/reducer';
import {generalReducer} from './general/reducer';
import {aiReducer} from './ai/reducer';
import {notificationsReducer} from './notifications/reducer';

export const rootReducer = combineReducers({
    general: generalReducer,
    labels: labelsReducer,
    ai: aiReducer,
    notifications: notificationsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
