class Api::MoviesController < ApplicationController
    before_action :set_director, except: [:all_movies]
    before_action :set_movie, only: [:show, :destroy, :update, :movie_likes]
    
    def all_movies
        render json: Movie.all
    end

    def movie_likes
        render json: @movie.users
    end
    
    def index
        render json: @director.movies
    end
    
    def show
        render json: @movie
    end
    
    def create
        @movie = @director.movies.new(movie_params)
        if(@movie.save)
            render json: @movie
        else
            render json @movie.errors.full_messages, status:422
        end
    end
    
    def update
        if(@movie.update(movie_params))
            render json: @movie
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end
    
    def destroy
        render json: @movie.destroy
    end
    
    private
    def set_director
        @director = Director.find(params[:director_id])
    end
    def set_movie
        @movie = @director.movies.find(params[:id])
    end
    def movie_params
        params.require(:movie).permit(:director_id, :title, :year, :length, :rating, 
        :mpa, :studio, :description, :budget, :poster)
    end
end
