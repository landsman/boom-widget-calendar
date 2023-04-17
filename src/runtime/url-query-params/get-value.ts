import {localQueryParams} from "@local/runtime/url-query-params/types";
import {getQueryParamValue} from "@local/runtime/url-query-params/parameter-value";

export function getOrganizerId(): null | string {
    return getQueryParamValue(localQueryParams.organizerId, window.location.href);
}

export function getIsProduction(): null | string {
    return getQueryParamValue(localQueryParams.isProduction, window.location.href);
}
