import React from 'react'
import '../CSS/Home.css'
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="home">
             <Carousel className="home_image">
            <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/OHL_Discovery/GW/Monsoon_store/TallHero_1500x600._CB428946608_.jpg"
                alt="Banner_Amazon"
            />
             <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/ApparelP0/BOTM/SEP/PC/PC-Bunk-1500_ENG_I._CB405253515_.jpg"
                alt="Banner_Amazon"
            />
             
             <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_1500x600._CB406191253_.jpg"
                alt="Banner_Amazon"
            />
            </Carousel>
        <div className="home_row">
            <Product 
                id = "1234567"
                title = "Coffee maker | Jars"
                price = {11.97}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/71LB1AbsorL._AC_SS350_.jpg"
            />
            <Product 
                id = "1234567"
                title = "ASUS TUF Gaming FX505DY-BQ002T 15.6-inch FHD Laptop"
                price = {999}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/81VrYv5MQkL._AC_UY218_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
                id = "1234567"
                title = "Home Furnishing Made Easy"
                price = {222.97}
                rating = {5}
                image = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
                id = "1234567"
                title = "Boltt Fire-Boltt Xplode 1500 Portable Bluetooth Outdoor Speaker."
                price = {98.97}
                rating = {5}
                image ="https://m.media-amazon.com/images/I/71YXa2+AyNL._AC_UY218_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Masks, sanitizers & more"
                price = {22}
                rating = {5}
                image = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Office & Home Gaming Chairs"
                price = {11.97}
                rating = {5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
                id = "1234567"
                title = "Home Furnishing Made Easy"
                price = {222.97}
                rating = {4}
                image = "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            />
            </div>
        </div>
    )
}

export default Home
