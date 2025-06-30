import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import banner1 from '../../public/assets/banner/banner1.png'
import banner2 from '../../public/assets/banner/banner2.png'
import banner3 from '../../public/assets/banner/banner3.png'
import marquee1 from '../../public/assets/brands/amazon_vector.png'
import marquee2 from '../../public/assets/brands/amazon.png'
import marquee3 from '../../public/assets/brands/casio.png'
import marquee4 from '../../public/assets/brands/moonstar.png'
import marquee5 from '../../public/assets/brands/start-people.png'
import marquee6 from '../../public/assets/brands/start.png'
// customer-top.png importing 
import customer_top_img from "../../public/assets/customer-top.png"
// Import Swiper styles
import "swiper/css";
import { CiDeliveryTruck } from "react-icons/ci";
import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//  this is for AOS


const howItWorksCards = [
    { title: "Booking Pick & Drop", desc: "From personal packages to business shipments — we deliver on time, every time." },
    { title: "Cash On Delivery", desc: "From personal packages to business shipments — we deliver on time, every time." },
    { title: "Delivery Hub", desc: "From personal packages to business shipments — we deliver on time, every time." },
    { title: "Booking SME & Corporate", desc: "From personal packages to business shipments — we deliver on time, every time." },
];

const testimonials = [
    {
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        name: 'Awlad Hossin',
        title: 'Senior Product Designer',
        avatar: '', // You can add avatar image path if needed
    },
    {
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        name: 'Rasel Ahamed',
        title: 'CTO',
        avatar: '',
    },
    {
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        name: 'Nasir Uddin',
        title: 'CEO',
        avatar: '',
    },
    // Add more testimonials as needed
];

// FAQ data
const faqs = [
    {
        question: 'How does this posture corrector work?',
        answer:
            `A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.`,
    },
    {
        question: 'Is it suitable for all ages and body types?',
        answer:
            `Yes, most posture correctors are designed to be adjustable and can fit a wide range of ages and body types. However, it's always best to check the product specifications for sizing information to ensure the best fit and comfort.`,
    },
    {
        question: 'Does it really help with back pain and posture improvement?',
        answer:
            `Yes, when used correctly and consistently, a posture corrector can help relieve back pain and improve posture by training your muscles and spine to maintain proper alignment. For best results, combine its use with regular exercise and stretching.`,
    },
    {
        question: 'Does it have smart features like vibration alerts?',
        answer:
            `Some advanced posture correctors come with smart features such as vibration alerts that notify you when you slouch or lose proper posture. Please check the product description to see if these features are included.`,
    },
    {
        question: 'How will I be notified when the product is back in stock?',
        answer:
            `You can sign up for restock notifications on our website. Once the product is available again, you will receive an email or SMS notification so you can place your order promptly.`,
    },
];

