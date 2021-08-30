import React from 'react'
import footer from '../assets/images/footer.svg'
import teamimg from '../assets/images/team.png'
class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="py-20 bg-gradient-to-t from-footer-light via-footer-light">
                </div>
                <div className="w-full relative">
                    <img className="object-cover" src={footer} alt="" />
                    <img className="absolute left-0 bottom-1/4 right-0 ml-auto mr-auto  h-44 md:h-96 "src={teamimg} alt="" />
                    <p className="absolute top-0 md:top-3 mr-auto ml-auto left-12 md:left-44 lg:left-80 font-bold md:text-2xl">Kanav Mittal</p>
                    <p className="absolute bottom-0 top-16 md:top-32 mr-auto ml-auto left-8 md:left-36 lg:left-60 font-bold md:text-2xl">Samank Gupta</p>
                    <p className="absolute top-0 md:top-3 bottom-0 right-8 md:right-60 lg:right-80 font-bold md:text-2xl">Sarthak Tyagi</p>
                    <p className="absolute top-12 md:top-32 bottom-0 right-0 md:right-36 lg:right-44 font-bold md:text-2xl">Karmabir Chakraborty</p>
                </div>
            </div>
        )
    }
}
export default Footer;