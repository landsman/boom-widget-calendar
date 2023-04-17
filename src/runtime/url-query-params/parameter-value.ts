export function getQueryParamValue(param: string, url: string): string | null {
    const urlSearchParams = new URLSearchParams(url.split('?')[1]);
    return urlSearchParams.get(param);
}
