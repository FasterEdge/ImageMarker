import {Settings} from '../../settings/Settings';

export interface ISocialMedia {
    displayName:string;
    imageSrc:string;
    imageAlt:string;
    href:string;
    tooltipMessage:string;
}

export const SocialMediaData: ISocialMedia[] = [
    {
        displayName: 'GitHub',
        imageSrc: '/ico/github-logo.png',
        imageAlt: 'GitHub',
        href: Settings.GITHUB_URL,
        tooltipMessage: '在 GitHub 上给我们点个赞 ⭐',
    },
    {
        displayName: 'Medium',
        imageSrc: '/ico/medium-logo.png',
        imageAlt: 'Medium',
        href: Settings.MEDIUM_URL,
        tooltipMessage: '在 Medium 上阅读我们的 AI 内容',
    },
    {
        displayName: 'YouTube',
        imageSrc: '/ico/youtube-logo.png',
        imageAlt: 'YouTube',
        href: Settings.YOUTUBE_URL,
        tooltipMessage: '在 YouTube 上观看我们的 AI 教程'
    },
    {
        displayName: 'Twitch',
        imageSrc: '/ico/twitch-logo.png',
        imageAlt: 'Twitch',
        href: Settings.TWITCH_URL,
        tooltipMessage: '在 Twitch 上与我们一同参与 Kaggle 竞赛'
    },
];