from typing import TypedDict


class AgentState(TypedDict):
    user_id: str
    user_input: str
    response: str