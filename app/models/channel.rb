class Channel < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: :server_id }

    belongs_to :server,
        foreign_key: :server_id,
        class_name: 'Server'

    has_one :owner,
        through: :server
end
