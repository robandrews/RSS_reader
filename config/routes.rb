NewReader::Application.routes.draw do
  devise_for :users
  resources :feeds, only: [:index, :create, :show] do
    resources :entries, only: [:index]
  end

  root to: "feeds#index"
end
