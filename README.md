# Business Card Maker App
A `web app` using `React` to enable users to design business cards and manage them in personal account

# Demo of this app:

| Login page | Register page |
|:--:|:--:|
|<img width="1000" alt="Screenshot at Sep 15 12-33-42" src="https://user-images.githubusercontent.com/65494027/190462584-7692bf0d-38c2-445d-b42e-ac653021465b.png">|<img width="1000" alt="Screenshot at Sep 15 12-33-04" src="https://user-images.githubusercontent.com/65494027/190460767-28fc245b-e209-4348-8b5d-a13d0f123857.png">|

| Create Card page | Edit Card page |
|:--:|:--:|
|<img width="1000" alt="createcard" src="https://user-images.githubusercontent.com/65494027/190463669-4a6f6b46-a8a2-4521-bdf3-72b5f3a09283.png">|<img width="1000" alt="editcard" src="https://user-images.githubusercontent.com/65494027/190463718-c94011e1-bc62-4be7-a426-310dbf3dff20.png">|

| My Cards page | Logo image |
|:--:|:--:|
|<img width="1000" alt="mycards" src="https://user-images.githubusercontent.com/65494027/190463581-63cc445b-72b6-44f5-993f-5d7f58704b0a.png">| <img width="500%"  alt="mycards" src="https://user-images.githubusercontent.com/65494027/190471429-84abd133-540a-4c60-adc1-576b787539f8.svg"> |

# What is this app about?

- This app helps users to create business cards unlimitedly and manage(generate, edit, and delete) them in personal account.
- This app is a project based on the skeleton of an online course for React, however, I upgraded this project to add more features as I planned. 

# What did I upgrade?

- Original version: 
  - Only two-paged application (Login and Editor page)
  - Manage add,edit, and delete on single page (router not changed)
  - CSS style is simply and boring

- My version:
  - Add customized email&password login (Firebase Authentication)
  - Add register page (Firebase Authentication)
  - Add Router (`/cards`, `/cards/new`, `/cards/:id`)
  - Customized CSS style and responsive design
  - Separately managing delete, add, and edit features using `router`
  - Make reusable compoent for `addCard` and `editCard` to enable preview card image 
    - `uncontrolled component` --> `controlled component` 
  - Add Theme color picker
  - Customized `Choose Image` loader and show file name

# What is the purpose of this app?

- Understanding how `nested routing` works in web application
- Handling authentication by utilizing `Firebase Authentication`
- Applying the fundametal concepts of `React` to my application

# What technologies were used?

- React.js (create-react-app)
- Firebase Authentication and Firebase Realtime Database
- Cloudinary (managing uploaded images)

#### Styling:
- PostCSS

#### Routing:
- react-router

#### UI/UX design tool:
- Figma

# What features does this app have?

1. Login/Log out and Register

2.  Managing features:

- Create new cards

- Edit cards

- Delete cards

3. Pick card's color

4. Preview card (both `createNewCard` and `editCard` available)

5. Upload images

6. Access with Router


# What did I learn from this app?

### Nested Routing
- The most difficult task in this application was nested routing.

