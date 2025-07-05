from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str
    description: str
    completed: bool = False

class Task(TaskCreate):
    id: int

    class Config:
        from_attributes = True  # Use 'from_attributes' instead of 'orm_mode' in Pydantic v2
