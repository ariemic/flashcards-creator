import requests, uuid, json
import pandas as pd

# Add your key and endpoint
key = "941c798c46934cdfa7123921b60c3e2e"
endpoint = "https://api.cognitive.microsofttranslator.com"

# location, also known as region.
# required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
location = "westeurope"

path = '/translate'
constructed_url = endpoint + path

params = {
    'api-version': '3.0',
    'from': 'en',
    'to': ['pl']
}

headers = {
    'Ocp-Apim-Subscription-Key': key,
    # location required if you're using a multi-service or regional (not global) resource.
    'Ocp-Apim-Subscription-Region': location,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}

def translate_text(text):
    body = [{'text': text}]
    request = requests.post(constructed_url, params=params, headers=headers, json=body)
    if request.status_code == 200:
        response = request.json()
        return response[0]["translations"][0]["text"]
    else:
        print(f"Error: {request.status_code}, {request.text}")
        return None

df = pd.read_csv("wordlist.csv")

df["Translation_PL"] = df["Word"].apply(translate_text)
df["Example_PL"] = df["Example"].apply(translate_text)

# Save the modified CSV
df.to_csv("translated_wordlist.csv", index=False)