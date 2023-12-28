import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../Redux/Features/Api/apiSlice";
import BookCard from "./BookCard";
import Error from "./Shared/Error";
import Loading from "./Shared/Loading";
import NotFoundElement from "./Shared/NotFoundElement";

function Books() {
    let { data: allBooks, isLoading, isError, isSuccess } = useGetBooksQuery();
    const { isFeatured, searchText } = useSelector((state) => state.bookReducer)

    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <Error message="There an problem occured" />
    if (!isLoading && !isError && allBooks.length === 0) content = <NotFoundElement />

    if (isSuccess) {
        const filteredBooks = isFeatured ? allBooks.filter(book => book.featured) : allBooks;
        const filteredContent = filteredBooks
            .filter(book => searchText.trim() === '' || book.name.toLowerCase().includes(searchText.toLowerCase()))
            .map(book => <BookCard key={book.id} book={book} />);
        content = filteredContent;
    }

    return (
        content
    )
}

export default Books;