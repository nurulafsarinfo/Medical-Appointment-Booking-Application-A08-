import React from 'react';
import bannerImg from '../../assets/banner-img-1.png';

const Banner = () => {
    return (
        <div>
            <div>
                <h1>Dependable Care, Backed by Trusted Professionals.</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div>
                    <input type="text" placeholder='Search any doctor' />
                    <a className="btn rounded-full bg-blue-500 border-none">Emargency</a>

                </div>
                <div>
                    <img className='rounded-lg' src={bannerImg} alt="" />
                    <img className='rounded-lg' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;