import requests
from bs4 import BeautifulSoup
import json
import os

# Scrape the web page
url = 'https://deadbystats.eu/profile/76561198375240696'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

new_data = {}

job_elements = soup.find_all("div", class_="flex flex-col px-8 py-2")

for job_element in job_elements:
    name_element = job_element.find("p", class_="text-sm md:text-base cursor-default")
    data_element = job_element.find("p", class_="text-base md:text-lg font-bold leading-0")
    
    if name_element is not None and data_element is not None:
        name_text = name_element.text.strip()
        data_text = data_element.text.strip()
        
        name_text = name_text.replace("\n", "") 
        data_text = data_text.replace("\n", "")
        data_text = data_text.replace(" ", "")
        
        print(name_text)
        print(data_text)
        print()

        new_data[name_text] = data_text

# Load the current JSON
json_file_path = 'main-pages/blogs/dbd-stats/dbd.JSON'
if os.path.getsize(json_file_path) > 0:  # Check if the file is not empty
    with open(json_file_path, 'r') as file:
        current_data = json.load(file)
else:
    current_data = {}  # Initialize as an empty dictionary if the file is empty

# Update the JSON data
current_data.update(new_data)

# Save the updated JSON
with open(json_file_path, 'w') as file:
    json.dump(current_data, file, indent=4)