import requests
from bs4 import BeautifulSoup
import json
import os

# Scrape the web page
url = 'https://deadbystats.eu/profile/76561198375240696'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Extract data and update the JSON file
data = {'scraped_info': soup.title.text}  # Example extraction

# Load the current JSON
json_file_path = 'main-pages/blogs/dbd-stats/dbd.JSON'
if os.path.getsize(json_file_path) > 0:  # Check if the file is not empty
    with open(json_file_path, 'r') as file:
        current_data = json.load(file)
else:
    current_data = {}  # Initialize as an empty dictionary if the file is empty

# Update the JSON data
current_data.update(data)

# Save the updated JSON
with open(json_file_path, 'w') as file:
    json.dump(current_data, file, indent=4)