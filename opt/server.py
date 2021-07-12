from flask import Flask, request, redirect, render_template, Response, jsonify
from flask_bootstrap import Bootstrap

nc = Flask(__name__)

@nc.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    nc.run(host="0.0.0.0", port=8000, debug=False)