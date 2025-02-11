import React from 'react'
import Base from '../component/Base'

export default function Testimonial() {
    return (
        <>
            <div class="container-fluid position-relative p-0">
                <div class="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div class="container py-5">
                        <div class="row justify-content-center py-5">
                            <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 class="display-3 text-white animated slideInDown">Testimonial</h1>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Clients Say!!!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={Base.testimonial1} style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={Base.testimonial2} style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={Base.testimonial3} style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white text-center border p-4">
                            <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={Base.testimonial4} style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
