var posts=["posts/3eeb.html","posts/e705.html","posts/ca5d.html","posts/a62c.html","posts/3c9d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };