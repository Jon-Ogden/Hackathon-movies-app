class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.belongs_to :director, null: false, foreign_key: true
      t.string :title
      t.integer :year
      t.integer :length
      t.string :rating
      t.string :mpa
      t.string :studio
      t.text :description
      t.integer :budget
      t.string :poster

      t.timestamps
    end
  end
end
