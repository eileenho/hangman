class DropTables < ActiveRecord::Migration[5.0]
  def up
    drop_table :games
    drop_table :players
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
