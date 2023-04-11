import {axiosInstance} from "@local/configuration/http/axios";
import {apiEndpoints} from "@local/configuration/boom-api";
import {PaginationQueryParamsTypes} from "@local/api/general/query-params";
import {ViewEventsTypes} from "@local/api/view/events/types";

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
