class Movie < ActiveRecord::Base

validates_presence_of :title, :rating
validates_numericality_of :rating, :greater_than_or_equal_to => 1, :less_than_or_equal_to => 5

end
