import React from 'react';
import Navbar from './Navbar.component';
import leaves from "../assets/images/plant.png"
import leaves2 from "../assets/images/plant2.png"
class MainHeader extends React.Component {
    render() {
        return (
            <div className="min-w-full w-full h-screen bg-gradient-to-b from-green-100 via-green-100">
                <Navbar name="Dashboard"></Navbar>
                <div className='relative h-4/5 w-full flex justify-center'>
                    <div className="absolute right-0 top-12 opacity-70 sm:opacity-80"><img className="" src={leaves} /></div>
                    <div className="absolute left-0 top-60 opacity-40 sm:opacity-80"><img className="transform rotate-90" src={leaves2} /></div>
                    <div className="w-3/5 flex flex-col my-auto">
                        <span className="text-gray-900 sm:text-gray-800 font-sans text-4xl sm:text-7xl font-bold text-center sm:leading-normal sm:p-6 pb-4">The Go-To Destination For Farmers.</span>
                        <span className="text-gray-600 sm:text-gray-500 text-center text-xl py-10">Agri Cultivate is the one-stop destination for all the latest information about crops, environment, and farming techniques. You can find information about latest research in various fields of agriculture and other related topics like soil management, plant diseases, animal husbandry and agronomy.</span>
                        <div className="text-center">
                            <button className="py-4 mx-2 bg-green-400 hover:bg-green-500 text-white font-bold w-40 rounded-full m-auto shadow-lg my-6">Get Started</button>
                            <button className="py-4 bg-green-400 hover:bg-green-500 text-white font-bold w-40 rounded-full m-auto shadow-lg my-6">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainHeader