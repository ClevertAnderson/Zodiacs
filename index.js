document.getElementById("btnSubmit").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const sourceElement = document.getElementById("source");
  
    if (name.trim() === "" || isNaN(birthYear)) {
      alert("Please fill in all fields.");
    } else {

    const zodiacSigns = [
  {
    title: "Rat",
    description: "Years: 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020\nDetails: The Rat is quick-witted, resourceful, and versatile.",
    source: "Source 1",
    imageUrl: "rat.jpg",
  },
  {
    title: "Ox",
    description: "Years: 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021nDetails: The Ox is hardworking, diligent, and reliable.",
    source: "Source 2",
    imageUrl: "ox.jpg",
  },
  {
    title: "Tiger",
    description: "Years: 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022\nDetails: The Tiger is brave, confident, and independent.",
    source: "Source 3",
    imageUrl: "tiger.jpg",
  },
  {
    title: "Rabbit",
    description: "Years: 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023\nDetails: The Rabbit is gentle, quiet, and elegant.",
    source: "Source 4",
    imageUrl: "rabbit.jpg",
  },
  {
    title: "Dragon",
    description: "Years: 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024\nDetails: The Dragon is energetic, confident, and charismatic.",
    source: "Source 5",
    
    imageUrl: "dragon.jpg",
},
{
  title: "Snake",
  description: "Years: 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025\nDetails: The Snake is wise, intuitive, and graceful.",
  source: "Source 6",
  imageUrl: "snake.jpg",
},
{
  title: "Horse",
  description: "Years: 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026\nDetails: The Horse is strong, energetic, and adventurous.",
  source: "Source 7",
  imageUrl: "horse.jpg",
},
{
  title: "Goat",
  description: "Years: 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027\nDetails: The Goat is gentle, kind, and artistic.",
  source: "Source 8",
  imageUrl: "goat.jpg",
},
{
  title: "Monkey",
  description: "Years: 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028\nDetails: The Monkey is intelligent, witty, and innovative.",
  source: "Source 9",
  imageUrl: "monkey.jpg",
},
{
  title: "Rooster",
  description: "Years: 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029\nDetails: The Rooster is diligent, honest, and confident.",
  source: "Source 10",
  imageUrl: "rooster.jpg",
},
{
  title: "Dog",
  description: "Years: 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030\nDetails: The Dog is loyal, honest, and friendly.",
  source: "Source 11",
  imageUrl: "dog.jpg",
},
{
  title: "Pig",
  description: "Years: 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031\nDetails: The Pig is kind, gentle, and sincere.",
  source: "Source 12",
  imageUrl: "pig.jpg",
},
];

const zodiacSignIndex = (birthYear - 1924) % 12;

    if (zodiacSignIndex >= 0 && zodiacSignIndex < zodiacSigns.length) {
      const zodiacSign = zodiacSigns[zodiacSignIndex];

      document.getElementById("cz-title").textContent = zodiacSign.title;
      document.getElementById("cz-description").textContent = zodiacSign.description;
      document.getElementById("img").src = zodiacSign.imageUrl;

      sourceElement.textContent = "Source: " + zodiacSign.source;
    } else {
      alert("Invalid birth year. Please enter a valid year between 1940 and 2023.");
    }
  }
});