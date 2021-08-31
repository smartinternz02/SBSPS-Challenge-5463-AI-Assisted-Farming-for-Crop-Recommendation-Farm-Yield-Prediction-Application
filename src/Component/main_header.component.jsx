import React from 'react';
import Navbar from './Navbar.component';
import leaves from "../assets/images/plant.png"
import leaves2 from "../assets/images/plant2.png"
import './leaves.css'

class MainHeader extends React.Component {
    render() {
        return (
            <div className="min-w-full w-full h-screen bg-gradient-to-b from-green-100 via-green-100">
                <Navbar name="Home"></Navbar>
                <div className='relative h-4/5 w-full flex justify-center'>
                    <div className="absolute right-0 top-12 opacity-0 sm:opacity-80 overflow-hidden"><img className="leaf1" src={leaves} alt="leaves1" /></div>
                    <div className="absolute left-0 top-60 opacity-0 sm:opacity-80"><img className="transform rotate-90 leaf2" src={leaves2} alt="leaves2" /></div>
                    <div className="w-3/5 flex flex-col my-auto">
                        <span className="text-gray-900 sm:text-gray-800 font-sans text-4xl sm:text-7xl font-bold text-center sm:leading-normal sm:p-6 pb-4">The Go-To Destination For Farmers.</span>
                        <span className="text-gray-600 sm:text-gray-500 text-center text-xl py-10">Agri Cultivate AI is a tool that recommends the farmers about crops to be cultivated and predicts whether the cultivation method will generate profit or loss.</span>
                        <div className="flex justify-center animate-bounce ">
                        <a href="#arrow"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7" />
                        </svg></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainHeader
