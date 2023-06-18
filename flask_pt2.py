from flask import Flask, request, render_template 
from matplotlib import pyplot as plt
# Flask constructor
#import test_code
import recommender
import scrape_trial
#import random
app = Flask(__name__)   
  
# A decorator used to tell the application
# which URL is associated function

@app.route('/')
def root():
   return render_template("index.html")

@app.route('/start')
def start():
   return render_template("index.html")

@app.route('/get_freq', methods=["GET", "POST"])
def get_freq(): 
    if request.method == "POST":
       # getting input with freq = set_freq in HTML form
       global freq 
       freq = request.form.getlist("rest") # <--- do whatever you want with that value
       #s1 = request.form['skill1']
       #print(s1)
       print(f"FREQ -- {freq}")
       freq2 = []
       for elem in freq:
          if elem:
             freq2.append(elem)
       df = recommender.get_jobs(freq2)
       global data
       data = list(df['jobs'])
       print(f"data--{data[1]}")
       score = list(df['scores'])
       global rounded
       rounded = []
      #  global round1
      #  round1 =[]
       
       #print(round1)
       for sc in score:
          sc = round(sc,2)
          rounded.append(sc)
       print(len(rounded))
      #  round1 = rounded
      #  #round1[5]=round1[5]-random.randint(20, 30)
      #  round1[4]=round1[4]-random.randint(10, 20)
      #  round1[3]=round1[3]-random.randint(0, 10)
      #  print(f"score--{score}")
       plt.rcParams.update({'font.size': 60})

       #data1 = {'AEM Technical Consultant / Developer': 1, 'Oracle Apps Technical Consultant': .6, 'Senior Technical Consultant': .49,
            #'Software Developer': .35, 'Android Developer': .28, '.NET Developer': .20}
      
      #  courses = list(data1.keys())
      #  values = list(data1.values())
      

       job_titles=('AEM Technical Consultant / Developer', 'Oracle Apps Technical Consultant', 'Senior Technical Consultant', 'Software Developer', 'Android Developer', '.NET Developer')
      #y_pos = np.arange(len(job_titles))
       clr = ('royalblue', 'slateblue', 'purple', 'plum', 'pink', 'salmon')
       #score1=(1, .6, .49, .35, .28, .20)

       plt.figure(figsize=(40,50))

       h=plt.barh(data[0:6],rounded[0:6], color=clr)
       plt.title('Job Title vs Score', pad=120, fontsize=120)
       plt.yticks([])
       plt.legend(h, data[0:6])


       plt.savefig('static/styles/demo.png', transparent=True)
       
      # data = []
       #return "Your freq value is " + freq
    return render_template("job_rec.html",data=data, score=rounded)


@app.route('/test/', methods=['GET'])

def test():
    name = request.args.get('name','')
    scrape_trial.sec()
    data = scrape_trial.bsoup(name)
    # f = open('test.json','r')
    # x = f.read()
    # data = json.loads(x)
    return render_template('scraped_jobs.html', data=data)



# @app.route('/')
# def index():
#     data = ['a','b','c']
#     return render_template("index1.html",data=data)


# @app.route('/test')
# def test():
#     data = recommender.get_jobs()
#     #data = recommender.send()
#     # f = open('test.json','r')
#     # x = f.read()
#     # data = json.loads(x)
#     return render_template('index.html', data=data)


if __name__=='__main__':
   app.debug=True
   app.run()