import {getIsProduction} from "@local/runtime/url-query-params/get-value";

export function isProduction(): boolean {
    const fromUrl = getIsProduction();
    return "false" !== fromUrl;
}
