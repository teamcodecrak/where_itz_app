class MovieListsController < ApplicationController
    def index
        movie_lists = MovieList.all
        render json: movie_lists
    end

    def create
        #figure out how to pass params to movie-list controller
        #active record query to create ".create method"
    end
    
end
