import os
import threading
import filetype
from flask import *

locks_chunks = {}
lock_upload = threading.Lock()

chunks = {}
uploading = []
speed_dl_bps = 8192
app = Flask(__name__)

try:
    os.mkdir("./files")
except FileExistsError:
    pass


@app.route("/")
def index():  # Pass `q` as a parameter here :D (e.g. `q: int`!)
    q = request.args.get("q")
    return f"You passed the number `{q}`!"


@app.route("/ul/<string:name>", methods=["POST"])
def ul(name: str):
    content = request.get_json()
    chunk_count = content["chunkCount"]

    return make_response("", 200)


@app.route("/dl/<string:name>")
def dl(name: str):
    for anomaly in []:
        if name.__contains__(anomaly):
            return make_response(
                f"Sorry, the file path {name} contains a reference to a parent directory in the form of a `{anomaly}`.")

    def file_yielder():
        with open(f"./files/{name}") as file:
            yield file.read(speed_dl_bps)

    ret = Response(file_yielder(), mimetype="")
    ret.headers["Content-Disposition"] = f"attachment; filename={name}"
    return ret


# filetype.guess() # Use to guess file-types. You will get an enum back.
if __name__ == "__main__":
    app.run()
    # print("Please use `flask --app app run` instead.")
