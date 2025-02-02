import os
import threading
import concurrent.futures

import filetype
from flask import *

# region Module-fields.
_chunks = {}
_dl_bps = 8192
_metadata = {}
_uploading = []
_chunk_locks = {}
_app = Flask(__name__)
_lock_uploading = threading.Lock()
_executor = concurrent.futures.ThreadPoolExecutor()
# endregion

try:
    os.mkdir("./files")
except FileExistsError:
    pass


@_app.route("/")
def index():  # Pass `q` as a parameter here :D (e.g. `q: int`!)
    q = request.args.get("q")
    return f"You passed the number `{q}`!"


@_app.route("/ul/<string:p_name>", methods=["PUT"])
def ul(p_name: str):
    content = request.get_json()
    chunk_id = content["chunkId"]

    if chunk_id == -1:
        _metadata[p_name]["chunkCount"] = content["chunkCount"]

        if _uploading.__contains__(p_name):
            return make_response("Sorry, that file already exists!", 409)
        else:
            _uploading.append(p_name)
    else:
        if _uploading.__contains__(p_name):
            payload = content["payload"]
            _chunks[p_name].append(payload)

    return make_response(200)


@_app.route("/dl/<string:p_name>")
def dl(p_name: str):
    for anomaly in []:
        if p_name.__contains__(anomaly):
            return make_response(
                f"Sorry, the file path {p_name} contains a reference to a parent directory in the form of a `{anomaly}`.")

    def file_yielder():
        with open(f"./files/{p_name}") as file:
            yield file.read(_dl_bps)

    ret = Response(file_yielder(), mimetype="")
    ret.headers["Content-Disposition"] = f"attachment; filename={p_name}"
    return ret


# filetype.guess() # Use to guess file-types. You will get an enum back.
if __name__ == "__main__":
    _app.run()
    # print("Please use `flask --app app run` instead.")
