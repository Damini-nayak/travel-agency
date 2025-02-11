import React from 'react'
import Base from '../component/Base'

export default function Team() {
    return (
        <>
            <div class="container-fluid position-relative p-0">
                <div class="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div class="container py-5">
                        <div class="row justify-content-center py-5">
                            <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 class="display-3 text-white animated slideInDown">Guides</h1>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Guides</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                        <h1 className="mb-5">Meet Our Guide</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team1} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team2} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team3} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team4} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team2} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team3} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team4} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Base.team1} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
