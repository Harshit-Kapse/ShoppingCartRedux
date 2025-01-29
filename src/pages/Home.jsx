import { useState, useEffect } from 'react'
import axios from "axios";
import Product from '../components/Product';
import "../../public/spinner.css";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API_URL);
      setPosts(data);
    } catch (err) {
      console.error("Error occurred while fetching data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      {
        loading ?
          (<div className="w-full h-[80vh] flex items-center justify-center">
            <div className="spinner"></div>
          </div>) :
          posts.length > 0 ?
            (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                posts.map(post => (<Product key={post.id} post={post} />))
              }
            </div>) :
            (<div className='flex justify-center items-center'>
              <p>No Data Found</p>
            </div>)
      }
    </div>
  )
}

export default Home