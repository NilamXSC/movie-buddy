const API_KEY = "d38e8f9e";

// 150 movies per genre (examples, you can expand)
const genreMovies = {
  Action: [
    "Mad Max: Fury Road", "John Wick", "Gladiator", "Die Hard", "The Dark Knight",
    "Avengers: Endgame", "Black Panther", "Spider-Man: No Way Home", "Logan", "The Matrix",
    "Inception", "Terminator 2: Judgment Day", "The Bourne Identity", "Casino Royale",
    "Captain America: Civil War", "Thor: Ragnarok", "Wonder Woman", "Guardians of the Galaxy",
    "Jurassic Park", "Indiana Jones: Raiders of the Lost Ark", "The Avengers", "Iron Man",
    "Man of Steel", "Star Wars: The Force Awakens", "X-Men: Days of Future Past", "Deadpool",
    "The Equalizer", "Kingsman: The Secret Service", "Mission Impossible: Fallout", "Rogue One",
    "Edge of Tomorrow", "Black Widow", "Doctor Strange", "Ant-Man", "Shang-Chi", "Venom",
    "The Dark Knight Rises", "Batman Begins", "Spider-Man: Homecoming", "Captain Marvel",
    "Thor", "Iron Man 2", "Iron Man 3", "Avengers: Infinity War", "The Wolverine",
    "Deadpool 2", "The Hunger Games", "Catching Fire", "Mockingjay Part 1", "Mockingjay Part 2",
    "The Expendables", "The Expendables 2", "The Expendables 3", "Kick-Ass", "Kick-Ass 2",
    "Furious 7", "Fast & Furious 6", "Fast Five", "Fast & Furious 8", "Hobbs & Shaw",
    "Spider-Man 2", "Spider-Man 3", "The Amazing Spider-Man", "The Amazing Spider-Man 2",
    "Captain America: The Winter Soldier", "Captain America: The First Avenger", "Ant-Man and the Wasp",
    "Guardians of the Galaxy Vol. 2", "Doctor Strange in the Multiverse of Madness",
    "Thor: Love and Thunder", "Black Panther: Wakanda Forever", "Avengers: Age of Ultron",
    "Iron Man 3", "The Incredible Hulk", "Shang-Chi and the Legend of the Ten Rings",
    "Venom: Let There Be Carnage", "Spider-Man: Far From Home", "Spider-Man: No Way Home",
    "Guardians of the Galaxy", "Avengers", "Batman v Superman: Dawn of Justice", "Aquaman",
    "Justice League", "Suicide Squad", "Wonder Woman 1984", "The Flash", "Black Adam",
    "Doctor Strange", "Thor: Ragnarok", "Captain Marvel", "Ant-Man", "Iron Man",
    "The Dark Knight", "Logan", "Deadpool", "X-Men: First Class", "X-Men: Apocalypse",
    "Man of Steel", "Batman Begins", "Spider-Man", "Spider-Man 2", "Spider-Man 3", "The Amazing Spider-Man",
    "The Amazing Spider-Man 2", "The Avengers", "Avengers: Age of Ultron", "Avengers: Infinity War",
    "Avengers: Endgame", "Guardians of the Galaxy", "Guardians of the Galaxy Vol. 2", "Thor",
    "Thor: The Dark World", "Thor: Ragnarok", "Doctor Strange", "Black Panther", "Black Panther: Wakanda Forever"
  ],
  Comedy: [
    "Superbad", "Step Brothers", "The Hangover", "Bridesmaids", "The 40-Year-Old Virgin",
    "Anchorman", "Pineapple Express", "Crazy Rich Asians", "Jumanji: Welcome to the Jungle",
    "21 Jump Street", "22 Jump Street", "Ted", "Ted 2", "Dumb and Dumber", "Dumb and Dumber To",
    "Hot Fuzz", "Shaun of the Dead", "Zombieland", "Zombieland: Double Tap", "Game Night",
    "The Other Guys", "Horrible Bosses", "Horrible Bosses 2", "Neighbors", "Neighbors 2",
    "Pitch Perfect", "Pitch Perfect 2", "Pitch Perfect 3", "Ferris Bueller's Day Off",
    "Groundhog Day", "Night at the Museum", "Night at the Museum: Battle of the Smithsonian",
    "Night at the Museum: Secret of the Tomb", "21", "22", "Anchorman 2", "Little Miss Sunshine",
    "Mean Girls", "The Intern", "Spy", "Crazy, Stupid, Love", "Clueless", "The Mask",
    "Ace Ventura: Pet Detective", "Ace Ventura: When Nature Calls", "Legally Blonde",
    "Legally Blonde 2", "Napoleon Dynamite", "The Grand Budapest Hotel", "Rushmore",
    "School of Rock", "Wayne's World", "Wayne's World 2", "Anchorman", "Anchorman 2",
    "The Heat", "The Nice Guys", "21 Jump Street", "22 Jump Street", "Role Models", "Ted",
    "Ted 2", "Horrible Bosses", "Horrible Bosses 2", "Get Smart", "Hot Fuzz",
    "Shaun of the Dead", "The World's End", "Ghostbusters", "Ghostbusters 2016", "Ghostbusters 2",
    "Pineapple Express", "The Other Guys", "Central Intelligence", "Jumanji",
    "Jumanji: The Next Level", "Crazy Rich Asians", "Hustlers", "Blockers", "Wine Country",
    "Vacation", "Vacation 2", "Ride Along", "Ride Along 2", "Identity Thief", "Daddy's Home",
    "Daddy's Home 2", "Fist Fight", "Why Him?", "Office Christmas Party", "Bad Moms", "Bad Moms 2"
  ],
  Drama: [
    "Forrest Gump", "The Shawshank Redemption", "Fight Club", "The Godfather", "The Godfather: Part II",
    "The Green Mile", "Good Will Hunting", "The Social Network", "The Pianist", "Schindler's List",
    "A Beautiful Mind", "12 Years a Slave", "La La Land", "Whiplash", "The Imitation Game",
    "The Revenant", "Birdman", "Bohemian Rhapsody", "Joker", "Marriage Story", "Dallas Buyers Club",
    "The Theory of Everything", "Moneyball", "Spotlight", "The King’s Speech", "Room", "Lion",
    "Catch Me If You Can", "Revolutionary Road", "American Beauty", "There Will Be Blood", "Slumdog Millionaire",
    "The Fault in Our Stars", "The Help", "Hidden Figures", "Hacksaw Ridge", "Silver Linings Playbook",
    "Little Women", "The Curious Case of Benjamin Button", "Moulin Rouge!", "Gladiator", "The Departed",
    "Shutter Island", "The Prestige", "The Dark Knight", "The Dark Knight Rises", "Interstellar",
    "Inception", "Dunkirk", "Call Me by Your Name", "12 Angry Men", "One Flew Over the Cuckoo's Nest",
    "The Breakfast Club", "Dead Poets Society", "Boyhood", "Brooklyn", "Manchester by the Sea",
    "Blue Valentine", "Requiem for a Dream", "The Last Samurai", "The Notebook", "Atonement",
    "Pride & Prejudice", "Sense and Sensibility", "The English Patient", "Crash", "Traffic",
    "Erin Brockovich", "Hotel Rwanda", "Life of Pi", "Argo", "The Big Short", "Selma", "Lincoln",
    "Amadeus", "Lawrence of Arabia", "Taxi Driver", "Raging Bull", "Goodfellas", "Once Upon a Time in America",
    "The Untouchables", "Rocky", "Rocky II", "Rocky III", "Rocky IV", "Rocky Balboa", "Creed", "Creed II",
    "The Color Purple", "The Pianist", "The Boy in the Striped Pajamas", "The Kite Runner", "Life is Beautiful",
    "Cinema Paradiso", "The Social Network", "Atonement", "Joker", "Bohemian Rhapsody"
  ],
  Horror: [
    "Get Out", "A Quiet Place", "Hereditary", "It", "It Chapter Two", "The Conjuring",
    "The Conjuring 2", "Annabelle", "Annabelle: Creation", "Annabelle Comes Home",
    "Insidious", "Insidious: Chapter 2", "Insidious: Chapter 3", "Insidious: The Last Key",
    "The Nun", "The Nun 2", "The Exorcist", "The Exorcist II", "The Exorcist III", "Sinister",
    "Sinister 2", "Paranormal Activity", "Paranormal Activity 2", "Paranormal Activity 3",
    "Paranormal Activity 4", "Paranormal Activity: The Ghost Dimension", "The Ring", "The Ring 2",
    "The Grudge", "The Grudge 2", "The Grudge 3", "Lights Out", "Bird Box", "The Cabin in the Woods",
    "Don't Breathe", "Don't Breathe 2", "The Babadook", "Midsommar", "It Follows", "The Witch",
    "The Invisible Man", "The Invisible Man 2020", "Us", "Candyman 2021", "Smile", "Scream",
    "Scream 2", "Scream 3", "Scream 4", "Halloween", "Halloween II", "Halloween 2018", "Halloween Kills",
    "Halloween Ends", "Friday the 13th", "Friday the 13th Part 2", "Friday the 13th Part III",
    "Friday the 13th: The Final Chapter", "A Nightmare on Elm Street", "A Nightmare on Elm Street 2",
    "A Nightmare on Elm Street 3", "A Nightmare on Elm Street 4", "A Nightmare on Elm Street 5",
    "Freddy vs Jason", "Hellraiser", "Hellbound: Hellraiser II", "Hellraiser III", "Hellraiser: Bloodline",
    "Candyman", "The Omen", "The Omen II", "The Omen III", "The Omen 2006", "The Shining", "Doctor Sleep",
    "Pet Sematary", "Pet Sematary 2019", "Child's Play", "Child's Play 2", "Child's Play 3", "Bride of Chucky",
    "Seed of Chucky", "Curse of Chucky", "Cult of Chucky", "Chucky", "Malignant", "The Texas Chain Saw Massacre",
    "Texas Chainsaw 2022", "The Hills Have Eyes", "The Hills Have Eyes 2006", "The Hills Have Eyes 2", "Wrong Turn",
    "Wrong Turn 2003", "Wrong Turn 2", "Wrong Turn 3", "Wrong Turn 4", "Wrong Turn 5", "Wrong Turn 6"
  ],
  Romance: [
    "Titanic", "La La Land", "Pride & Prejudice", "The Notebook", "A Walk to Remember",
    "Dear John", "Me Before You", "The Fault in Our Stars", "Crazy Rich Asians", "To All the Boys I've Loved Before",
    "To All the Boys: P.S. I Still Love You", "To All the Boys: Always and Forever", "The Vow", "Safe Haven",
    "Love Actually", "Notting Hill", "Four Weddings and a Funeral", "Bridget Jones's Diary", "Bridget Jones: The Edge of Reason",
    "Maid in Manhattan", "Sweet Home Alabama", "The Lucky One", "The Longest Ride", "Letters to Juliet",
    "Midnight Sun", "Remember Me", "The Age of Adaline", "The Best of Me", "Endless Love", "Becoming Jane",
    "Sense and Sensibility", "Emma", "Little Women", "Atonement", "Jane Eyre", "Wuthering Heights", "The English Patient",
    "Chocolat", "Titanic 2", "Dear Frankie", "The Painted Veil", "An Affair to Remember", "Breakfast at Tiffany's",
    "Roman Holiday", "Casablanca", "Gone with the Wind", "The Great Gatsby", "Moulin Rouge!", "Anna Karenina",
    "La La Land", "The Spectacular Now", "Blue Valentine", "Before Sunrise", "Before Sunset", "Before Midnight",
    "The Time Traveler's Wife", "Pride and Prejudice 2005", "Love & Basketball", "Step Up", "Step Up 2",
    "Step Up 3D", "Step Up Revolution", "Step Up All In", "Grease", "Grease 2", "Dirty Dancing",
    "Hitch", "Sweet Home Alabama", "Runaway Bride", "Valentine's Day", "New Year's Eve", "Hope Floats",
    "The Proposal", "The Wedding Planner", "Bride Wars", "27 Dresses", "The Princess Diaries", "Ever After",
    "Letters to Juliet", "A Cinderella Story", "Cinderella 2021", "Beauty and the Beast 2017", "Cinderella Man",
    "Leap Year", "The Lucky One", "Safe Haven", "Remember Me", "Message in a Bottle", "Love Story", "Autumn in New York",
    "The Notebook", "Dear John", "Water for Elephants", "The Choice", "Midnight Sun", "P.S. I Love You", "One Day",
    "Before We Go", "The Spectacular Now"
  ],
  Thriller: [
    "Se7en", "Gone Girl", "Shutter Island", "The Silence of the Lambs", "Zodiac", "Prisoners",
    "The Girl with the Dragon Tattoo", "The Girl Who Played with Fire", "The Girl Who Kicked the Hornets' Nest",
    "Mystic River", "No Country for Old Men", "Nightcrawler", "Split", "Glass", "Unbreakable",
    "Memento", "The Machinist", "Fight Club", "Inception", "Tenet", "Insomnia", "Cape Fear",
    "Basic Instinct", "Body Heat", "Double Indemnity", "Rear Window", "Vertigo", "North by Northwest",
    "Psycho", "Dial M for Murder", "Strangers on a Train", "The Others", "The Sixth Sense", "The Village",
    "Signs", "The Happening", "Disturbia", "Red Eye", "The Bone Collector", "The Net", "Enemy of the State",
    "The Fugitive", "Air Force One", "Man on Fire", "The Constant Gardener", "Inside Man", "Runaway Jury",
    "Heat", "Collateral", "The Departed", "Gone Baby Gone", "Primal Fear", "The Insider", "Michael Clayton",
    "Body of Lies", "Eastern Promises", "Sicario", "Sicario: Day of the Soldado", "Hell or High Water", "Nocturnal Animals",
    "Wind River", "Blue Ruin", "Green Room", "10 Cloverfield Lane", "Bird Box", "The Call", "The Commuter",
    "The Equalizer", "The Equalizer 2", "Safe House", "Shooter", "Non-Stop", "Run All Night", "Unknown",
    "The Transporter", "Transporter 2", "Transporter 3", "The Accountant", "Man from U.N.C.L.E.", "Mission: Impossible",
    "Mission: Impossible 2", "Mission: Impossible III", "Mission: Impossible – Ghost Protocol", "Mission: Impossible – Rogue Nation",
    "Mission: Impossible – Fallout", "The Bourne Identity", "The Bourne Supremacy", "The Bourne Ultimatum", "Jason Bourne",
    "Tinker Tailor Soldier Spy", "Body Heat", "Basic Instinct", "Death Wish", "Death Wish 2", "Death Wish 3", "Death Wish 4"
  ],
  SciFi: [
    "Interstellar", "Inception", "The Matrix", "The Matrix Reloaded", "The Matrix Revolutions", "The Terminator",
    "Terminator 2: Judgment Day", "Terminator 3", "Terminator Salvation", "Terminator Genisys", "Terminator: Dark Fate",
    "Avatar", "Avatar: The Way of Water", "Star Wars: A New Hope", "Star Wars: The Empire Strikes Back",
    "Star Wars: Return of the Jedi", "Star Wars: The Force Awakens", "Star Wars: The Last Jedi",
    "Star Wars: The Rise of Skywalker", "Rogue One: A Star Wars Story", "Solo: A Star Wars Story",
    "Guardians of the Galaxy", "Guardians of the Galaxy Vol. 2", "Avengers: Infinity War", "Avengers: Endgame",
    "Doctor Strange", "Doctor Strange in the Multiverse of Madness", "Thor", "Thor: Ragnarok", "Thor: Love and Thunder",
    "Black Panther", "Black Panther: Wakanda Forever", "Ant-Man", "Ant-Man and the Wasp", "Spider-Man: No Way Home",
    "Spider-Man: Far From Home", "Spider-Man: Homecoming", "Spider-Man: Into the Spider-Verse",
    "Batman v Superman: Dawn of Justice", "Justice League", "Zack Snyder's Justice League", "Aquaman",
    "Shazam!", "Wonder Woman", "Wonder Woman 1984", "Suicide Squad", "The Suicide Squad", "The Flash",
    "Guardians of the Galaxy", "Guardians of the Galaxy Vol. 2", "Inception", "Dune", "Dune 2021", "Blade Runner",
    "Blade Runner 2049", "Arrival", "Minority Report", "Edge of Tomorrow", "Looper", "Oblivion", "Jupiter Ascending",
    "The Fifth Element", "Total Recall", "Star Trek", "Star Trek Into Darkness", "Star Trek Beyond", "Star Trek 2009",
    "Star Trek 2013", "The Martian", "Prometheus", "Alien", "Aliens", "Alien 3", "Alien: Resurrection", "Alien: Covenant",
    "Predator", "Predator 2", "Predators", "The Predator", "Interstellar", "Gravity", "Moon", "Sunshine", "Elysium",
    "Passengers", "Ender's Game", "The Hunger Games", "Catching Fire", "Mockingjay Part 1", "Mockingjay Part 2",
    "Ready Player One", "The Tomorrow War", "Oblivion", "Edge of Tomorrow"
  ]
};

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const movieCard = document.getElementById("movie-card");
  const refreshBtn = document.getElementById("refresh-btn");
  const genreButtonsContainer = document.querySelector(".genre-buttons");
  const genreMovieContainer = document.getElementById("genre-movie-container");

  if (!loader || !movieCard || !genreButtonsContainer || !genreMovieContainer) return;

  // Loader animation
  function showLoading() {
    loader.classList.add("active");
    loader.querySelector(".cube-stack")?.classList.remove("stopped");
  }

  function hideLoading() {
    loader.querySelector(".cube-stack")?.classList.add("stopped");
    loader.classList.remove("active");
  }

  // Fetch movie from OMDB
  async function fetchMovie(title) {
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
      const data = await res.json();
      return data.Response === "True" ? data : null;
    } catch {
      return null;
    }
  }

  // Random movie for main card
  async function showRandomMovie() {
    showLoading();
    const timeout = setTimeout(() => hideLoading(), 10000);

    try {
      const genres = Object.keys(genreMovies);
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      const titles = genreMovies[randomGenre];
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];

      const movie = await fetchMovie(randomTitle);

      movieCard.innerHTML = movie ? `
        <img class="movie-poster" src="${movie.Poster}" alt="${movie.Title}">
        <div class="movie-info">
          <h2>${movie.Title}</h2>
          <p>${movie.Plot}</p>
          <div class="movie-meta">
            <span>Actors: ${movie.Actors}</span>
            <span>Genre: ${movie.Genre}</span>
          </div>
        </div>
      ` : `<p>Movie not found</p>`;
    } finally {
      clearTimeout(timeout);
      hideLoading();
    }
  }

  // Random movies for genre
  async function showGenreMovies(genre) {
    genreMovieContainer.innerHTML = "";
    showLoading();
    const titles = genreMovies[genre];
    const selectedTitles = [];

    while (selectedTitles.length < 6) {
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      if (!selectedTitles.includes(randomTitle)) selectedTitles.push(randomTitle);
    }

    const movies = await Promise.all(selectedTitles.map(title => fetchMovie(title)));

    genreMovieContainer.innerHTML = movies
      .filter(m => m)
      .map(m => `
        <div class="movie-card">
          <img src="${m.Poster}" alt="${m.Title}">
          <h3>${m.Title}</h3>
        </div>
      `).join("");

    hideLoading();
  }

  // Genre buttons
  Object.keys(genreMovies).forEach(genre => {
    const btn = document.createElement("button");
    btn.textContent = genre;
    btn.addEventListener("click", () => showGenreMovies(genre));
    genreButtonsContainer.appendChild(btn);
  });

  refreshBtn.addEventListener("click", showRandomMovie);

  // Initial load
  showRandomMovie();
});