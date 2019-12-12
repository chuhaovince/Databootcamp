# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE

app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a list of strings and renders index.html template
# CODE GOES HERE

movies = ["Titanic", "Avengers", "haha", "hoho", "xixi", "hehe"]

@app.route("/")
def home():
    return render_template("index.html", list = movies)

if __name__ == "__main__":
    app.run(debug=True)
