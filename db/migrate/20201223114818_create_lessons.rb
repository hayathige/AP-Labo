class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|

      t.string :name
      t.string :subject
      t.text  :text
      t.string :image
      t.timestamps
    end
  end
end
