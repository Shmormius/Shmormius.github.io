import requests
from bs4 import BeautifulSoup
import json
import os

def updatePlayerJSON(name, url):
    soup_object = getSoupObject(url)
    JSON_data = createJSONData(soup_object)
    update_current_JSON(name, JSON_data)

def getSoupObject(url):
    content_from_website = requests.get(url)
    iterable_soup_object = BeautifulSoup(content_from_website.content, 'html.parser')
    return iterable_soup_object

def createJSONData(iterable_soup_object):
    new_data = {}
    stats_containing_class = "flex flex-col px-8 py-2"
    name_containing_class = "text-sm md:text-base cursor-default"
    data_containing_class = "text-base md:text-lg font-bold leading-0"

    DBDStatsElements = iterable_soup_object.find_all("div", class_= stats_containing_class)
    for DBD_data_element in DBDStatsElements:
        name_element = DBD_data_element.find("p", class_=name_containing_class)
        data_element = DBD_data_element.find("p", class_=data_containing_class)
    
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