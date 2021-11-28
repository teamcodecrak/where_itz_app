class ListsController < ApplicationController
    def index
        list = List.all
        render json: list
    end
    def create
        list = List.create(list_params)
        if list.valid? 
            render json: list
        else
            render json: list.errors, status: 422
        end
    end
    def update 
        list = List.find(params[:id])
        list.update(list_params)
        if list.valid? 
            render json: list 
        else 
            render json: list.errors, status: 422
        end
    end
    
    private
    def list_params
        params.require(:list).permit(:list_name, :user_id)
    end
end
