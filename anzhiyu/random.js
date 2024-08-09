var posts=["2024/08/09/hello-world/","2024/08/09/PowerTest/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };