import { EventModel } from "../model/EventModel";
export declare const storeUtil: {
    setTrackData: (dataList: EventModel[]) => void;
    getTrackData: () => EventModel[];
    clearTrackData: () => void;
};
