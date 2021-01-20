class Like < ApplicationRecord
    belongs_to :lesson, counter_cache: :likes_count
    belongs_to :user
end
