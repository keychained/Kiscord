class MessagesChannel < ApplicationCable::Channel
    def subscribed
        @channel_messages = Messages.find_by(id: params[:channel_id])
        stream_for @messages
    end

    def received(data)
        MessagesChannel.broadcast_to( "channel_messages", { messages: @channel_messages })
    end

    def unsubscribed
    end
end