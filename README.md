# README

# Where Itz App
> With WhereItzApp, you can search and find where your favorite shows are streaming in one central location. Create and share customized movie lists based on your interests and get recommendations from fellow users. 
> a product of TeamCodeCrak
<img width="1042" alt="logo" src="https://user-images.githubusercontent.com/88990992/141697441-02bd2003-4497-4969-9cf2-ea6d16fa749b.png">

- "This product uses the TVmaze API but is not endorsed or certified by TVmaze."

> Live demo [_here_](https://lit-brook-40793.herokuapp.com/). 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Tips](#tips)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- Full stack web developers
- We are taking on a capstone project to showcase everything we have learned


## Technologies Used
- React in rails application
- yarn
- bundle
- reactstrap
- bootstrap
- postman
- VS code
- Atom
- Rubocop
- figma
- Learn academy syllabus
- Google search engine


## Features
List the ready features here:
- Search
- Update List title
- Delete List title
- View shows
- External links


## Setup
- rails-react app:
- $ rails new capstone_app -d postgresql -T
- $ cd capstone_app
- $ rails db:create
- $ git remote add origin ... created by GitHub Classroom
- $ git checkout -b main
- $ git add .
- $ git commit -m "initial commit"
- $ git push origin main
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ bundle add rspec-rails
- $ rails generate rspec:install
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate


In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:  
- `config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }`

Check the application:
- Begin the rails server: $ rails server
- In a separate terminal: $ bin/webpack-dev-server
- In a browser navigate to: http://localhost:3000
​​- Navigate to `http://localhost:3000/users/sign_in` and see a log in page.
- Navigate to `http://localhost:3000/users/sign_up` and see a sign up page.

- $ rails generate react:component App
This command created a directory in app called javascript.
In app/javascript there will be another directory called components that will contain our App.js React component with some basic code.

- $ rails g controller Home

Add a file in app/views/home called `index.html.erb`
By calling the React Component in erb tags the component will be rendered in the browser through the Rails view. 
Inside the following file app/views/home/index.html.erb, add the code:
`<%= react_component 'App' %>`
- Create a route so the React component will be rendered in a Rails view. Go to config/routes.rb and add the following: 
`root 'home#index'`

Add Reactstrap/bootstrap to the application
- $ bundle add bootstrap
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- $ yarn add reactstrap

Add an import to the scss file. Go to app/assets/stylesheets/application.scss.
`@import 'bootstrap';`
- $ bundle
- $ yarn

Optional
- $ yarn add bootstrap jquery popper.js
- Add to file ./config/webpack/environment.js 
`const webpack = require("webpack")` 
`environment.plugins.append("Provide", new webpack.ProvidePlugin({`
  `$: 'jquery',`
  `jQuery: 'jquery',`
  `Popper: ['popper.js', 'default']`
`}))`

Make sure to stop/restart your server.

Create three directories in your React application: pages, assets, components.
Add footer and header to this newly created components folder.

Tables and Seeds
- $ rails g resource Movie title:string show_type:string network:string genre:string us_rating:string year:integer
- $ rails g resource List list_name:string user_id:integer
- $ rails g resource MovieList movie_id:integer list_id:integer
User table from devise gets a magical creation. Note: There are no commas used to separate the creation of attributes within a table. You are just give the title of each column:datatype. Remember their will be foreign keys on the belongs_to tables.

Associations
- State the has_many and belongs_to relationships. 

class User
devise :database_authenticatable, :registerable,
:recoverable, :rememberable, :validatable
has_many :lists

class List
belongs_to :user
has_many :movie_lists
has_many :movies, through: :movie_lists

class Movie
has many :movie_lists
has_many :lists, through: :movie_lists

class MovieList
belongs_to :list 
belongs_to :movie

Setup the mock seeds
-To ensure that duplicate seeds are not created, establish a destroy technique.
Movie.destroy_all
MovieList.destroy_all
List.destroy_all
-Create seeds to populate each table.
User.create username: 'Anthony', email: 'User@hotmail.com', password: '123456'
first_user = User.first

first_list = List.create(list_name: 'first list', user_id: first_user.id)

first_movie = Movie.create(title: '456 Street', show_type: 'movie', network: ['hulu'], genre: ['Horror','Foreign'], us_rating: 'R', year: 2021)

second_movie = Movie.create(title: 'Jumanji', show_type: 'movie', network: ['Netflix', 'Disney'], genre: ['Adventure', 'Comedy'], us_rating: 'PG-13', year: 2019)

MovieList.create(list: first_list, movie: first_movie)

## Tips
`Inline styling structure
style={{color:"gold", backgroundColor:"#540000"}}`

- About Us Page Columns width 25 percent to fit 4 on a page.
- Acknowledgment Page filled with content using bootstrap typography <dl> <dd> tags
- Use <u></u> to underline text
- Hold `option` tab in terminal to skip through each word in the terminal

Devise forms
`https://rails.devcamp.com/trails/rails-bdd-tdd-course/campsites/building-advanced-user-interface-elements/guides/how-to-style-devise-sign-forms-rails`

Updating the styling for our sign in forms provided by Devise---log in form
- Go to the views/devise/sessions directory, and open the file called `new.html.erb`. This file has the code for your log in page.
- Add `class: "form-horizontal"` to the form tag. Next, change the class of each div to "form-group".

- Update the style of the "Log in" button. Then, add the `class: "control-label"` to both the "password" and "remember me" labels. 
- Likewise, add the `class: "form-control"` to the email and password fields.
- To make email and password fields shorter in the browser, put the entire form element into a <div> tag, and then add a class to it called `col-md-4`. This leverages the Bootstrap grid layout and will take up 4 columns.


## Usage
- Unregistered and registered users can use the search button to see the tv shows in database
- Unregistered user will need to sign up to see the network and website of the show.
- Registered can see the network and website of the show.
- Registerd user can create, update, and delete lists.
- Registered user can watch a show.

## Project Status
Project is: _in progress_ 


## Room for Improvement
API backend fetching
Back To Top button at the bottom of the results page
Place movies on the app
Rspec testing