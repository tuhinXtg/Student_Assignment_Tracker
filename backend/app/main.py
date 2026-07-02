from fastapi import FastAPI  # type: ignore

app = FastAPI(
    title="Student Assignment Tracker API"
)

@app.get("/")
def root():
    return {
        "message": "Student Assignment Tracker API is running!"
    }