import { useEffect, useState } from "react";
import { ChartModel } from "src/model/ChartModel";
import { storeUtil, EventModel, TargetView, EventActionType, util } from "../../../../lib/dist";

type TestData = {
  [key: string]: number;
};

const useEventList = () => {
  const [stayingTime, setStayingTime] = useState<ChartModel>();
  const [clickEvent, setClickEvent] = useState<ChartModel>();

  useEffect(() => {
    const userData = getDataById();

    const timeData = getStayingTime(userData);

    const clickData = getClickEvents(userData);

    const timeChart: ChartModel = {
      label: "Staying time(seconds)",
      labels: Object.keys(timeData),
      data: Object.values(timeData),
    };

    const clickChart: ChartModel = {
      label: "Click data",
      labels: Object.keys(clickData),
      data: Object.values(clickData),
    };

    setStayingTime(timeChart);

    setClickEvent(clickChart);

    return () => {
      setStayingTime(undefined);
      setClickEvent(undefined);
    };
  }, []);

  // get eventModel by uuid
  // [key] uuid
  // [value] : eventModel
  const getDataById = () => {
    const eventList = storeUtil.getTrackData();

    let userData = new Map<string, EventModel[]>();

    eventList.forEach((e) => {
      if (!userData.has(e.uuid!)) {
        userData.set(e.uuid!, [e]);
      } else {
        userData.get(e.uuid!)?.push(e);
      }
    });

    return userData;
  };

  // get staying time in url
  // [key] url
  // [value] stayingTime in seconds
  const getStayingTime = (data: Map<string, EventModel[]>) => {
    let pageData: TestData = {};

    data.forEach((v, k) => {
      let startTime: number;

      v.filter((e) => e.target === TargetView).forEach((e) => {
        if (e.action === EventActionType.load) {
          startTime = e.time!;
        }

        if (e.action === EventActionType.unload) {
          let time = util.getDateDifference(startTime, e.time!);

          if (Object.keys(pageData).includes(e.url!)) {
            time += pageData[e.url!];
          }
          pageData[e.url!] = time;
        }
      });
    });

    return pageData;
  };

  // get clicked data
  // [key] url_data
  // [value] number of clicking
  const getClickEvents = (data: Map<string, EventModel[]>) => {
    let clickedData: TestData = {};

    data.forEach((v, k) => {
      v.filter((e) => e.action === EventActionType.click).forEach((e, i) => {
        if (Object.keys(clickedData).includes(e.data!)) {
          const clicked = clickedData[e.data!];

          clickedData[e.data!] = clicked + 1;
        } else {
          clickedData[e.data!] = 1;
        }
      });
    });

    return clickedData;
  };

  return {
    stayingTime,
    clickEvent,
  };
};

export default useEventList;
