class CreateTricks < ActiveRecord::Migration[5.2]
  def change
    create_table :tricks do |t|
      t.string :title
      t.string :description
      t.string :url
      t.string :image_url
      t.integer :difficulty
      t.boolean :completed

      t.timestamps
    end
  end
end
