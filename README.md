## Travel journal

### Overview
This page displays a list of places visited. Multiple components are created to display specific data.
When clicked on "View on Google maps" link, it locates the place on the map.

### Tree view
Displayed using ReacTree


![image](https://github.com/user-attachments/assets/1ea2740c-74ff-40f9-bf6f-2e09e7b245fd)

- when the object is passed, the value is not displayed in IndCard props section.
- only for the purpose of displaying the props value, instead of passing the entire item object, each property is passed as a value. Hence, it is displayed in IndCard props section.

### Components involved and its purpose:
- Header: It displays the logo.
- TravelList: This gets the travel information from data.js. This stores the data as an array of objects. This loops through each item(object) and pass the object details to the
  Travel component. Object is passed by spreading its values.({...items})
- Travel: Receives the object values(desctructured) as props and displays the travel information with specific styling.

### Concepts used:
- Values passed as <mark>**props**</mark> from Cards to Travel.
- Values are <mark>**desctructured**</mark> from the props in Travel.

### Live Demo:
(https://scrimba-krishna-v-react-static-page-2.netlify.app/)
