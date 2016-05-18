class MymoviesController < ApplicationController
  # GET /mymovies
  # GET /mymovies.xml
  def index
    @mymovies = Mymovie.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @mymovies }
    end
  end

  # GET /mymovies/1
  # GET /mymovies/1.xml
  def show
    @mymovie = Mymovie.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @mymovie }
    end
  end

  # GET /mymovies/new
  # GET /mymovies/new.xml
  def new
    @mymovie = Mymovie.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @mymovie }
    end
  end

  # GET /mymovies/1/edit
  def edit
    @mymovie = Mymovie.find(params[:id])
  end

  # POST /mymovies
  # POST /mymovies.xml
  def create
    @mymovie = Mymovie.new(params[:mymovie])

    respond_to do |format|
      if @mymovie.save
        format.html { redirect_to(@mymovie, :notice => 'Mymovie was successfully created.') }
        format.xml  { render :xml => @mymovie, :status => :created, :location => @mymovie }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @mymovie.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /mymovies/1
  # PUT /mymovies/1.xml
  def update
    @mymovie = Mymovie.find(params[:id])

    respond_to do |format|
      if @mymovie.update_attributes(params[:mymovie])
        format.html { redirect_to(@mymovie, :notice => 'Mymovie was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @mymovie.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /mymovies/1
  # DELETE /mymovies/1.xml
  def destroy
    @mymovie = Mymovie.find(params[:id])
    @mymovie.destroy

    respond_to do |format|
      format.html { redirect_to(mymovies_url) }
      format.xml  { head :ok }
    end
  end
end
