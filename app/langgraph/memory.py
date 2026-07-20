from collections import defaultdict

# Stores conversation history for each user
memory_store = defaultdict(list)


def get_history(user_id: str):
    return memory_store[user_id]


def add_message(user_id: str, role: str, content: str):
    memory_store[user_id].append({
        "role": role,
        "content": content
    })

    # Keep only the last 20 messages
    if len(memory_store[user_id]) > 20:
        memory_store[user_id] = memory_store[user_id][-20:]


def clear_history(user_id: str):
    memory_store[user_id] = []