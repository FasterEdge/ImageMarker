// FasterEdge 开源项目 - Github: https://github.com/FasterEdge - Gitee: https://gitee.com/FasterEdge
export type HotKeyAction = {
    keyCombo: string[];
    action: (event: KeyboardEvent) => unknown;
}
