class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :servers, :title
    add_index :servers, :user_id
  end
end
