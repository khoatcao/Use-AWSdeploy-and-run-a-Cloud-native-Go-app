# Use a Go base image
FROM golang:1.17-alpine
# set the working directory inside the container 
WORKDIR /app 
# copy go module files 
COPY go.mod ./ 
# Download and cache Go modules
RUN go mod download

# Copy the rest of the application files
COPY . .

# Build the Go application
RUN go build -o app

# Expose the desired port (change if necessary)
EXPOSE 8080

# Set the command to run the Go application
CMD ["./app"]
