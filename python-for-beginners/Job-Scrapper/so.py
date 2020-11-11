import requests  # http request를 보내게 해주는 module(https://github.com/psf/requests)
from bs4 import BeautifulSoup

URL = "https://stackoverflow.com/jobs?q=python"


def get_last_page():
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pagination = soup.find("div", {"class": "s-pagination"})
    pages = pagination.find_all("a")
    last_page = int(pages[-2].span.string)
    return last_page


def extract_job(html):
    anchor = html.find("h2", {"class": "fc-black-800"}).a
    title = anchor["title"]
    link = anchor["href"]
    link = f"https://stackoverflow.com/{link}"
    company, location = html.find("h3", {"class": "fc-black-700"}).find_all(
        "span", recursive=False
    )
    if company.string != None:
        company = company.get_text(strip=True)
    else:
        company = company.get_text().split("\r\n")[0]
    location = location.get_text(strip=True)
    return {"title": title, "company": company, "location": location, "link": link}


def extract_jobs(last_page):
    jobs = []
    for page in range(last_page):
        print(f"Scrapping SO: Page {page+1}")
        result = requests.get(f"{URL}&pg={page+1}")
        soup = BeautifulSoup(result.text, "html.parser")
        results = soup.find_all("div", {"class": "-job"})
        for result in results:
            job = extract_job(result)
            jobs.append(job)
    return jobs


def get_jobs():
    last_page = get_last_page()
    jobs = extract_jobs(last_page)
    return jobs