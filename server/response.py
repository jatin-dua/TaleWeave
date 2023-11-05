from bardapi import Bard 
import os
import re

os.environ['_BARD_API_KEY']="cwi5_Y8OyDlkSq9DQvKIUpRIotv20T2bPMsCTlnAiqpik_r7ylo5m1RrWvn5RJzfqcglSQ."

def generate_response(message) -> str:
    # response = Bard().get_answer(f"{message}. Please help me improve the earlier previous sentences by correcting my writing errors and grammar as well as common-sense rules. Generate 3-4 bullet points in raw text format. Only the relevant information and not any other thing.")['content']
    response = Bard().get_answer(f"Improve the sentences by correcting my writing errors and grammar as well as common-sense rules in 3-4 bullet points and exclude this main content between $$$: {message} ")['content']
    print(f"Response generated: {response} ")
    
    # Define the regular expression pattern to match text between $$$
    pattern = r'\$\$\$(.*?)\$\$\$'

    # Use re.search to find the first match
    match = re.search(pattern, response)

    # Check if a match is found
    if match:
        # Extract the data between $$$
        extracted_response_data = match.group(1)
        return extracted_response_data
    else:
        return response

    

def generate_plot() -> str:
    # response = Bard().get_answer("Please generate a unique and creative story plot for my multiplayer game where each player will continue writing story turn by turn. Only include the story plot in the response (avoiding the acknowledgement response). The plot should only be a maximum of 40 words and creative. Also make sure to give the COMPLETE STORY PLOT and store the output between three $ signs like $$$")['content']
    # response = Bard().get_answer("Give a unique and creative story plot in 40 words.")['content']
    response = Bard().get_answer("Give a unique and creative story plot. Word limit is 40 words and do not exceed it.")['content']
    print(f"Plot response: {response} ")
    return response