class CreateMatchups < ActiveRecord::Migration
  def change
    create_table :matchups do |t|
      t.integer :week
      t.references :away_team, index: true
      t.references :home_team, index: true
      t.references :winner, index: true
      
      t.timestamps
    end
  end
end
