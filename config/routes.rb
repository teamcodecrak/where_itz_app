Rails.application.routes.draw do
  resources :movie_lists
  resources :lists
  resources :movies
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request) { request.format.html? }
  get '/get_movies' => 'movies#get_movies'
  get '/show_movies_on_list/:id' => 'lists#show_movies_on_list'

  root 'home#index'
end
