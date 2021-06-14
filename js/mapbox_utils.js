function buildDOMObjects(forecastData, location){

    $('#forecast-container').html('');

    $('#city').html('');
    let city = location.name;

    $('#city').append(`<h3 class="text-center pb-4 pt-5">The weather in: ${city}</h3>`)

    renderCards(forecastData);
}


function renderCards(forecastData) {
    for (let i = 0; i < forecastData.length; i++) {

        let temp = forecastData[i].main.temp;
        console.log(forecastData[i].main.temp);
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let desc = forecastData[i].weather[0].description;
        let iconCode = forecastData[i].weather[0].icon;

        let timeDate = forecastData[i].dt;
        timeDate = new Date(timeDate * 1000);
        let formattedTime = new Date(timeDate).toDateString();

        $('#forecast-container').append(`
<div class="card col-2 mx-5" >
        <div class=“card-body”>
            <p class=“card-title”>${formattedTime}</p>
            <p class=“card-text”> <hr> Currently: ${Math.round(temp)}˚F
            <hr>
            <img src="http://openweathermap.org/img/w/${iconCode}.png"/><br>
            ${desc}
            <hr>
            ITS GONNA FEEL LIKE  ${Math.round(feels)}˚F
            <hr>
            High: ${Math.round(max)}˚F
            <hr>
            Low: ${Math.round(low)}˚F
            </p>
        </div>
</div> `)

    }

}

$(document).ready(function (event) {
    $('body').css('background-color', '#ecf0f1');
    $('#nav').css('background-color', '#000000');
})