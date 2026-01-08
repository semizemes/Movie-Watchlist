# 🎬 Movie Watchlist

A web application that allows users to search for movies and create a personal watchlist. Built as part of Scrimba's "API and Async JavaScript" module.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Core functionality with modules
- **Vite** - Build tool and development server
- **OMDb API** - Movie data fetching
- **Font Awesome** - Icons
- **LocalStorage API** - Persist watchlist data

## 📚 What I Learned

### API & Async JavaScript
- **Fetch API** - Making HTTP requests to external APIs
- **Async/Await** - Handling asynchronous operations cleanly
- **Promise.all()** - Running multiple async operations in parallel
- **Error Handling** - Managing API response errors gracefully

### JavaScript Concepts
- **ES6 Modules** - Using `type="module"` for modular code
- **Array Methods** - `map()`, `filter()`, `findIndex()`, `splice()`, `join()`
- **Event Delegation** - Handling dynamic element clicks efficiently
- **FormData API** - Extracting form input values
- **Template Literals** - Building dynamic HTML strings

### Data Persistence
- **LocalStorage** - Saving and retrieving watchlist data
- **JSON.stringify() / JSON.parse()** - Converting data for storage

### DOM Manipulation
- **Dynamic Content Rendering** - Updating the UI based on API data
- **Event Listeners** - Responding to user interactions

## 📖 User Manual

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Movie-Watchlist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:` ( the URL shown in terminal)

### How to Use

#### 🔍 Search for Movies
1. Go to the **main page** (Find your film)
2. Type a movie name in the search bar
3. Click **Search** or press Enter
4. Browse through the search results

#### ➕ Add to Watchlist
1. Find a movie you like from the search results
2. Click the **+ Watchlist** button next to the movie
3. The movie is now saved to your personal watchlist

#### 📋 View Your Watchlist
1. Click **My Watchlist** in the header
2. See all the movies you've saved
3. Your watchlist persists even after closing the browser

#### ➖ Remove from Watchlist
1. Go to **My Watchlist** page
2. Click the **- Remove** button next to any movie
3. The movie will be removed from your list

### Project Structure

```
Movie-Watchlist/
├── index.html      # Main search page
├── watchlist.htm   # Watchlist page
├── index.css       # Styles
├── index.js        # JavaScript logic
├── package.json    # Project configuration
├── images/         # Image assets
└── README.md       # Documentation
```

## 🔗 API Reference

This project uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data.

- **Search endpoint**: `https://omdbapi.com/?s={title}&apikey={key}`
- **Details endpoint**: `https://omdbapi.com/?i={imdbID}&apikey={key}`

## 🚀 Build for Production

```bash
npm run build
npm run preview
```
