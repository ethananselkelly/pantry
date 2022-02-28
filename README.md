# Pantry

This app is designed as a simple way for users to track ingredients in their pantry as well as search for recipes. 
Currently there are only ingredient-related features.

# Installation

Pantry was created using Node 14.15. Please make sure you have the proper packages installed using yarn install.
The database is designed to work with Postgres/SQL.

Run the following commands from the root file:

>$ yarn install
>
>$ createdb pantry_development

Run the following command in the server folder to create the database:

>$ yarn migrate:latest

# Usage

Run the following command from the root file and navigate to https://localhost:3000 to open the app:

>$ yarn run dev
 
Users must create an account and sign in to save ingredients.
Navigating to the 'Find Ingredients' page allows users to search for and save ingredients to their pantry. 
The search feature sends a fetch request to the Spoonacular API and returns a list of ingredients from their database. 
When a user adds an ingredient to their pantry, that ingredient object is POSTed to the app's database and joined to the current user.
Navigating to the 'Pantry' page allows users to see all of their saved ingredients, as well as remove ingredients from their pantry.
Removing an ingredient removes the join, but does not remove the ingredient from the database.

# TODO
-add a recipe search feature
-show users what ingredients they have for and are missing from a recipe
-allow users to search for recipes based on ingredients currently in their pantry
-categorize saved ingredients for better pantry organization

# About

Created by Ethan Ansel-Kelly

This app was created as part of the curriculum at Launch Academt. All students spent two weeks working on their individual 'breakable toys'.
Even though the program is now over, there are features that I still want to add to the app.
