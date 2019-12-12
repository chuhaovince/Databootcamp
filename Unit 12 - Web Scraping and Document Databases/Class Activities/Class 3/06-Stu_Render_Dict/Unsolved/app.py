# import necessary libraries
from flask import Flask, render_template
import pymongo

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)

# @TODO: Create a list of dictionaries
# CODE GOES HERE

list_of_dict = [{"name":"vince","type":"Vinceeee"},{"name":"apple","type":"tree"},{"name":"haha","type":"hoho"}]

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE

@app.route("/")
def home():
    return render_template("index.html", list=list_of_dict)

if __name__ == "__main__":
    app.run(debug=True)
