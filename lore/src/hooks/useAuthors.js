export const useAuthors = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/authors/getAll');
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    const getOne = async (id) => {
        try {
            const response = await fetch(`/api/authors/getOne?id=${id}`);
            const json = await response.json();
            return json.element;
        } catch (error) {
            console.log(error);
        }
    }

    return ({
        getAll,
        getOne
    })
}