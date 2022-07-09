class Api::LikedMoviesController < ApplicationController
    before_action :set_movie, except: [:all_liked_movies]
    before_action :set_liked_movie, only: [:show, :destroy]
    
    def all_liked_movies
        render json: Liked_movie.all
    end
    
    def index
        render json: @movie.liked_movies
    end
    
    def show
        render json: @liked_movie
    end
    
    def create
        @liked_movie = @movie.liked_movies.new(liked_movie_params)
        if(@liked_movie.save)
            render json: @liked_movie
        else
            render json @liked_movie.errors.full_messages, status:422
        end
    end
    
    def destroy
        render json: @liked_movie.destroy
    end
    
    private
    def set_movie
        @movie = movie.find(params[:movie_id])
    end
    def set_liked_movie
        @liked_movie = @movie.liked_movies.find(params[:id])
    end
    def liked_movie_params
        params.require(:liked_movie).permit(:movie_id, :user_id, :age, :char_name)
    end
end
