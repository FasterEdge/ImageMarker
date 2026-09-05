export class XMLSanitizerUtil {
    public static sanitize(input: string): string {
        // 注意: & 必须最先转义, 否则 < > 等转义产物(&lt; 等)中的 & 会被二次转义,
        // 导致导出 XML 显示为字面 "&lt;" 文本(数据损坏)。
        // 全部使用 replaceAll 全量替换(旧实现 .replace 只替换首个匹配,
        // 项目名含第二个 < 或 > 时 XML 结构被破坏/注入)。
        return input
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll("'", '&#39;')
            .replaceAll('/', '&#x2F;')
    }
}