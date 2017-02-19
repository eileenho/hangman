Rails.application.routes.draw do
  root "staticpages#root"

  namespace :api, defaults: { format: :json } do
    resources :words, only: [:create]
    resources :scores, only: [:create, :show]
  end

  get 'api/words/random', to: 'api/words#random'
  get 'api/words/leveled/:level', to: 'api/words#leveled'
  get 'api/words/:word', to: 'api/words#show'
end
