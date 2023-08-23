import socketio

sio = socketio.Client()

@sio.on('message')
def on_message(data):
    name = data.get('name', 'Unknown')
    message = data.get('message', '')
    print(f"{name}: {message}")

@sio.on('connect')
def on_connect():
    
    
    print('Connected to chatroom')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected from chatroom')

session_variables = {'name': 'Bartek', 'room': '4441'}

# Replace 'https://chatroom-website-url.com' with the actual URL of the chatroom
sio.connect('http://127.0.0.1:5000/waitingRoom', headers=session_variables)

sio.wait()
