class RemoveImageFromLessons < ActiveRecord::Migration[5.2]
  def change
    remove_column :lessons, :image, :string
  end
end
