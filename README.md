# Overview
This Blog Website is a simple, yet dynamic platform built with Node.js and Express, designed for creating, viewing, editing, and deleting blog posts. It uses EJS for templating, Bootstrap for styling, and incorporates a basic in-memory storage for posts.

# Features
- Create New Posts: Users can create new blog posts.
- View Posts: Display all blog posts on the homepage.
- Edit Posts: Existing posts can be edited.
- Delete Posts: Posts can be removed from the list.
- Responsive Design: Styled using Bootstrap for a responsive layout.
## Getting Started
### Prerequisites
Before running the project, ensure you have Node.js installed.

Installation
1. Clone the repository:

`git clone [repository-url]`

2. Navigate to the project directory:

`cd [project-directory]`

3. Install dependencies:

`npm install`

## Running the Application

1. Start the server:

`node index.js`

2. Access the website:
    - Open http://localhost:3000 in your browser.

### File Structure
- `index.js`: The main server file that handles routing and server setup.
- `index.ejs`: The EJS template for the homepage, displaying all posts.
- `newpost.ejs`: The EJS template for creating a new blog post.
- `editpost.ejs`: The EJS template for editing an existing blog post.
- `public/`: Directory containing static files like stylesheets.
### API Endpoints
- `GET /`: Renders the homepage with all blog posts.
- `GET /newpost`: Renders the page to create a new post.
- `POST /create`: Endpoint to create a new blog post.
- `GET /edit/:id`: Renders the edit page for a specific post.
- `POST /update/:id`: Endpoint to update a specific post.
- `GET /delete/:id`: Endpoint to delete a specific post.

### Customization
You can customize styles by editing the CSS files in the public/styles/ directory.

Note: Replace `[repository-url]` and `[project-directory]` with your repository's URL and local directory name respectively.

![Blog Website Screenshot](https://i.imgur.com/MIi4BpQ.png)

![Blog Post Screenshot](https://i.imgur.com/4PcoQUe.png))
