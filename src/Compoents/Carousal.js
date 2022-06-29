import React from 'react'

function Carousal() {
    return (
        <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="home_img carousel-item active">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" className="d-block w-100" alt="banner1" />
                </div>
                <div className="home_img carousel-item">
                    <img src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" className="d-block w-100" alt="banner2" />
                </div>
                <div className="home_img carousel-item">
                    <img src="https://libertyhousenh.org/wp-content/uploads/2020/10/Amazon-smile-web-banner.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </div>
    )
}

export default Carousal


