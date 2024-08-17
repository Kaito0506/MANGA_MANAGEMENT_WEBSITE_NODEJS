const makeBooksService = require('../services/books.service');
const ApiError = require('../api-error');


// create and save new book
async function addBook(req, res, next){
    if (req.session.user.role_id != 0 )
        return next(new ApiError(401, 'Just admin can add new book'));
    if(!req.body?.name  || !req.body?.author  || !req.body?.abstract || !req.body?.typeid){
        return next(new ApiError(400, 'Information can not be empty'));
    }
    try {
           const services = makeBooksService();
           const newbook = services.addBook(req.body);
           return res.send(newbook);

    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while adding new book')
        );
    }
}

async function getBooksByFilter(req, res, next){
    let books = [];
    try {
        const services = makeBooksService();
        books = await services.getManyBooks(req.query);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while retrieving library')
        );
    }
    return res.send(books);
}

async function getBook(req, res, next){
    try{
        const services = makeBooksService();
        const book = await services.getBookById(req.params.id);
        console.log(req.params.id);
        if(!book){
            return next(new ApiError(404, 'Contact not found'));
        }
        return res.send(book);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 
                        `Error retrieving books database with id ${req.params.id}`
            )
        );
    }
}

async function updateBook(req, res, next){
    if (req.session.user.role_id != 0 )
        return next(new ApiError(401, 'Unauthorized'));
   if (Object.keys(req.body).length === 0){
        return next(new ApiError(400, 'Data to update can not be empty'));
    }

    try {
        const services = makeBooksService();
        const updated = await services.updateBook(
            req.params.id,
            req.body
        );
        if(!updated){
            return next(new ApiError(404, 'Contact not found'));
        }
        return res.send({ message: 'Contact was updated successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating book with id ${req.params.id}`)
        );
    }
}

async function deleteBook(req, res, next){
    // console.log(req.session.user.role_id);
    if (req.session.user.role_id != 0 )
        return next(new ApiError(401, 'Just admin can delete book'));
    try {
        const services = makeBooksService();
        const deletedBook = await services.deleteBook(req.params.id);
        if(!deletedBook){
            return next(new ApiError(404, 'Contact not found'));
        }
        return res.send({ message: 'Contact was deleted successfully' });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500, 
                `Could not delete book with id ${req.params.id}`
            )
        );
    }
}

async function deleteAllBooks(req, res, next){
    if (req.session.user.role_id != 0 )
        return next(new ApiError(401, 'Just admin can delete books'));
    
    try{
        const services = makeBooksService();
        const allBook = await services.deleteAllBooks();
        return res.send({ 
            message: `${allBook} All books were deleted successfully`,
        });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while deleting all books')
        );
    }
}

module.exports = {
    getBooksByFilter,
    deleteAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
};