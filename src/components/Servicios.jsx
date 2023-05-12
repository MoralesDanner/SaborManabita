import sportada_disenio from "../assets/servicios/sportada_disenio.jpg";



const Servicios = () => {
    return (
        <div className="font-Roboto text-white">
            <div id="serviciosDisenio">
                <div className="w-full">
                    <img src={sportada_disenio} alt="slide_image" />
                </div>
                <div className="relative w-full h-40 flex items-center justify-center bg-[#ed2b2b]">
                    <p className="text-[40px] md:text-5xl">PLATOS A LA CARTA</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-16 my-16 lg:mx-36 xl:mx-44">
                    <div className=" flex flex-col justify-self-center my-5 py-5">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%] hover:w-[36vw] transition-all duration-500 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black  pb-8">ARROCES</h2>
                            <table className="table-auto m-auto text-left text-[18px] lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Arroz marinero</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>Arroz mixto</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Arroz con concha</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>Arroz con camarón</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Arroz con pollo</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 py-5">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black pb-8">SOPAS</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Cangrejada</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>Encocado de cangrejo</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Encocado de camarón</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>Encocado de pescado</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Maremoto</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Encebollado</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Encebollado mixto</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Sopa marinera</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 h-auto lg:w-[35vw] lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black pb-8">CEVICHES</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Ceviche de camarón</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>Ceviche de concha</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Ceviche de calamar</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>Ceviche de pezcado</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Ceviche mixto</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black pb-8">VARIOS</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Camarón reventado</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>Camarón apanado</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Bandera</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>Camarón al ajillo</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Corvina al vapor</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Corvina frita</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Chicharrón de pescado</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 lg:w-[35vw] h-auto lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black pb-8">VARIOS</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Cazuela de mariscos</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Chaulafán</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Carne apanada</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Churrasco</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Carne a la plancha</td>
                                    <td>$58</td>
                                    </tr>
                                    <tr>
                                    <td>Chuleta a la plancha</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 h-auto lg:w-[35vw] lg:h-[35vw] bg-[url('./assets/servicios/simg_2.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black pb-8">BEBIDAS</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Jarra de jugo</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>Michelada</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Gaseosa de litro</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>Jugo natural</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Gaseosa personal</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-self-center my-5 ">
                        <div className="py-[10%] backdrop-blur-sm bg-[#ed2b2bb0]  border-2 border-[#ffffff80] shadow-lg rounded-2xl w-80 h-auto lg:w-[35vw] lg:h-[35vw] bg-[url('./assets/servicios/simg_1.png')] bg-[length:100%_100%]  hover:w-[36vw] transition-all duration-200 hover:shadow-xl hover:shadow-gray-900" data-aos="zoom-in">
                            <h2 className="text-4xl text-black pb-8">PORCIONES</h2>
                            <table className="table-auto m-auto text-left text-[18px]    lg:text-2xl border-separate border-spacing-x-14 border-spacing-y-3">
                                <tbody>
                                    <tr>
                                    <td>Porción de arroz</td>
                                    <td>$13</td>
                                    </tr>
                                    <tr>
                                    <td>Taza de café</td>
                                    <td>$30</td>
                                    </tr>
                                    <tr>
                                    <td>Porción de camarón cocinado</td>
                                    <td>$8</td>
                                    </tr>
                                    <tr>
                                    <td>Porción de camarón apanado</td>
                                    <td>$20</td>
                                    </tr>
                                    <tr>
                                    <td>Porción de patacones</td>
                                    <td>$58</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servicios