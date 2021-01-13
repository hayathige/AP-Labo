class Comment < ApplicationRecord
    has_one_attached :image
    belongs_to :lesson
    belongs_to :user
end