# 1. INTRODUCTION

This project is a web application where the user will be able to choose a template of their choice and enter their details, which will be dynamically reflected in the resume. The user will also have the option of downloading the resume. On submission of the details, a graph of recommended jobs based on the provided skill-set will be displayed. For their ease, percentage matches will be provided beside each job title.

Additionally the user will be able to choose which job title among the recommended ones, they wish to go forward with. After that, the list of scraped job openings for that particular job title will be displayed to the user.

# 2. HOW TO RUN

#### - Installations
              - pip3 install -r requirements.txt
              
The data is already processed and saved in the following pickle files - model_pickle, data, skills.
* Navigate to the project folder and run the file ‘flask_pt2.py’  by typing ‘python3 flask_pt2.py’ in the terminal.
* If you want to process the data from scratch then run ‘job_train.ipynb’ file and then repeat the first step.
#### _DO NOT CHANGE THE STRUCTURE OF THE FOLDERS_

# 3. FLOWCHART
![image](https://github.com/i-sroy/Resume-Builder-with-Job-Recommendation-System/assets/109264496/a476353f-c9be-425e-8e42-a7bbae0dbbf6)


