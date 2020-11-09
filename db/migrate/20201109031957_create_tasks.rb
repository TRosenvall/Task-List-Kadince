class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :taskName
      t.boolean :taskComplete
    end
  end
end
