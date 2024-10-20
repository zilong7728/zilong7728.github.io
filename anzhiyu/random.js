var posts=["posts/2135.html","posts/3c9d.html","posts/ca5d.html","posts/3eeb.html","posts/e705.html","posts/a62c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };