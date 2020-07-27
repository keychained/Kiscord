class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:email], params[:user][:password])

        if @user.nil?
            render json: ['Invalid Credentials']
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        logout!

        if current_user
            render json: {}
        else
            render json: { message: 404 }
        end
    end
end