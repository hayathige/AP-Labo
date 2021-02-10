class RemoveLikesCountFromLessons < ActiveRecord::Migration[5.2]
  def change
    remove_column :lessons, :likes_count, :integer
  end
end
