from langgraph.graph import StateGraph, END
from app.langgraph.state import AgentState
from app.langgraph.tools import log_interaction


def router(state: AgentState):
    state["response"] = log_interaction(
        state["user_id"],
        state["user_input"]
    )
    return state


builder = StateGraph(AgentState)

builder.add_node("router", router)

builder.set_entry_point("router")

builder.add_edge("router", END)

graph = builder.compile()