from matplotlib import pyplot as plt
import numpy as np
plt.rcParams.update({'font.size': 60})

data = {'AEM Technical Consultant / Developer': 1, 'Oracle Apps Technical Consultant': .6, 'Senior Technical Consultant': .49,
        'Software Developer': .35, 'Android Developer': .28, '.NET Developer': .20}
 
courses = list(data.keys())
values = list(data.values())
 

job_titles=('AEM Technical Consultant / Developer', 'Oracle Apps Technical Consultant', 'Senior Technical Consultant', 'Software Developer', 'Android Developer', '.NET Developer')
#y_pos = np.arange(len(job_titles))
clr = ('royalblue', 'slateblue', 'purple', 'plum', 'pink', 'salmon')
score=(1, .6, .49, .35, .28, .20)

plt.figure(figsize=(40,56))

h=plt.barh(job_titles,score, color=clr)
plt.title('Job Title vs Score', pad=120, fontsize=120)
plt.yticks([])
plt.legend(h, job_titles)
plt.savefig('demo.png', transparent=True)

'''
plt.figure(figsize=(55,65))
# creating the bar plot
h=plt.barh(courses, values)
plt.title('Job Title vs Score', pad=120, fontsize=120)
plt.legend(h, courses)
'''

'''
height = [3, 12, 5, 18, 45]
bars = ('A', 'B', 'C', 'D', 'E')

# Choose the position of each barplots on the x-axis (space=1,4,3,1)
x_pos = [0,5,10,15,20]
# Create bars
plt.figure(figsize=(20,20))
plt.barh(x_pos, height)
 
# Create names on the x-axis
plt.yticks(x_pos, bars, )
 
# Show graphic
#plt.show()

'''
