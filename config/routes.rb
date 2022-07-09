Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :directors do
      resources :movies do
        resources :actors 
      end
    end
    get '/actors', to: 'actors#all_actors'
    get '/movies', to: 'movies#all_movies'
    get '/movie/:id/likes', to: 'movies#movie_likes'
    get '/user/:id/likes', to: 'users#user_likes'
    post '/likes', to: 'likes#create'
    delete '/likes/:id', to: 'likes#destroy'
  end
end
