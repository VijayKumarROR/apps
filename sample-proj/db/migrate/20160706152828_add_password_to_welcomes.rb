class AddPasswordToWelcomes < ActiveRecord::Migration
  def change
    add_column :welcomes, :password, :integer
  end
end
