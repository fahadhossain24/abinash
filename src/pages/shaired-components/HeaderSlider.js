import React from 'react';
import banner1 from '../../images/banner1.jpg'
import banner3 from '../../images/banner3.jpg'
import Header from './Header';


const HeaderSlider = () => {
    return (
        <div>
            <div className='relative'>
                <div className="carousel w-full h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full" alt='banner'/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-[60%]">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" alt='banner'/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-[60%]">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* carousel close  */}
            <div className="flex justify-center w-full py-2 gap-2 absolute top-[560px]">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
            </div>
            <Header myStyle = 'absolute top-[0px]'></Header>
            {/* dropdown menu  */}
            {/* <div className={isServicesHover ? 'dropdownMenuForServices w-[223px] absolute top-[230px] left-[140px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 ' : 'dropdownMenuForServices w-[223px] absolute top-[230px] left-[-1140px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>DPS</Link></p>
                    <p><Link to='/home'>FDH</Link></p>
                    <p><Link to='/home'>Financial Consultation</Link></p>
                </div>
            </div>
            <div className={isConcernHover ? 'dropdownMenuForConcern w-[284px] absolute top-[230px] left-[250px] bg-secondary rounded-2xl h-[210px] pt-5 pl-5 ' : 'dropdownMenuForConcern w-[284px] absolute top-[230px] left-[-1250px] bg-secondary rounded-2xl h-[210px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>FINCA Medico Technology Ltd.</Link></p>
                    <p><Link to='/home'>FINCA Education</Link></p>
                    <p><Link to='/home'>Abinash Shipping Lines Ltd.</Link></p>
                    <p><Link to='/home'>FINCA Property Management Ltd.</Link></p>
                </div>
            </div>
            <div className={isAboutHover ? 'dropdownAboutMenu w-[223px] absolute top-[280px] lg:top-[230px] left-[140px] lg:left-[600px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 ' : 'dropdownAboutMenu w-[223px] absolute top-[230px] left-[-1600px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>Mission</Link></p>
                    <p><Link to='/home'>Vission</Link></p>
                    <p><Link to='/home'>MD Speech</Link></p>
                </div>
            </div>
            <div className={isGetInTouchHover ? 'dropdownGetInTouchMenu w-[223px] absolute top-[280px] lg:top-[230px] left-[270px] lg:left-[740px] bg-secondary rounded-2xl h-[200px] pt-5 pl-5 ' : 'dropdownGetInTouchMenu w-[223px] absolute top-[230px] left-[-1700px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>Job Circular</Link></p>
                    <p><Link to='/home'>Notice</Link></p>
                    <p><Link to='/home'>CSR</Link></p>
                    <p><Link to='/home'>Contact Us</Link></p>
                </div>
            </div> */}
        </div>
    );
};

export default HeaderSlider;