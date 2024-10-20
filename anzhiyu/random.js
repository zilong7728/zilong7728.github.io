var posts=["posts/e705.html","posts/b6ef.html","posts/ca5d.html","posts/a62c.html","posts/3c9d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };