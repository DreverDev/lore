import moment from "moment";

export const useDates = () => {
    const tableFormat = (date) => date ? moment.utc(date).format('DD/MM/YY') : '';

    return {
        tableFormat,
    }
}