class UsersController < ApplicationController
    def show
        @nickname = current_user.nickname
        @lessons = current_user.lessons.order("id DESC").page(params[:page]).per(5)
    end
end
