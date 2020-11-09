class TasksController < ApplicationController
  before_action :set_article, only: [:update, :destroy]

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_task
    @task = Task.find(params[:index])
  end

end
