import { EventModel } from "../model/EventModel";

export const storeUtil = {
  setTrackData: (dataList: EventModel[]) => {
    window.localStorage.setItem("td", JSON.stringify(dataList));
  },
  getTrackData: () => {
    return JSON.parse(
      window.localStorage.getItem("td") || "[]"
    ) as EventModel[];
  },
  clearTrackData: () => {
    window.localStorage.removeItem("td");
  },
};
