class ChangeDatatypeOfNetworkImage < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :network
    remove_column :movies, :image

    add_column :movies, :network, :string
    add_column :movies, :image, :string
  end
end
