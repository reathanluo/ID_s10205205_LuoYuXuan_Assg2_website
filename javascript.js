let url = "https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-03-02/2021-01-01"
fetch(url)
    .then(res => res.json())
    .then(posts => console.log(posts))
    
    .catch(function(error){
        console.log(error)
    })