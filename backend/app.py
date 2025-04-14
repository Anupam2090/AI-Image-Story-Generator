from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from caption_generator import generate_caption
from story_generator import generate_story

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files or 'prompt' not in request.form:
        return jsonify({'error': 'Missing image or prompt'}), 400

    file = request.files['image']
    user_prompt = request.form['prompt']
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    caption = generate_caption(filepath)

    # Combine both caption and user input
    final_prompt = f"{user_prompt} — The image seems to depict: {caption}"
    story = generate_story(final_prompt)

    return jsonify({'caption': caption, 'user_prompt': user_prompt, 'story': story})


if __name__ == '__main__':
    app.run(debug=True)
