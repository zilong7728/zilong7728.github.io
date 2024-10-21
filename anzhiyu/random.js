var posts=["posts/b6ef.html","posts/e705.html","posts/a62c.html","posts/3c9d.html","posts/ca5d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };