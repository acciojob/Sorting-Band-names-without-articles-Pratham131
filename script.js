//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticle(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

function sortBandNames(names) {
  return names.sort((a, b) => {
    const nameA = removeArticle(a.toLowerCase());
    const nameB = removeArticle(b.toLowerCase());
    return nameA.localeCompare(nameB);
  });
}

const sortedBandNames = sortBandNames(bandNames);

const bandList = document.getElementById('band');

sortedBandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});