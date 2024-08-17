class Paginator {
    constructor(page = 1, limit = 6) {
        this.limit = parseInt(limit, 10);
        if (isNaN(this.limit) || this.limit < 1) {
            this.limit = 6;
        }
        this.page = parseInt(page, 10);
        if (isNaN(this.limit) || this.page < 1) {
            this.page = 1;
        }
        this.offset = (this.page - 1) * this.limit;
        }
        getMetadata(totalRecords) {
        if (totalRecords === 0) {
            return {};
        }
        let totalPages = Math.ceil(totalRecords / this.limit);
        return {
            totalRecords,
            totalPages: totalPages,
            firstPage: 1,
            lastPage: totalPages,
            page: this.page,
            limit: this.limit,
        };
    }
}
module.exports = Paginator;