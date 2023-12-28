import { useGetBooksQuery } from "../Redux/Features/Api/apiSlice";
import BookCard from "./BookCard";
import Error from "./Shared/Error";
import Loading from "./Shared/Loading";
import NotFoundElement from "./Shared/NotFoundElement";

function Books() {
    const { data: allBooks, isLoading, isError, isSuccess } = useGetBooksQuery();

    let content = null;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <Error message="There an problem occured" />
    if (!isLoading && !isError && allBooks.length === 0) content = <NotFoundElement />

    if (!isLoading && !isError && allBooks.length > 0) {
        content = allBooks.map(book => <BookCard key={book.id} book={book} />)
    }

    return (
        content
    )
}

export default Books;