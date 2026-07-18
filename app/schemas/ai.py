from pydantic import BaseModel


class ChatRequest(BaseModel):
    user_id: str = "default"
    message: str


class ChatResponse(BaseModel):
    response: str