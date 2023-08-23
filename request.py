import websocket
import threading
import json
import requests

# Define the URL for the POST request
post_url = "http://127.0.0.1:5000/waitingRoom"

# Define the POST data
post_data = {
    'AuthKey': 'xd12345'
}

# Send the POST request
response = requests.post(post_url, data=post_data)

if response.status_code == 200:
    print("POST request was successful!")
    print("Response Content:")
    print(response.text)
else:
    print(f"POST request failed with status code {response.status_code}")
    exit(1)

# Define the WebSocket URL
websocket_url = "ws://127.0.0.1:5000"

def on_message(ws, message):
    # Define how to handle incoming WebSocket messages here
    data = json.loads(message)
    print(f"Received message: {data}")

def on_error(ws, error):
    print(f"WebSocket error: {error}")

def on_close(ws, close_status_code, close_msg):
    print("WebSocket closed")

def on_open(ws):
    # Define what to do when the WebSocket connection is opened
    print("WebSocket opened")

if __name__ == "__main__":
    # Create a WebSocket client instance
    ws = websocket.WebSocketApp(websocket_url, on_message=on_message, on_error=on_error, on_close=on_close)
    ws.on_open = on_open

    # Start a thread to run the WebSocket client in the background
    ws_thread = threading.Thread(target=ws.run_forever)
    ws_thread.daemon = True  # This allows the script to exit while the WebSocket thread continues running
    ws_thread.start()

    # Your script can continue to do other tasks here while WebSocket messages are received in the background

    # To gracefully close the WebSocket connection when done, you can call:
    # ws.close()
