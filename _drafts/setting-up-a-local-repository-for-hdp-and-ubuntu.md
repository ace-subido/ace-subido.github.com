---
layout: post
title: Setting up a local repository for HDP and Ubuntu
---

We needed to do this since our testing environment had production data. Security requirements dictate that the nodes have no internet at all, and the only place that had internet was a Step Server where we can setup a local repository. 

We had Ubuntu 14.04.3 as our operating system. Most of the examples in the Hortonworks Documentation touch lightly on Ubuntu. So here we go, 4 things:

1. Ambari Tarball - you can grab this in public-repo.hortonworks.com
2. HDP/HDP-utils Tarball - you can also grab this 
3. A local mirror of ubuntu for tools, and openjdk-7
4. A web server to serve this all up

```
apt-get install apache2 apt-mirror
```

`apt-mirror` is this neat tool to mirror the ubuntu archives. You'll need this to

```
/var/www/html $ unzip ambari-2.1.2.1.tar.gz
/var/www/html $ unzip hdp.tar.gz
```


