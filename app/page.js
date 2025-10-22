"use client";


import React, { useState } from 'react';
import { ShoppingCart, Phone, Mail, MapPin, ChevronRight, Package, X } from 'lucide-react';

// Product data
const products = [
  {
    id: 1,
    name: "Mango Pickle",
    description: "Traditional spicy mango pickle made with authentic spices",
    image: "/images/products/mango.png",
    basePrice: 150,
    weights: [
      { value: "250g", price: 150 },
      { value: "500g", price: 280 },
      { value: "1kg", price: 520 }
    ]
  },
  {
    id: 2,
    name: "Lemon Pickle",
    description: "Tangy lemon pickle with perfect blend of spices",
    image: "/images/products/lemon.png",
    basePrice: 120,
    weights: [
      { value: "250g", price: 120 },
      { value: "500g", price: 220 },
      { value: "1kg", price: 400 }
    ]
  },
  {
    id: 3,
    name: "Indian gooseberry",
    description: "Delicious mix of Indian gooseberry in aromatic spices",
    image: "/images/products/amla.png",
    basePrice: 180,
    weights: [
      { value: "250g", price: 180 },
      { value: "500g", price: 340 },
      { value: "1kg", price: 650 }
    ]
  },
  {
    id: 4,
    name: "Green Chilli Pickle",
    description: "Hot and spicy green chilli pickle for spice lovers",
    image: "/images/products/mirchi.png",
    basePrice: 140,
    weights: [
      { value: "250g", price: 140 },
      { value: "500g", price: 260 },
      { value: "1kg", price: 480 }
    ]
  },
  {
    id: 5,
    name: "Turmeric Pickle",
    description: "Aromatic Turmeric pickle with rich flavor",
    image: "/images/products/haldi.png",
    basePrice: 160,
    weights: [
      { value: "250g", price: 160 },
      { value: "500g", price: 300 },
      { value: "1kg", price: 580 }
    ]
  },
  {
    id: 6,
    name: "Ginger Pickle",
    description: "Zesty ginger pickle with authentic taste",
    image: "/images/products/ginger.png",
    basePrice: 130,
    weights: [
      { value: "250g", price: 130 },
      { value: "500g", price: 240 },
      { value: "1kg", price: 450 }
    ]
  }
];

