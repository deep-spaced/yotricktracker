class TricksController < ApiController
  before_action :set_trick, only: [:show, :update, :destroy]

  # GET /tricks
  def index
    @tricks = Trick.all

    render json: @tricks
  end

  # GET /tricks/1
  def show
    render json: @trick
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trick
      @trick = Trick.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trick_params
      params.require(:trick).permit(:title, :description, :url, :image_url, :difficulty)
    end
end
