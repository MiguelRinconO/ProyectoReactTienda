import { useSelector } from "react-redux";
import Layout from "../Layouts/Layouts";
import CartItem from "../components/cartitem";
import { useState } from "react";
import Swal from "sweetalert2";


export default function PlaceOrder (){

    const cart = useSelector((state)=>state.cartReducer)
    const {cartItems,shippingAddress} = cart;

    //subtotal
const addDecimal= (num) => {
    return (Math.round(num*100)/100).toFixed(0)
}
    //subtotal price
    const subtotal = addDecimal(cartItems.reduce((total,item)=>total+item.qty*item.price, 0))
    const taxPrice = addDecimal(Number(0.15*subtotal).toFixed(0))
    const shippingPrice= addDecimal(subtotal > 100 ? 0 : 20)

    //total

    const total = (Number(subtotal)+Number(taxPrice)+Number(shippingPrice)).toFixed(0)


    //shipping adress

    const [address,setaddress] =useState(shippingAddress.address)
    const [city,setcity] =useState(shippingAddress.city)
    const [postcode,setpostalcode] =useState(shippingAddress.postalCode)
    const [country,setCountry] =useState(shippingAddress.country)

    const handleClick = ()=>{
        Swal.fire({
            title: "Seguro que deseas realizar la orden?",
            text: "Recuerda que no hay devoluciones!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Comprar ahora!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Compra realizada con exito!",
                text: "Esperamos y disfrutes tu producto",
                icon: "success"
              });
            }
          });
    }
    
    return(
        <>
        <Layout>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Order Summary</h2>
        
        <p className="leading-relaxed mb-4">
            <CartItem cartItems={cartItems}></CartItem>
        </p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Subtotal</span>
          <span className="ml-auto text-gray-900">${subtotal}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Tax</span>
          <span className="ml-auto text-gray-900">${taxPrice}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Shipping Price</span>
          <span className="ml-auto text-gray-900">${shippingPrice}</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${total}</span>
          
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Shipping Address</h2>
      
      <div className="relative mb-4">
        <label for="text" className="leading-7 text-sm text-gray-600">Address</label>
        <input type="text" id="address" name="address"
        value={address}
        onChange={(e)=>setaddress(e.target.value)}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-4">
        <label for="text" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city"
        value={city}
        onChange={(e)=>setcity(e.target.value)} 
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-4">
        <label for="text" className="leading-7 text-sm text-gray-600">Postalcode</label>
        <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-4">
        <label for="text" className="leading-7 text-sm text-gray-600">Country</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      <button onClick={handleClick} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
    </div>

    </div>
  </div>
</section>
</Layout>
        </>
    )
}