from flask import Flask, jsonify

app = Flask(__name__)

dc = {
        "Superman" : "Kal-El/Clark Kent",
        "Batman" : "Bruce Wayne",
        "Wonder Woman" : "Princess Dianna",
        "Green Lantern" : "Jessica Cruz", 
        "Flash" : "Barry Allen"
    }

@app.route("/api/v1.0/justice-league")
def dc_names():
    justice_league = jsonify(dc)
    return justice_league

@app.route("/")
def root():
    name = "DC-API"
    return name

app.run(debug=True)