const Home = () => {
    const swiperRef = useRef(null);
    const [openIdx, setOpenIdx] = React.useState(0);

    useEffect(() => {
        Aos.init({
            offset: 120,     // offset (in px) from the original trigger point
            delay: 200,      // values from 0 to 3000, with step 50ms
            duration: 1000,  // animation duration
            easing: "ease",  // default easing
            once: false,     // whether animation should happen only once
        })
    }, [])

    return (
        <div>
            {/* this is slider for this application */}
            <section className='w-full'>
                <Swiper
                    className="mySwiper "
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide><img className='w-full' src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src={banner3} alt="" /></SwiperSlide>
                </Swiper>
            </section>
            {/* this is for how it's works */}
            <section className=" py-10">
                <div data-aos="fade-down" className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#184C4B] mb-8">How it Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {howItWorksCards.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-3xl shadow p-8 flex flex-col items-start">
                                <CiDeliveryTruck size={56} />
                                <h3 className="font-bold text-lg text-[#184C4B] mt-4 mb-2">{card.title}</h3>
                                <p className="text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* this section for our service */}
            <section data-aos="zoom-in" className="bg-[#114143] rounded-3xl py-14 px-2 my-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-white text-3xl font-bold mb-2">Our Services</h2>
                    <p className="text-white/80 mb-10 max-w-2xl mx-auto">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="rounded-2xl p-7 flex flex-col items-center text-center shadow bg-white hover:bg-[#caeb66] transition-colors duration-200 cursor-pointer">
                            <img src="/public/assets/service.png" alt="icon" className="mb-4 w-14 h-14" />
                            <h3 className="font-bold text-lg mb-2 text-[#184C4B]">Express & Standard Delivery</h3>
                            <p className="text-base text-gray-700">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                        </div>
                        {/* Card 2 (highlighted) */}
                        <div className="rounded-2xl p-7 flex flex-col items-center text-center shadow bg-white hover:bg-[#caeb66] transition-colors duration-200 cursor-pointer">
                            <img src="/public/assets/service.png" alt="icon" className="mb-4 w-14 h-14" />
                            <h3 className="font-bold text-lg mb-2 text-[#184C4B]">Nationwide Delivery</h3>
                            <p className="text-base text-[#184C4B]">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="rounded-2xl p-7 flex flex-col items-center text-center shadow bg-white hover:bg-[#caeb66] transition-colors duration-200 cursor-pointer">
                            <img src="/public/assets/service.png" alt="icon" className="mb-4 w-14 h-14" />
                            <h3 className="font-bold text-lg mb-2 text-[#184C4B]">Fulfillment Solution</h3>
                            <p className="text-base text-gray-700">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="rounded-2xl p-7 flex flex-col items-center text-center shadow bg-white hover:bg-[#caeb66] transition-colors duration-200 cursor-pointer">
                            <img src="/public/assets/service.png" alt="icon" className="mb-4 w-14 h-14" />
                            <h3 className="font-bold text-lg mb-2 text-[#184C4B]">Cash on Home Delivery</h3>
                            <p className="text-base text-gray-700">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                        </div>
                        {/* Card 5 */}
                        <div className="rounded-2xl p-7 flex flex-col items-center text-center shadow bg-white hover:bg-[#caeb66] transition-colors duration-200 cursor-pointer">
                            <img src="/public/assets/service.png" alt="icon" className="mb-4 w-14 h-14" />
                            <h3 className="font-bold text-lg mb-2 text-[#184C4B]">Corporate Service / Contract In Logistics</h3>
                            <p className="text-base text-gray-700">Customized corporate services which includes warehouse and inventory management support.</p>
                        </div>
                        {/* Card 6 */}
                        <div className="rounded-2xl p-7 flex flex-col items-center text-center shadow bg-white hover:bg-[#caeb66] transition-colors duration-200 cursor-pointer">
                            <img src="/public/assets/service.png" alt="icon" className="mb-4 w-14 h-14" />
                            <h3 className="font-bold text-lg mb-2 text-[#184C4B]">Parcel Return</h3>
                            <p className="text-base text-gray-700">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* this section for We've helped thousands of sales teams  */}
            <section className="my-10">
                <div className="text-[28px] font-[800] mb-10 text-center">
                    We've helped thousands of sales teams
                </div>
                <Marquee>
                    <div className="flex justify-center gap-[120px] items-center">
                        <img src={marquee1} alt="" />
                        <img src={marquee2} alt="" />
                        <img src={marquee3} alt="" />
                        <img src={marquee4} alt="" />
                        <img src={marquee5} alt="" />
                        <img src={marquee6} alt="" />
                    </div>
                </Marquee>
            </section>
            {/* this section for us extra benefits */}
            <section className=" py-10 ">
                <div className="max-w-6xl mx-auto flex flex-col gap-8 border-y border-dashed py-10">
                    {/* Card 1 */}
                    <div data-aos="fade-left" className="bg-white rounded-3xl flex flex-col md:flex-row items-center p-8 shadow gap-6">
                        <img src="../../public/assets/live-tracking.png" alt="" className="w-48 h-40 object-contain" />
                        <div className="hidden md:block h-32 border-r-2 border-dashed border-[#184C4B] mx-6"></div>
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-[#184C4B] mb-2">Live Parcel Tracking</h3>
                            <p className="text-gray-700">
                                Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div data-aos="fade-right" className="bg-white rounded-3xl flex flex-col md:flex-row items-center p-8 shadow gap-6">
                        <img src="../../public/assets/tiny-deliveryman.png" alt="" className="w-48 h-40 object-contain" />
                        <div className="hidden md:block h-32 border-r-2 border-dashed border-[#184C4B] mx-6"></div>
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-[#184C4B] mb-2">100% Safe Delivery</h3>
                            <p className="text-gray-700">
                                We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div data-aos="fade-up-right" className="bg-white rounded-3xl flex flex-col md:flex-row items-center p-8 shadow gap-6">
                        <img src="../../public/assets/safe-delivery.png" alt="" className="w-48 h-40 object-contain" />
                        <div className="hidden md:block h-32 border-r-2 border-dashed border-[#184C4B] mx-6"></div>
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-[#184C4B] mb-2">24/7 Call Center Support</h3>
                            <p className="text-gray-700">
                                Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* this section for Merchant and Customer Satisfaction is Our First Priority */}
            <section
                data-aos="zoom-in-down"
                style={{
                    backgroundImage: `url("../../public/assets/be-a-merchant-bg.png")`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat'
                }}
                className=" bg-[#03373d] rounded-3xl max-w-6xl mx-auto px-8 py-12 mb-10 relative overflow-hidden flex flex-col md:flex-row items-center"
            >
                <div className="flex-1 z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Merchant and Customer Satisfaction<br />is Our First Priority
                    </h2>
                    <p className="text-white/90 mb-8 max-w-xl">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-[#caeb66] text-[#184C4B] font-semibold rounded-full px-8 py-3 text-lg border-2 border-[#caeb66] hover:bg-[#b6d95a] transition">
                            Become a Merchant
                        </button>
                        <button className="bg-transparent text-[#caeb66] font-semibold rounded-full px-8 py-3 text-lg border-2 border-[#caeb66] hover:bg-[#caeb66] hover:text-[#184C4B] transition">
                            Earn with Profast Courier
                        </button>
                    </div>
                </div>
                <div>
                    <img src="../../public/assets/location-merchant.png" alt="" />
                </div>
            </section>
            {/* this seciton for What our customers are sayings */}
            <section className="my-10">
                <div className="flex flex-col justify-center items-center ">
                    <div>
                        <img src={customer_top_img} alt="" className="w-32 sm:w-40 md:w-48 mx-auto" />
                    </div>
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-center mt-4">What our customers are sayings</h2>
                    <p className="text-center text-sm sm:text-base max-w-md mx-auto">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
                </div>
                {/* Testimonial Slider */}
                <div className=" max-w-4xl mx-auto mt-8 sm:mt-10 px-1 sm:px-2  rounded-2xl sm:rounded-3xl py-6 sm:py-10 relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onSwiper={swiper => (swiperRef.current = swiper)}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={12}
                        breakpoints={{
                            480: { slidesPerView: 1.1, spaceBetween: 16 },
                            640: { slidesPerView: 1.3, spaceBetween: 20 },
                            768: { slidesPerView: 1.5, spaceBetween: 24 },
                            1024: { slidesPerView: 2.5, spaceBetween: 24 },
                        }}
                        pagination={{
                            el: '.custom-swiper-pagination',
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class='${className} inline-block w-2 h-2 rounded-full bg-[#d1d5db] mx-1'></span>`;
                            },
                        }}
                        navigation={false}
                        className="testimonial-swiper"
                        style={{ paddingBottom: '60px' }}
                        slideActiveClass="testimonial-slide-active"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx} className="testimonial-slide  transition-all duration-300 px-1 sm:px-2">
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-8 mx-1 sm:mx-2 flex flex-col h-full justify-between min-h-[220px] sm:min-h-[280px] relative">
                                    <FaQuoteLeft className="text-2xl sm:text-3xl text-[#6ad3c7] mb-2" />
                                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">{t.text}</p>
                                    <div className="border-b border-dotted border-[#6ad3c7] mb-3 sm:mb-4"></div>
                                    <div className="flex items-center gap-2 sm:gap-3 mt-2">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#184C4B] flex items-center justify-center text-white font-bold text-base sm:text-lg">
                                            {t.avatar ? <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" /> : t.name.charAt(0)}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-[#184C4B] text-sm sm:text-base">{t.name}</div>
                                            <div className="text-gray-500 text-xs sm:text-sm">{t.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom navigation and pagination below cards */}
                    <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8 absolute left-1/2 -translate-x-1/2 w-auto bottom-2 sm:bottom-4">
                        <button
                            className="p-4 cursor-pointer sm:w-10 sm:h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#184C4B] text-base sm:text-lg shadow hover:bg-gray-100 transition"
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="Previous"
                        >
                            <FaArrowLeft />
                        </button>
                        <div className="custom-swiper-pagination flex items-center"></div>
                        <button
                            className="p-4 cursor-pointer sm:w-10 sm:h-10 rounded-full bg-[#caeb66] flex items-center justify-center text-[#184C4B] text-base sm:text-lg shadow hover:bg-[#b6d95a] transition"
                            onClick={() => swiperRef.current?.slideNext()}
                            aria-label="Next"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>
            {/* this section for Frequently Asked Question (FAQ) */}
            <section className="py-10 px-2">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#184C4B] mb-2">Frequently Asked Question (FAQ)</h2>
                    <p className="text-center text-gray-600 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                    {/* FAQ Accordion */}
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-xl border ${openIdx === idx ? 'border-[#6ad3c7]' : 'border-transparent'} transition-all`}
                            >
                                <button
                                    className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-[#184C4B] ${openIdx === idx ? 'bg-[#e6f6f4]' : ''}`}
                                    onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
                                >
                                    <span>{faq.question}</span>
                                    <FaChevronDown className={`ml-2 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {openIdx === idx && faq.answer && (
                                    <div className="px-6 pb-4 pt-1 text-gray-700 border-t border-[#b6e6e0] text-base">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Button */}
                    <div className="flex justify-center mt-8">
                        <button className="bg-[#caeb66] hover:bg-[#b6d95a] text-[#184C4B] font-semibold rounded-xl px-8 py-3 text-lg flex items-center gap-2 transition">
                            See More FAQ's <FiArrowUpRight className="ml-1 text-xl" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Home