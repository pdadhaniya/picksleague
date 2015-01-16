class MatchupsController < ApplicationController
  respond_to :html, :json
  def index
    @matchups = Matchup.all
    render json: @matchups
  end

  def show
    @matchup = Matchup.find(params[:id])
    render json: @matchup
  end

  def create
    @matchup = Matchup.new(matchup_params)

    respond_to do |format|
      if @matchup.save
        format.html { redirect_to @matchup, notice: "Matchup was successfully created." }
        format.json { render json: @matchup}
      else
        format.json { render json: @matchup.errors }
      end
    end
  end

  def get_matchups
    @matchups = Matchup.all
    @matchupsArray = []
    @matchups.each do |matchup|
      @matchupsArray << {week: matchup.week, away: Team.find(matchup.away_team_id).name, home: Team.find(matchup.home_team_id).name}
    end
    render json: @matchupsArray
  end

  private

  def matchup_params
    params.require(:matchup).permit(:name, :week, :away_team_id, :home_team_id, :winner_id)
  end
end
