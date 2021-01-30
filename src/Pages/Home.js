import React from 'react'
import '../CSS/Home.css'
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="home">
             <Carousel className="home_image" autoPlay={true} >
             <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"
                alt="Banner_Amazon"
            />
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
                title = "Apple iPhone X 64GB (Space Grey)"
                price = {44500}
                rating = {5}
                image = "data:image/webp;base64,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"
            />
            <Product 
                id = "1234567"
                title = "ASUS TUF Gaming FX505DY-BQ002T 15.6-inch FHD Laptop"
                price = {23000}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/81VrYv5MQkL._AC_UY218_.jpg"
            />
        </div>
           
            <div className="home_row">
            <Product 
                id = "1234567"
                title = "Boltt Fire-Boltt Xplode 1500 Portable Bluetooth Outdoor Speaker."
                price = {1600}
                rating = {3}
                image ="https://m.media-amazon.com/images/I/71YXa2+AyNL._AC_UY218_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Kadence A311, 6-strings Acoustic Guitar, Natural"
                price = {5600}
                rating = {4}
                image = "https://m.media-amazon.com/images/I/41ay9Hjmg9L._AC_UL320_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Office & Home Gaming Chairs"
                price = {2500}
                rating = {5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
            />
            </div>
            <div className="home_row_banner">
               <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Storage/XCM_Manual_1221589_1154216_IN_IN_Home_Storage1_BAU_2db16745_0197_4758_9f31_dff1033d139a_1500x250_null_en_IN._CB432545016_.jpg" alt="banner" />
            </div>
            <div className="home_row_scroll">
            <Product 
                id = "1234567"
                title = "Microfibre Reversible Comforter, Single (Ocean Blue and Mild Blue, 200 GSM)"
                price = {999}
                rating = {5}
                image ="https://m.media-amazon.com/images/I/819BsLiE54L._AC_UL320_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Wall Clock - Vintage Paneling (Silent Movement, Black Frame)"
                price = {1100}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/A1HCNkZ27GL._AC_UL320_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Solimo Collage Photo Frames (Set of 6, Wall Hanging),Black"
                price = {230}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/71n+5leh0aL._AC_UL320_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Laurels Shower Curtain"
                price = {260}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/81tPckiyShL._AC_UL320_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Office & Home Gaming Chairs"
                price = {2500}
                rating = {5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
            />
            </div>
            <div className="home_row_banner">
               <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/PowerbankDays/V247648343_WLA-Powerbank_Days_september_PC_LP_1242x450._SX1242_CB405446351_.jpg" alt="banner" />
            </div>
            <div className="home_row">
            <Product 
                id = "1234567"
                title = "OPPO A5 2020 (Dazzling White, 4GB RAM, 64GB Storage)"
                price = {23000}
                rating = {5}
                image ="https://m.media-amazon.com/images/I/51uYBXQHxxL._AC_UY218_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Apple AirPods Pro"
                price = {50000}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg"
            />
            <Product 
                id = "1234567"
                title = "Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
                price = {45999}
                rating = {5}
                image="https://m.media-amazon.com/images/I/71fp5ankbqL._AC_UL320_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
