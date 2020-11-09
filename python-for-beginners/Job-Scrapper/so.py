import requests  # http request를 보내게 해주는 module(https://github.com/psf/requests)
from bs4 import BeautifulSoup

URL = "https://stackoverflow.com/jobs?q=python"


def get_last_page():
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pagination = soup.find("div", {"class": "s-pagination"})
    links = pagination.find_all("a")
    print(len(links))


def get_jobs():
    last_page = get_last_page()
    return []