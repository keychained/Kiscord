class MessagesChannel < ApplicationCable::Channel
    def subscribed
        # stream_for "messages_channel#{params[:channelId]}"
        stream_for messageChannel
    end

    def messageChannel
        Channel.find_by(params[:id])
    end

    def speak(data)
        socket = { body: data['body'], user_id: data["userId"], channel_id: data["channelId"] }
        MessagesChannel.broadcast_to(messageChannel, socket)
    end

    def unsubscribed
    end
end