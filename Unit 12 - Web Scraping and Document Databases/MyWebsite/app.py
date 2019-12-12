# Import dependencies
from flask import Flask, jsonify, render_template
import pymongo
#initate a flask app
app = Flask(__name__)
#prep some data by connecting to MongoDB
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.teams


myName = "Data"
myList = [x for x in range(10)]
mydict = {"404" : "error",
    "code" : "Not found!"}

db.team.insert_one(mydict)

mydict = db.team.find()

#create the web server
@app.route("/")
def echo(): 
    return render_template("index.html", variable=myName, text=" Someone help! ", list = myList, dict=mydict)

@app.route("/api/v2/data")
def data(): 
    return jsonify(mydict)


app.run()