# React-Hardware

Component library for the React framework

## Button

This button component allows for different styling and sizes to be passed using predefined css rules

##### Props

styleType : for styling rules
size : button for sizing rules
onClick : function to handle click event. Default is empty
children : content displayed within the button (i.e. text)

##### Methods

getStyleClass : returns the style class based on styleType
getSizeClass : returns the size class based on size

##### PropTypes

The button ships with these current options which will default to "default" style and "medium" size if no value or invalid argument is given

styleType : primary, secondary, danger, default
size : small, medium, large
onClick : must be passed a function
children : any _required_ content

## Input Field

This input field component allows easy placement and consistent validation supporting: basic text, password, & email. Validation can be configured to suit specific needs, or extended to allow other types of validation by modifying the validate switch statement

##### Props

This component currently accepts: type, and placeholder. label.type defaults to "text", and placeholder defaults to 'Enter value" if nothing is provided

##### Hooks

value : holds the current value of the input field, initialized to an empty string
error : holds validation messages, initialized to an empty string

##### Validation Function

Currently supports basic text, email, and basic password

text : simply checks if the field is empty or not

email : checks for valid email format

password : checks that input is greater than 6 characters

##### Changes

handleChange : event handler that gets called when any input value is changed and updates the value/error state with the new input value
# React-Hardware
