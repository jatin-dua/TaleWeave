from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
import json
from flask_cors import CORS, cross_origin

import response

app = Flask(__name__)
CORS(app)

# app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with your secret key
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

# @socketio.on('message')
# def handle_message(message):
# @app.route('/response', methods=['POST'])
# @cross_origin()
# def response_handler(message):
#     # emit('response', response.generate_response(message))
#     data = response.generate_response("hi i author of")

#     return json.dumps({
#         "content": data
#     })

@app.route('/response', methods=['POST'])
@cross_origin()
def response_handler():
    # emit('response', response.generate_response(message))
    message = request.get_json()
    print(f"Message received: {message} ")
    data = message.get('content')
    print(f"data received: {data} ")
    data = response.generate_response(data)
    print(f"data processed: {data} ")
    # data = response.generate_response("hi i author of")

    return json.dumps({
        "content": data
    })

@app.route('/plot')
@cross_origin()
def plot_handler():

    # emit('response', response.generate_response(message))
    data = response.generate_plot()
    print(f"data: {data}")

    return json.dumps({
        "content": data
    })

if __name__ == '__main__':
    socketio.run(app, debug=True)
