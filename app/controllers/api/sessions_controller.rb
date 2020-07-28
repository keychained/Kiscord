class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ["Invalid Credentials"], status: 401
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
