class Api::RegisterController < ApplicationController
  def create
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
    @item.destroy
    render json: {}
  end

  def show
    @item = Register.find(params[:id])
    render :show
  end

  private

  def register_params
    params.require(:gig).permit(
      :name,
      :price,
      :img_url,
      :description,
      :item_num,
      :inventory_count
    )
  end

end
