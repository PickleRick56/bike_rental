import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>
                    {" "}
                    <img
                        className="my_slick_style_img"
                        src="https://oinfo.ru/img/gallery/2019/07/Veloprokat4-tn2.jpg"
                        alt="изображение велосипедов"
                    />
                </h3>
            </div>
            <div>
                <h3>
                    {" "}
                    <img
                        className="my_slick_style_img"
                        src="https://oinfo.ru/img/gallery/2019/07/Veloprokat4-tn2.jpg"
                        alt="изображение велосипедов"
                    />
                </h3>
            </div>
            <div>
                <h3>
                    {" "}
                    <img
                        className="my_slick_style_img"
                        src="https://oinfo.ru/img/gallery/2019/07/Veloprokat4-tn2.jpg"
                        alt="изображение велосипедов"
                    />
                </h3>
            </div>
            <div>
                <h3>
                    {" "}
                    <img
                        className="my_slick_style_img"
                        src="https://oinfo.ru/img/gallery/2019/07/Veloprokat4-tn2.jpg"
                        alt="изображение велосипедов"
                    />
                </h3>
            </div>
            <div>
                <h3>
                    {" "}
                    <img
                        className="my_slick_style_img"
                        src="https://oinfo.ru/img/gallery/2019/07/Veloprokat4-tn2.jpg"
                        alt="изображение велосипедов"
                    />
                </h3>
            </div>
            <div>
                <h3>
                    {" "}
                    <img
                        className="my_slick_style_img"
                        src="https://oinfo.ru/img/gallery/2019/07/Veloprokat4-tn2.jpg"
                        alt="изображение велосипедов"
                    />
                </h3>
            </div>
        </Slider>
    );
}
