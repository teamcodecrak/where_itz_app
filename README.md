# README

# Where Itz App
> With WhereItzApp, you can search and find where your favorite shows are streaming in one central location. Create and share customized movie lists based on your interests and get recommendations from fellow users. 

> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Tech 1 - version 1.0
- Tech 2 - version 2.0
- Tech 3 - version 3.0


## Features
List the ready features here:
- React in rails application
- yarn
- bundle
- reactstrap
- bootstrap
- postman
- VS code
- Atom
- Rubocop


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->

## Setup
rails-react app:
$ rails new capstone_app -d postgresql -T
$ cd capstone_app
$ rails db:create
$ git remote add origin ... created by GitHub Classroom
$ git checkout -b main
$ git add .
$ git commit -m "initial commit"
$ git push origin main
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install

In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:  config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Check the application:
Begin the rails server: $ rails server
In a browser navigate to: http://localhost:3000
In a separate terminal: $bin/webpack-dev-server
​​Navigate to http://localhost:3000/users/sign_in and see a log in page.
Navigate to http://localhost:3000/users/sign_up and see a sign up page.

$ rails generate react:component App
The install commands created a directory in app called javascript
In app/javascript there will be another directory called components that will contain our App.js React component with some basic code

$ rails g controller Home
Add a file in app/views/home called index.html.erb
By calling the React Component in erb tags the component will be rendered in the browser through the Rails view. app/views/home/index.html.erb
<%= react_component 'App' %>
Create a route so the React component will be rendered in a Rails view.
config/routes.rb. root 
'home#index'
Reactstrap/bootstrap:
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
Add an import to the scss file. app/assets/stylesheets/application.scss.
@import 'bootstrap';
$ bundle
$ yarn
$yarn add bootstrap jquery popper.js
Add to file ./config/webpack/environment.js const webpack = require("webpack") 
environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))
Make sure to stop/restart your server.
Create three directories in your React application: pages, assets, components
Add footer and header to components
Db and Seeds

$ rails g resource Movie title:string show_type:string network:string genre:string us_rating:string year:integer
$ rails g resource List list_name:string user_id:integer
$ rails g resource MovieList movie_id:integer list_id:integer

User table from devise magic
email: string, password: string, user_name: string


Associations
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

db/seeds.rb
Movie.destroy_all
MovieList.destroy_all
List.destroy_all
User.create username: 'Anthony', email: 'User@hotmail.com', password: '123456'
first_user = User.first

first_list = List.create(list_name: 'first list', user_id: first_user.id)

first_movie = Movie.create(title: '456 Street', show_type: 'movie', network: ['hulu'], genre: ['Horror','Foreign'], us_rating: 'R', year: 2021)

second_movie = Movie.create(title: 'Jumanji', show_type: 'movie', network: ['Netflix', 'Disney'], genre: ['Adventure', 'Comedy'], us_rating: 'PG-13', year: 2019)

MovieList.create(list: first_list, movie: first_movie)

About Us Page Columns width 25 percent to fit 4 on a page.

Acknowledgment Page filled with content using <dl> <dd> tags

## Tips
`Inline styling structure
style={{color:"gold", backgroundColor:"#540000"}}`

Devise forms
https://rails.devcamp.com/trails/rails-bdd-tdd-course/campsites/building-advanced-user-interface-elements/guides/how-to-style-devise-sign-forms-rails
Updating the styling for our sign in forms provided by Devise---log in form

Go to the views/devise/sessions directory, and open the file called new.html.erb. This file has the code for your log in page.

Now, let's add class: "form-horizontal" to the form tag. Next, change the class of each div to "form-group".

Next, update the style of the "Log in" button. Then, add the class control-label to both the "password" and "remember me" labels. Likewise, add the class form-control to the email and password fields.

To make email and password fields shorter in the browser, put the entire form element into a <div> tag, and then add a class to it called col-md-4. This leverages the Bootstrap grid layout and will take up 4 columns.

Using <u></u> to underline text
Hold Options in terminal to skip through each word

## Usage
How does one go about using it?
Provide various use cases and code examples here.


## Project Status
Project is: _in progress_ 


## Room for Improvement
API backend fetching
Back To Top button at the bottom of the results page