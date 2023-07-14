export const useSagas = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/sagas/getAll');
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getAll,
    }
}