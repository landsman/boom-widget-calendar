import axios from "axios";
import {apiHost} from "../boom-api/host";
import {isProduction} from "../environment/production";

const production = isProduction();

export const axiosInstance = axios.create({
    baseURL: apiHost(production),
    headers: {'X-Widget': 'Boom-Widget-Calendar'}
});
