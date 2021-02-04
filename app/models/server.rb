class Server < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: :user_id}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'

    has_many :channels,
        foreign_key: :server_id,
        class_name: 'Channel'

    has_many :memberships,
        foreign_key: :server_id,
        class_name: 'ServerMember'

    has_many :members,
        through: :memberships,
        source: :member
end
