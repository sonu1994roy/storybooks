
import React, { Component } from 'react';
import Progress from '../componate/Progress';
import Series from './series';
import { AiOutlineStar, AiOutlineWhatsApp, AiFillFacebook, AiOutlineLink } from "react-icons/ai"

export default class read extends Component {

    state = {
        scrollPostion: 0
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
            });
        });
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

        this.setState({
            scrollPostion,
        });
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    componentDidMount() {
        this.listenToScrollEvent();
    }

    render() {
        return (
            <>
                <div className="App">
                    <Progress scroll={this.state.scrollPostion + '%'} />

                    <main className=' container'>
                        <div className='align-items-center justify-content-center h-100 my-2 py-2'>
                            <h1 className='card-title  text-center'> मेरी बगिया</h1>
                            <p className='text-center'>

                                देखो माँ अंकुर फूटा <br/>
                                बिटिया ने आवाज लगाई<br/>
                                पेड़ उगेगा और बढ़ेगा <br/>
                                फूल, फल और छाया देगा।<br/>
                                मिट्टी में फैलेंगी जड़ें<br/>
                                तना जमीं से ऊपर उठेगा<br/>
                                पेड़ की होंगी टहनियाँ अनेक<br/>
                                पत्तियों से वह लदा रहेगा।<br/>
                                फूल खिलेंगे हर डाल पर<br/>
                                उपवन सारा उनसे महकेगा<br/>
                                फूलों-संग आएँगे फल<br/>
                                हम सब खाएँगे मिल बाँटकर।<br/>
                                फलों में होंगे बीज अनेक<br/>
                                धरती में देंगे हम फेंक<br/>
                                अंकुर फिर उनसे फूटेगा<br/>
                                और उगेंगे पेड़ अनेक।<br/>
                            </p>
                            <p>
                                ...
                            </p>
                            <div className="row mt-10 d-flex align-items-center justify-content-around ">

                                <div>
                                    <h5>Give Us Rating</h5>
                                    <hr className="dashed" />
                                    <span className=" bg-primery px-3 active"><AiOutlineStar /></span ><span className=" bg-primery px-3 active"><AiOutlineStar /></span>
                                    <span className=" bg-primery px-3 active"><AiOutlineStar /></span><span className=" bg-primery px-3 active"><AiOutlineStar /></span>
                                </div>
                                <div>
                                    <h5>अपने दोस्तों के साथ साझा करें:</h5>
                                    <hr className="dashed" />
                                    <span className=" bg-primery px-3 active">< AiOutlineWhatsApp className=" adminIcone" /></span>
                                    <span className=" bg-primery  px-3 active">< AiFillFacebook className=" adminIcone" /></span>
                                    <span className=" bg-primery px-3 active">< AiOutlineLink className=" adminIcone" /></span>
                                </div>
                            </div>

                        </div>
                        <div class="border  border-solid p-2 my-5 mx-auto d-block w-25">

                            <div class="text-center">
                                <button type="button" class="btn btn-primary">Comment</button>
                            </div>

                        </div>
                    </main>
                </div>
                <h3 className='text-center'>
                    More realeated
                </h3>

                <Series />
            </>

        );
    }
}

