class Welcome < ActiveRecord::Base

validates_presence_of :name, :password

def self.some_method(id)
find(id)

end
end