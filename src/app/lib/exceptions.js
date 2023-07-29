export class FetchDataError extends Error {
    constructor(message="Fetching data failed") {
        super(message);
        this.name = 'FetchDataError';
    }
}
