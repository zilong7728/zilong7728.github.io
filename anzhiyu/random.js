var posts=["posts/3c9d.html","posts/3eeb.html","posts/b6ef.html","posts/e705.html","posts/ca5d.html","posts/a62c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };