import axios from "axios";
import {apiHost} from "@local/configuration/boom-api";
import {isProduction} from "@local/configuration/environment";

const production = isProduction();

export const axiosInstance = axios.create({
    baseURL: apiHost(production),
    headers: {'X-Widget': 'Boom-Widget-Calendar'}
});
