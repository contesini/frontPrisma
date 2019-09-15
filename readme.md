
# Front

# Dependencias

Node, npm e docker e docker-compose

### Build docker image

```bash
docker build -t allancontesini/front-prisma:tagname .
```

### Push new image to docker registry
```
docker push allancontesini/front-prisma:tagname
```

### Pull image from docker 
```
docker pull llancontesini/front-prisma:tagname
```
### Start project
```
docker-compose up -d
```