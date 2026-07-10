from flask import Flask, render_template, request, jsonify
from classifier import classify
from llm import generate_recommendation

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.get_json()

    text = data.get("events", "")

    events = text.split("\n")

    result = classify(events)

    ai_response = generate_recommendation(text, result["state"])

    result["ai_response"] = ai_response

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)