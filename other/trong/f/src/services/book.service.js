function makeBookService() {
    const baseUrl = '/api/services';
    const headers = {
        'Content-Type': 'application/json',
    }

    async function getBooks(searchtext, page, limit = 8) {
        let url = `${baseUrl}?name=%${searchtext}%&page=${page}&limit=${limit}`;
        return await fetch(url).then((res) => res.json());
    };

    async function addBook(book) {
        return await fetch(baseUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(book),
        }).then((res) => res.json());
    }

    async function getBook(id) {
        return await fetch(`${baseUrl}/${id}`).then((res) => res.json());
    }

    async function updateBook(id, book) {
        return await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(book),
        }).then((res) => res.json());
    }

    async function deleteBook(id) {
        return await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        }).then((res) => res.json());
    }


    return {
        getBooks,
        getBook,
        addBook,
        updateBook,
        deleteBook,
    };
};

export default makeBookService();