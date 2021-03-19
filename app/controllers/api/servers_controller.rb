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
            if (current_user.servers.include?(@server) || current_user.subscribed_servers.include?(@server))
                render json: ["Already a part of this server!"], status: 422
            else
                ServerMember.create({member_id: current_user.id, server_id: @server.id})
                render :show
            end
        else
          render json: ["Bad code!"], status: 422
        end
    end

    def leave
        @server = current_user.servers.find_by(id: params[:serverId]) || current_user.subscribed_servers.find_by(id: params[:serverId])
        @server_membership = ServerMember.find_by(member_id: current_user.id, server_id: params[:serverId])
    
         if @server && @server_membership
            @server_membership.destroy
            render json: @server.id
         else
            render json: ["There's been a problem!"], status: 422
         end
    end

    def destroy
        @server = current_user.servers.find_by(id: params[:id])

        if @server
           @server.destroy
        else
            render json: ["Cant delete someone else's server!"], status: 404
        end
    end

    private

    def server_params
        params.require(:server).permit(:title, :user_id, :invite_code)
    end
end
