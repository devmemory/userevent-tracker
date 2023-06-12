export declare const util: {
    delay: (ms: number) => Promise<void>;
    getCurrentDate: () => number;
    getDateDifference: (d1: number, d2: number) => number;
    getQueryParam: (key: string) => string;
    browserInfo: () => "IE" | "chrome" | "safari" | "firefox" | "edge" | "opera";
    getOSInfo: () => "mac" | "window" | "linux";
    contains: (str1: string, str2: string) => boolean;
    generateUUID: () => string;
};
