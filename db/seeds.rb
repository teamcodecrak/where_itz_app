movies = [
  {
  title: '456 Street',
  show_type: 'movie',
  network: ['hulu']
  genre: ['horror','foreign']
  us_rating: 'R'
  year: 2021
  },
  {
  title: 'Jumanji',
  show_type: 'movie',
  network: ['Netflix', 'Disney']
  genre: ['Adventure', 'comedy']
  us_rating: 'PG-13'
  year: 2019
  },
  {
  title: '5th Element',
  show_type: 'movie',
  network: ['netflix']
  genre: ['sci-fi','fantasy']
  us_rating: 'PG-13'
  year: 1997
  },
  {
  title: 'Jeffersons',
  show_type: 'tv show',
  network: ['hulu']
  genre: ['comedy']
  us_rating: 'PG-13'
  year: 1975
  }
]

first_user = User.first

list.each do |attribute|
first_user.list.create attribute
end