declare class EyeDropper {
    constructor();
    open(options?: { signal?: AbortSignal }): Promise<{ sRGBHex: string }>;
}

