class WelcomesController < ApplicationController
  def index 
   @welcomes = Welcome.all
  end
  def new
    @welcome = Welcome.new
  end
  def create
   @welcome =Welcome.new(welcome_params)
   if @welcome.save    
   flash[:notice] = "saved successfully"
   redirect_to welcomes_path
   else
   flash[:error] = @welcome.errors.full_messages.to_sentence
   render "new"
  end
end
  def edit
     @welcome = Welcome.some_method(params[:id])
   end
  def update
		@welcome = Welcome.some_method(params[:id])
		if @welcome.update_attributes(welcome_params)
			flash[:notice] = "Updated successfully"
			redirect_to welcomes_path
    else
			flash[:error] = "editpage error"
			render "new"
		end
  end
  def delete
@welcomes = Welcome.all
    @welcome = Welcome.find(params[:id])
    if @welcome.destroy
     flash[:notice] = "delete successfully"
     render "index"
    else 
     flash[:error] = "not delete"
     render "index"
   end
end
private
	def welcome_params
	params.require(:welcome).permit(:name, :password)
end
end
