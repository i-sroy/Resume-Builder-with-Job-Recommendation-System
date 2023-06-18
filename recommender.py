# -*- coding: utf-8 -*-
"""Recommender.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/15luodAmySPRWeU0z2FuHPh9J5wAm173_
"""

import pandas as pd
import numpy as np
import pickle
import matplotlib.pyplot as plt

def get_recommendation(sks,jobs,cosine_sim):
    with open('data','rb') as f:     #loading data
      df=pickle.load(f)
    #print(df['title']) 

    with open('skills','rb') as f:    #loading unique skills
      skills=pickle.load(f)
    #print(skills)

    indices=pd.Series(df.index, index=df['skills']).drop_duplicates()
    #print(indices)

    skill = []
    for i in sks:
      print('$$'*20)
      # print(skills.keys())
      print(i)
      print('$$'*20)

      skill.append(skills[i]) 

    jobs=dict()
    #print(indices.head(1))
    for i in skill:
      idx=indices[i]
      sim_scores=list(enumerate(cosine_sim[idx]))
      sim_scores=sorted(sim_scores,key=lambda X: X[1], reverse=True)
      sim_scores=sim_scores[0:5]
      #print("ddddddddddddddddd   :    ",sim_scores)
      for j in sim_scores:
        # print(j[0])
        # print(j[1])
        jobs.update({j[0]: j[1]})
        # jobs[j[0]]=j[1]
      '''j=pd.DataFrame(sim_scores,columns=['title','rank'])
      jobs[]=jobs.append(j)'''
      
      #print("dghgdsdgs",jobs)
      
     # print("ufhdffdj",tech_indices)
      #yield df3['title'].iloc[tech_indices]
    jobs=sorted(jobs.items(), key=lambda x:x[1], reverse=True)
    tech_indices=[i[0] for i in jobs]
    #print(jobs)
    
    #print("Jobs ",jobs)
    #print("Tech indices: ",tech_indices)
    return jobs[0:10],tech_indices[0:10]

def get_jobs(s):
  with open('model_pickle','rb') as f:
    model=pickle.load(f)
  
  with open('data','rb') as f:     #loading data
    df=pickle.load(f)
  jobs={}
  jobs,tech_indices = get_recommendation(s,jobs,model)
  x = df['title'].iloc[tech_indices]
  x=set(x)
  y=[]

  for i in jobs:
    y.append(i[1]*100)
  print(y)
  #lis=[]

  recommended_jobs=pd.DataFrame(list(zip(x, y)),columns =['jobs', 'scores'])
  print("Before:   ",recommended_jobs)
  recommended_jobs.drop_duplicates()
  #print("hdjhdjsdjshdsdj: ", set(recommended_jobs))
  # lis=list(recommended_jobs['jobs'])
  # lis1 = list(recommended_jobs['scores'])
  #print(lis)
  print("jhfjdsfjdsfdf: ", recommended_jobs)
  return recommended_jobs
  #print(recommended_jobs)
