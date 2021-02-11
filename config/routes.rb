Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index, :create]
    resources :servers, only: [:index, :show, :create, :destroy]
    resources :channels, only: [:index, :show, :create, :destroy]
    resources :messages, only: [:index, :show, :create]
    post 'servers/join', to: 'servers#join'
    delete 'servers', to: 'servers#leave'
    
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL a vailable within this file, see http://guides.rubyonrails.org/routing.html
end
