class MatchupsController < ApplicationController

  def index
    @matchups = Matchup.all
    render json: @matchups
  end

  def show
    @matchup = Matchup.find(params[:id])
    render json: @matchup
  end

  def get_matchups
    @matchups = Matchup.all
    @matchupsArray = []
    @matchups.each do |matchup|
      away_team = Team.find(matchup.away_team_id).name
      home_team = Team.find(matchup.home_team_id).name
      @matchupsArray << {away: away_team, home: home_team}
    end
    render json: @matchupsArray
  end
end
