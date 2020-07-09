Forkify module outline

- index.js
  - IMPORT
    - import Search from './models/Search';
    - import Recipe from './models/Recipe';
    - import List from './models/List';
    - import Likes from './models/Likes';
    - import \* as searchView from './views/searchView'; // handles everything related to search and search results
    - import \* as recipeView from './views/recipeView'; // handles everything related to recipe in center container
    - import \* as listView from './views/listView'; // handles shopping list items
    - import \* as likesView from './views/likesView'; // handles list of user-liked item
    - import { elements, renderLoader, clearLoader } from './views/base';
  - SEARCH CONTROLLER
    - elements.searchForm.addEventListener('submit' // user input form submit
    - elements.searchResPages.addEventListener('click', // user results list item click
  - RECIPE CONTROLLER
    - get recipe and render it
  - LIST CONTROLLER
    - const controlList = ()
      - // Create a new list IF there in none yet
      - // Add each ingredient to the list and UI
    - elements.shopping.addEventListener('click', // // Handle delete and update list item events
  - LIKE CONTROLLER
    - const controlLike = ()
      - // User has NOT yet liked current recipe
      - // Add like to the state
      - // Toggle the like button
      - // Add like to UI list
      - // User HAS liked current recipe
      - // Toggle the like button
    - // Restore liked recipes on page load
    - elements.recipe.addEventListener('click', // // Handling recipe button clicks
- Models
  - Likes
    - export default class Likes
  - List
    - export default class List
  - Recipe
    - export default class Recipe
  - Search
    - export default class Search
- Views
  - base
    - export const:
      - elements
      - elementStrings
      - renderLoader
      - clearLoader
  - likesView
    - export const:
      - toggleLikeBtn
      - toggleLikeMenu
      - renderLike
      - deleteLike
  - listView
    - export const:
      - renderItem
      - deleteItem
  - recipeView
    - const:
      - clearRecipe
      - formatCount
      - createIngredient
    - export const:
      - renderRecipe
      - updateServingsIngredients
  - searchView
    - const:
      - renderRecipe
      - createButton
      - renderButtons
    - export const:
      - getInput
      - clearInput
      - clearResults
      - highlightSelected
      - limitRecipeTitle
      - renderResults // render results of currente page

////
JS constructors

saves state.xxx with a new constructor

    -
    Search = string -
    getResults() -
    Recipe = string id(center panel) -
    getRecipe() -
    calcTime() -
    calcServings() -
    parseIngredients() -
    updateServings() -
    Likes = array(likes, right pane) -
    addLikes() -
    deleteLike() -
    isLiked() -
    getNumLikes() -
    persistData() -
    readStorage() -
    List = array(search results, left panel) -
    addItem() -
    deleteItem() -
    updateCount()
