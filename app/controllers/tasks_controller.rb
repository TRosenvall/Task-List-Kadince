class TasksController < ApplicationController
  before_action :set_article, only: [:update, :destroy]

  def index
    @tasks = Task.all
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
