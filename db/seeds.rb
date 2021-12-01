Movie.destroy_all
MovieList.destroy_all
List.destroy_all
User.create username: 'Anthony', email: 'User@hotmail.com', password: '123456'
first_user = User.first

first_list = List.create(list_name: 'first list', user_id: first_user.id)

movies = [
    {
        name:"Dancing with the Stars",
        show_type:"Reality",
        genres:["Music"],
        officialSite:"https://abc.com/shows/dancing-with-the-stars",
        network:"ABC",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/358/895815.jpg",
        summary:"The hit series in which celebrities perform choreographed dance routines that are judged by a panel of renowned ballroom experts",
    },{
        name:"Dancing with the Stars",
        show_type:"Reality",
        genres:[],
        officialSite:"https://goplay.be/dancing-with-the-stars",
        network:"ABC",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/376/940172.jpg",
        summary:nil,
    },{
        name:"Dancing with the Stars",
        show_type:"Reality",
        genres:["Family"],
        officialSite:"https://goplay.be/dancing-with-the-stars",
        network:"Seven Network",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/44/111415.jpg",
        summary:"Dancing with the Stars pairs celebrities with professional ballroom dancers who each week compete against each other in a dance-off to impress a panel of judges and ultimately the viewing public in order to survive potential elimination. Through a telephone and SMS voting, viewers vote for the duo they think should remain in the competition. Judges' scores are combined with the viewer votes when determining which duo is eliminated."
    }
]

movies.each do |attributes|
    Movie.create attributes
end

first_movie = Movie.first

MovieList.create(list: first_list, movie: first_movie)