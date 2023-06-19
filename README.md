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
Here, the overall system is decomposed into a set of sub-systems. A subsystem is a system of its own right whose operation does not depend on the services provided by other subsystems[9]. At the most abstract level, the architectural design of our system is depicted as a block diagram in which each box represents a subsystem. Boxes within boxes indicate that the subsystem has been broken down into smaller subsystems called modules. A module is a system component that provides one or more services to other modules.

In the proposed system, the system is broken down into two subsystems: Resume builder and Job recommender. The subsystem Resume builder consists of two modules, namely: Input in form and download resume. The other subsystem Job recommender consists of two modules: Content based filtering and web scraping. These modules are integrated together to fulfil the requirements of the application. 


#### * Resume Builder:
The basic work of the resume builder is to develop a resume from the inputs given by the user in an input form . The input details will be dynamically reflected in a page. The user will also have various templates to choose from. On completion of the resume building process, the user can download their resume directly. This sub-system is further divided into two modules:

  **- Input in form:** This module takes the user’s details as input from an HTML form and shows the changes made in the resume dynamically.   
  **- Download Resume:** This module downloads the finished resume in pdf form, in the user’s system. 

#### * Job Recommender: 
This sub-system give us recommendations of job titles based on the skills provided by the user. It will also display a list of jobs for the corresponding job title scraped from different websites. This subsystem is decomposed into two modules:

   **- Content Based Filtering:** This module performs content based filtering on the user’s skills to recommend the top 5 job titles best suited for the user’s profile. This module also displays the percentage match for each job title with the user’s skill. 
   
   **- Job Scraping:** This module scrapes different websites for job openings for the selected job title and presents it to the user.

# 4. ALGORITHMS

#### Algorithm for dynamic resume generation
**Input:** A default set of input fields
**Output:** A dynamically generated resume
Begin
  * Create input fields for collected user information
  * Add event listener to corresponding field
  * If user wishes to add a new input field: Goto Step 2
  * Event Listener continuously listens for changes in their corresponding input fields.
  * If change is detected, it is immediately reflected in the resume body.
End

#### Algorithm for recommender system:

**Input:** Job skills of the user

**Output:** List of top 6 jobs recommended based on user skills
Begin
  * Convert the job titles into vectors.
  * Calculate cosine similarity between the jobs and skills in the dataset.
  * For each skill given by the user, do:
    
    a. Calculate similarity score between given skill and job titles.
    
    b. Sort the similarity score for each job in descending order.
    
    c. Consider only the top 6 jobs.
    
    d. Add the job and corresponding score in a dictionary.
    
  * End for-loop
  * Sort the list of jobs in descending order based on similarity score.
  * Remove any duplicate items in the list.
  * Display the top six jobs.
End

# 5. RESULTS AND OUTPUTS

![image](https://github.com/i-sroy/Resume-Builder-with-Job-Recommendation-System/assets/109264496/7c79483a-885e-4b13-bd67-a637f4e9c732)

![image](https://github.com/i-sroy/Resume-Builder-with-Job-Recommendation-System/assets/109264496/e7d76c0c-3669-4183-9d6a-28920860757b)

![image](https://github.com/i-sroy/Resume-Builder-with-Job-Recommendation-System/assets/109264496/a2b6eae9-279a-4cb9-97d1-9067906a489c)

![image](https://github.com/i-sroy/Resume-Builder-with-Job-Recommendation-System/assets/109264496/050d060e-1a54-4af9-94da-40bd45c7180f)

  ##### Project by - Ishita Sinha Roy, Pratyusha Ghosh, Megha Sharma.


