class Api::ChannelsController < ApplicationController
    before_action :ensure_logged_in

def index
        @channels = current_user.servers.channels
        
        render :index
    end

    def show
        @channel = Channel.find(params[:id])

        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        # @channel.server_id = current_user.servers.id

        if @channel.save
            render :show
        else
            render json: @channels.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = current_user.servers.channels.find_by(id: params[:id])

        if @channel
            @channel.destroy
        else
            render json: ["Cant delete channel!"], status: 404
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:title, :server_id)
    end
end