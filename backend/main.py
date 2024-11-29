from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import employees
from models import Base
from database import engine

# Initialize FastAPI app
app = FastAPI()

# Initialize the database
Base.metadata.create_all(bind=engine)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5500"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include routers
app.include_router(employees.router, prefix="/employees", tags=["Employees"])
