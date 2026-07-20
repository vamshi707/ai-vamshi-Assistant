from fastapi import APIRouter
from app.schemas.ai import ChatRequest
from app.langgraph.graph import graph

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

@router.post("/chat")
def chat(request: ChatRequest):

    result = graph.invoke(
        { 
            "user_id": request.user_id,
            "user_input": request.message,
            "response": ""
        }
    )

    return {
        "response": result["response"]
    }