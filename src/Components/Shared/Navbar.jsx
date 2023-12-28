import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { searchInput } from "../../Redux/Features/bookSlice";
import toast from "react-hot-toast";
function Navbar() {
    const dispatch = useDispatch();

    const handleForm = (event) => {
        event.preventDefault();
        if (event.target.searchBox.value) {
            dispatch(searchInput(""))
            toast.success("Targeted")
        }
        event.target.reset()

    }

    return (
        <nav className="py-4 2xl:px-6">
            <div className="container flex items-center justify-between">
                <img src={logo} width="150px" className="object-contain" />

                <ul className="hidden md:flex items-center space-x-6">
                    <Link className="font-semibold cursor-pointer" to="/" id="lws-bookStore">
                        <li>Book Store</li>
                    </Link>
                    <Link className="cursor-pointer" to="/addbook" id="lws-addBook">
                        <li>Add Book</li>
                    </Link>
                </ul>

                <form className="flex items-center relative" onSubmit={handleForm}>
                    <div className="group relative rounded-md bg-white">
                        <svg width="20" height="20" fill="currentColor"
                            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                            </path>
                        </svg>
                        <input onChange={(event) => dispatch(searchInput(event.target.value))}
                            name="searchBox"
                            type="text" placeholder="Filter books..." className="search cursor-text border-black" id="lws-search" />
                    </div>
                    <button type="submit"
                        className="absolute top-2 right-2 text-red-500 text-2xl cursor-pointer cur z-50"><RxCross1 /></button>
                </form>
            </div>
        </nav>

    )
}

export default Navbar;