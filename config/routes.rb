Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'friends#index'

  namespace :api do
    namespace :v1 do
      resources :gifts, defaults: { format: 'json' }
      resources :friends
    end
  end

  resources :friends, only: [:index, :show, :new, :edit]

end
