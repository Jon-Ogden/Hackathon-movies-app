class Api::ActorsController < ApplicationController
    before_action :set_movie, except: [:all_actors]
    before_action :set_actor, only: [:show, :destroy, :update]
    
    def all_actors
        render json: Actor.all
    end
    
    def index
        render json: @movie.actors
    end
    
    def show
        render json: @actor
    end
    
    def create
        @actor = @movie.actors.new(actor_params)
        if(@actor.save)
            render json: @actor
        else
            render json @actor.errors.full_messages, status:422
        end
    end
    
    def update
        if(@actor.update(actor_params))
            render json: @actor
        else
            render json: @actor.errors.full_messages, status: 422
        end
    end
    
    def destroy
        render json: @actor.destroy
    end
    
    private
    def set_movie
        @movie = Movie.find(params[:movie_id])
    end
    def set_actor
        @actor = @movie.actors.find(params[:id])
    end
    def actor_params
        params.require(:actor).permit(:movie_id, :name, :age, :char_name)
    end
end
