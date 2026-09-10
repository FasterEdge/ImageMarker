
export class FileUtil {
    public static loadImageBase64(fileData: File): Promise<string | ArrayBuffer> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(fileData);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    public static loadImage(fileData: File): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(fileData);
            const image = new Image();
            image.src = url;
            image.onload = () => {
                // 加载完成后即可回收 object URL——旧实现从不 revoke,
                // 每张导入图片都残留一个 Blob 引用(浏览器不自动回收)。
                URL.revokeObjectURL(url);
                resolve(image);
            };
            image.onerror = (error) => {
                URL.revokeObjectURL(url);
                reject(error);
            };
        });
    }

    public static loadImages(fileData: File[]): Promise<HTMLImageElement[]> {
        return new Promise((resolve, reject) => {
            const promises: Promise<HTMLImageElement>[] = fileData.map((data: File) => FileUtil.loadImage(data));
            Promise
                .all(promises)
                .then((values: HTMLImageElement[]) => resolve(values))
                .catch((error) => reject(error));
        });
    }

    public static readFile(fileData: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            // 必须用 onload + onerror 而非 onloadend: onloadend 在成功与失败时
            // 都会触发, 失败时 result 为 null——旧实现静默 resolve(null),
            // 读取错误被吞, 下游(VOC/YOLO 导入)拿到 null 再解析异常, 且与
            // loadImageBase64 的 onload/onerror 纪律不一致。
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsText(fileData);
        });
    }

    public static readFiles(fileData: File[]): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const promises: Promise<string>[] = fileData.map((data: File) => FileUtil.readFile(data));
            Promise
                .all(promises)
                .then((values: string[]) => resolve(values))
                .catch((error) => reject(error));
        });
    }

    public static extractFileExtension(name: string): string | null {
        const parts = name.split('.');
        return parts.length > 1 ? parts[parts.length - 1] : null;
    }

    public static extractFileName(name: string): string | null {
        const splitPath = name.split('.');
        let fName = '';
        for (const idx of Array(splitPath.length - 1).keys()) {
            if (fName === '') fName += splitPath[idx];
            else fName += '.' + splitPath[idx];
        }
        return fName;
    }
}
