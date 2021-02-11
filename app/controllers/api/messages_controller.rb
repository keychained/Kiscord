class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all

        render :index
    end

    def create
        @message = Message.new(
            body: params[:body],
            user_id: params[:user_id],
            channel_id: params[:channel_id]
        )

        if @message.save
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    /private

    def message_params
        params.require(:message).permit(:body, :user_id, :channel_id)
    end/
end