import React from "react";
import axios from "axios";
import airlogo from "../assets/images/air.png";
import soillogo from "../assets/images/soil.png";
import cloudy from "../assets/images/cloudy.png";
import pollen from "../assets/images/pollen.png";
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      air: {
        message: "",
        stations: [
          {
            CO: 1.453,
            NO2: 25.291,
            OZONE: 8.032,
            PM10: 52.24,
            PM25: 21.943,
            SO2: 1.898,
            city: "Bangalore",
            countryCode: "IN",
            division: "Bangalore",
            lat: 11.98625,
            lng: 77.550478,
            placeName: "Race course road",
            postalCode: "560020",
            state: "Karnataka",
            updatedAt: "2021-05-29T13:00:00.000Z",
            AQI: 72,
            aqiInfo: {
              pollutant: "PM2.5",
              concentration: 21.943,
              category: "Moderate",
            },
          },
        ],
      },
      soil: {
        message: "string",
        data: [
          {
            _id: "string",
            scantime: "string",
            soil_temperature: 0,
            soil_moisture: 0,
          },
        ],
      },
      fire: {
        message: "",
        data: [
          {
            lat: -8.995439999999999,
            lon: 13.46979,
            confidence: "nominal",
            frp: 5.8,
            daynight: "D",
            detection_time: "2020-10-12 11:54:00.000Z",
            distance: 14.535512759983392,
          },
        ],
      },
      weather: {
        message: "",
        data: {
          time: 1602153684,
          temperature: 81.87,
          apparentTemperature: 88.64,
          summary: "Humid",
          icon: "clear-day",
          dewPoint: 75.35,
          humidity: 0.81,
          pressure: 1005.9,
          windSpeed: 3.19,
          windGust: 3.19,
          windBearing: 72,
          cloudCover: 0.83,
          visibility: 10,
          ozone: 267.3,
          lat: "12",
          lng: "77",
        },
      },
      weather_forecast: {
        message: "",
        data: {
          lat: "22",
          lng: "112",
          forecast: [
            {
              time: 1607932800,
              precipIntensity: 0.0072,
              precipProbability: 0.02,
              precipType: "rain",
              temperature: 14.29,
              apparentTemperature: 14.29,
              summary: "Humid and overcast",
              icon: "clear-day",
              dewPoint: 11.32,
              humidity: 0.82,
              pressure: 1018.2,
              windSpeed: 4.76,
              windGust: 5.6,
              windBearing: 31,
              cloudCover: 0.98,
              uvIndex: 1,
              visibility: 16.093,
              ozone: 234,
            },
          ],
        },
      },
      pollen: {
        message: "",
        data: [
          {
            Count: {
              grass_pollen: 25,
              tree_pollen: 16,
              weed_pollen: 375,
            },
            Risk: {
              grass_pollen: "Low",
              tree_pollen: "Low",
              weed_pollen: "High",
            },
          },
        ],
      },
      water_vapor: {
        message: "Nearest places",
        data: [
          {
            _id: "5efa5b0bd5b6cf2333bc7a8c",
            createdAt: "2020-06-29 19:20:00.000Z",
            water_vapor: 5.613,
          },
        ],
      },
    };
  }

  airQuality() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/latest/by-lat-lng",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    console.log(options);
    if (lat && lng) {
      axios
        .request(options)
        .then((response) => {
          this.setState({ air: response.data });
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("cannot get location");
    }
  }

  soilQuality() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/soil/latest/by-lat-lng",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ soil: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  weather() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/weather/latest/by-lat-lng",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ weather: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  weather_forecast() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/weather/forecast/by-lat-lng",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ weather_forecast: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  pollen() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/latest/pollen/by-lat-lng",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ pollen: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  water_vapor() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/waterVapor/latest/by-lat-lng",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ water_vapor: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  fire() {
    var lat = this.state.lat;
    var lng = this.state.lng;
    var options = {
      method: "GET",
      url: "https://api.ambeedata.com/latest/fire",
      params: { lat: lat.toString(), lng: lng.toString() },
      headers: {
        "x-api-key":
          "2b423203dc766af71139f8040953f2d35df67300c4ac2f37413f873be214cb7f",
        "Content-type": "application/json",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ fire: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      this.airQuality();
      this.soilQuality();
      this.fire();
      this.weather();
      this.weather_forecast();
      this.pollen();
      this.water_vapor();
    });

    console.log(this.state.air);
  }
 
  render() {
    const isDisplay = this.state.lat && this.state.lng;
    if (isDisplay){
      return (
        <div className="h-full w-full">
          <div className="flex flex-col py-20 px-16">
            <div id="arrow" className="text-black text-3xl font-semibold py-2">
              {this.state.air.stations[0].state}
            </div>
            <div  className="text-black text-5xl font-extrabold">
              {this.state.air.stations[0].division}
            </div>
            {/* cards */}
            <div class="flex items-center justify-center pt-16">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl hover:shadow-2xl">
                  <div class=" text-white flex items-center absolute rounded-full shadow-2xl bg-pink-500 left-4 -top-6">
                    <img className="h-14" src={airlogo} alt="" srcset="" />
                  </div>
                  <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Air Quality</p>
                    <div class="flex space-x-2 text-gray-500 text-sm">
                      <p className="text-gray-700">CO :</p>
                      <p>{this.state.air.stations[0].CO}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-2">
                      <p className="text-gray-700">NO2 :</p>
                      <p>{this.state.air.stations[0].NO2}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-2">
                      <p className="text-gray-700">OZONE :</p>
                      <p>{this.state.air.stations[0].OZONE}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-2">
                      <p className="text-gray-700">PM10 :</p>
                      <p>{this.state.air.stations[0].PM10}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-2">
                      <p className="text-gray-700">PM25 :</p>
                      <p>{this.state.air.stations[0].PM25}</p>
                    </div>
                    <div class="border-t-2"></div>
  
                    <div class="flex justify-between">
                      <div class="my-2">
                        <p class="font-semibold text-base mb-2">
                          {this.state.air.stations[0].aqiInfo.category}
                        </p>
                        <div class="flex space-x-2">
                          <p>{this.state.air.stations[0].aqiInfo.pollutant}</p>
                          <p>
                            {this.state.air.stations[0].aqiInfo.concentration}
                          </p>
                        </div>
                      </div>
                      <div class="my-2">
                        <p class="font-semibold text-base mb-2">AQI</p>
                        <div class="text-base text-gray-500 font-semibold">
                          <p>{this.state.air.stations[0].AQI}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl hover:shadow-2xl">
                  <div class=" text-white flex items-center absolute rounded-full shadow-xl py-4 px-4 bg-yellow-200 left-4 -top-6">
                    <img className="h-8" src={soillogo} alt="" srcset="" />
                  </div>
                  <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Soil</p>
                    <div class="flex space-x-2 text-gray-500 text-sm">
                      <p className="text-gray-700">Soil Temperature :</p>
                      <p>
                        {this.state.soil.data[0].soil_temperature.toFixed(2)} ℃
                      </p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Soil Moisutre :</p>
                      <p>{this.state.soil.data[0].soil_moisture.toFixed(2)} %</p>
                    </div>
                    <div class="border-t-2"></div>
                    {this.state.fire.message === "success" ? (
                      <div class="flex flex-col justify-between">
                        <div class="my-2">
                          <p class="font-semibold text-base mb-2">
                            Fire Information
                          </p>
                          <div class="flex space-x-2 text-gray-500 text-sm my-3">
                            <p className="text-gray-700">Confidence :</p>
                            <p>{this.state.fire.data[0].confidence}</p>
                          </div>
                          <div class="flex space-x-2 text-gray-500 text-sm my-3">
                            <p className="text-gray-700">Distance :</p>
                            <p>
                              {this.state.fire.data[0].distance.toFixed(2)} KM
                            </p>
                          </div>
                          <div class="flex space-x-2 text-gray-500 text-sm my-3">
                            <p className="text-gray-700">Fire Radioactive :</p>
                            <p>{this.state.fire.data[0].frp} MW</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>{this.state.fire.message}</div>
                    )}
                  </div>
                </div>
  
                <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl hover:shadow-2xl">
                  <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-red-300 left-4 -top-6">
                    <img className="h-8" src={cloudy} alt="" srcset="" />
                  </div>
                  <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Weather</p>
                    <div class="flex space-x-2 text-gray-500 text-sm">
                      <p className="text-gray-700">Temperature :</p>
                      <p>{this.state.weather.data.temperature}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Humidity :</p>
                      <p>{this.state.weather.data.humidity}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Wind Speed :</p>
                      <p>{this.state.weather.data.windSpeed}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Visiblity :</p>
                      <p>{this.state.weather.data.visibility}</p>
                    </div>
                    <div class="border-t-2"></div>
  
                    <div class="flex flex-col justify-between">
                      <div class="my-2">
                        <div class="flex space-x-2 text-gray-500 font-bold text-sm py-2">
                          <p className="text-gray-700">Forecast</p>
                          <p className="font-semibold">
                            {this.state.weather_forecast.data.forecast[0].summary}
                          </p>
                        </div>
                        <div class="flex space-x-2 text-gray-500 text-sm py-2">
                          <p className="text-gray-700">Temperature :</p>
                          <p>
                            {
                              this.state.weather_forecast.data.forecast[0]
                                .temperature
                            }
                          </p>
                        </div>
                        <div class="flex space-x-2 text-gray-500 text-sm py-2">
                          <p className="text-gray-700">Humidity :</p>
                          <p>
                            {
                              this.state.weather_forecast.data.forecast[0]
                                .humidity
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl hover:shadow-2xl">
                  <div class=" text-white flex items-center absolute rounded-full  shadow-xl bg-red-300 left-4 -top-6">
                    <img className="h-14" src={pollen} alt="" srcset="" />
                  </div>
                  <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Water Vapor & Pollen</p>
                    <div class="flex space-x-2 text-gray-500 text-sm">
                      <p className="text-gray-700">Water Vapor :</p>
                      <p>{this.state.water_vapor.data[0].water_vapor}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Grass Pollen :</p>
                      <p>{this.state.pollen.data[0].Count.grass_pollen}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Tree Pollen :</p>
                      <p>{this.state.pollen.data[0].Count.tree_pollen}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-500 text-sm my-3">
                      <p className="text-gray-700">Weed Pollen :</p>
                      <p>{this.state.pollen.data[0].Count.weed_pollen}</p>
                    </div>
  
                    <div class="border-t-2"></div>
  
                    <div class="flex justify-between">
                      <div class="my-2">
                        <p class="font-semibold text-base mb-2">Type</p>
                        <div class="flex flex-col">
                          <p>Grass Pollen</p>
                          <p>Tree Pollen</p>
                          <p>Weed Pollen</p>
                        </div>
                      </div>
                      <div class="my-2">
                        <p class="font-semibold text-base mb-2">Risk</p>
                        <div class="text-base text-gray-500 font-semibold">
                          <p>{this.state.pollen.data[0].Risk.grass_pollen}</p>
                          <p>{this.state.pollen.data[0].Risk.tree_pollen}</p>
                          <p>{this.state.pollen.data[0].Risk.weed_pollen}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div id="arrow"></div>
      )
    }
  }
}
export default MainContent;
