import os
import requests

def check_online(urls_str):
  urls = urls_str.lower().split(',')
  for i, url in enumerate(urls):
      if url.count('.') == 0:
        print(f'{url.strip()} is not a valid URL.')
        continue
      urls[i] = url.strip()
      if urls[i].count('http://') == 0:
        urls[i] = 'http://'+urls[i]
      try:
        if requests.get(urls[i]).status_code == requests.codes.ok:
          print(f'{urls[i]} is up!')
      except:
        print(f'{urls[i]} is down!')

start_over = True

while start_over == True:
  print(f'Welcome to {os.path.basename(__file__)}!')
  print('Please write a URL or URLs you want to check. (seperated by comma)')
  check_online(input())
  keep_ask = True
  while keep_ask == True:
    answer = input('Do you want to start over? y/n ')
    if answer == 'y':
      os.system('clear')
      keep_ask = False
    elif answer == 'n':
      print("Ok. bye")
      start_over = False
      keep_ask = False
    else:
      print("That's not a valid answer")
      keep_ask = True