Movie.destroy_all
MovieList.destroy_all
List.destroy_all
User.create username: 'Anthony', email: 'User@hotmail.com', password: '123456'
first_user = User.first

first_list = List.create(list_name: 'first list', user_id: first_user.id)

first_movie = Movie.create(title: '456 Street', show_type: 'movie', network: ['hulu'], genre: ['Horror','Foreign'], us_rating: 'R', year: 2021)

second_movie = Movie.create(title: 'Jumanji', show_type: 'movie', network: ['Netflix', 'Disney'], genre: ['Adventure', 'Comedy'], us_rating: 'PG-13', year: 2019)

MovieList.create(list: first_list, movie: first_movie)