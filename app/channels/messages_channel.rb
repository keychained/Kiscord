class MessagesChannel < ApplicationCable::Channel
    def subscribed
        stream_for "messages_channel#{params[:channelId]}"
    end

    def speak(data)
        socket = { body: data['body'], user_id: data["userId"], channel_id: data["channelId"] }
        MessagesChannel.broadcast_to("messages_channel", socket)
    end

    def unsubscribed
    end
end