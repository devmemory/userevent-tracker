import { EventModel } from "../model/EventModel";

export const storeUtil = {
  setTrackData: (dataList: EventModel[]) => {
    localStorage.setItem("td", JSON.stringify(dataList));
  },
  getTrackData: () => {
    return JSON.parse(localStorage.getItem("td") || "[]") as EventModel[];
  },
  clearTrackData: () => {
    localStorage.removeItem("td");
  },
};
