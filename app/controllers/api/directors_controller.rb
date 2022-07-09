class Api::DirectorsController < ApplicationController
    before_action :set_director, only: [:show, :update, :destroy]

    def index
        render json: Director.all
    end

    def show
        render json: @director
    end

    def destroy
        render json: @director.destroy
    end

    def create
        director = Director.new(director_params)
        if(director.save)
            render json: director
        else
            render json: director.errors.full_messages, status:422
        end
    end

    def update
        if @director.update(director_params)
            render json: @director
        else 
            render json:{errors: @director.errors.full_messages}, status:422
        end
    end

    private
    def set_director
        @director = Director.find(params[:id])
    end
    def director_params
        params.require(:director).permit(:name, :age)
    end
end
