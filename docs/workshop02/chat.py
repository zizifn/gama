import os
from openai import OpenAI

client = OpenAI(
    # This is the default and can be omitted

)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Say this is a test",
        }
    ],
    model="gpt-3.5-turbo",
)


print(chat_completion.choices[0].message.content)