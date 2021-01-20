class Channel < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: 'Server'

    has_one :owner,
        through: :server
end
