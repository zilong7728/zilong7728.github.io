var posts=["posts/3eeb.html","posts/a62c.html","posts/3c9d.html","posts/ca5d.html","posts/e705.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };