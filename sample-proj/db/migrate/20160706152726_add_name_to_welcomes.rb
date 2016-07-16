class AddNameToWelcomes < ActiveRecord::Migration
  def change
    add_column :welcomes, :name, :string
  end
end
