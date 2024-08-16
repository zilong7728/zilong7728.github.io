var posts=["posts/a62c.html","posts/e705.html","posts/3c9d.html","posts/3eeb.html","posts/ca5d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };