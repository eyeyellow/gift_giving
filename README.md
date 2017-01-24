# Gift Giving

## User Stories

This is a gift giving app that performs two main functions:

* A user should be able to create basic profiles for their friends and family. The profile should include the friend’s name and when their birthday is.
* For each friend profile, a user should be able to add, edit, or remove gift ideas. A gift is simply a name and price, and perhaps an external link, e.g. to amazon. For example, Metroid Prime (NGC), $45.00, * https://www.amazon.com/Metroid-Prime/ *

## Setup

Run the following commands to get started:

`git clone git@github.com:eyeyellow/gift_giving.git`


`bundle install`


`rails db:create db:migrate`

## Features

* There are four main views for friends (new, show, edit, and index), each rendered by a separate React component. Two of the views (new and edit) use the same component (FriendForm) and conditionally render different sub-components based on if user and gift information is successfully saved to the database.

* Upon successfully creating a new friend or accessing an already existing friend, a list of gifts is displayed for the friend, along with a message informing th user of successful creation of a new friend. In the case that the friend has no gifts, an add gift component is conditionally rendered that allows the user to enter information for a new gift.

* The form for editing or deleting a gift is triggered upon clicking the edit button next to the gift on the table in the edit friend view. After the actions for editing and deleting the gift are triggered, the form renders a response either as errors in red text, or as the text of the updated gift attributes in the case of successfully saving the gift changes to the database.

## Approach

There are two different controllers in different namespaces - one for rendering the four different friend views, and another controller for handling the api calls. All form actions are handled through ajax calls to the api controller, and the forms render the json results.

Validation errors are rendered in the forms as updates to the form components' state. Upon receiving errors, the React component quickly rerenders the component with any errors appended to it in red text.

All React components for the new/edit user view are separated into presentational and container components (with the exception of AddGift form) in order to separate the concerns of rendering and handling the changes in state, respectively. All form elements utilize a TextInput presentational component that handles rendering props as well as updating the state of the parent container components upon changes made to the form fields.

## Areas of improvement / Next Steps

* Currently there are no tests. Ideally, I would add feature tests in Capybara with RSPEC, and unit tests for the React components in Mocha or Jasmine.

* The miniscule time lapse between the initial rendering and mounting of the React components with api data causes occasional blips in conditionally rendering form subcomponents. This is caused by differences between initialized state and the updated state that populates the forms with gift data. This rendering of components could be improved by using a Flux/Redux architecture that uses an immutable state tree instead of having components send messages to each other to update state.

* The responses from the ajax calls for friends and gifts currently return all of the columns of information for the requested item from the database. This can be problematic if there is collisions between the attribute names of the item returned from the controller and the names of the keys that map changes of value to the state of the React components. If there is redundancy, values in the component's state could be mistakenly overwritten. This issue could be resolved by adding a method in the controller that strips the unnecessary attributes from the json object returned in the response.
