import React from "react";
import Navbar from './Navbar.component';
import leaves from "../assets/images/plant.png"
import leaves2 from "../assets/images/plant2.png"
import Card from "./cropCard.component";
import axios from "axios";

export default function Example() {

    const [token, setToken] = React.useState('')
    const [postData, setPostData] = React.useState('')
    const [val, setVal] = React.useState({ "N": null, "P": null, "K": null, "temperature": null, "humidity": null, "ph": null, "rainfall": null })
    const [errorMessage, setErrorMessage] = React.useState({ "N": false, "P": false, "K": false, "temperature": false, "humidity": false, "ph": false, "rainfall": false })
    const [returnData, setReturnData] = React.useState('')

    async function getToken() {
        try {
            const { data } = await axios.post('https://eba8b471.eu-gb.apigw.appdomain.cloud/token/?grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=pPpcfgq3UjLQ7uTNlBeJxAwAVcLeHbsiQlNReLTPLqeQ', null, null);
                setToken(data.access_token) ;
        } catch (error) {
            console.log(error.response.data)
        }
    }

     async function recommendationApi() {
        var configuration = {
            headers: {
                Authorization: "Bearer " + token,
                'X-IBM-Client-Id': '47ba060c-9566-4487-adbe-4e1111672e5e',
            },
        };
        try {
            const { data } = await axios.post('https://dd3c8df9.us-south.apigw.appdomain.cloud/farm?version=2021-08-06', postData, configuration);
                setReturnData(data['predictions'][0]['values'][0][0]) ;
        } catch (error) {
            console.log(error.response.data)
        }
    }

    React.useEffect(()=>{
        if(returnData!=='')
            openModal('modal')
    },[returnData])

    React.useEffect(()=>{
        if(postData!==''){
            getToken()
        }
    },[postData])

    React.useEffect(()=>{
        if(token!==''){
            recommendationApi()
        }
    },[token])

    const handleSubmit = (e) => {
        e.preventDefault();

        let isError = false;
    
        for (const [key, value] of Object.entries(val)) {
            if(value === null || value === ''){
                isError = true
                setErrorMessage((errorMessage) => ({...errorMessage,[key]: true}))
                if(key === "N" && document.getElementById("Nitrogen") !== null)
                    document.getElementById("Nitrogen").classList.add('border-red-500')
                else if(key === "P" && document.getElementById("Phosphorus") !== null)
                    document.getElementById("Phosphorus").classList.add('border-red-500')
                else if(key === "K" && document.getElementById("Potassium") !== null)
                    document.getElementById("Potassium").classList.add('border-red-500')
                else if(key === "temperature" && document.getElementById("Temperature") !== null)
                    document.getElementById("Temperature").classList.add('border-red-500')
                else if(key === "humidity" && document.getElementById("Humidity") !== null)
                    document.getElementById("Humidity").classList.add('border-red-500')
                else if(key === "ph" && document.getElementById("PH") !== null)
                    document.getElementById("PH").classList.add('border-red-500')
                else if(key === "rainfall" && document.getElementById("Rainfall") !== null)
                    document.getElementById("Rainfall").classList.add('border-red-500')
            }
        }
        if(!isError){
            let pd = {
                "input_data": [{
                    "fields": ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"],
                    "values": [[]]
                }]
            }
            Object.values(val).map(v => pd.input_data[0].values[0].push(parseFloat(v)))
            setPostData(pd)
        }
    }

    function openModal(key) {
        document.getElementById(key).showModal(); 
        document.body.setAttribute('style', 'overflow: hidden;'); 
        document.getElementById(key).children[0].scrollTop = 0; 
        document.getElementById(key).children[0].classList.remove('opacity-0'); 
        document.getElementById(key).children[0].classList.add('opacity-100');
        document.addEventListener('click', function (e) {
            if(e.target.className && e.target.className.includes("fixed"))
                modalClose('modal')
        }, false);
    }

    function modalClose(key) {
        document.getElementById(key).children[0].classList.remove('opacity-100');
        document.getElementById(key).children[0].classList.add('opacity-0');
        setTimeout(function () {
            document.getElementById(key).close();
            document.body.removeAttribute('style');
        }, 100);
    }

    const changeHandler = (name,value) => {
        setVal({...val,[name]:value})
        if(value !== null && value !== ''){
            setErrorMessage((errorMessage) => ({...errorMessage,[name]: false}))
            if(name === "N" && document.getElementById("Nitrogen") !== null)
                document.getElementById("Nitrogen").classList.remove('border-red-500')
            else if(name === "P" && document.getElementById("Phosphorus") !== null)
                document.getElementById("Phosphorus").classList.remove('border-red-500')
            else if(name === "K" && document.getElementById("Potassium") !== null)
                document.getElementById("Potassium").classList.remove('border-red-500')
            else if(name === "temperature" && document.getElementById("Temperature") !== null)
                document.getElementById("Temperature").classList.remove('border-red-500')
            else if(name === "humidity" && document.getElementById("Humidity") !== null)
                document.getElementById("Humidity").classList.remove('border-red-500')
            else if(name === "ph" && document.getElementById("PH") !== null)
                document.getElementById("PH").classList.remove('border-red-500')
            else if(name === "rainfall" && document.getElementById("Rainfall") !== null)
                document.getElementById("Rainfall").classList.remove('border-red-500')
        }
    }

    return (
        <div className="flex">
            <dialog id="modal" className="bg-transparent z-0 relative w-screen h-screen">
                <div className="p-6 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0">
                    <div className="bg-white rounded-lg md:w-2/3 lg:w-1/3 relative">
                        <div>
                            <div className="px-7 pt-6 pb-2 grid grid-cols-2">
                                <h1 className="font-semibold text-base">Recommended Crop</h1>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/1024px-Multiplication_Sign.svg.png" alt="Close" className="w-5 ml-auto cursor-pointer" onClick={()=>modalClose("modal")}></img>
                            </div>
                            <div className="overflow-y-auto">
                                <Card cardId={returnData!==''?parseInt(returnData):0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>

            <div className="min-w-full w-full h-screen bg-gradient-to-b from-green-100 via-green-100">
                <Navbar name="Crop Recommendation"></Navbar>
                <div className='relative h-4/5 w-full flex justify-center'>
                    <div className="absolute right-0 top-12 opacity-0 lg:opacity-80"><img className="" src={leaves} alt="leaves1" /></div>
                    <div className="absolute left-0 top-60 opacity-0 lg:opacity-80"><img className="transform rotate-90" src={leaves2} alt="leaves2" /></div>
                    <div className="w-4/5 lg:w-1/3 my-auto">
                         <div className="mx-auto">
                <div className="md:grid md:gap-6">
                    <h1 className="text-3xl sm:text-4xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-green-800 to-green-500 text-center lg:ml-12 mt-8">CROP RECOMMENDATION</h1>
                    <div className="my-5 mb-16 lg:ml-12 shadow-xl">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid gap-y-10 md:gap-10">
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="Nitrogen" className="block text-sm font-medium text-gray-700">
                                                Nitrogen
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Nitrogen"
                                                id="Nitrogen"
                                                autoComplete="Nitrogen"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("N", e.target.value )}
                                            />
                                            {errorMessage.N?<small className="text-red-500">Please Enter Nitrogen</small>:''}
                                        </div>
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="Phosphorus" className="block text-sm font-medium text-gray-700">
                                                Phosphorus
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Phosphorus"
                                                id="Phosphorus"
                                                autoComplete="Phosphorus"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("P", e.target.value )}
                                            />
                                            {errorMessage.P?<small className="text-red-500">Please Enter Phosphorus</small>:''}
                                        </div>
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="Potassium" className="block text-sm font-medium text-gray-700">
                                                Potassium
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Potassium"
                                                id="Potassium"
                                                autoComplete="Potassium"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("K", e.target.value )}
                                            />
                                            {errorMessage.K?<small className="text-red-500">Please Enter Potassium</small>:''}
                                        </div>
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="Temperature" className="block text-sm font-medium text-gray-700">
                                                Temperature
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Temperature"
                                                id="Temperature"
                                                autoComplete="Temperature"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("temperature", e.target.value )}
                                            />
                                            {errorMessage.temperature?<small className="text-red-500">Please Enter Temperature</small>:''}
                                        </div>
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="Humidity" className="block text-sm font-medium text-gray-700">
                                                Humidity
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Humidity"
                                                id="Humidity"
                                                autoComplete="Humidity"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("humidity", e.target.value )}
                                            />
                                            {errorMessage.humidity?<small className="text-red-500">Please Enter Humidity</small>:''}
                                        </div>
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="PH" className="block text-sm font-medium text-gray-700">
                                                PH
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="PH"
                                                id="PH"
                                                autoComplete="PH"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("ph", e.target.value)}
                                            />
                                            {errorMessage.ph?<small className="text-red-500">Please Enter PH</small>:''}
                                        </div>
                                        <div className="col-span-8 md:col-span-12">
                                            <label htmlFor="Rainfall" className="block text-sm font-medium text-gray-700">
                                                Rainfall
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="Rainfall"
                                                id="Rainfall"
                                                autoComplete="Rainfall"
                                                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                onChange={(e) => changeHandler("rainfall", e.target.value )}
                                            />
                                            {errorMessage.rainfall?<small className="text-red-500">Please Enter Rainfall</small>:''}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center w-full mb-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
