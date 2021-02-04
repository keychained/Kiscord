@servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :title, :user_id, :invite_code
    end
end
