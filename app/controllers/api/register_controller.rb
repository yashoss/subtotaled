class Api::RegisterController < ApplicationController
  def create
    register_params["user_id"] = current_user
    register_params["price"] = register_params["price"].to_f
    register_params["item_num"] = register_params["item_num"].to_i
    register_params["inventory_count"] = register_params["inventory_count"].to_i
    @item = Register.create!(register_params)
    render :show
  end

  def index
    @register = Register.where(user_id: current_user).all
    render :index
  end

  def update
    @item = Register.update(params[:id], register_params)
    render json: {}
  end

  def destroy
    @item = Register.find(params[:id])
    user_id = @item.user_id
    @item.destroy
    @register = Register.where(user_id: user_id).all
    render :index
  end

  def show
    @item = Register.find(params[:id])
    render :show
  end

  private

  def register_params
    params.require(:item).permit(
      :user_id,
      :name,
      :price,
      :img_url,
      :description,
      :item_num,
      :inventory_count
    )
  end

end
