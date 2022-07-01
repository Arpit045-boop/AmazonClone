import React from 'react'
import Header from './Header'
import '../Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'
import Carousal from './Carousal'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Carousal />
                {/* Product id, title, price, rating, image  */}
                <div className='row first_row'>
                    <div className='col-lg-3 caro_product '>
                        <h5>Up to 70% off || Style for Men</h5>
                        <img className="caro_img" src="https://threadcurve.com/wp-content/uploads/2020/06/types-of-clothing-June82020-1-min.jpg" />
                        <p>Clothing</p>
                    </div>
                    <div className=' col-lg-3 caro_product'>
                        <h5>Top Picks For Your Home</h5>
                        <img className="caro_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" />
                        <p>ACs</p>
                    </div>
                    <div className=' col-lg-3 caro_product'>
                        <h5>Up to 70% off || Clearance store</h5>
                        <img className="caro_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" />
                    </div>
                    <div className='col-lg-3 caro_product_signin '>
                        <h5>Sign in for your best<br />experience</h5>
                        <Link to='/login'>
                            <button className='btn btn-danger'>Sign in Securely</button>
                        </Link>
                    </div>
                </div>
                <div className='second_row row'>
                    <div className='col-lg-3 caro_product'>
                        <h5>Car & bike essentials | Up to 60% off</h5>
                        <img className="caro_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" />
                        <p>Cleaning Accessories</p>
                    </div>
                    <div className='col-lg-3 caro_product'>
                        <h5>Shop by Category</h5>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <img className="cate_img" src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg' />
                                <p>Fresh</p>
                            </div>
                            <div className='col-lg-6'>
                                <img className="cate_img" src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg' />
                                <p>Mobiles</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <img className="cate_img" src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg' />
                                <p>Fashion</p>
                            </div>
                            <div className='col-lg-6'>
                                <img className="cate_img" src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg' />
                                <p>Electronic</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-lg-3 caro_product'>
                        <h5>Revamp your home in style</h5>
                        <img className="caro_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg" />
                        <p>Lighting Solutions</p>
                    </div>
                    <div className=' col-lg-3 caro_product'>
                        <h5>Up to 70% off | Styles for Women</h5>
                        <img className="caro_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" />
                        <span>Fashion Jewellery</span>
                    </div>

                </div>

                <div className='third_row row'>
                    <h5>Today's Deals</h5>
                    <div className='today_deal col-lg-2'>
                        <Product
                            id={1}
                            price={12000}
                            image={"https://m.media-amazon.com/images/I/2186SkfNe+L._AC_SY200_.jpg"}
                        />
                    </div>
                    <div className='today_deal col-lg-2'>
                        <Product
                            id={2}
                            price={11000}
                            image={"https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg"}
                        />
                    </div>
                    <div className='today_deal col-lg-2'>
                        <Product
                            id={3}
                            price={2000}
                            image={"https://m.media-amazon.com/images/I/41+sLJHyA8L._AC_SY200_.jpg"}
                        />
                    </div>
                    <div className='today_deal col-lg-2'>
                        <Product
                            id={4}
                            // title={"Arpit: The Master of Full stack development"}
                            price={1000}
                            // rating={5}
                            image={"https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SY200_.jpg"}
                        />
                    </div>
                    <div className='today_deal col-lg-2'>
                        <Product
                            id={5}
                            // title={"Arpit: The Master of Full stack development"}
                            price={6000}
                            // rating={5}
                            image={"https://m.media-amazon.com/images/I/41QhpQamQyL._AC_SY200_.jpg"}
                        />
                    </div>
                    <div className='today_deal col-lg-2'>
                        <Product
                            id={6}
                            // title={"Arpit: The Master of Full stack development"}
                            price={3000}
                            // rating={5}
                            image={"https://m.media-amazon.com/images/I/315-C8hhEJL._AC_SY200_.jpg"}
                        />
                    </div>
                </div>


                <div className='row'>
                    <div className='col-lg-4'>
                        <Product
                            id={7}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <Product
                            id={8}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <Product
                            id={9}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <Product
                            id={10}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <Product
                            id={11}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <Product
                            id={12}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Product
                            id={13}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                    <div className='col-lg-6'>
                        <Product
                            id={14}
                            title={"Arpit: The Master of Full stack development"}
                            price={12000}
                            rating={5}
                            image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home