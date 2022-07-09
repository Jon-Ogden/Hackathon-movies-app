class Api::UsersController < ApplicationController

    def user_likes
        @user = User.find(params[:id])
        render json: @user.movies
    end

end
