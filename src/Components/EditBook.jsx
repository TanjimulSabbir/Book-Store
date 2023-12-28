import { useState } from "react";
import toast from "react-hot-toast";
import { useEditBooksMutation, useSpecifiedBookQuery } from "../Redux/Features/Api/apiSlice";
import { useParams } from "react-router-dom";
import Loading from "./Shared/Loading";

function EditBook() {
    const [bookInfo, setBookInfo] = useState({ featured: false });
    const [editBook, { data, isLoading, isError, Error, isSuccess }] = useEditBooksMutation();
    const { bookId } = useParams();
    const { data: specifiedBook } = useSpecifiedBookQuery(bookId);
    if (!specifiedBook) return <Loading />

    const handleSubmit = (event) => {
        event.preventDefault();
        editBook({ id: bookId, data: bookInfo })
        toast.success("Successfully the Book edited!")
        console.log(bookInfo)
    }
    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    <form className="book-form" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="lws-bookName">Book Name</label>
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, name: event.target.value }))}
                                defaultValue={specifiedBook.name}
                                required className="text-input" type="text" id="lws-bookName" name="name"
                            />

                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-author">Author</label>
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, author: event.target.value }))}
                                defaultValue={specifiedBook.author}
                                required className="text-input" type="text" id="lws-author" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-thumbnail">Image Url</label>
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, thumbnail: event.target.value }))}
                                defaultValue={specifiedBook.thumbnail}
                                required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label htmlFor="lws-price">Price</label>
                                <input onChange={(event) => setBookInfo((prev) => ({ ...prev, price: event.target.value }))}
                                    defaultValue={specifiedBook.price}
                                    required className="text-input" type="number" id="lws-price" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lws-rating">Rating</label>
                                <input onChange={(event) => setBookInfo((prev) => ({ ...prev, rating: event.target.value }))}
                                    defaultValue={specifiedBook.rating}
                                    required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div className="flex items-center ">
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, featured: event.target.checked }))}
                                defaultChecked={specifiedBook.featured}
                                id="lws-featured" type="checkbox" name="true" className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="lws-featured" className="ml-2 text-sm cursor-pointer"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="lws-submit">Update Book Info</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default EditBook;