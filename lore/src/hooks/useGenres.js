export const useGenres = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/bookGenres/getAll');
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