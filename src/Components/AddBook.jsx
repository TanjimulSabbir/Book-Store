import { useState } from 'react'
import { useAddBooksMutation } from '../Redux/Features/Api/apiSlice';
import toast from 'react-hot-toast';

function AddBook() {
    const [addBook, { data, isLoading, isError, Error, isSuccess }] = useAddBooksMutation();
    const [bookInfo, setBookInfo] = useState({ featured: false })
    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(bookInfo)
        toast.success("Successfully added!")
        console.log(bookInfo)
    }
    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form className="book-form" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="lws-bookName">Book Name</label>
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, name: event.target.value }))}
                                required className="text-input" type="text" id="lws-bookName" name="name"
                            />

                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-author">Author</label>
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, author: event.target.value }))}
                                required className="text-input" type="text" id="lws-author" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-thumbnail">Image Url</label>
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, thumbnail: event.target.value }))}
                                required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label htmlFor="lws-price">Price</label>
                                <input onChange={(event) => setBookInfo((prev) => ({ ...prev, price: event.target.value }))}
                                    required className="text-input" type="number" id="lws-price" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lws-rating">Rating</label>
                                <input onChange={(event) => setBookInfo((prev) => ({ ...prev, rating: event.target.value }))}
                                    required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input onChange={(event) => setBookInfo((prev) => ({ ...prev, featured: event.target.checked }))}
                                id="lws-featured" type="checkbox" name="true" className="w-4 h-4" />
                            <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="lws-submit">Add Book</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddBook;