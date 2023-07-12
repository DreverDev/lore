export const useGetItems = () => {
    const getBooks = async () => {
        try {
            const response = await fetch('/api/books/read');
            const json = await response.json();
            return json.books;
        } catch (error) {
            console.log(error);
        }
    }

    return ({
        getBooks,
    })
}