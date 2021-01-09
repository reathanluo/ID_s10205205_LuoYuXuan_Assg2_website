$(document).ready(function(){
    var url = "https://api.apify.com/v2/datasets/suHgi59tSfu02VsRO/items?format=json&clean=1"

    $.getJSON(url,function(data){
        console.log(data);

        var total_active,total_recovered,total_deaths,total_confirmed;

        var active = [];
        var confirmed = [];
        var recovered = [];
        var deaths = [];

        $.each(data,function(id,obj){
            active.push(obj.activeCases);
            confirmed.push(obj.confirmed);
            recovered.push(obj.recovered);
            deaths.push(obj.deaths);
        })

        console.log(active);

        total_active =data[data.length-1].activeCases;
        total_confirmed = data[data.length-1].infected;
        total_recovered = data[data.length-1].recovered;
        total_deaths = data[data.length-1].deceased;
        $("#active").append(total_active);
        $("#confirmed").append(total_confirmed);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);
    })



})