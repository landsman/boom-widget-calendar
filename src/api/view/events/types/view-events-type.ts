import {Pagination} from "../../../general/types/pagination";
import {EventType} from "./event-type";

export interface ViewEventsTypes extends Pagination {
    page: EventType[];
}
