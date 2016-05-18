require 'test_helper'

class MymoviesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mymovies)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mymovie" do
    assert_difference('Mymovie.count') do
      post :create, :mymovie => { }
    end

    assert_redirected_to mymovie_path(assigns(:mymovie))
  end

  test "should show mymovie" do
    get :show, :id => mymovies(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => mymovies(:one).to_param
    assert_response :success
  end

  test "should update mymovie" do
    put :update, :id => mymovies(:one).to_param, :mymovie => { }
    assert_redirected_to mymovie_path(assigns(:mymovie))
  end

  test "should destroy mymovie" do
    assert_difference('Mymovie.count', -1) do
      delete :destroy, :id => mymovies(:one).to_param
    end

    assert_redirected_to mymovies_path
  end
end
