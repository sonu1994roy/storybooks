import Link from 'next/link'
import React from 'react'
import Card from '../componate/card'
import {AiOutlineStar, AiOutlineWhatsApp,AiFillFacebook, AiOutlineLink} from "react-icons/ai"

function series() {
    return (
        <>
            <section className="vh-100 ">
                <div className='container mt-5'>
                    <div className='card px-2 mt-10'>
                        <div className=" py-5 h-100">
                            <div className="row d-flex align-items-start justify-content-center h-100">
                                <div className="col-md-8 col-lg-5 col-xl-4">
                                    <img src="./img/img1.jpeg"
                                        className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 col-lg-7  col-xl-7 offset-xl-1">
                                    <h2>मेरी बगिया</h2>
                                    <div className="card-text ">
                                        <span className="badge badge-pill p-1 mx-1 badge-primary" >हिंदी कहानी</span>
                                        <span className="badge badge-pill p-1 mx-1 badge-secondary">सुपर लेखक</span>
                                        <span className="badge badge-pill p-1 mx-1 badge-success">उपन्यास</span>
                                    </div>
                                    <div>
                                        <label for="rating-inline"><span className=" bg-primery px-3 active"><AiOutlineStar /></span ><span className=" bg-primery px-3 active"><AiOutlineStar /></span>
                                            <span className=" bg-primery px-3 active"><AiOutlineStar /></span><span className=" bg-primery px-3 active"><AiOutlineStar /></span></label>
                                        <b-form-rating id="rating-inline" inline value="4"></b-form-rating>
                                    </div>
                                    <p className="card-text">27509
                                        <span className="card-text"> बार देखा गया</span></p>

                                    <p className="card-text"> ये कहानी है अवनी ओर माहिर की । अवनी जिसने बचपन से ही काफी धुख ओर तकलीफ़ सहन की है । तो दूसरी तरफ है माहिर , ओबेरॉय इंडस्ट्री का इकलौता वारिस । क्या होगा जब परिवार की मर्जी से होगी इनकी शादी , क्या इन दोनों के बीच प्यार होगा ..........</p>
                                    <hr className="dashed" />
                                    <div className="col mt-10 d-flex align-items-center justify-content-start my-2 py-2">
                                       <div>
                                       <p className="card-text">अपने दोस्तों के साथ साझा करें:</p>
                                        <hr className="dashed"/>
                                <span className=" bg-primery px-3 active">< AiOutlineWhatsApp  className=" adminIcone"/></span>
                                <span className=" bg-primery  px-3 active">< AiFillFacebook  className=" adminIcone"/></span>
                                <span className=" bg-primery px-3 active">< AiOutlineLink  className=" adminIcone"/></span>
                                       </div>

                                    </div>
                                    <div className="row mt-10 d-flex align-items-center justify-content-around ">

                                        <button type="button" className="btn btn-primary btn-sm">Add To Librery</button>
                                        <button type="button" className="btn btn-secondary btn-sm">
                                            <Link href="/read"><a >Read Now </a></Link>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <Card data="Faimly Story" />
                </div>
            </section>
            
        </>
    )
}

export default series
