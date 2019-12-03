function search(){

    let display = document.querySelector("#search-results")
    let searchQuery = document.querySelector("#movieSearch").value // Get value of what is being searched in input

    console.log(searchQuery)

// Search for multiple titles on homepage - api calls returns an object of movies to search title
   $.ajax({
       type: 'GET',
       url: '//www.omdbapi.com/?apikey=4926b9e0&s='+searchQuery, // OMDB API get request with searchQuery in URL parameter
       success: function(data){
           let resultSet = data.Search
           console.log(data) // Prints out the JSON array with
           var info = data

           let divContainer = $('#search-results')
            divContainer.empty();
               resultSet.forEach(movie=>{
                   display.innerHTML += '<div class="col-lg-3 col-md-4"><div class="card card-list"><a href="detail/' + movie.imdbID + '"><img class=\"card-img-top\" src="' + movie.Poster +'"><div class="card-body"><h4>'+ movie.Title +'</h4></a><p>'+ movie.Year +'</p><a href="http://www.imdb.com/title/' + movie.imdbID + '" target="_blank"  ">Link to IMDB</a></div> </div>';
           });

       }
   })
}




