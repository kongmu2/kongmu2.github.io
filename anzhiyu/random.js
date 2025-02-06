var posts=["2025/02/05/hello-world/","2025/02/06/rabbitmq/","2025/02/06/ES/","2025/02/06/zookeeper/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };