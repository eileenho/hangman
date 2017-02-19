class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.string :player_name
      t.integer :score
      t.belongs_to :word, index: true

      t.timestamps
    end
  end
end
