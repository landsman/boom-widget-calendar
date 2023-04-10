import {ViewEventsTypes} from "./types/view-events-type";
import {PaginationQueryParamsTypes} from "../../general/query-params/pagination";
import {axiosInstance} from "../../../configuration/http/axios";
import {apiEndpoints} from "../../../configuration/boom-api/endpoints";

interface ViewEventsQueryParamsTypes extends PaginationQueryParamsTypes {
    published?: boolean;
    localization?: string;
    search?: string;
    fromDate?: Date;
    toDate?: Date;
    organizerId: string;
}

export async function getViewEvents(
    queryParams: ViewEventsQueryParamsTypes
): Promise<ViewEventsTypes> {
    const response = await axiosInstance.get<ViewEventsTypes>(apiEndpoints.viewEvents, {
        params: queryParams,
    });
    return response.data;
}