export default function PickleBusinessApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Product detail page
  const ProductDetail = ({ product }) => {
    const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
      const cartItem = {
        id: `${product.id}-${selectedWeight.value}-${Date.now()}`,
        productName: product.name,
        weight: selectedWeight.value,
        price: selectedWeight.price,
        quantity: quantity,
        total: selectedWeight.price * quantity
      };
      setCart([...cart, cartItem]);
      alert('Added to cart!');
      setCurrentPage('home');
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          <button 
            onClick={() => setCurrentPage('home')}
            className="mb-4 text-green-700 hover:text-green-900 flex items-center gap-2"
          >
            ← Back to Products
          </button>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-yellow-50 p-12 flex items-center justify-center">
                {/* <div className="text-9xl">{product.image}</div> */}
              </div>
              
<div className="md:w-1/2 p-6 md:p-8">
  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
  
  <div className="flex items-center gap-2 mb-4">
    <div className="flex text-amber-400">
      ⭐⭐⭐⭐⭐
    </div>
    <span className="text-sm text-gray-600">(4.8)</span>
    <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
      ✓ Assured Quality
    </span>
  </div>

  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
  
  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
    <p className="text-sm text-gray-700">
      🌿 <span className="font-semibold">Freshly Delivered Direct From</span> Laxmi Gruhaudyog
    </p>
    <p className="text-xs text-gray-600 mt-1">
      🥬 Suitable For Vegetarians | 🚫 No Artificial Preservatives
    </p>
  </div>
  
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-900 mb-3">
      Select Weight:
    </label>
    <div className="grid grid-cols-3 gap-3">
      {product.weights.map((weight) => (
        <button
          key={weight.value}
          onClick={() => setSelectedWeight(weight)}
          className={`p-3 rounded-xl border-2 transition-all ${
            selectedWeight.value === weight.value
              ? 'border-amber-600 bg-amber-50 shadow-md'
              : 'border-gray-200 hover:border-amber-300 hover:shadow'
          }`}
        >
          <div className={`font-bold text-sm ${
            selectedWeight.value === weight.value ? 'text-amber-700' : 'text-gray-700'
          }`}>
            {weight.value}
          </div>
          <div className={`text-lg font-bold mt-1 ${
            selectedWeight.value === weight.value ? 'text-amber-600' : 'text-gray-900'
          }`}>
            ₹{weight.price}
          </div>
        </button>
      ))}
    </div>
    <p className="text-xs text-gray-500 mt-2">
      (Total Weight / Volume: {selectedWeight.value})
    </p>
  </div>

  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-900 mb-3">
      Quantity:
    </label>
    <div className="flex items-center gap-4">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 font-bold text-gray-700 transition-colors"
      >
        -
      </button>
      <span className="text-2xl font-bold w-16 text-center text-gray-900">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 font-bold text-gray-700 transition-colors"
      >
        +
      </button>
    </div>
  </div>

  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-4 rounded-xl mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600 text-sm">Price:</span>
      <span className="text-lg font-semibold text-gray-900">₹{selectedWeight.price}</span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600 text-sm">Quantity:</span>
      <span className="text-lg font-semibold text-gray-900">× {quantity}</span>
    </div>
    <div className="border-t border-amber-300 pt-2 mt-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-bold">Total Amount:</span>
        <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          ₹{selectedWeight.price * quantity}
        </span>
      </div>
    </div>
  </div>

  <div className="space-y-3">
    <button
      onClick={addToCart}
      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      ADD TO CART
    </button>
    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
      QUICK BUY
    </button>
  </div>

  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <p className="text-sm text-gray-700 mb-2">
      <span className="font-semibold">🚚 Shipping Details:</span>
    </p>
    <p className="text-xs text-gray-600 mb-1">
      📍 Delivered across India
    </p>
    <p className="text-xs text-gray-600">
      ⏱️ Estimated Delivery: 3-5 business days
    </p>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cart and checkout
  const CartCheckout = () => {
    const [customerDetails, setCustomerDetails] = useState({
      name: '',
      phone: '',
      address: '',
      city: '',
      pincode: ''
    });

    const totalAmount = cart.reduce((sum, item) => sum + item.total, 0);

const sendToWhatsApp = () => {
  if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
    alert('Please fill all customer details');
    return;
  }

  // Calculate breakdown
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const delivery = 50.00;
  const gst = (subtotal + delivery) * 0.18;
  const totalPayable = subtotal + delivery + gst;

  let message = `*📦 New Pickle Order*\n\n`;
  
  message += `*👤 Customer Details:*\n`;
  message += `Name: ${customerDetails.name}\n`;
  message += `Phone: ${customerDetails.phone}\n`;
  message += `Address: ${customerDetails.address}, ${customerDetails.city} - ${customerDetails.pincode}\n\n`;
  
  message += `*🛒 Order Items:*\n`;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.productName}\n`;
    message += `   ${item.weight} × ${item.quantity} = ₹${item.total.toFixed(2)}\n`;
  });
  
  message += `\n*💰 Payment Summary:*\n`;
  message += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
  message += `Delivery: ₹${delivery.toFixed(2)}\n`;
  message += `GST (18%): ₹${gst.toFixed(2)}\n`;
  message += `───────────────\n`;
  message += `*Total Payable: ₹${totalPayable.toFixed(2)}*`;

  const whatsappNumber = '7798159828';
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setShowCart(false)}
            className="mb-4 text-green-700 hover:text-green-900 flex items-center gap-2"
          >
            ← Continue Shopping
          </button>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Order Summary */}
<div className="p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4 text-center text-black">Order Summary</h2>

  {cart.length === 0 ? (
    <p className="text-gray-500 text-center text-black">Your cart is empty</p>
  ) : (
    <>
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium text-black">{item.productName}</p>
            <p className="text-sm text-gray-600 text-black">
              {item.weight} × {item.quantity}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <p className="font-semibold text-black">₹{item.total}</p>
            <button
              onClick={() => setCart(cart.filter((_, i) => i !== index))}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      {/* Calculation Section */}
      <div className="border-t mt-4 pt-4 space-y-2 text-right text-black">
        <p>
          <span className="font-medium text-black">Subtotal:</span> ₹{totalAmount.toFixed(2)}
        </p>
        <p>
          <span className="font-medium text-black">Delivery:</span> ₹50.00
        </p>
        <p>
          <span className="font-medium text-black">GST (18%):</span> ₹
          {((totalAmount + 50) * 0.18).toFixed(2)}
        </p>

        <hr className="my-2" />

        <p className="text-lg font-bold text-black">
          Total Payable: ₹{((totalAmount + 50) * 1.18).toFixed(2)}
        </p>
      </div>
    </>
  )}
</div>


            {/* Customer Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">Delivery Details</h2>
              
              <div className="space-y-4">
                <div>
                 <label className="block text-sm font-semibold mb-1 text-black">Full Name *</label>
                  <input
                    type="text"
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-black">Phone Number *</label>
                  <input
                    type="tel"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-black">Delivery Address *</label>
                  <textarea
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    rows="3"
                    placeholder="Enter full address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-black">City</label>
                    <input
                      type="text"
                      value={customerDetails.city}
                      onChange={(e) => setCustomerDetails({...customerDetails, city: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-black">Pincode</label>
                    <input
                      type="text"
                      value={customerDetails.pincode}
                      onChange={(e) => setCustomerDetails({...customerDetails, pincode: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      placeholder="Pincode"
                    />
                  </div>
                </div>

                <button
                  onClick={sendToWhatsApp}
                  disabled={cart.length === 0}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Send Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Home page with product listing
  // const HomePage = () => (
  //   <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
  //     {/* Hero Section */}
  //     <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
  //       <div className="max-w-6xl mx-auto text-center">
  //         <h1 className="text-4xl md:text-6xl font-bold mb-4">🥒 Premium Pickles</h1>
  //         <p className="text-xl md:text-2xl opacity-90">Traditional taste, authentic flavors</p>
  //       </div>
  //     </div>

  //     {/* Products Grid */}
  //     <div className="max-w-6xl mx-auto p-4 md:p-6 py-12">
  //       <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {products.map((product) => (
  //           <div 
  //             key={product.id}
  //             onClick={() => {
  //               setSelectedProduct(product);
  //               setCurrentPage('product');
  //             }}
  //             className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
  //           >
  //             <div className="bg-gradient-to-br from-green-100 to-yellow-50 h-48 flex items-center justify-center">
  //               <span className="text-7xl">{product.image}</span>
  //             </div>
  //             <div className="p-5">
  //               <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
  //               <p className="text-gray-600 text-sm mb-3">{product.description}</p>
  //               <div className="flex items-center justify-between">
  //                 <span className="text-green-700 font-bold text-lg">From ₹{product.basePrice}</span>
  //                 <ChevronRight className="text-green-600" />
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

    const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselImages = [
      { id: 1, imageUrl: "/assets/carousel/slide1.png" },
      { id: 2, imageUrl: "/assets/carousel/slide2.png" },
      { id: 3, imageUrl: "/assets/carousel/slide3.png" }
    ];

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="bg-white/80 backdrop-blur-sm text-gray-900 py-4 md:py-8 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-30 md:h-96 mb-2">
              {carouselImages.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain rounded-xl bg-white"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 transition-all"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 md:p-3 transition-all"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="max-w-6xl mx-auto p-4 md:p-6 pt-2 pb-2">
          <h2 className="text-2xl md:text-3xl font-normal text-center mt-2 mb-5 text-gray-900 drop-shadow-lg">Our Products</h2>
         <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
  {products.map((product) => (
    <div 
      key={product.id}
      onClick={() => {
        setSelectedProduct(product);
        setCurrentPage('product');
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 relative group"
    >
      {/* Image Section with Gradient Background */}
      <div className="relative overflow-hidden h-48 md:h-64">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
          250g
        </div>
        <div className="relative z-10 h-full flex items-center justify-center p-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            ₹{product.basePrice}
          </span>
        </div>

        <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-2.5 md:py-3 rounded-xl transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          View Details
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  ))}
</div>
        </div>
      </div>
    );
  };

  // Contact page
  const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 p-4 md:p-6">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-8 text-black">Contact Us</h1>
    
    <div className="grid md:grid-cols-2 gap-6">
      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Phone className="text-green-700" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Phone</h3>
              <p className="text-gray-600">+91 7798159828</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Mail className="text-green-700" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Email</h3>
              <p className="text-gray-600">info@laxmiwani.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <MapPin className="text-green-700" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Address</h3>
              <p className="text-gray-600">
                123 Pickle Street<br />
                Nagpur, Maharashtra<br />
                India - 440001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h3 className="font-semibold text-lg text-black mb-4">Find Us Here</h3>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=20.744969,78.591433&hl=es;z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
  );

  // Privacy Policy page
  const PrivacyPage = () => (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p className="text-gray-700">
              We collect information that you provide to us when placing an order, including your name, 
              phone number, and delivery address. This information is used solely for order processing 
              and delivery purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
            <p className="text-gray-700">
              Your information is used to process and deliver your orders. We may contact you via phone 
              or WhatsApp regarding your order status and delivery updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Data Security</h2>
            <p className="text-gray-700">
              We take the security of your personal information seriously and implement appropriate 
              measures to protect it from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our privacy policy, please contact us at 
              info@premiumpickles.com or call +91 7798159828
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );



  const AboutUsPage = () => (
  <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Us</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <p className="text-gray-700 mb-4">
            Welcome to Laxmi Wani – where every jar tells a story of tradition, purity, and the timeless flavors of homemade goodness. We are a family-run business dedicated to preserving the authentic taste of traditional Indian pickles, crafted with love and passed down through generations.
          </p>

          <p className="text-gray-700 mb-4">
            At Laxmi Wani, we believe that great pickles begin with great ingredients. That's why we source only the freshest, chemical-free fruits and vegetables directly from organic farms. Every ingredient is handpicked to ensure premium quality and natural goodness in every bite.
          </p>

          <p className="text-gray-700 mb-4">
            Our aromatic spice blends are made from farm-fresh ingredients, ground to perfection. No artificial flavors, no preservatives – just pure, authentic taste that awakens your senses. We use cold-pressed oils, natural rock salt, and traditional spice combinations that have been perfected over generations.
          </p>

          <p className="text-gray-700 mb-4">
            Each pickle is prepared using time-honored family recipes that have been passed down through decades. We follow the same traditional methods our grandmothers used – sun-drying naturally to develop rich, complex flavors that you simply can't get from factory-produced alternatives. Every batch is prepared in small quantities with utmost care and hygiene, treating each jar as if we're making it for our own family.
          </p>

          <p className="text-gray-700 mb-4">
            What makes us special is our unwavering commitment to purity and authenticity. We use no chemicals or preservatives, only natural ingredients that are safe and healthy. Our pickles are handcrafted in small batches, ensuring consistency and freshness in every jar. We support local farmers by sourcing directly from organic farms, helping local communities thrive while bringing you the finest ingredients.
          </p>

          <p className="text-gray-700 mb-4">
            From the moment raw materials arrive at our kitchen to the final sealing of each jar, we maintain strict quality standards and traditional preparation methods. All our products are made in a clean, certified kitchen following all safety and hygiene standards.
          </p>

          <p className="text-gray-700">
            Experience the difference that organic ingredients, traditional methods, and genuine care can make. From our kitchen to your table, we bring the taste of tradition and the purity of nature. Taste the tradition. Taste the purity. Taste Laxmi Wani.
          </p>
        </div>
      </div>
    </div>
  );

  const WorkWithMePage = () => (
<div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Work With Us</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <p className="text-gray-700 mb-4">
            At Laxmi Wani, we're always looking to expand our reach and share our authentic, organic pickles with more people. We believe in building strong partnerships that benefit everyone involved while maintaining our commitment to quality and tradition.
          </p>

          <p className="text-gray-700 mb-4">
            Whether you're a retailer, distributor, restaurant owner, or organic food enthusiast, we welcome collaboration opportunities that align with our values of authenticity, quality, and traditional craftsmanship.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Partnership Opportunities</h2>
          
          <p className="text-gray-700 mb-4">
            We offer various collaboration models including retail partnerships, bulk orders for restaurants and hotels, distribution opportunities in new regions, private labeling for organic stores, and participation in food festivals and exhibitions. Our flexible approach ensures we can work together in a way that suits your business needs.
          </p>

          <p className="text-gray-700 mb-4">
            For retailers and organic stores, we provide attractive wholesale rates, consistent quality supply, marketing support materials, and product training for your staff. Our pickles are already loved by customers, and we'll help you introduce them to your clientele successfully.
          </p>

          <p className="text-gray-700 mb-4">
            Restaurants and hotels appreciate our authentic flavors that complement traditional and contemporary cuisines. We offer bulk packaging options, customized spice levels, seasonal variety selection, and reliable delivery schedules to meet your operational needs.
          </p>

          <p className="text-gray-700 mb-4">
            For distributors looking to add premium organic products to their portfolio, we provide exclusive territory rights in select areas, competitive pricing structures, comprehensive product catalogues, and ongoing support to help grow the business together.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Why Partner With Us</h2>

          <p className="text-gray-700 mb-4">
            Our products stand out in the market because they're made with 100% organic ingredients, prepared using traditional methods, contain no chemicals or preservatives, are handcrafted in small batches for consistent quality, and have a growing base of loyal customers who trust our brand.
          </p>

          <p className="text-gray-700 mb-4">
            We're committed to supporting our partners with reliable supply chains, transparent business practices, quality assurance at every step, responsive customer service, and fair pricing that allows healthy margins for everyone in the partnership.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Get In Touch</h2>

          <p className="text-gray-700 mb-4">
            If you're interested in working with Laxmi Wani, we'd love to hear from you. Contact us to discuss how we can collaborate and bring authentic, organic traditional pickles to more tables.
          </p>

          <p className="text-gray-700">
            Let's work together to preserve tradition, promote organic farming, and share the authentic taste of homemade goodness with the world. We look forward to building a successful partnership with you.
          </p>
        </div>
      </div>
    </div>
  );

  const PressPage = () => (
  <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Press</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <p className="text-gray-700 mb-4">
            Welcome to the Laxmi Gruhaudyog press page. We're a family-run business dedicated to preserving traditional Indian pickle-making methods while promoting organic farming and sustainable food practices. Our story is one of passion, authenticity, and a commitment to quality that spans generations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Our Story</h2>
          
          <p className="text-gray-700 mb-4">
            Laxmi Gruhaudyog was born from a desire to share authentic, homemade pickle recipes that have been passed down through our family for generations. In a world increasingly dominated by mass-produced foods with artificial preservatives, we recognized the need to bring back the pure, traditional taste of organic, handcrafted pickles. Every jar we produce represents our commitment to quality, tradition, and the support of local organic farmers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">What Makes Us Newsworthy</h2>

          <p className="text-gray-700 mb-4">
            We represent the growing movement toward organic, chemical-free food products in India. Our commitment to using only farm-fresh, organic ingredients and traditional preparation methods sets us apart in an industry often dominated by commercial production. We're helping preserve cultural food heritage while supporting sustainable agriculture and local farming communities.
          </p>

          <p className="text-gray-700 mb-4">
            Our products contain no artificial preservatives, colors, or chemicals – just pure, natural ingredients prepared the way our grandmothers made them. Each batch is handcrafted in small quantities, sun-dried naturally, and prepared using cold-pressed oils and traditional spice blends. This attention to detail and authenticity resonates with health-conscious consumers seeking genuine, traditional flavors.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Media Resources</h2>

          <p className="text-gray-700 mb-4">
            We're available for interviews, feature stories, product reviews, and food photography sessions. We can provide insights on traditional pickle-making techniques, the organic food movement in India, supporting local farmers, preserving culinary heritage, and the health benefits of chemical-free traditional foods.
          </p>

          <p className="text-gray-700 mb-4">
            For journalists and media professionals, we can arrange visits to see our traditional preparation process, provide samples for review and tasting, share detailed information about our organic sourcing, offer quotes and interviews about traditional food practices, and provide high-resolution product images and brand materials.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Press Inquiries</h2>

          <p className="text-gray-700 mb-4">
            We welcome all media inquiries and are happy to discuss our journey, our products, and our mission to preserve traditional food culture. Whether you're writing about organic food trends, traditional Indian cuisine, small business success stories, or sustainable food practices, we're here to share our story.
          </p>

          <p className="text-gray-700 mb-4">
            For press kits, product samples, interview requests, or any media-related questions, please reach out to us. We typically respond to all media inquiries within 24-48 hours and are flexible with scheduling to accommodate publication deadlines.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Our Mission</h2>

          <p className="text-gray-700">
            Beyond making delicious pickles, we're on a mission to prove that traditional food preparation methods have a vital place in modern life. We want to show that it's possible to run a successful business while staying true to authentic practices, supporting organic farming, and providing families with pure, healthy food options. Every jar of Laxmi Gruhaudyog pickle is a statement about quality, tradition, and the importance of knowing where your food comes from.
          </p>
        </div>
      </div>
    </div>
  );

  const ResourcesPage = () => (

    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Resources</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <p className="text-gray-700 mb-4">
            Welcome to our resource center. Here you'll find helpful information about storing and enjoying our traditional pickles, understanding the benefits of organic ingredients, and learning more about traditional pickle-making practices.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">How to Store Your Pickles</h2>
          
          <p className="text-gray-700 mb-4">
            Proper storage is essential to maintain the freshness and flavor of your pickles. Always store pickles in a cool, dry place away from direct sunlight. Once opened, keep the jar tightly sealed and use a clean, dry spoon each time to prevent contamination. A thin layer of oil on top helps preserve the pickles by preventing air exposure. Refrigeration is not necessary for our oil-based pickles, but it can extend their shelf life in hot and humid conditions.
          </p>

          <p className="text-gray-700 mb-4">
            Never use wet spoons or introduce moisture into the jar, as this can lead to spoilage. Make sure the lid is always closed tightly after use. If you notice any off smell or mold growth, discontinue use immediately. Our pickles are made without artificial preservatives, so proper handling ensures they stay fresh and delicious.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Serving Suggestions</h2>

          <p className="text-gray-700 mb-4">
            Our traditional pickles are incredibly versatile and can enhance many meals. They pair perfectly with dal-rice, roti, paratha, and other Indian breads. Add them as a side to your breakfast, lunch, or dinner for an instant flavor boost. Mix small amounts into yogurt or raita for a tangy twist. Use them as a condiment with dosa, idli, or upma. They also work wonderfully in sandwiches, wraps, and as a topping for chaats.
          </p>

          <p className="text-gray-700 mb-4">
            A little goes a long way with our pickles because they're packed with authentic flavors. Start with a small portion and adjust according to your taste preference. The oils and spices in the pickle can also be used to flavor curries and rice dishes, adding depth and complexity to your cooking.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Understanding Organic Ingredients</h2>

          <p className="text-gray-700 mb-4">
            Organic ingredients are grown without synthetic pesticides, chemical fertilizers, or genetically modified organisms. When you choose our organic pickles, you're choosing products free from harmful chemicals that can affect your health. Organic farming also supports soil health, biodiversity, and sustainable agriculture practices that benefit the environment.
          </p>

          <p className="text-gray-700 mb-4">
            The fruits, vegetables, and spices we use are sourced directly from certified organic farms. This means cleaner ingredients, better nutritional value, and authentic flavors that come from naturally grown produce. Organic ingredients may look slightly different from their commercial counterparts, but they offer superior taste and health benefits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Traditional Pickle-Making Process</h2>

          <p className="text-gray-700 mb-4">
            Traditional pickle-making is an art that requires patience, skill, and the right ingredients. The process begins with selecting the finest quality produce at peak ripeness. The ingredients are carefully washed, cut, and sun-dried to remove excess moisture. This natural drying process is crucial for preservation and flavor development.
          </p>

          <p className="text-gray-700 mb-4">
            Spices are freshly ground and blended according to time-tested recipes. Cold-pressed oils are used instead of refined oils to maintain nutritional value and authentic taste. The mixing and curing process follows specific techniques passed down through generations. Natural fermentation and aging in sunlight help develop the complex flavors that make traditional pickles so special.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Health Benefits</h2>

          <p className="text-gray-700 mb-4">
            Traditional pickles offer several health benefits when consumed in moderation. They aid digestion due to natural fermentation and beneficial bacteria. The spices used have anti-inflammatory and antioxidant properties. Pickles can stimulate appetite and enhance nutrient absorption from other foods. The natural oils used provide healthy fats, and the absence of artificial preservatives makes them a cleaner choice for your diet.
          </p>

          <p className="text-gray-700 mb-4">
            However, pickles should be enjoyed as a condiment rather than a main dish due to their salt and oil content. They work best as flavor enhancers that make your regular meals more enjoyable and satisfying.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Frequently Asked Questions</h2>

          <p className="text-gray-700 mb-4">
            Many customers ask about the white layer that sometimes forms on top of oil-based pickles. This is completely normal and is simply solidified oil that forms in cooler temperatures. It will melt when the jar is kept at room temperature. The shelf life of our pickles varies by variety but typically ranges from 6 to 12 months when stored properly in unopened jars. Once opened, consume within 2-3 months for best quality.
          </p>

          <p className="text-gray-700 mb-4">
            Our pickles are made in small batches, so slight variations in color, texture, and spice intensity are natural and indicate authentic handmade preparation. This is a sign of quality, not a defect. Each batch carries the unique character of its ingredients and the season in which it was made.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Supporting Traditional Food Culture</h2>

          <p className="text-gray-700">
            By choosing Laxmi Gruhaudyog pickles, you're not just buying a product – you're supporting the preservation of traditional food culture, encouraging organic farming practices, and helping small-scale artisanal food producers thrive. You're making a choice that benefits your health, supports local communities, and keeps culinary heritage alive for future generations. Thank you for being part of this journey with us.
          </p>
        </div>
      </div>
    </div>

  );

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100/90 backdrop-blur-sm border-b border-gray-200 relative z-50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => { setCurrentPage('about'); setShowCart(false); }} className="text-gray-600 hover:text-green-700 font-medium">ABOUT US</button>
              <button onClick={() => { setCurrentPage('contact'); setShowCart(false); }} className="text-gray-600 hover:text-green-700 font-medium">CONTACT</button>
              <button onClick={() => { setCurrentPage('work'); setShowCart(false); }} className="text-gray-600 hover:text-green-700 font-medium">WORK WITH US</button>
              <button onClick={() => { setCurrentPage('press'); setShowCart(false); }} className="text-gray-600 hover:text-green-700 font-medium">PRESS</button>
              <button onClick={() => { setCurrentPage('resources'); setShowCart(false); }} className="text-gray-600 hover:text-green-700 font-medium">RESOURCES</button>
            </div>
            <div className="flex items-center gap-4 ml-auto">
  {/* Facebook */}
  <a href="https://facebook.com/share/1BJ9NuKLcU" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition-colors">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
  
  {/* Instagram */}
  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition-colors">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
  
  {/* YouTube */}
  <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition-colors">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>
</div>
          </div>
        </div>
      </div>



      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div onClick={() => { setCurrentPage('home'); setShowCart(false); }} className="cursor-pointer flex items-center gap-3">
              <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto md:h-12" />
<span 
  className="text-2xl md:text-3xl text-gray-800" 
  style={{ fontFamily: 'var(--font-great-vibes)' }}
>
  Laxmi Wani
</span>

            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-gray-700 hover:text-green-700 font-semibold"
              >
                Products
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-gray-700 hover:text-green-700 font-semibold"
              >
                Contact
              </button>
              <button 
                onClick={() => setCurrentPage('privacy')}
                className="text-gray-700 hover:text-green-700 font-semibold"
              >
                Privacy
              </button>
            </div>

          <button 
  onClick={() => setShowCart(true)}
  className="relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group"
>
  <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
  <span className="hidden md:inline font-semibold">Cart</span>
  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse border-2 border-white">
      {cart.length}
    </span>
  )}
</button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex gap-4 mt-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-gray-700 hover:text-green-700 font-semibold text-sm"
            >
              Products
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-gray-700 hover:text-green-700 font-semibold text-sm"
            >
              Contact
            </button>
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="text-gray-700 hover:text-green-700 font-semibold text-sm"
            >
              Privacy
            </button>
          </div>
        </div>
      </nav>


      {/* c1 */}
      {/* Page Content */}
      {/* {showCart ? (
        <CartCheckout />
      ) : currentPage === 'home' ? (
        <HomePage />
      ) : currentPage === 'product' && selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'privacy' ? (
        <PrivacyPage />
      ) : null} */}   


        {/* Page Content */}
      {showCart ? (
        <CartCheckout onContinueShopping={() => { setShowCart(false); setCurrentPage('home'); }} />
      ) : currentPage === 'home' ? (
        <HomePage />
      ) : currentPage === 'product' && selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'about' ? (
        <AboutUsPage />
      ) : currentPage === 'work' ? (
        <WorkWithMePage />
      ) : currentPage === 'press' ? (
        <PressPage />
      ) : currentPage === 'resources' ? (
        <ResourcesPage />
      ) : currentPage === 'privacy' ? (
        <PrivacyPage />
      ) : null}

      

      {/* Footer */}
    <footer className="bg-gray-800 text-white py-8 mt-12 relative z-10">
  <div className="max-w-6xl mx-auto px-4 text-center">
   <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
  <button 
    onClick={() => { setCurrentPage('about'); setShowCart(false); }} 
    className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
  >
    ABOUT US
  </button>
  <button 
    onClick={() => { setCurrentPage('contact'); setShowCart(false); }} 
    className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
  >
    CONTACT
  </button>
  <button 
    onClick={() => { setCurrentPage('work'); setShowCart(false); }} 
    className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
  >
    WORK WITH ME
  </button>
  <button 
    onClick={() => { setCurrentPage('press'); setShowCart(false); }} 
    className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
  >
    PRESS
  </button>
  <button 
    onClick={() => { setCurrentPage('resources'); setShowCart(false); }} 
    className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
  >
    RESOURCES
  </button>
</div>
    <p className="mb-2">© 2024 Laxmi Wani. All rights reserved.</p>
    <p className="text-gray-400 text-sm">FSSAI Licence No: 21525057000969</p>
  </div>
</footer>

    </div>
  );
}