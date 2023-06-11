export const util = {
  delay: (ms: number) => {
    // delay for ms
    return new Promise<void>((res) => {
      const timer = setTimeout(() => {
        res();
        clearTimeout(timer);
      }, ms);
    });
  },
  getCurrentDate: () => {
    // tracking time to milliseconds
    const dateTime = new Date();

    return Date.parse(`${dateTime}`);
  },
  getDateDifference: (d1: number, d2: number) => {
    // date differenence in seconds
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    return Math.round((date2.getTime() - date1.getTime()) / 1000);
  },
  getQueryParam: (key: string) => {
    // get url query param
    const params = new URLSearchParams(window.location.search);

    return params.get(key);
  },
  browserInfo: () => {
    // user browser
    const agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("trident") != -1) {
      return "IE";
    }
    if (agent.indexOf("chrome") != -1) {
      return "chrome";
    }
    if (agent.indexOf("safari") != -1) {
      return "safari";
    }
    if (agent.indexOf("firefox") != -1) {
      return "firefox";
    }
    if (agent.indexOf("edge") != -1) {
      return "edge";
    }
    if (agent.indexOf("opr") != -1) {
      return "opera";
    }
  },
  getOSInfo: () => {
    // os tracking
    const agent = navigator.userAgent.toLowerCase();

    if (agent.indexOf("mac") != -1) {
      return "mac";
    }

    if (agent.indexOf("win") != -1) {
      return "window";
    }

    if (agent.indexOf("lin") != -1) {
      return "linux";
    }
  },
  contains: (str1: string, str2: string) => {
    // inlcudes + null
    return str1?.toUpperCase()?.includes(str2?.toUpperCase()) ?? false;
  },
  generateUUID: () => {
    return Math.random().toString(16).slice(2);
  }
};