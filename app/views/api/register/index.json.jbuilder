@register.each do |item|
  json.set! item.id do
    json.id item.id
    json.name item.name
    json.price item.price
    json.img_url item.img_url
    json.description item.description
    json.item_num item.item_num
    json.inventory_count item.inventory_count
  end
end
