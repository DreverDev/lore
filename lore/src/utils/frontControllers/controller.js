export const getBooks = async () => {
    try {
        const response = await fetch('/api/books/read');
        const json = await response.json();
        return json.books;
    } catch (error) {
        console.log(error);
    }
}

export const getAuthors = async() => {
    try {
        const response = await fetch('/api/authors/read');
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export const getSagas = async() => {
    try {
        const response = await fetch('/api/authors/read');
        const json = await response.json();
        return json.sagas;
    } catch (error) {
        console.log(error);
    }
}

export const getFormats = async() => {
    try {
        const response = await fetch('/api/authors/read');
        const json = await response.json();
        return json.formats;
    } catch (error) {
        console.log(error);
    }
}

export const getFGenres = async() => {
    try {
        const response = await fetch('/api/authors/read');
        const json = await response.json();
        return json.genres;
    } catch (error) {
        console.log(error);
    }
}