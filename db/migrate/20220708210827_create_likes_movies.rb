class CreateLikesMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :likes_movies do |t|
      t.integer :user_id
      t.belongs_to :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
