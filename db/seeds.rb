Movie.destroy_all
MovieList.destroy_all
List.destroy_all

first_user = User.first

first_list = List.create(list_name: "first list", user_id: first_user.id)

# movies = [
#   {
#   title: '456 Street',
#   show_type: 'movie',
#   network: ['hulu'],
#   genre: ['Horror','Foreign'],
#   us_rating: 'R',
#   year: 2021,
#   },
#   {
#   title: 'Jumanji',
#   show_type: 'movie',
#   network: ['Netflix', 'Disney'],
#   genre: ['Adventure', 'Comedy'],
#   us_rating: 'PG-13',
#   year: 2019,
#   },
#   {
#   title: '5th Element',
#   show_type: 'movie',
#   network: ['netflix'],
#   genre: ['Sci-fi','Fantasy'],
#   us_rating: 'PG-13',
#   year: 1997,
#   },
#   {
#   title: 'Jeffersons',
#   show_type: 'tv show',
#   network: ['hulu'],
#   genre: ['Comedy'],
#   us_rating: 'PG-13',
#   year: 1975
#   }
# ]



# MovieList.create(list: horror, movie: movies[0])
# MovieList.create(list: foreign, movie: movies.first)



