import bannerVideo from '../../Images/banner-video1.mp4'
import business1 from '../../Images/business-icon1.svg'
import business2 from '../../Images/business-icon2.svg'
import business3 from '../../Images/business-icon3.svg'
import '../home/home.css'
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-5">
                        <h1 className='mb-4 fw-bold top_head'>Real-time <br />Audience Engagement</h1>
                        <h3 className='mb-4 top_desc'>CDP, Journey orchestration, and AI-powered analytics for revenue growth</h3>
                        <button className="btn btn-outline-primary">know More</button>
                    </div>
                    <div className="col-md-7 text-center">
                        <video style={{ width: "100%", height: "100%" }} autoPlay muted playsInline>
                            <source src={bannerVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='row py-5 grid_divider'>
                    <h1 className='text-center'>Why global brands prefer Resulticks</h1>
                    <div className='col-md-4 text-center'>
                        <div className='global_brand'>
                            <img src={business1} />
                            <div className='fw-bold'>1023+</div>
                            <p>Brands Empowered</p>
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <div className='global_brand'>
                            <img src={business2} />
                            <div className='fw-bold'>6Bil.</div>
                            <p>Omnichannel Communications Per Day</p>
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <div className='global_brand'>
                            <img src={business3} />
                            <div className='fw-bold'>100Mil</div>
                            <p>Records Ingested in 30 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;