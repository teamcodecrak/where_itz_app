class ListsController < ApplicationController
    def index
        list = List.all
        render json: list
    end
end
