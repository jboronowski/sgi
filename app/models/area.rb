class Area < ApplicationRecord
	has_many :services
	has_many :repair_histories
end
