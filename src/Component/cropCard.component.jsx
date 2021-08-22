import React from "react";
import cropDetails from "../assets/cropDetails";

export default function Example() {

  const [cropId, setCropId] = React.useState(0)
  return (
  <div className="container mx-auto">
    <div className="flex flex-wrap mx-4">
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden ">
        <div className="relative">
          <img className="mx-auto w-1/2" src="https://media.istockphoto.com/vectors/carrot-vector-id484208012?b=1&k=6&m=484208012&s=612x612&w=0&h=JtoP95AUOB1DqlN8TdFyOz-s-q0hNpHAe-O6rledexU=" alt="" />
        </div>
        <div className="p-4">
          <h2 className="mt-2 m b-2 font-bold">{cropDetails[cropId]['name']}</h2>
          <p className="text-sm">{cropDetails[cropId]['description']}</p>
          <div className="mt-3 flex items-center">
              <p className="text-sm">Market Price : </p> &nbsp;
            <span className="text-sm font-semibold">{cropDetails[cropId]['price']}</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
            <i className="far fa-address-card fa-fw text-gray-900"></i>
                {cropDetails[cropId]['nutrients'].split('\n').map(nutr=><p>{nutr}<br/></p>)}
        </div>
      </a>
      </div>
    </div>
  </div>
    )
}
