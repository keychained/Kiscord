class Api::ServersController < ApplicationController
    before_action :ensure_logged_in

    def index
        @servers = current_user.servers
        
        render :index
    end

    def show
        @server = Server.find(params[:id])

        render :show
    end

    def create
        @server = Server.new(server_params)
        @server.user_id = current_user.id

        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = current_user.find_by(id: params[:id])

        if @server
            @server.destroy
        else
            render json: ["Cant delete server!"], status: 404
        end
    end

    private

    def server_params
        params.require(:server).permit(:title, :user_id)
    end
end
