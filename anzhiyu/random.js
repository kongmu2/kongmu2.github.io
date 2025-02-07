var posts=["2025/02/06/ELK搭建/","2025/02/06/ES/","2025/02/07/esik/","2025/02/06/rabbitmq/","2025/02/07/dockerminio/","2025/02/07/mianshi/","2025/02/07/nacosjiqun/","2025/02/07/redispython/","2025/02/06/zookeeper/","2025/02/07/thread1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };