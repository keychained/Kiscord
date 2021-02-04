json.extract! @server, :id, :title, :user_id, :invite_code

json.members do
  @server.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :id, :title
    end
  end
end