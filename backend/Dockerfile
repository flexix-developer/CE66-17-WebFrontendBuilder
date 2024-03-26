FROM golang:1.21.5

WORKDIR /app

ADD . /app/

RUN go build -o ./build/go-app .

ENTRYPOINT ["./build/go-app"]