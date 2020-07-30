class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ["Email/Password is required"], status: 401
        end
    end

    def destroy
        logout!

        if current_user
            render '/api/users/show'
        else
            render json: ["Sign In first!"], status: 404
        end
    end
end
