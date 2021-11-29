class MoviesController < ApplicationController
    def index
        movies = Movie.all
        render json: movies
    end
    require 'rest-client'

    def get_movies
        watchmode = ENV["WATCHMODE_API_KEY"]
        user_query = user_query_params
        url = "https://api.watchmode.com/v1/search/?apiKey=#{watchmode}&search_field=name&search_value=#{user_query}&type=tv,movie"
        logger.debug "URL should be valid: #{url}"
        response = RestClient.get(url)
        render json: JSON.parse(response.body)
    end
    private
    def user_query_params
        params[:user_query]||"breaking bad"
    end
end

