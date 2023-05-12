import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper';

import imagenInicioDisenio from "../assets/home/img_1.png";
import imagenInicioProg from "../assets/home/img_2.png";

import gif1 from "../assets/gif/icono_d_1.png";
import gif2 from "../assets/gif/icono_a_2.png";
import gif3 from "../assets/gif/icono_c_3.png";

import caroucel1 from "../assets/home/caroucel_1.png";
import caroucel2 from "../assets/home/caroucel_2.png";
import caroucel3 from "../assets/home/caroucel_3.png";


// import gif2 from "../assets/gif"
const Home = () => {

    return(
        <div className="font-Roboto ">
            <div id="carrucel" >
                <div className="w-full">
                <Swiper
                    effect={'coverflow'}
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    coverflowEffect={{
                    rotate: 100,
                    stretch: 60,
                    depth: 100,
                    modifier: 2.5,
                    }}     
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={caroucel1} alt="slide_image" className="h-[48vw] w-full "/></SwiperSlide>
                    <SwiperSlide><img src={caroucel2} alt="slide_image" className="h-[48vw] w-full"/></SwiperSlide>
                    <SwiperSlide><img src={caroucel3} alt="slide_image" className="h-[48vw] w-full"/></SwiperSlide>

                </Swiper>
                </div>
            </div>
            <div id="Disenio" className="place-self-center">

                <div className="shadow-2xl shadow-black bg-[#ed2b2b] text-center text-white">
                    <div className="w-full h-40 flex items-center justify-center">
                        <h1 className="text-[40px] md:text-5xl">SERVICIOS</h1>
                    </div>
                    <div className="grid grid-cols-3 ">
                        {/* <div>
                            <p>__________________________________ ______ __</p>
                        </div>
                        <div>
                            <p>__________________________________ ______ __</p>
                        </div>
                        <div>
                            <p>__________________________________ ______ __</p>
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 text-center mb-16 text-white">
                    <div className="backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 justify-self-center hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5">DESAYUNOS</h2>
                        <img src={gif1} alt="" className="self-center p-10 h-auto" />
                    </div>
                    <div className="backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 justify-self-center hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5">ALMUERZOS</h2>
                        <img src={gif2} alt="" className="self-center p-10 h-auto" />
                    </div>
                    <div className="backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg mx-5 flex flex-col w-80 rounded-2xl md:rounded-t-none md:w-60 lg:w-96 my-5 md:my-0 justify-self-center hover:shadow-xl hover:shadow-gray-900" data-aos="fade-down">
                        <h2 className="mt-5">PLATOS A LA CARTA</h2>
                        <img src={gif3} alt="" className="self-center p-10 h-auto" />
                    </div>
                </div>
            </div>
            <div>
                
            </div>

        </div>
        
    )
}
export default Home