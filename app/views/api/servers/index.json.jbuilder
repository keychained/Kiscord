@servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :title, :member_ids, :user_id, :invite_code, :channel_ids
    end
end


