import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import {GrView} from "react-icons/gr"
function card(props) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <section className=" cardSection">
                <div className="titlecontaner">
                    <div className="card-title">

                        <h5 className="card-subtitle mb-2 text-muted">
                            <a className="card-link text-primary" href="#">{props.data}</a>

                        </h5>
                    </div>
                    <div className="card-title">
                        <h5 className="card-subtitle mb-2 text-muted">
                            <a className="card-link text-primary" href="#">Read More</a>

                        </h5>
                    </div>
                </div>
                <div className="slick-card">
                    <Slider {...settings}>
                        <div>
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/img1.jpeg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">मेरी बगिया</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div >
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div >
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div >
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                        <div >
                            <Link href="/series">
                                <a><div className="card position-relative">

                                    <img className="card-img" src="./img/2.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">वादा रहा</h6>
                                        <p className="card-text">27509
                                            <span className="card-text"> बार देखा गया</span></p>
                                        <p className="card-text"><small className="text-muted">updated 3 mins ago</small></p>
                                    </div>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                        4.5 *

                                    </span>
                                </div></a>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </section>


        </>
    )
}

export default card;
