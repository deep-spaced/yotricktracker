require 'test_helper'

class TricksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trick = tricks(:one)
  end

  test "should get index" do
    get tricks_url, as: :json
    assert_response :success
  end

  test "should create trick" do
    assert_difference('Trick.count') do
      post tricks_url, params: { trick: { description: @trick.description, difficulty: @trick.difficulty, image_url: @trick.image_url, title: @trick.title, url: @trick.url } }, as: :json
    end

    assert_response 201
  end

  test "should show trick" do
    get trick_url(@trick), as: :json
    assert_response :success
  end

  test "should update trick" do
    patch trick_url(@trick), params: { trick: { description: @trick.description, difficulty: @trick.difficulty, image_url: @trick.image_url, title: @trick.title, url: @trick.url } }, as: :json
    assert_response 200
  end

  test "should destroy trick" do
    assert_difference('Trick.count', -1) do
      delete trick_url(@trick), as: :json
    end

    assert_response 204
  end
end
