class MoviesController < ApplicationController

    require 'rest-client'

    def index
        watchmode = ENV["WATCHMODE_API_KEY"]
        user_query = user_query_params
        url = "https://api.watchmode.com/v1/search/?apiKey=#{watchmode}&search_field=name&search_value=#{user_query}&type=tv,movie"
        response = RestClient.get(url)
        render json: response
    end
    private
    def user_query_params
        params[:user_query]
    end
end

