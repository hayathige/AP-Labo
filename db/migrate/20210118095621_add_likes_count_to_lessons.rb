class AddLikesCountToLessons < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :likes_count, :integer
  end
end
