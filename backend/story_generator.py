import configparser
import google.generativeai as genai

# Read the API key from credential.ini
config = configparser.ConfigParser()
config.read(r"D:\AI Image Story Generator\backend\credential.ini")

# Check if 'gemini' section exists
if 'gemini' in config:
    api_key = config.get('gemini', 'api_key')
    print(f"API Key loaded successfully: {api_key}")
else:
    print("Error: 'gemini' section not found in the configuration file.")
    # You may want to raise an exception or handle it accordingly
    exit(1)  # Terminate the script if the API key is not found

# Configure Gemini with the API key
genai.configure(api_key=api_key)

def generate_story(prompt):
    model = genai.GenerativeModel('gemini-1.5-pro')
    response = model.generate_content(f"Write a short, creative story based on this scene: {prompt}")
    return response.text.strip()
