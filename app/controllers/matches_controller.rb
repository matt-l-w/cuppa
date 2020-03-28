class MatchesController < ApplicationController
  before_action :authenticate_user!

  def index
    unless current_user.completed_onboarding_at? then
      redirect_to edit_user_registration_path and return
    end

    if current_user.seeker? then
      @matches = User.helper.available.limit(100).select{ |user| user.within(5000, current_user) }
    end
  end
end
