# Build

```
docker build . -t ctf-fun-qrcode
```

# Run
```
docker run -p 8080:8080 -d -e FLAG='flag{MYAWESOMEFLAG}' --name ctf-fun-qrcode --rm ctf-fun-qrcode
```

# Get container ID
```
docker ps
```

# Print app output
```
docker logs <container id>
```

# App access
Running on http://localhost:8080

# Enter the container
```
docker exec -it <container id> /bin/bash
```

# Stop container
```
docker stop ctf-fun-qrcode
```