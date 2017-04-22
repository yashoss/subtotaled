class CreateRegisters < ActiveRecord::Migration
  def change
    create_table :registers do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.string :img_url
      t.text :description
      t.integer :item_num
      t.integer :inventory_count
      t.timestamps null: false
    end
  end
end
