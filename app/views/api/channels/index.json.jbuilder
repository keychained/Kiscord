@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :title, :server_id
    end
end