import React from 'react'
import Header from './Header'
import '../Home.css'
import Product from './Product'
function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <img
                    className="home_img"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg"
                    alt=''
                />
                {/* Product id, title, price, rating, image  */}
                <div className='home_row'>
                    <Product
                        id={1}
                        title={"Arpit: The Master of Full stack development"}
                        price={12000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                    />
                    <Product
                        id={12}
                        title={"Arpit: The Master of Full stack development"}
                        price={12000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id={123}
                        title={"Arpit: The Master of Full stack development"}
                        price={12000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                    />
                    <Product
                        id={1234}
                        title={"Arpit: The Master of Full stack development"}
                        price={12000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                    />
                    <Product
                        id={12345}
                        title={"Arpit: The Master of Full stack development"}
                        price={12000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id={12346}
                        title={"Arpit: The Master of Full stack development"}
                        price={12000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/41bCSpeERKL._SX348_BO1,204,203,200_.jpg"}
                    />
                </div>
            </div>
        </>
    )
}

export default Home