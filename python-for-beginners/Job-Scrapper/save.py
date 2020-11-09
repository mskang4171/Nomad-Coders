import csv


def save_to_file(jobs):
    file = open("jobs.csv", mode="w")  # write file(쓰기모드)
    writer = csv.writer(file)
    writer.writerow(["title", "company", "location", "link"])
    return