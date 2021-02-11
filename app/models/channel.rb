class Channel < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: :server_id }

    belongs_to :server,
        foreign_key: :server_id,
        class_name: 'Server'

    has_one :owner,
        through: :server

    has_many :messages,
        foreign_key: :channel_id,
        class_name: 'Message'
end
