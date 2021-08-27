import React from "react";
import cropDetails from "./cropDetails";

export default function Example(props) {

  let cropId = props.cardId
  
  return (
  <div className="container mx-auto">
      <div className="w-full">
        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative">
          <img className="mx-auto w-1/2" src={require(`../assets/images/${cropDetails[cropId]['image']}`).default} alt="" />
          <h1 className="pl-4 mt-2 m b-2 text-lg font-bold">{cropDetails[cropId]['name']}</h1>
        </div>
        <div className="p-4">
          <p className="text-sm">{cropDetails[cropId]['description']}</p>
          <div className="mt-3 flex items-center">
              <p className="text-sm font-semibold">Market Price : </p> &nbsp;
            <span className="text-sm">{cropDetails[cropId]['price']}</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700 bg-green-200">
            <i className="far fa-address-card fa-fw text-gray-900"></i>
                {cropDetails[cropId]['nutrients'].split('\n').map(nutr=><p>{nutr}<br/></p>)}
        </div>
      </div>
      </div>
  </div>
    )
}
