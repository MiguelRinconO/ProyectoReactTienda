import { useParams } from "react-router-dom";
import Layout from "../Layouts/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productAction } from "../Redux/Actions/Product";
import { addToCartAction } from "../Redux/Actions/Cart";

function ProductDetail() {

  const { id } = useParams()

  const dispatch = useDispatch()

  const productReducer = useSelector((state)=>state.productReducer)

  const {loading, error, product=[]} = productReducer

  useEffect(()=>{
    dispatch(productAction(id))
  },[dispatch, id])


  const [qty,setQty] = useState(1)
  const addToCartHanler = () =>{
    dispatch(addToCartAction(id,qty))
  }
  return (
      <Layout>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">{product.numReview} Reviews</span>
                  </span>
                  
                </div>
                <p className="leading-relaxed">
                  {product.description}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  

                  {
                    product.countInStock > 0 ? (
                      <div className="flex ml-6 items-center">
                    <span className="mr-3">Cantidad</span>
                    <div className="relative">
                      <select
                      value={qty} onChange={(e)=>setQty(parseInt(e.target.value,10))} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        
                      
                        {
                          [...Array(product.countInStock).keys()].map((x)=>(
                            <option key={x+1} value={x+1}>{x+1}</option>
                          ))}
                        
                        
                        
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                    ) : (
                      <></>
                    )
                  }
                  
                  
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  

                  {
                    product.countInStock > 0 ? (
                      <button onClick={addToCartHanler}  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Agregar al Carrito
                  </button>
                    ):(<><h1 className="cursor-not-allowed flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Agotados</h1></>)
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        </>)}
      </Layout>
  );
}

export default ProductDetail;

