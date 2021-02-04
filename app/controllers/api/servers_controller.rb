class Api::ServersController < ApplicationController
    before_action :ensure_logged_in

    def index
        @servers = current_user.servers
        @servers += current_user.subscribed_servers
        
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
            ServerMember.create({member_id: @server.user_id, server_id: @server.id})
            Channel.create({title: "general", server_id: @server.id})
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def join
        @server = Server.find_by(invite_code: params[:inviteCode])
    
        if @server
            if current_user.servers.include?(@server)
                render json: ["Already a part of this server!"], status: 422
            else
                ServerMember.create({member_id: current_user.id, server_id: @server.id})
                render :show
            end
        else
          render json: ["Bad code!"], status: 422
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
        params.require(:server).permit(:title, :user_id, :invite_code)
    end
end
