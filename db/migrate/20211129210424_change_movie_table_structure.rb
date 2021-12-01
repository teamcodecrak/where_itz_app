class ChangeMovieTableStructure < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :title
    remove_column :movies, :show_type
    remove_column :movies, :us_rating
    remove_column :movies, :year
    remove_column :movies, :network
    remove_column :movies, :genre
    add_column :movies, :name, :string
    add_column :movies, :type, :string
    add_column :movies, :genres, :string, array:true, default: []
    add_column :movies, :officialSite, :string
    add_column :movies, :network, :string, array:true, default: []
    add_column :movies, :image, :string, array:true, default: []
    add_column :movies, :summary, :string
  end
end
