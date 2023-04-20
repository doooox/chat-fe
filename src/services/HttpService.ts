import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


class HttpService {
    httpClient: AxiosInstance;

    constructor() {
        this.httpClient = axios.create({
            baseURL: "http://127.0.0.1:5001/api",
            withCredentials: true,
            headers: {
                XMLHttpRequest: "HMLHttpRequest",
            },
        });

    }
    request = <T, R = T>(requestConfig: AxiosRequestConfig): Promise<R> =>
        this.httpClient.request(requestConfig).then(({ data }) => data);

    attachHeaders = (headers: { [key: string]: string }) =>
        Object.assign(this.httpClient.defaults.headers, headers);
    withCredentials = true;
    headers = {
        XMLHttpRequest: "HMLHttpRequest",
    };

}

export const httpService = new HttpService();
