class Server < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    has_many :channels,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: 'Channel'

    has_many :memberships,
        foreign_key: :server_id,
        class_name: 'ServerMember'

    has_many :members,
        through: :memberships
end
