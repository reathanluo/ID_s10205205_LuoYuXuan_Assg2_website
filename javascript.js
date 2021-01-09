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
            confirmed.push(obj.infected);
            recovered.push(obj.recovered);
            deaths.push(obj.deceased);
        })
        for(let i=0;i<6;i++){
            active.shift();
        }
        


        console.log(deaths);

        total_active =data[data.length-1].activeCases;
        total_confirmed = data[data.length-1].infected;
        total_recovered = data[data.length-1].recovered;
        total_deaths = data[data.length-1].deceased;
        $("#active").append(total_active);
        $("#confirmed").append(total_confirmed);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);

        var mychart = document.getElementById("mychart").getContext('2d');

        var chart = new Chart(mychart,{
            type:'line',
            data:{
                labels:confirmed,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data: confirmed,
                        backgroundColor:"#f1c40f",
                        minBarLength:100,
                    },
                    {
                        label:"Active Cases",
                        data: active,
                        backgroundColor:"#99ffff",
                        minBarLength:100,
                    },
                    {
                        label:"Recovered Cases",
                        data: recovered,
                        backgroundColor:"#2ec771",
                        minBarLength:100,
                    },
                    {
                        label:"Deceased Cases",
                        data: deaths,
                        backgroundColor:"#e74c3c",
                        minBarLength:100,
                    }
                ]
            },
            options:{}
        })
        
    })
});
