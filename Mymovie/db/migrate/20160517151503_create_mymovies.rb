class CreateMymovies < ActiveRecord::Migration
  def self.up
    create_table :mymovies do |t|
      t.string :Title
      t.integer :Rating

      t.timestamps
    end
  end

  def self.down
    drop_table :mymovies
  end
end
