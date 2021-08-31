<h1 align="center">Agri-Cultivate 🌾</h1>
<p align="center">
    <a href="https://agri-cultivate.vercel.app/">View Website</a> | <a href="https://youtu.be/XmeU1cPr8wU">View Video</a>
</p>
<p align="center"><a href="http://agri-cultivate.vercel.app/"><img src="./src/assets/images/homepage.PNG" width="700"></a></p>
<p align="center">Agri Cultivate AI is a tool that recommends the farmers about crops to be cultivated and predicts whether the cultivation method will generate profit or loss.
</p>
<br>

## Technologies Used

<img src="./src/assets/images/React.svg" alt="React"><img src="./src/assets/images/Tailwind CSS.svg" alt="Tailwind CSS"><img src="./src/assets/images/IBM Watson.svg" alt="IBM Watson"><img src="./src/assets/images/Vercel.svg" alt="Vercel">
<img src="./src/assets/images/Python.svg" alt="Python"><img src="./src/assets/images/Numpy.svg" alt="Numpy"><img src="./src/assets/images/Pandas.svg" alt="Pandas"><img src="./src/assets/images/Scikit Learn.svg" alt="Scikit Learn">

## Features
The Machine Learning models are created by setting up a deployment space on IBM Watson Studio where we created an asset for the jupyter notebook on which we shipped our code to create an API Endpoint so that the desired output can be presented on our website.

* [Crop Recommendation](#crop-recommendation)
* [Yield Profit](#yield-profit)
* [ChatBot](#chatbot)

## Crop Recommendation

As far as which crop to grow is concerned, multiple parameters such as amount of nitrogen, phosphorus, potassium, the average temperature of the soil, humidity, average pH value and annual rainfall into consideration. <br>This model is able to predict among 22 major crop species which are grown in India. Random Forest Classifier algorithm has been implemented giving an accuracy of 97%.

## Yield Profit

For the prediction of the profit from the crop yield, we have taken the parameters crop, state, cost of cultivation per hectare, cost of production, yield (quintal/hectare) and support price. <br>Used Logistic Regression for predicting if the farmer will be profited or suffer a loss. Achieved an accuracy of 95% on test data.

## ChatBot

The ChatBot is created using the IBM Watson assistant platform. Using it, a user can communicate with the bot and ask queries such as "What are the top five crops in Punjab?"<br> The bot also assists users with problems such as crop recommendation and yield profit, among other things.

## Team Members

<a href="https://github.com/kanavmittal/">Kanav Mittal</a><br>
<a href="https://github.com/samankgupta/">Samank Gupta</a><br>
<a href="https://github.com/sarthak91-debug/">Sarthak Tyagi</a><br>
<a href="https://github.com/karmabir/">Karmabir Chakraborty
</a><br>
