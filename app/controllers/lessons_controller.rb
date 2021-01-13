class LessonsController < ApplicationController
    # before_action :move_to_index, except[:index, :show]

    def index
        @lessons = Lesson.includes(:user).order("id DESC").page(params[:page]).per(5)
    end
    
    def new
        @lesson = Lesson.new
    end
    
    def create
        @lesson = Lesson.create(subject: lesson_params[:subject], text: lesson_params[:text], image: lesson_params[:image], user_id: current_user.id)
    end
    
    def destroy
        lesson = Lesson.find(params[:id])
        lesson.destroy if lesson.user_id == current_user.id
    end
    
    def edit
        @lesson = Lesson.find(params[:id])
    end
    
    def update
        lesson = Lesson.find(params[:id])
        if lesson.user_id == current_user.id
            lesson.update(lesson_params)
        end
    end
    
    def show
        @lesson = Lesson.find(params[:id])
        @comment = Comment.new
        @comments = @lesson.comments.includes(:user)
    end
    
    private
        def lesson_params
            params.require(:lesson).permit(:subject, :text, :image)
        end
    
        def move_to_index
            redirect_to action: :index unless user_signed_in?
        end
end