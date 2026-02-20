// Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// JSON file path
var url = './health_article.json';

// Configure the request
xhr.open('GET', url, true);
xhr.responseType = 'json';

// When the request is successfully completed
xhr.onload = function () {
  if (xhr.status === 200) {

    // Get JSON response
    var response = xhr.response;
    var articles = response.articles;

    // Get main container div
    var articlesDiv = document.getElementById('articles');

    // Loop through articles
    articles.forEach(function (article) {

      // Create article container
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      // Title
      var title = document.createElement('h2');
      title.textContent = article.title;

      // Description
      var description = document.createElement('p');
      description.textContent = article.description;

      // Ways Header
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      // Ways List
      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function (way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      // Benefits Header
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      // Benefits List
      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function (benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Append all elements
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });

  } else {
    console.error('Error loading JSON file');
  }
};

// Send request
xhr.send();