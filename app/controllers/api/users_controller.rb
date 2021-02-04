class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            Server.create({title: "General", user_id: @user.id, invite_code: SecureRandom.hex(5).upcase})
            ServerMember.create({member_id: @user.id, server_id: Server.first.id})
            login!(@user)
            render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render "/api/users/show"
    end

    def index
        @users = User.all
        render "api/users/index"
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
