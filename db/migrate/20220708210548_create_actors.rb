class CreateActors < ActiveRecord::Migration[7.0]
  def change
    create_table :actors do |t|
      t.string :name
      t.integer :age
      t.string :char_name
      t.belongs_to :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
