type Error = {
    msg: string,
    params: string,
    location: string,
}
export interface IError {
    errors: Error[]
}