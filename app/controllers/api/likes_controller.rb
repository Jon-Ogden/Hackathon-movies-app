class Api::LikesController < ApplicationController
    before_action :set_like, only: [:destroy]
    
    
    def create
        @like = Like.new(like_params)
        if(@like.save)
            render json: @like
        else
            render json @like.errors.full_messages, status:422
        end
    end
    
    def destroy
        render json: @like.destroy
    end
    
    private
    def set_like
        @like = Like.find(params[:id])
    end
    def like_params
        params.require(:like).permit(:movie_id, :user_id)
    end
end
