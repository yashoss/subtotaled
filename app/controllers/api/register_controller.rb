class Api::RegisterController < ApplicationController
  def create
    @item = Register.create!(register_params)
    render :show
  end

  def index
    # if(params[:category] == nil || params[:category] == "all")
    #   @gigs = Gig.includes(:user, :reviews).all
    # elsif (params[:category] == "gaming" || params[:category] == "design" || params[:category] == "web-dev" || params[:category] == "art" || params[:category] == "writing")
    #   @gigs = Gig.where(category: params[:category]).includes(:user, :reviews)
    # else
    #   @gigs = Gig.where('lower(title) Like ?', "%#{params[:category].downcase}%").includes(:user, :reviews)
    # end
    render :index
  end

  def update
    @item = Register.update(params[:id], gig_params)
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

  def gig_params
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
