from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, world!"

@app.route("/about")
def about():
    return jsonify({"name": "Hao Chu", "Location" : "U of T"})

@app.route("/contact")
def contact():
    return jsonify({"e-Mail": "chuhaono.1@hotmail.com"})

if __name__ == "__main__":
    app.run(debug=True)

