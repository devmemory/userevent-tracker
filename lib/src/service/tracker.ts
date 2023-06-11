import { EventModel } from "../model/EventModel";
import { EventActionType, TargetView, ElementType } from "../util/constants";
import { debugConsole } from "../util/debugConsole";
import { storeUtil } from "../util/storeUtil";
import { util } from "../util/util";

type TrackerOptions = {
  showConsole?: boolean;
  customUUID?: string;
};

export const tracker = (options?: TrackerOptions) => {
  // tracked data
  let eventList: EventModel[];

  // user uuid
  const uuid = options?.customUUID ?? util.generateUUID();

  const dConsole = debugConsole(options?.showConsole);

  // add eventListener
  // set init view data
  const init = async () => {
    dConsole("[Tracker] init");
    eventList = storeUtil.getTrackData();

    dConsole("[Tracker] start tracking", { eventList });
    document.onclick = handleClickEvent;

    setViewData(window.location.pathname, true);

    window.onbeforeunload = () => setViewData(window.location.pathname, false);

    urlChangeEvent();
  };

  // prevent reloading multiple times
  util.delay(500).then(() => {
    init();
  });

  // url change listener
  const urlChangeEvent = () => {
    let oldUrl = window.location.pathname;

    const observer = new MutationObserver(() => {
      const newUrl = window.location.pathname;

      if (newUrl !== oldUrl) {
        dConsole("[tracker] url change", { oldUrl, newUrl });
        setViewData(oldUrl, false);

        setViewData(newUrl, true);

        oldUrl = newUrl;
      }
    });

    const config = { subtree: true, childList: true };

    observer.observe(document, config);
  };

  // view load/unload
  const setViewData = (url: string, isLoad: boolean) => {
    let viewData: EventModel = {
      url,
      time: util.getCurrentDate(),
      action: isLoad ? EventActionType.load : EventActionType.unload,
      target: TargetView,
      uuid,
    };

    if (isLoad) {
      viewData = {
        ...viewData,
        referrer: document.referrer,
        os: util.getOSInfo(),
        browserInfo: util.browserInfo(),
      };
    }

    eventList = [...eventList, viewData];

    storeUtil.setTrackData(eventList);
  };

  // clicked data track
  // 1. bring element list
  // 2.1 if element doesn't exist, ignore(clicking empty space)
  // 2.2 get different type of data by tag
  // 3. store data to localstorage
  const handleClickEvent = (e: Event) => {
    let element;

    const elementList = e.composedPath();

    element = getElement(elementList);

    if (!element) {
      return;
    }

    let trackData = getTrackData(element);

    dConsole(
      "[Tracker] data : ",
      { trackData, element },
      util.getCurrentDate()
    );

    if (trackData !== "" || trackData !== undefined) {
      eventList = [
        ...eventList,
        {
          url: window.location.pathname,
          time: util.getCurrentDate(),
          action: EventActionType.click,
          target: element.localName,
          data: trackData,
          uuid,
        },
      ];

      storeUtil.setTrackData(eventList);
    }
  };

  // get tracking data from element list
  const getElement = (elementList: any) => {
    for (let i = 0; i < elementList.length; i++) {
      const el = elementList[i];

      if (
        el.tagName === ElementType.BUTTON ||
        util.contains(`${el.className}`, ElementType.btn) ||
        util.contains(`${el.className}`, ElementType.track) ||
        el.tagName === ElementType.IMG
      ) {
        return el;
      }
    }
  };

  // 1. if image url
  // 2.1 if title exists, use title value
  // 2.2 if innerText is empty, use elementType
  const getTrackData = (element: any) => {
    if (element.tagName === ElementType.IMG) {
      return element.alt;
    } else {
      const attrs = element.attributes;

      for (let i = 0; i < attrs.length; i++) {
        if (attrs[i].name === ElementType.title) {
          return attrs[i].value;
        }
      }

      return element.innerText === "" ? element.type : element.innerText;
    }
  };
};