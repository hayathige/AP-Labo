class LikesController < ApplicationController
    
    def create
        @like = Like.create(user_id: current_user.id, lesson_id: params[:lesson_id])
        @like = Like.where(lesson_id: params[:lesson_id])
        @lessons = Lesson.all
    end
    
    def destroy
        like = Like.find_by(user_id: current_user.id, lesson_id: params[:lesson_id])
        like.destroy
        @likes = Like.where(lesson_id: params[:lesson_id])
        @lessons = Lesson.all
    end
    
end
