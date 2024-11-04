import { CallBack } from "./Events.interface";

export interface HasEvent {
    on(eventName: string, callback: CallBack) : void
}