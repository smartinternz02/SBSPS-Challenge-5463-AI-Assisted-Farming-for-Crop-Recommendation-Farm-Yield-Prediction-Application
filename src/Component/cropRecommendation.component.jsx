import React from "react";
import Navbar from './Navbar.component';
import leaves from "../assets/images/plant.png"
import leaves2 from "../assets/images/plant2.png"

export default function Example() {

    const [val, setVal] = React.useState({ "N": null, "P": null, "K": null, "temperature": null, "humidity": null, "ph": null, "rainfall": null })

    const handleSubmit = (e) => {
        e.preventDefault();
        let postData = {
            "input_data": [{
                "fields": ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"],
                "values": [[]]
            }]
        }
        Object.values(val).map(v => postData.input_data[0].values[0].push(parseFloat(v)))
        console.log(JSON.stringify(postData));
    }

    return (
        
        <div className="flex">
            <div className="min-w-full w-full h-screen bg-gradient-to-b from-green-100 via-green-100">
                <Navbar name="Crop Recommendation"></Navbar>
                <div className='relative h-4/5 w-full flex justify-center'>
                    <div className="absolute right-0 top-12 opacity-70 sm:opacity-80"><img className="" src={leaves} /></div>
                    <div className="absolute left-0 top-60 opacity-40 sm:opacity-80"><img className="transform rotate-90" src={leaves2} /></div>
                    <div className="w-3/5 flex flex-col my-auto">
                         <div className="mx-auto">
                <div className="md:grid md:gap-6">
                    <div className="my-5 ml-20 shadow-xl">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-10">
                                        <div className="col-span-12">
                                            <label htmlFor="Nitrogen" className="block text-sm font-medium text-gray-700">
                                                Nitrogen
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Nitrogen"
                                                id="Nitrogen"
                                                autoComplete="Nitrogen"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, N: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="Phosphorus" className="block text-sm font-medium text-gray-700">
                                                Phosphorus
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Phosphorus"
                                                id="Phosphorus"
                                                autoComplete="Phosphorus"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, P: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="Potassium" className="block text-sm font-medium text-gray-700">
                                                Potassium
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Potassium"
                                                id="Potassium"
                                                autoComplete="Potassium"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, K: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="Temperature" className="block text-sm font-medium text-gray-700">
                                                Temperature
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Temperature"
                                                id="Temperature"
                                                autoComplete="Temperature"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, temperature: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="Humidity" className="block text-sm font-medium text-gray-700">
                                                Humidity
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Humidity"
                                                id="Humidity"
                                                autoComplete="Humidity"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, humidity: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="PH" className="block text-sm font-medium text-gray-700">
                                                PH
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="PH"
                                                id="PH"
                                                autoComplete="PH"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, ph: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="Rainfall" className="block text-sm font-medium text-gray-700">
                                                Rainfall
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Rainfall"
                                                id="Rainfall"
                                                autoComplete="Rainfall"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => setVal({ ...val, rainfall: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
