/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import StarRating from "./rating";
import { useDeleteBookMutation } from "../Redux/Features/Api/apiSlice";
import { useDispatch } from "react-redux";
import { deleteBook } from "../Redux/Features/booksSlice";

// eslint-disable-next-line react/prop-types
function BookCard({ book }) {
    const { id, name, author, thumbnail, price, rating, featured } = book;
    // const [deleteBook, { data }] = useDeleteBookMutation();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div className="book-card">
            <img className="h-[240px] w-[170px] object-cover"
                src={thumbnail && thumbnail} alt="book" />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
                <div className="flex items-center justify-between">
                    <span className={`lws-badge ${featured ? "bg-yellow-400 text-black border-yellow-400" : "border-black"}`}>Featured</span>
                    <div className="text-gray-500 space-x-2 flex">
                        <Link className="lws-edit transition-all duration-500 hover:text-green-500" 
                        to={`/editbook/${id}`}>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </Link>
                        <button onClick={() => handleDelete(id)} className="lws-deleteBook" >
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="space-y-2 mt-4 h-full">
                    <h4 className="lws-book-name">{name}</h4>
                    <p className="lws-author">{author}</p>
                    <StarRating rating={rating} />
                    <p className="lws-price">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard;