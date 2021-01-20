Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'top#index'
  resources :micro_bit
  resources :lessons do
    resources :comments, only: [:create]
    resources :likes
  end
  resources :users
  resources :quizzes
end