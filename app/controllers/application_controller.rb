class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  # re-examine this to make sure this is ok
  protect_from_forgery with: :null_session , if: Proc.new { |c| c.request.format == 'application/json' }
end
