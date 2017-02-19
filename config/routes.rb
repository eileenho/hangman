Rails.application.routes.draw do
  root "staticpages#root"

  namespace :api, defaults: { format: :json } do
    resources :players
  end

  get 'api/words/random', to: 'api/words#random'
end
