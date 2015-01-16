class Team < ActiveRecord::Base
  has_many :matchups, foreign_key: "away_team"
  has_many :matchups, foreign_key: "home_team"
  has_many :matchups, foreign_key: "winner"
end
