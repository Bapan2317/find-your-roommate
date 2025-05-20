// import { useEffect, useRef } from 'react';

// const Banner = () => {
//     const carouselRef = useRef(null);
//     const images = [
//         "img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
//         "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
//         "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
//         "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
//     ];

//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             const carousel = carouselRef.current;
//             if (!carousel) return;

//             const slides = carousel.children;
//             index = (index + 1) % slides.length;

//             slides[index].scrollIntoView({ behavior: 'smooth' });
//         }, 6000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="relative min-h-screen overflow-hidden">
//             {/* Carousel background images */}
//             <div
//                 ref={carouselRef}
//                 className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
//             >
//                 {images.map((url, i) => (
//                     <div
//                         key={i}
//                         className="min-w-full min-h-screen bg-cover bg-center snap-start"
//                         style={{ backgroundImage: `url(${url})` }}
//                     />
//                 ))}
//             </div>

//             {/* Static overlay content */}
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="text-white text-center px-6">
//                     <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
//                     <p className="text-lg max-w-xl mx-auto">
//                         Discover features, explore services, and connect with our awesome community.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full min-h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


// import { useEffect<div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div >, useRef } from 'react';

// const Banner = () => {
//     const carouselRef = useRef(null);
//     const images = [
//         "https://styleberrycreative.com/wp-content/uploads/2024/01/styleberry-creative-interiors-san-antonio-tx-finding-high-quality-sofas-living-room-with-blue-showroom-sofa-by-large-window-modern-home-renovationd.png",
//         "https://styleberrycreative.com/wp-content/uploads/2024/01/styleberry-creative-interiors-san-antonio-tx-finding-high-quality-sofas-living-room-with-blue-showroom-sofa-by-large-window-modern-home-renovationd.png",
//         "https://styleberrycreative.com/wp-content/uploads/2024/01/styleberry-creative-interiors-san-antonio-tx-finding-high-quality-sofas-living-room-with-blue-showroom-sofa-by-large-window-modern-home-renovationd.png",
//     ];

//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             const carousel = carouselRef.current;
//             // if (!carousel) return;

//             const slides = carousel.children;
//             index = (index + 1) % slides.length;

//             slides[index].scrollIntoView({ behavior: 'smooth' });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="relative min-h-screen overflow-hidden">
//             {/* Carousel Background */}
//             <div
//                 ref={carouselRef}
//                 className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
//             >
//                 {images.map((url, i) => (
//                     <div
//                         key={i}
//                         className="min-w-full min-h-screen bg-cover bg-center snap-start"
//                         style={{ backgroundImage: `url(${url})` }}
//                     />
//                 ))}
//             </div>

//             {/* Static Content Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
//                 <div className="text-white text-center px-6 max-w-2xl">
//                     <h1 className="text-5xl font-bold mb-4">Welcome to Roommate Finder</h1>
//                     <p className="text-lg mb-6">
//                         Easily find your ideal roommate and place to stay. Browse listings, connect, and start living!
//                     </p>
//                     <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;






// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
//             <div className="carousel w-full min-h-screen">
//                 <div id="slide1" className="carousel-item relative w-full">
//                     <img
//                         src="https://styleberrycreative.com/wp-content/uploads/2024/01/styleberry-creative-interiors-san-antonio-tx-finding-high-quality-sofas-living-room-with-blue-showroom-sofa-by-large-window-modern-home-renovationd.png"
//                         className="h-full object-contain opacity-80 " />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide4" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide2" className="carousel-item relative w-full">
//                     <img
//                         src="https://www.homeconnectcinemas.com/images/blogs/blog-4.webp"
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide1" className="btn btn-circle">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide3" className="carousel-item relative w-full">
//                     <img
//                         src="https://www.qualico.com/wp-content/uploads/2024/11/Lakeview-Dawsons-Landing.crop_.jpg"
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide2" className="btn btn-circle">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide4" className="carousel-item relative w-full">
//                     <img
//                         src="https://www.renagecustomhomebuilders.com.au/images/resized/bb46e1eb1d005ed18e602b8c0c69a681_home-extensions-camberwell-hero_1316_770.jpg"
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide3" className="btn btn-circle">❮</a>
//                         <a href="#slide1" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
