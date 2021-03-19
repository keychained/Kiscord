class Api::SessionsController < ApplicationController
    
    def create
        if User.find_by(email: params[:user][:email])
            @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
            if @user
                login!(@user)
                render '/api/users/show'
            else
                render json: ["Password does not match", "This field is required"], status: 401
            end
        else
            render json: ["Email does not exist", "This field is required"], status: 422
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
