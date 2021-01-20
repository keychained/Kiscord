class ServerMember < ApplicationRecord
    validates :member_id, presence: true, uniqueness: true

    belongs_to :member,
        foreign_key: :member_id,
        className: 'User'

    belongs_to :server,
        foreign_key: :server_id,
        className: 'Server'
end
