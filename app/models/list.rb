class List < ApplicationRecord
    belongs_to :user
    has_many :movie_lists
    has_many :movies, through: :movie_list
end
