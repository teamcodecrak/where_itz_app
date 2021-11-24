Movie.destroy_all
MovieList.destroy_all
List.destroy_all
User.create username: 'Anthony', email: 'User@hotmail.com', password: '123456'
first_user = User.first

first_list = List.create(list_name: 'first list', user_id: first_user.id)

movies = [
    {
        title: '456 Street',
        show_type: 'movie',
        network: ['Hulu'],
        genre: ['Horror','Foreign'],
        us_rating: 'R',
        year: 2021
    },
    {
        title: 'Jumanji',
        show_type: 'movie',
        network: ['Netflix', 'Disney'],
        genre: ['Adventure', 'Comedy'],
        us_rating: 'PG-13',
        year: 2019
    },
    {
        title: 'Easy Street',
        show_type: 'tv show',
        network: ['Amazon'],
        genre: ['Comedy'],
        us_rating: 'PG',
        year: 2006
    },
    {
        title: 'A Bronx Tale',
        show_type: 'movie',
        network: ['Hulu'],
        genre: ['Drama'],
        us_rating: 'PG-13',
        year: 1993
    }
]

movies.each do |attributes|
    Movie.create attributes
end

first_movie = Movie.first

MovieList.create(list: first_list, movie: first_movie)