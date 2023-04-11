import {Pagination} from "@local/api/general/types";
import {EventType} from "@local/api/view/events/types";

export interface ViewEventsTypes extends Pagination {
    page: EventType[];
}
