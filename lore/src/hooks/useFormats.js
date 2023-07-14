export const useFormats = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/formats/getAll');
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