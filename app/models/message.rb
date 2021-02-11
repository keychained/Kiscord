class Message < ApplicationRecord
    validates :body, :user_id, :channel_id, presence: true
    validates :body, length: { minimum: 1 }

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: 'Channel'

    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'
end