class CommentsController < ApplicationController
    def create
        comment = Comment.create(comment_params)
        redirect_to "/lessons/#{comment.lesson.id}"
        
    end
    
    private
    def comment_params
        params.require(:comment).permit(:text, :image).merge(user_id: current_user.id, lesson_id: params[:lesson_id])
    end
end
