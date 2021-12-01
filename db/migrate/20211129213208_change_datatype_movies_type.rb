class ChangeDatatypeMoviesType < ActiveRecord::Migration[6.1]
  def change
    rename_column :movies, :type, :show_type
  end
end
