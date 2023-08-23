from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
from flask_socketio import join_room, leave_room, send, SocketIO
import random
from string import ascii_uppercase
from flask import session 


db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)
    
    app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)
    socketio = SocketIO(app)
    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    from .models import User, Note, rooms
    
   
    @socketio.on("connect")
    def connect(auth):
        room = session.get("room")
        name = session.get("name")
        
        join_room(room)
        send({"name": name, "message": "has entered the room"}, to=room)
        send({"name": name, "message": f"{name} has entered the room {room}"}, to="4441")
        rooms[room]["members"] += 1
        print(f"{name} joined room {room}")

    @socketio.on("disconnect")
    def disconnect():
        room = session.get("room")
        name = session.get("name")
        leave_room(room)

        if room in rooms:
            rooms[room]["members"] -= 1
            if rooms[room]["members"] <= 0 or name == "2_Bartek":
                del rooms[room]
                send({"message": "The room has been deleted because Bartek left"}, to=room)
                print(f"{name} has left the room {room}, and the room has been deleted.")
                print("Room codes after deleting a room:", list(rooms.keys()))
                print("KONIEC")
    
        send({"name": name, "message": "has left the room"}, to=room)
        print("Room codes after deleting a room:", list(rooms.keys()))
        print(f"{name} has left the room {room}")

    @socketio.on("message")
    def message(data):
        room = session.get("room")
        if room not in rooms:
            return
            print("xd")
    
        content = {
            "name": session.get("name"),
            "message": data["data"]
        }
        send(content, to=room)
       
        
        rooms[room]["messages"].append(content)
        print(f"{session.get('name')} said: {data['data']}")
    
    @socketio.on('connect', namespace='/wait')
    def handle_connect():
        print('WebSocket Client Connected')

    @socketio.on('disconnect', namespace='/wait')
    def handle_disconnect():
        print('WebSocket Client Disconnected')
   



    with app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app, socketio


def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')




 
