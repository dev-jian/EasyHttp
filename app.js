const easyHttp = new EasyHttp();

// get posts
easyHttp.get("https://jsonplaceholder.typicode.com/posts", function (error, responseText) {
  if (error) {
    console.log(error);
  } else {
    const posts = JSON.parse(responseText);

    console.log(posts);
  }
});

// get single post
easyHttp.get("https://jsonplaceholder.typicode.com/posts/1", function (error, responseText) {
  if (error) {
    console.log(error);
  } else {
    const post = JSON.parse(responseText);

    console.log(post);
  }
});

// Create Data for post
const data = {
  title: "Custom Post", 
  body: "This is a custom post"
};

easyHttp.post("https://jsonplaceholder.typicode.com/posts", data, function (error, responseText) {
  if (error) {
    console.log(error);
  } else {
    console.log(responseText);
  }
});

easyHttp.put("https://jsonplaceholder.typicode.com/posts/1", data, function (error, responseText) {
  if(error) {
    console.log(error);
  } else {
    console.log(responseText);
  }
});

easyHttp.delete("https://jsonplaceholder.typicode.com/posts/1", function (error, responseText) {
  if (error) {
    console.log(error);
  } else {
    console.log(responseText);
  }
});