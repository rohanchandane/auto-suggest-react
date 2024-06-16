# Auto Suggest Component
Auto Suggest Component, implements following features
- Debounce
- Server Call to get suggestions response
- Display them below the input box
- On Selection of any results, clean suggestions and Show selected name on top of Input box


Run Node Server locally to fetch following dummy JSON for demo purpose
- API endpoint `/suggestions` 

```
{
    "suggestions": [
        {
            "value": "Headphones",
            "description": "Listen to your music in style"
        },
        {
            "value": "Wireless headphones",
            "description": "Cut the cord and enjoy freedom of movement"
        },
        {
            "value": "Noise cancelling headphones",
            "description": "Block out distractions and immerse yourself in sound"
        },
        {
            "value": "Earbuds",
            "description": "Compact and convenient for on-the-go listening"
        },
        {
            "value": "Gaming headphones",
            "description": "Enhance your gaming experience with crystal clear audio"
        },
        {
            "value": "Portable speaker",
            "description": "Take your music anywhere with a portable speaker"
        },
        {
            "value": "Smart speaker",
            "description": "Control your music and smart home with a voice-activated speaker"
        },
        {
            "value": "Home theater system",
            "description": "Immerse yourself in movies and music with a surround sound system"
        },
        {
            "value": "Projector",
            "description": "Turn any wall into a big screen with a projector"
        },
        {
            "value": "Streaming device",
            "description": "Stream your favorite shows and movies with a streaming device"
        },
        {
            "value": "Laptop",
            "description": "For work, productivity, or entertainment"
        },
        {
            "value": "Tablet",
            "description": "A portable device for browsing, reading, and entertainment"
        },
        {
            "value": "Smartphone",
            "description": "Stay connected, capture memories, and access information on the go"
        },
        {
            "value": "Smartwatch",
            "description": "Track your fitness, receive notifications, and stay connected with a smartwatch"
        },
        {
            "value": "Fitness tracker",
            "description": "Monitor your activity and stay motivated with a fitness tracker"
        },
        {
            "value": "Virtual reality headset",
            "description": "Experience immersive gaming and entertainment with VR"
        },
        {
            "value": "Gaming console",
            "description": "Play the latest games on a dedicated gaming console"
        },
        {
            "value": "Camera",
            "description": "Capture stunning photos and videos with a camera"
        },
        {
            "value": "Drone",
            "description": "See the world from a new perspective with a drone"
        }
    ]
}
```

# React + TypeScript + Vite

This Project is build with Vite

To run the project

- `npm install`
- `npm run dev`