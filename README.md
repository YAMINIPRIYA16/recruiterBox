# RecruiterBox

Test cases to be covered at different levels of testing

# Unit tests:

-   verify whether the checkbox is present for every item.
-   Verify whether the input text field is visible and rendered.
-   Verify whether the Close button is present on hvering of each item.
-   Verify whether the strikeout effect is seen when the item is marked/checked.

# Integration tests

# Mocking responses of the API

-   verify whether all the items are listed as per the API response body.

# Functional/UI tests

-   Verify whether there are no items in the list on first load.
-   Create a todo and Verify whether it displays under the input field.
-   Verify whether the ALL tab shows the exact number of items added.
-   Verify whether the user is able to see the items under Active tab if not checked.
-   Verify whether the user is able to see the close button when hovered on the item.
-   Verify whether the user is able to remove the item when clicked on the X button.
-   Verify whether the item moves from active tab to completed tab when checked.
-   Verify whether the user is able to see even the completed items on the ALL tab.
-   Verify whether the user is able to see the items even after the refresh of page.
-   Verify whether the user is able to see the TICK mark for the completed item inside the checkbox.
-   Verify whether the user is able to see the active item numbers on the left .
-   Verify whether clear completed option appears once atleast one item is checked.
-   Verify whether the completed todos goes under the ACTIVE tab when clicked on the `clear completed`
-   Verify whether the user is able to check, uncheck and remove item in all the three tabs
-   Verify whether the user is able to tap twice for edit mode.
-   Verify whether the user is able to see the edited changes.
-   Verify whether the user is able to see the placeholder text on the todo list input box.
-   Verify whether the count increase when a new item is added from a tab which does not have any items under it.
-   Verify whether the user is able to check all the items when clicked on the down arrow present on the text entering field.


# How to run test?
- npm install
- npm test
- cypress will open click on the spec file to run it.
