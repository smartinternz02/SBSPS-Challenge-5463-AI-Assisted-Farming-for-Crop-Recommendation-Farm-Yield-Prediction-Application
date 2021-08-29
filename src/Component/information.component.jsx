import React from "react"; 
import cowlogo from '../assets/images/cow.webp'
class Information extends React.Component{
    render(){
        return(
            <div id="arrow1" className="w-full py-8">
                <div className="text-4xl md:text-5xl w-full text-center font-bold">Take control of your farm</div>
                <div className="flex flex-wrap">
                    <div className="relative w-full md:w-1/2 flex p-12 justify-center items-center">
                        <img className="w-full" src={cowlogo} alt="" srcset="" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-start p-8 items-start">
                        <span className="font-bold text-2xl py-4">Agri Cultivate helps you grow your business and become profitable.</span>
                        <span className="font-bold text-lg pt-2"> Save time with AI</span>
                        <span className="font-normal">We use state-of-the-art artificial intelligence to provide you with accurate cultivation, crop, and yield recommendations. Your profit matters to us We provide you with a detailed breakdown of how you can maximize your profits based on fertilizers, irrigation methods, climate, and other factors.</span>
                        <span className="font-bold text-lg pt-2"> Save money with our recommendations</span>
                        <span className="font-normal">Agri Cultivate will provide you with the most profitable crop recommendations for your region, saving you time and money!</span>
                        <span className="font-bold text-lg pt-2"> Growing knowledge and a better future for all </span>
                        <span className="font-normal">The Agri Cultivate team is working to develop a platform to help farmers know about sustainable farming practices and techniques which can only be beneficial for the long term prosperity of Indian agriculture.</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Information;