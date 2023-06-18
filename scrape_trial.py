# import urllib.request
from bs4 import BeautifulSoup
import ssl
# import lxml
import requests
# import itertools
# import json

def sec():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

def bsoup(name):
    # position = input("Enter the position you want to apply for: ")
    # location = input("Enter the location: ")
    def get_url(n):
        template = 'https://www.linkedin.com/jobs/search?keywords={}&location={}'
        url = template.format(n,"India")
        return url

    #Connecting the url
    url1 = get_url(name)
    #print(url1)
    response = requests.get(url1)

    soup = BeautifulSoup(response.text,'html.parser')

    tags_pos = soup.find_all('div','base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card')
    tags_comp = soup.find_all('div','base-search-card__info')

    tag2 = tags_comp[0] 
    atag_comp = tag2.a
    #print(atag_comp.text) #name of the company
    #print(atag_comp['href']) #linkedin link of the company
    tag2.find('span','job-search-card__location').text.strip()
    #post_date = tag2.find('time','job-search-card__listdate')['datetime'] #Date of the job posting

    tag =tags_pos[0]    #single record
    atag = tag.a    #locating the anchor tag
    #print(atag.get('href'))     #retrieving the link of the job inside anchor tag
    tag.find('span','sr-only').text.strip()     #Getting the name of the position 
    # if(len(tags_comp)>len(tags_pos)):
    #     size = len(tags_pos)
    # else:
    #     size = len(tags_comp)
    # for i in range(0,size):
    f_data = scraped_records(tags_pos,tags_comp,atag,atag_comp,tag2)
    print()
    print()
    return f_data
    #print("returned list: ",f_data)
    #return f_data
    #return tags_pos,tags_comp


def scraped_records(tags_pos,tags_comp,atag,atag_comp,tag2):
    trial_data = []
    if(len(tags_comp)>len(tags_pos)):
        size = len(tags_pos)
    else:
        size = len(tags_comp)
    for i in range(0,size):
        #print(i)
        print()
        print()
        tag = tags_pos[i]
        tag2 = tags_comp[i]
        atag = tag.a
        #pos_name = tag.find('span','sr-only').text.strip()
        #job_apply_link = atag.get('href')
        #print(job_apply_link)
        atag_comp = tag2.a
        #print(tag2.__dict__)
        #print(atag_comp)
        #comp_name = atag_comp.text

        #comp_link = atag_comp.get('href')
        #job_loc = tag2.find('span','job-search-card__location').text.strip()
        #post_date = tag2.find('time','job-search-card__listdate')['datetime']
        #post_day = tag2.find('time','job-search-card__listdate').text.strip()
        '''print("NAME OF THE COMPANY:  ",comp_name)
        print("NAME OF THE POSITION:  ",pos_name)
        print("JOB APPLICATION LINK: ",job_apply_link)
        print("LINKEDIN PROFILE OF THE COMPANY:  ",comp_link)
        print("JOB LOCATION:  ",job_loc)
        print("DATE OF JOB POSTIING:  {}, {}".format(post_date,post_day))'''

        info = {}
        #trial_data.append(i)

        if atag_comp:
            info['company name'] = atag_comp.text.strip()
            print("NAME OF THE COMPANY:  ",atag_comp.text.strip())      #company name
        else:
            info['company name'] = "NOT FOUND"
            print("NAME OF THE COMPANY: NOT FOUND")
    

        if tag.find('span','sr-only').text.strip():
            info['pos name'] = tag.find('span','sr-only').text.strip()
            print("NAME OF THE POSITION:  ",tag.find('span','sr-only').text.strip())   
        else:
            info['pos name'] = "NOT FOUND"
            print("NAME OF THE POSITION: NOT FOUND ")


        if atag.get('href') :
            info['job application link'] = atag.get('href')
            print("JOB APPLICATION LINK: ",atag.get('href'))
        else: 
           info['job application link'] = "NOT FOUND"
           print("JOB APPLICATION LINK: NOT FOUND")


        if(atag_comp):
            info['linkedin prof'] = atag_comp.get('href')
            print("LINKEDIN PROFILE OF THE COMPANY:  ",atag_comp.get('href'))
        else:
            info['linkedin prof'] = "NOT FOUND"
            print("LINKEDIN PROFILE OF THE COMPANY:  NOT FOUND")


        if(tag2.find('span','job-search-card__location').text.strip()):
            info['job loc'] = tag2.find('span','job-search-card__location').text.strip()
            print("JOB LOCATION:  ",tag2.find('span','job-search-card__location').text.strip())
        else:
            info['job loc'] = "NOT FOUND"
            print("JOB LOCATION:  NOT FOUND")


        if(tag2.find('time','job-search-card__listdate') and tag2.find('time','job-search-card__listdate')):
            info['date'] = (tag2.find('time','job-search-card__listdate')['datetime'],tag2.find('time','job-search-card__listdate').text.strip())
            print("DATE OF JOB POSTIING:  {}, {}".format(tag2.find('time','job-search-card__listdate')['datetime'],tag2.find('time','job-search-card__listdate').text.strip()))
        else:
            info['date'] = "NOT FOUND"
            print("DATE OF JOB POSTIING: NOT FOUND")
        
        trial_data.append(info)
        #print(trial_data)
        print()
        print()
    return trial_data
        
    #print("-----------------function list--------------------: ",trial_data)
    # json_obj = json.dumps(trial_data, indent = 4)
    # file = open('test.json','w+')
    # file.write(json_obj)
    #return trial_data
# sec()
# bsoup()