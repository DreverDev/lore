export const useBooks = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/books/getAll');
            const json = await response.json();
            return json.elements;
        } catch (error) {
            console.log(error);
        }
    }

    const getOne = async (id) => {
        try {
            const response = await fetch(`/api/books/getOne?id=${id}`);
            const json = await response.json();
            return json.element;
        } catch (error) {
            console.log(error);
        }
    }

    const create = async (newBook) => {
        console.log(newBook)

        try {

            const jsonData = JSON.stringify(newBook);

            const sendData = await fetch('/api/books/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            }).then();

            return sendData;
        } catch (error) {
            console.error(error)
        }
    }

    return ({
        getAll,
        getOne,
        create
    })
}