import React from "react";
import Navbar from './Navbar.component';
import leaves from "../assets/images/plant.png"
import leaves2 from "../assets/images/plant2.png"

export default function Example() {

    const [val, setVal] = React.useState({ "state": null, "crop": null, "sp": null, "cc2": null, "cp2": null })
    const [errorMessage, setErrorMessage] = React.useState({ "state": false, "crop": false, "sp": false, "cc2": false, "cp2": false })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let isError = false;
    
        for (const [key, value] of Object.entries(val)) {
            if(value === null || value === ''){
                isError = true
                setErrorMessage((errorMessage) => ({...errorMessage,[key]: true}))
                if(key === "state" && document.getElementById("state") !== null)
                    document.getElementById("state").classList.add('border-red-500')
                else if(key === "crop" && document.getElementById("crop") !== null)
                    document.getElementById("crop").classList.add('border-red-500')
                else if(key === "sp" && document.getElementById("Support price") !== null)
                    document.getElementById("Support price").classList.add('border-red-500')
                else if(key === "cc2" && document.getElementById("cc2") !== null)
                    document.getElementById("cc2").classList.add('border-red-500')
                else if(key === "cp2" && document.getElementById("cp2") !== null)
                    document.getElementById("cp2").classList.add('border-red-500')   
            }
        }
        if(!isError){
            let postData = {
                "input_data": [{
                    "fields": ["State", "Crop", "Support price", "CC2", "CP2"],
                    "values": [[]]
                }]
            }
            Object.values(val).map(v => postData.input_data[0].values[0].push(parseFloat(v)))
            console.log(JSON.stringify(postData));
        }
    }

    const changeHandler = (name,value) => {
        setVal({...val,[name]:value})
        if(value !== null && value !== ''){
            setErrorMessage((errorMessage) => ({...errorMessage,[name]: false}))
            if(name === "state" && document.getElementById("state") !== null)
                document.getElementById("state").classList.remove('border-red-500')
            else if(name === "crop" && document.getElementById("crop") !== null)
                document.getElementById("crop").classList.remove('border-red-500')
            else if(name === "sp" && document.getElementById("Support price") !== null)
                document.getElementById("Support price").classList.remove('border-red-500')
            else if(name === "cc2" && document.getElementById("cc2") !== null)
                document.getElementById("cc2").classList.remove('border-red-500')
            else if(name === "cp2" && document.getElementById("cp2") !== null)
                document.getElementById("cp2").classList.remove('border-red-500')   
        }
    }

    return (
        <div className="flex">
            <div className="min-w-full w-full h-screen bg-gradient-to-b from-green-100 via-green-100">
                <Navbar name="Profit"></Navbar>
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
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                                State
                                            </label>
                                            <select
                                                id="state"
                                                name="state"
                                                autoComplete="state"
                                                className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                                onChange={(e) => changeHandler( "state", e.target.value )}
                                            >
                                                <option disabled selected> Select A State </option>
                                                <option value="0">Uttar Pradesh</option>
                                                <option value="1">Karnataka</option>
                                                <option value="2">Gujarat</option>
                                                <option value="3">Andhra Pradesh</option>
                                                <option value="4">Maharashtra</option>
                                                <option value="5">Punjab</option>
                                                <option value="6">Haryana</option>
                                                <option value="7">Rajasthan</option>
                                                <option value="8">Madhya Pradesh</option>
                                                <option value="9">Tamil Nadu</option>
                                                <option value="10">Bihar</option>
                                                <option value="11">Orissa</option>
                                                <option value="12">West Bengal</option>
                                            </select>
                                            {errorMessage.state?<small className="text-red-500">Please Select A State</small>:''}
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="crop" className="block text-sm font-medium text-gray-700">
                                                Crop
                                            </label>
                                            <select
                                                id="crop"
                                                name="crop"
                                                autoComplete="crop"
                                                className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                                onChange={(e) => changeHandler( "crop", e.target.value )}
                                            >
                                                <option disabled selected> Select A Crop </option>
                                                <option value="0">Arhar</option>
                                                <option value="1">Cotton</option>
                                                <option value="2">Gram</option>
                                                <option value="3">Groundnut</option>
                                                <option value="4">Maize</option>
                                                <option value="5">Moong</option>
                                                <option value="6">Paddy</option>
                                                <option value="7">Rapeseed And Mustard</option>
                                                <option value="8">Sugarcane</option>
                                                <option value="9">Wheat</option>
                                            </select>
                                            {errorMessage.crop?<small className="text-red-500">Please Select A Crop</small>:''}
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="Support price" className="block text-sm font-medium text-gray-700">
                                                Support Price
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="Support price"
                                                id="Support price"
                                                autoComplete="Support price"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler( "sp", e.target.value )}
                                            />
                                            {errorMessage.sp?<small className="text-red-500">Please Enter Support Price</small>:''}
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="cc2" className="block text-sm font-medium text-gray-700">
                                                Cost of Cultivation
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="cc2"
                                                id="cc2"
                                                autoComplete="cc2"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler( "cc2", e.target.value )}
                                            />
                                            {errorMessage.cc2?<small className="text-red-500">Please Enter Cost of Cultivation</small>:''}
                                        </div>
                                        <div className="col-span-12">
                                            <label htmlFor="cp2" className="block text-sm font-medium text-gray-700">
                                                Cost of Production
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="cp2"
                                                id="cp2"
                                                autoComplete="cp2"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler( "cp2", e.target.value )}
                                            />
                                            {errorMessage.cp2?<small className="text-red-500">Please Enter Cost of Production</small>:''}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        Submit
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
