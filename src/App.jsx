import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Books from './Components/Books';
import { featuredButton } from './Redux/Features/bookSlice';

function App() {
  const { isFeatured } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  return (
    <>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button onClick={() => dispatch(featuredButton(false))}
                className={`lws-filter-btn ${isFeatured || "bg-green-600"}`}>All</button>
              <button className={`lws-filter-btn ${isFeatured && "bg-green-600"}`} onClick={() => dispatch(featuredButton(true))}>Featured</button>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Cards --> */}
            <Books />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
