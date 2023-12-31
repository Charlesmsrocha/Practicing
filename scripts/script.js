const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// Function to search for Spotify artist's albums
function searchArtist() {
    const artistSearchInput = document.getElementById("artistSearch");
    const artistQuery = artistSearchInput.value.trim().toLowerCase(); // Convert to lowercase

    if (artistQuery !== "") {
        // Perform a basic search for artist's albums (without authentication)
        const searchUrl = `${SPOTIFY_API_BASE_URL}/search?type=album&q=${encodeURIComponent(artistQuery)}`;

        fetch(searchUrl)
            .then(response => response.json())
            .then(data => displayArtistAlbums(data.albums.items))
            .catch(error => console.error('Error:', error));
    }
}

// Function to display artist's albums and album covers
function displayArtistAlbums(albums) {
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "";

    if (albums.length > 0) {
        albums.forEach(album => {
            // Create an image element for each album cover
            const albumImage = document.createElement("img");
            albumImage.src = album.images && album.images.length > 0 ? album.images[0].url : 'placeholder.png'; // Use a placeholder image if no album cover is available
            albumImage.alt = album.name;
            albumImage.onclick = function() {
                addItem(album.name);
            };

            searchResultsContainer.appendChild(albumImage);
        });
    } else {
        searchResultsContainer.textContent = "No results found.";
    }
}

// Function to add an item to the list
function addItem(item) {
    const list = document.getElementById("list");
    const newItemList = document.createElement("li");
    newItemList.textContent = item;
    list.appendChild(newItemList);

    // Clear the input field and search results
    document.getElementById("artistSearch").value = "";
    document.getElementById("searchResults").innerHTML = "";
}
