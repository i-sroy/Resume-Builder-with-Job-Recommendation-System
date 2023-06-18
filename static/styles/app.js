//=================CHANGE TABS=================
function show_templates(){
    document.getElementById("templates").style.display="inline";
    document.getElementById("basic").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("work_exp").style.display = "none";
    document.getElementById("skills").style.display="none";
    document.getElementById("projects").style.display="none";
}
function show_bio()
{
    document.getElementById("templates").style.display="none";
    document.getElementById("basic").style.display = "inline";
    document.getElementById("education").style.display = "none";
    document.getElementById("work_exp").style.display = "none";
    document.getElementById("skills").style.display="none";
    document.getElementById("projects").style.display="none";
}
function show_edu() 
{
    document.getElementById("templates").style.display="none";
    document.getElementById("basic").style.display = "none";
    document.getElementById("education").style.display = "inline";
    document.getElementById("work_exp").style.display = "none";
    document.getElementById("skills").style.display="none";
    document.getElementById("projects").style.display="none";
}
function show_work_exp()
{
    document.getElementById("templates").style.display="none";
    document.getElementById("basic").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("work_exp").style.display = "inline";
    document.getElementById("skills").style.display="none";
    document.getElementById("projects").style.display="none";
}
function show_skills()
{
    document.getElementById("templates").style.display="none";
    document.getElementById("basic").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("work_exp").style.display = "none";
    document.getElementById("skills").style.display="inline";
    document.getElementById("projects").style.display="none";
}

function show_projects(){
    document.getElementById("templates").style.display="none";
    document.getElementById("basic").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("work_exp").style.display = "none";
    document.getElementById("skills").style.display="none";
    document.getElementById("projects").style.display="inline";
}
//===================GET MONTH NAME
function get_month(date){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date(date);
    var return_str=monthNames[d.getMonth()]+' '+d.getFullYear()
    console.log(return_str)
    return(return_str)
}

//==========================TEMPLATE DEPENDENT VARIABLES

var full_name=''
var email=''
var phone=''
var loc=''
var website=''
var subtitle=''

var skills=[]
var skill_level=[]

var education_name=[]
var education_degree=[]
var edu_duration_start=[]
var edu_duration_end=[]

var company_name=[]
var job_title=[]
var job_loc=[]
var job_desc=[]
var job_duration_start=[]
var job_duration_end=[]

var proj_title=[]
var proj_desc=[]
var proj_start=[]
var proj_stop=[]

var template_1=document.getElementById("template-1")
var template_2=document.getElementById("template-2")
//=================CHANGE TEMPLATES=================
//''''''''''''''''''''''''''selected_template =1 (default)''''''''''
var selected_template=1
function select_template_1(){
    console.log("template-1")
    template_1.style.display='inline';
    template_2.style.display='none';
    selected_template=1
    //''''''''''''''''''change variables'''''''''''''''''''''//
    full_name=document.getElementById('r1_full_name')
    email=document.getElementById('r1_email_val')
    phone=document.getElementById('r1_phone_val')
    loc=document.getElementById('r1_address_val')
    website=document.getElementById('r1_web_val')
    subtitle=document.getElementById('r1_desc')

    //''''''''''dynamic
    skills[1]=document.getElementById('r1_skill_name_1')
    skills[2]=document.getElementById('r1_skill_name_2')
    skills[3]=document.getElementById('r1_skill_name_3')

    skill_level[1]=document.getElementById('r1_skill_level_1')
    skill_level[2]=document.getElementById('r1_skill_level_2')
    skill_level[3]=document.getElementById('r1_skill_level_3')

    education_name[1]=document.getElementById('r1_edu_name_1')
    education_degree[1]=document.getElementById('r1_edu_degree_1')
    edu_duration_start[1]=document.getElementById('r1_edu_duration_start_1')
    edu_duration_end[1]=document.getElementById('r1_edu_duration_end_1')

    company_name[1]=document.getElementById('r1_expr_1_cmp_name')
    job_title[1]=document.getElementById('r1_expr_1_position')
    job_loc[1]=document.getElementById('r1_expr_1_cmp_add')
    job_desc[1]=document.getElementById('r1_expr_1_desc')
    job_duration_start[1]=document.getElementById('r1_expr_1_duration_start')
    job_duration_end[1]=document.getElementById('r1_expr_1_duration_end')

    proj_title[1]=document.getElementById('r1_proj_name_1')
    proj_desc[1]=document.getElementById('r1_project_desc_1')
    proj_start[1]=document.getElementById('r1_proj_duration_start_1')
    proj_stop[1]=document.getElementById('r1_proj_duration_end_1')
    
}

function select_template_2(){
    console.log("template-2")
    document.getElementById("template-1").style.display='none';
    document.getElementById("template-2").style.display='inline';
    selected_template=2
    //''''''''''''''''''change variables'''''''''''''''''''''//
    
    full_name=document.getElementById('r2_full_name')
    email=document.getElementById('r2_email_val')
    phone=document.getElementById('r2_phone_val')
    loc=document.getElementById('r2_address_val')
    website=document.getElementById('r2_web_val')
    subtitle=document.getElementById('r2_desc')

    //''''''''''''''''''change variables'''''''''''''''''''''//
    skills[1]=document.getElementById('r2_skill_name_1')
    skills[2]=document.getElementById('r2_skill_name_2')
    skills[3]=document.getElementById('r2_skill_name_3')

    skill_level[1]=document.getElementById('r2_skill_level_1')
    skill_level[2]=document.getElementById('r2_skill_level_2')
    skill_level[3]=document.getElementById('r2_skill_level_3')

    education_name[1]=document.getElementById('r2_edu_name_1')
    education_degree[1]=document.getElementById('r2_edu_degree_1')
    edu_duration_start[1]=document.getElementById('r2_edu_duration_start_1')
    edu_duration_end[1]=document.getElementById('r2_edu_duration_end_1')

    company_name[1]=document.getElementById('r2_expr_1_cmp_name')
    job_title[1]=document.getElementById('r2_expr_1_position')
    job_loc[1]=document.getElementById('r2_expr_1_cmp_add')
    job_desc[1]=document.getElementById('r2_expr_1_desc')
    job_duration_start[1]=document.getElementById('r2_expr_1_duration_start')
    job_duration_end[1]=document.getElementById('r2_expr_1_duration_end')

    proj_title[1]=document.getElementById('r2_proj_name_1')
    proj_desc[1]=document.getElementById('r2_project_desc_1')
    proj_start[1]=document.getElementById('r2_proj_duration_start_1')
    proj_stop[1]=document.getElementById('r2_proj_duration_end_1')

}

function add_profile_pic(event){
    console.log(event)
    var image=document.getElementById('r2_profile_pic')
    image.src=URL.createObjectURL(event.target.files[0])
}

//===============ADD / REMOVE EDUCATION INFORMATION===========
var edu_i=1;

function add_ed(){
    edu_i+=1;
    var sec=document.getElementById('add_edu_sec');
    var code=` 
    <div class="section" id="edu_info_`+edu_i+`">
        <div class="input-field">
            <i class="material-icons prefix fa-solid fa-school" id="edu_`+edu_i+`"></i>
            <input id="input_edu_inst_`+edu_i+`" type="text" class="validate" name="skill">
            <label for="edu_`+edu_i+`">Institution Name</label> <!--make sure the ids are same-->
        </div>
        <div class="input-field"> <!--SCHOOL/COLLEGE NAME-->
            <i class="material-icons prefix" id="edu_`+edu_i+`">school</i> <!--school is the name of the icon-->
            <input id="input_edu_degree_`+edu_i+`" type="text" class="validate" name="skill">
            <label for="edu_`+edu_i+`">Course and Subject</label> <!--make sure the ids are same-->
        </div>
        <div style="text-align: center;">
        <span class="input-field"> <!--SCHOOL/COLLEGE NAME-->
            <input type="month" id="input_edu_start_`+edu_i+`" style="width:40%;">
            
        </span>
        <span class="input-field" style="margin-left: 30px;"> <!--SCHOOL/COLLEGE NAME-->
            <input type="month" id="input_edu_stop_`+edu_i+`" style="width:40%;">
        </span>
        </div>
    </div>
    <div class="divider blue"></div>
    </div>
    <div id="add_edu_sec"></div>
    `;
    sec.outerHTML=code;
    listen_edu_name[edu_i]=document.getElementById('input_edu_inst_'+edu_i)
    listen_edu_name[2]=document.getElementById('input_edu_inst_2')
    listen_edu_name[3]=document.getElementById('input_edu_inst_3')
    listen_edu_name[4]=document.getElementById('input_edu_inst_4')
    listen_edu_name[5]=document.getElementById('input_edu_inst_5')
    listen_edu_name[6]=document.getElementById('input_edu_inst_6')

    listen_edu_degree[edu_i]=document.getElementById('input_edu_degree_'+edu_i)
    listen_edu_degree[2]=document.getElementById('input_edu_degree_2')
    listen_edu_degree[3]=document.getElementById('input_edu_degree_3')
    listen_edu_degree[4]=document.getElementById('input_edu_degree_4')
    listen_edu_degree[5]=document.getElementById('input_edu_degree_5')
    listen_edu_degree[6]=document.getElementById('input_edu_degree_6')

    listen_edu_duration_end[edu_i]=document.getElementById('input_edu_stop_'+edu_i)
    listen_edu_duration_start[edu_i]=document.getElementById('input_edu_start_'+edu_i)

    listen_edu_duration_end[2]=document.getElementById('input_edu_stop_2')
    listen_edu_duration_start[2]=document.getElementById('input_edu_start_2')
    listen_edu_duration_end[3]=document.getElementById('input_edu_stop_3')
    listen_edu_duration_start[3]=document.getElementById('input_edu_start_3')
    listen_edu_duration_end[4]=document.getElementById('input_edu_stop_4')
    listen_edu_duration_start[4]=document.getElementById('input_edu_start_4')
    listen_edu_duration_end[5]=document.getElementById('input_edu_stop_5')
    listen_edu_duration_start[5]=document.getElementById('input_edu_start_5')
    listen_edu_duration_end[6]=document.getElementById('input_edu_stop_6')
    listen_edu_duration_start[6]=document.getElementById('input_edu_start_6')

    console.log(selected_template)
    if(selected_template==1){
        console.log("EDU RES 1")
        var res_sec=document.getElementById('r1_add_edu')
        var code2=`
        <span>
        <span id="r1_edu_sec_`+edu_i+`">
            <div class="r1_left">
                <div id="r1_edu_name_`+edu_i+`" class="sub-sec-info-heading">XYZ PVT LTD</div>
                <div id="r1_edu_degree_`+edu_i+`">MSc. ABCD </div>
            </div>

            <div class="r1_right">
                <span id="r1_edu_duration_start_`+edu_i+`">Feb 2020 </span> -
                <span id="r1_edu_duration_end_`+edu_i+`"> Jan 2022</span>
            </div>
        <br><br>
        </span>
        
        <div id="r1_add_edu"></div>
        `
        res_sec.outerHTML=code2;
        education_name[edu_i]=document.getElementById("r1_edu_name_"+edu_i)
        education_degree[edu_i]=document.getElementById("r1_edu_degree_"+edu_i)

        edu_duration_start[edu_i]=document.getElementById('r1_edu_duration_start_'+edu_i)
        edu_duration_end[edu_i]=document.getElementById('r1_edu_duration_end_'+edu_i)
        
    }
    if(selected_template==2){
        console.log("EDU2")
        var res_sec=document.getElementById('r2_add_edu')
        var code2=`
        <span id="r2_edu_sec_`+edu_i+`">
                                
            <span id="r2_edu_name_`+edu_i+`" class="sub-sec-info-heading">XYZ INSTITUTE</span>
            <span class="r2_text_muted" style="font-size: 14px; float: right;">
                <span id="r2_edu_duration_start_`+edu_i+`">Feb 2020 </span> -
                <span id="r2_edu_duration_end_`+edu_i+`"> Jan 2022</span>
            </span>
            <div id="r2_edu_degree_`+edu_i+`">MSc. ABCD </div>    
        <br><br>
        </span>
        
        <div id="r2_add_edu"></div>
        `
        res_sec.outerHTML=code2;
        education_name[edu_i]=document.getElementById("r2_edu_name_"+edu_i)
        education_degree[edu_i]=document.getElementById("r2_edu_degree_"+edu_i)

        edu_duration_start[edu_i]=document.getElementById('r2_edu_duration_start_'+edu_i)
        edu_duration_end[edu_i]=document.getElementById('r2_edu_duration_end_'+edu_i)
    }
    //===========add is dynamic listener
    listen_edu_name[edu_i].addEventListener('input',(event)=>{
        console.log("Show Inst"+edu_i)
        education_name[edu_i].innerText=listen_edu_name[edu_i].value
    })

    listen_edu_degree[edu_i].addEventListener('input',(event)=>{
        education_degree[edu_i].innerText=listen_edu_degree[edu_i].value
    })
    
    listen_edu_duration_end[edu_i].addEventListener('input',(event)=>{
        console.log(listen_edu_duration_end[edu_i].value)
        edu_duration_end[edu_i].innerText=get_month(listen_edu_duration_end[edu_i].value)
    })

    listen_edu_duration_start[edu_i].addEventListener('input',(event)=>{
        edu_duration_start[edu_i].innerText=get_month(listen_edu_duration_start[edu_i].value)
    })

    listen_edu_name[2].addEventListener('input',(event)=>{
        console.log("Show Inst"+edu_i)
        education_name[2].innerText=listen_edu_name[2].value
    })
    listen_edu_degree[2].addEventListener('input',(event)=>{
        education_degree[2].innerText=listen_edu_degree[2].value
    })

    listen_edu_duration_end[2].addEventListener('input',(event)=>{
        console.log(listen_edu_duration_end[2].value)
        edu_duration_end[2].innerText=get_month(listen_edu_duration_end[2].value)
    })

    listen_edu_duration_start[2].addEventListener('input',(event)=>{
        edu_duration_start[2].innerText=get_month(listen_edu_duration_start[2].value)
    })

    listen_edu_name[3].addEventListener('input',(event)=>{
        console.log("Show Inst"+edu_i)
        education_name[3].innerText=listen_edu_name[3].value
    })
    listen_edu_degree[3].addEventListener('input',(event)=>{
        education_degree[3].innerText=listen_edu_degree[3].value
    })

    listen_edu_duration_end[3].addEventListener('input',(event)=>{
        console.log(listen_edu_duration_end[2].value)
        edu_duration_end[3].innerText=get_month(listen_edu_duration_end[3].value)
    })

    listen_edu_duration_start[3].addEventListener('input',(event)=>{
        edu_duration_start[3].innerText=get_month(listen_edu_duration_start[3].value)
    })

    listen_edu_name[4].addEventListener('input',(event)=>{
        console.log("Show Inst"+edu_i)
        education_name[4].innerText=listen_edu_name[4].value
    })
    listen_edu_degree[4].addEventListener('input',(event)=>{
        education_degree[4].innerText=listen_edu_degree[4].value
    })

    listen_edu_duration_end[4].addEventListener('input',(event)=>{
        console.log(listen_edu_duration_end[4].value)
        edu_duration_end[4].innerText=get_month(listen_edu_duration_end[4].value)
    })

    listen_edu_duration_start[4].addEventListener('input',(event)=>{
        edu_duration_start[4].innerText=get_month(listen_edu_duration_start[4].value)
    })

    listen_edu_name[5].addEventListener('input',(event)=>{
        console.log("Show Inst"+edu_i)
        education_name[5].innerText=listen_edu_name[5].value
    })
    listen_edu_degree[5].addEventListener('input',(event)=>{
        education_degree[5].innerText=listen_edu_degree[5].value
    })

    listen_edu_duration_end[5].addEventListener('input',(event)=>{
        console.log(listen_edu_duration_end[5].value)
        edu_duration_end[5].innerText=get_month(listen_edu_duration_end[5].value)
    })

    listen_edu_duration_start[5].addEventListener('input',(event)=>{
        edu_duration_start[5].innerText=get_month(listen_edu_duration_start[5].value)
    })
    
    listen_edu_name[6].addEventListener('input',(event)=>{
        console.log("Show Inst"+edu_i)
        education_name[6].innerText=listen_edu_name[6].value
    })
    listen_edu_degree[6].addEventListener('input',(event)=>{
        education_degree[6].innerText=listen_edu_degree[6].value
    })

    listen_edu_duration_end[6].addEventListener('input',(event)=>{
        console.log(listen_edu_duration_end[6].value)
        edu_duration_end[6].innerText=get_month(listen_edu_duration_end[6].value)
    })

    listen_edu_duration_start[6].addEventListener('input',(event)=>{
        edu_duration_start[6].innerText=get_month(listen_edu_duration_start[6].value)
    })
    
}
function remove_ed(){
    if(edu_i==1){
        alert("Must Have 1 Education Information")
    }
    else{
        sec_id="edu_info_"+edu_i;
        var sec=document.getElementById(sec_id);
        var code=`
        <div id="add_edu_sec"></div>
        `;
        sec.outerHTML=code;
        
        if(selected_template==1){
            res_sec=document.getElementById("r1_edu_sec_"+edu_i)
            var code2=``
            res_sec.outerHTML=code2
            education_name.splice(edu_i,1)
        }
        if(selected_template==2){
            res_sec=document.getElementById("r2_edu_sec_"+edu_i)
            var code2=``
            res_sec.outerHTML=code2
            education_name.splice(edu_i,1)
        }
        edu_i-=1;
    }
}

//=====================ADD & REMOVE SKILLS
var ski_i = 3;
function add_skill(){
    
    ski_i+=1;
    var sec=document.getElementById('add_skill_sec');
    var code=`  
    <div class="section" id="skill_sec_`+ski_i+`">
        <div class="input-field"> 
            <i class="material-icons prefix" id="skill_`+ski_i+`">insert_chart</i> 
            <input id="input_skill_`+ski_i+`" type="text" class="validate" name="skill">
            <label for="skill_`+ski_i+`">Skill `+ski_i+`</label>
        </div>

        <div class="input-field">
        <span>
        <label>
            <input name="input_skill_level_`+ski_i+`" type="radio" value="Beginner" checked />
            <span>Beginner</span>
        </label><br>
        <label>
            <input name="input_skill_level_`+ski_i+`" type="radio" value="Intermediate" />
            <span>Intermediate</span>
        </label><br>
        <label>
            <input name="input_skill_level_`+ski_i+`" type="radio" value="Expert" />
            <span>Expert</span>
        </label>
    </div>


    </div>
    <div class="divider blue"></div>
    <div id="add_skill_sec"></div>
    `;
    sec.outerHTML=code;
    listen_skills[ski_i]=document.getElementById('input_skill_'+ski_i)
    listen_skills_level[ski_i]=document.querySelectorAll('input[name="input_skill_level_'+ski_i+'"]')

    listen_skills[4]=document.getElementById('input_skill_4')
    listen_skills_level[4]=document.querySelectorAll('input[name="input_skill_level_4"]')

    listen_skills[5]=document.getElementById('input_skill_5')
    listen_skills_level[5]=document.querySelectorAll('input[name="input_skill_level_5"]')

    listen_skills[6]=document.getElementById('input_skill_6')
    listen_skills_level[6]=document.querySelectorAll('input[name="input_skill_level_6"]')

    if(selected_template==1){
        var res_sec=document.getElementById('r1_skill_items')
        skill_name=`r1_skill_name_`+ski_i
        var code2=`
        <div id="r1_skillset_`+ski_i+`">
        <div class="r1_left">
            <li><div id="r1_skill_name_`+ski_i+`">Skill `+ski_i+`</div></li>
        </div>
        <div class="r1_right">
            <div id="r1_skill_`+ski_i+`_level">Beginner</div>
        </div>
        </div>
        <div id="r1_skill_items"></div>
        `;
        res_sec.outerHTML=code2;
        skills[ski_i]=document.getElementById(skill_name)
        skill_level[ski_i]=document.getElementById('r1_skill_'+ski_i+'_level')
        //console.log(code)
    }
    if(selected_template==2){
        var res_sec=document.getElementById('r2_skill_items')
        skill_name=`r2_skill_name_`+ski_i
        var code2=`
        <div id="r2_skillset_`+ski_i+`">
                                
            <li><div id="r2_skill_name_`+ski_i+`">Skill `+ski_i+`</div></li>
            
        </div>

        <div id="r2_skill_items"></div>
        `;
        res_sec.outerHTML=code2;
        skills[ski_i]=document.getElementById(skill_name)
        skill_level[ski_i]=document.getElementById('r1_skill_'+ski_i+'_level')
    }
    //===========add is dynamic listener
    listen_skills[ski_i].addEventListener('input',(event)=>{
        skills[ski_i].innerText=listen_skills[ski_i].value
    })

    listen_skills_level[ski_i].forEach((elem)=>{
        elem.addEventListener('change',(event)=>{
            skill_level[ski_i].innerText=elem.value
        })
    })

    listen_skills[4].addEventListener('input',(event)=>{
        skills[4].innerText=listen_skills[4].value
    })

    listen_skills_level[4].forEach((elem)=>{
        elem.addEventListener('change',(event)=>{
            skill_level[4].innerText=elem.value
        })
    })

    listen_skills[5].addEventListener('input',(event)=>{
        skills[5].innerText=listen_skills[5].value
    })

    listen_skills_level[5].forEach((elem)=>{
        elem.addEventListener('change',(event)=>{
            skill_level[5].innerText=elem.value
        })
    })

    listen_skills[6].addEventListener('input',(event)=>{
        skills[6].innerText=listen_skills[6].value
    })

    listen_skills_level[6].forEach((elem)=>{
        elem.addEventListener('change',(event)=>{
            skill_level[6].innerText=elem.value
        })
    })
}

function remove_skill(){
    if(ski_i==1){
        alert("Must have atleast 1 Skill!")
    }
    else{
        sec_id="skill_sec_"+ski_i;
        var sec=document.getElementById(sec_id);
        console.log(sec)
        var code=`
        <div id="add_skill_sec"></div>
        `;
        sec.outerHTML=code;
        listen_skills.splice(ski_i,1)
        
        if(selected_template==1){
            resume_skillset_id="r1_skillset_"+ski_i
            var res_sec=document.getElementById(resume_skillset_id);
            var code2=`<div id="r1_skill_items"></div>`
            res_sec.outerHTML=code2;
            skills.splice(ski_i,1)
        }
        if(selected_template==2){
            resume_skillset_id="r2_skillset_"+ski_i
            var res_sec=document.getElementById(resume_skillset_id);
            var code2=`<div id="r2_skill_items"></div>`
            res_sec.outerHTML=code2;
            skills.splice(ski_i,1)
        }

        ski_i-=1;
    }
}

//======================ADD/ REMOVE EXPERIENCE
var exp_i=1
function add_exp(){
    exp_i+=1;
    sec=document.getElementById("add_exp_sec");
    if(selected_template==1)
        res_sec=document.getElementById("r1_exp_sec");
    else if(selected_template==2)
    res_sec=document.getElementById("r2_exp_sec");

    if(exp_i==1 && selected_template==1){
        var code1=`

        
            <div class="r1_section_title">Experience</div>
            <div class="r1_section_list">
                <div id="r1_exp_section_1">
                    <div class="r1_left">
                        <div id="r1_expr_1_position" class="sub-sec-info-heading">FR DEV</div>
                        <div style="margin-left: 20px;">
                            <div id="r1_expr_1_desc">
                            
                                ◦ Lorem ipsum dolor sit amet<br>
                                ◦ Consectetur adipiscing elit<br>
                                ◦ Ut enim ad minim veniam<br>
                            </div>
                        </div>
                    </div>

                    <div class="r1_right">
                        <div id="r1_expr_1_cmp_name" class="sub-sec-info-heading">XYZ PVT LTD</div>
                        <div id="r1_expr_1_cmp_add">KOL, WB, 789234</div> <br>
                        <span id="r1_expr_1_duration_start">Feb 2020 </span> -
                        <span id="r1_expr_1_duration_end"> Jan 2022</span>
                    </div>
                    <br><br>
                    </div>
                    <div id="r1_expr_sec"></div>
                    
            </div>
        
        `
        res_sec.innerHTML=code1;

    }
    if(exp_i==1 && selected_template==2){
        var code1=`
        <div class="r2_title_line" style="text-align:left;">Experience</div> 
        <div class="r2_section_list" style="text-align: left;">
            <div id="r2_exp_section_1">
            
                <span id="r2_expr_1_position" class="sub-sec-info-heading">FR DEV</span> <b>|</b> 
                <span id="r2_expr_1_cmp_name" class="sub-sec-info-heading">XYZ PVT LTD</span>
                
                <span class="r2_text_muted" style="font-size: 14px; float:right">
                <span id="r2_expr_1_duration_start">Feb 2020 </span> -
                    <span id="r2_expr_1_duration_end"> Jan 2022</span>
                </span>

                <div style="margin-left: 20px; margin-top: 5px;">
                    <div id="r2_expr_1_desc">
                    
                        ◦ Lorem ipsum dolor sit amet<br>
                        ◦ Consectetur adipiscing elit<br>
                        ◦ Ut enim ad minim veniam<br>
                    </div>
                </div>
               
                <br><br>
                </div>
                <div id="r2_expr_sec"></div>
        </div>
        
        `
        res_sec.innerHTML=code1;
    }
    

    var code=`
    <div class="section" id="exp_info_`+exp_i+`">
        <div class="input-field">
            <i class="large material-icons prefix" id="exp_`+exp_i+`">business</i>
            <input id="input_exp_comp_`+exp_i+`" type="text" class="validate" name="skill">
            <label for="exp_`+exp_i+`">Company Name</label> <!--make sure the ids are same-->
        </div>
        <div class="input-field">
            <i class="large material-icons prefix" id="exp_`+exp_i+`">business_center</i>
            <input id="input_exp_pos_`+exp_i+`" type="text" class="validate" name="skill">
            <label for="exp_`+exp_i+`">Position</label> <!--make sure the ids are same-->
        </div>
        <div class="input-field"> <!--location-->
            <i class="material-icons prefix" id="exp_loc_`+exp_i+`">location_on</i>
            <input id="input_exp_loc_`+exp_i+`" type="text">
            <label for="exp_loc_`+exp_i+`">Location</label>
        </div>
        <div class="input-field"> 
            <textarea id="input_exp_desc_`+exp_i+`" cols="30" rows="10" placeholder="◦ Note: It is advised to describe in bullet points"></textarea>
        </div>
        <div style="text-align: center;">
            <span class="input-field">
                <input type="month" id="input_exp_start_`+exp_i+`" style="width:40%;">
            </span>
            <span class="input-field" style="margin-left: 30px;"> 
                <input type="month" id="input_exp_stop_`+exp_i+`" style="width:40%;">
            </span>
        </div>
        
    </div>

    <div class="divider blue"></div> 
    <div id="add_exp_sec"></div>
    `
    sec.outerHTML=code
    listen_company_name[exp_i]=document.getElementById("input_exp_comp_"+exp_i)
    listen_job_title[exp_i]=document.getElementById("input_exp_pos_"+exp_i)
    listen_job_loc[exp_i]=document.getElementById("input_exp_loc_"+exp_i)
    listen_job_desc[exp_i]=document.getElementById("input_exp_desc_"+exp_i)
    listen_job_duration_start[exp_i]=document.getElementById("input_exp_start_"+exp_i)
    listen_job_duration_end[exp_i]=document.getElementById("input_exp_stop_"+exp_i)


    if(exp_i>1 && selected_template==1){
        var expr_pos=document.getElementById('r1_expr_sec')
        var code2=`
        <div id="r1_exp_section_`+exp_i+`">
            <div class="r1_left">
                <div id="r1_expr_`+exp_i+`_position" class="sub-sec-info-heading">FR DEV</div>
                <div style="margin-left: 20px;">
                <div id="r1_expr_`+exp_i+`_desc">
                    
                        ◦ Lorem ipsum dolor sit amet<br>
                        ◦ Consectetur adipiscing elit<br>
                        ◦ Ut enim ad minim veniam<br>
                    </div>
                </div>
            </div>

            <div class="r1_right">
                <div id="r1_expr_`+exp_i+`_cmp_name" class="sub-sec-info-heading">XYZ PVT LTD</div>
                <div id="r1_expr_`+exp_i+`_cmp_add">KOL, WB, 789234</div> <br>
                <span id="r1_expr_`+exp_i+`_duration_start">Feb 2020 </span> -
                <span id="r1_expr_`+exp_i+`_duration_end"> Jan 2022</span>
            </div>
            <br><br>
        </div>
        <div id="r1_expr_sec"></div> 
              
        `
        expr_pos.outerHTML=code2;
        console.log(expr_pos.outerHTML)
        
        console.log("add: \n"+res_sec.innerHTML)
        //console.log(code)
        company_name[exp_i]=document.getElementById("r1_expr_"+exp_i+"_cmp_name")
        job_title[exp_i]=document.getElementById("r1_expr_"+exp_i+"_position")
        job_loc[exp_i]=document.getElementById("r1_expr_"+exp_i+"_cmp_add")
        job_desc[exp_i]=document.getElementById("r1_expr_"+exp_i+"_desc")
        job_duration_start[exp_i]=document.getElementById("r1_expr_"+exp_i+"_duration_start")
        job_duration_end[exp_i]=document.getElementById("r1_expr_"+exp_i+"_duration_stop")
    
    }
    if(exp_i>1 && selected_template==2){
        var expr_pos=document.getElementById('r2_expr_sec')
        var code2=`
        <div id="r2_exp_section_`+exp_i+`">
                            
        <span id="r2_expr_`+exp_i+`_position" class="sub-sec-info-heading">FR DEV</span> <b>|</b> 
        <span id="r2_expr_`+exp_i+`_cmp_name" class="sub-sec-info-heading">XYZ PVT LTD</span>
        
        <span class="r2_text_muted" style="font-size: 14px; float:right">
        <span id="r2_expr_`+exp_i+`_duration_start">Feb 2020 </span> -
            <span id="r2_expr_`+exp_i+`_duration_end"> Jan 2022</span>
        </span>

        <div style="margin-left: 20px; margin-top: 5px;">
            <div id="r2_expr_`+exp_i+`_desc">
            
                ◦ Lorem ipsum dolor sit amet<br>
                ◦ Consectetur adipiscing elit<br>
                ◦ Ut enim ad minim veniam<br>
            </div>
        </div>
        
        <br><br>
        </div>
        <div id="r2_expr_sec"></div>
              
        `
        expr_pos.outerHTML=code2;
        console.log(expr_pos.outerHTML)
        
        console.log("add: \n"+res_sec.innerHTML)
        //console.log(code)
        company_name[exp_i]=document.getElementById("r2_expr_"+exp_i+"_cmp_name")
        job_title[exp_i]=document.getElementById("r2_expr_"+exp_i+"_position")
        job_loc[exp_i]=document.getElementById("r2_expr_"+exp_i+"_cmp_add")
        job_desc[exp_i]=document.getElementById("r2_expr_"+exp_i+"_desc")
        job_duration_start[exp_i]=document.getElementById("r2_expr_"+exp_i+"_duration_start")
        job_duration_end[exp_i]=document.getElementById("r2_expr_"+exp_i+"_duration_stop")
    }
    
    //===========add is dynamic listener
    listen_company_name[exp_i].addEventListener('input',(event)=>{
        company_name[exp_i].innerText=listen_company_name[exp_i].value
    })
    
    listen_job_title[exp_i].addEventListener('input',(event)=>{
        job_title[exp_i].innerText=listen_job_title[exp_i].value
    })
    
    listen_job_loc[exp_i].addEventListener('input',(event)=>{
        job_loc[exp_i].innerText=listen_job_loc[exp_i].value
    })
    
    listen_job_desc[exp_i].addEventListener('input',(event)=>{
        job_desc[exp_i].innerText=listen_job_desc[exp_i].value
    })
    
    listen_job_duration_start[exp_i].addEventListener('input',(event)=>{
        job_duration_start[exp_i].innerText=get_month(listen_job_duration_start[exp_i].value)
    })
        
    listen_job_duration_end[exp_i].addEventListener('input',(event)=>{
        job_duration_end[exp_i].innerText=get_month(listen_job_duration_end[exp_i].value)
    })
    console.log(exp_i)
    if(exp_i==1){
        if(selected_template==1){
            company_name[1]=document.getElementById('r1_expr_1_cmp_name')
            job_title[1]=document.getElementById('r1_expr_1_position')
            job_loc[1]=document.getElementById('r1_expr_1_cmp_add')
            job_desc[1]=document.getElementById('r1_expr_1_desc')
            job_duration_start[1]=document.getElementById('r1_expr_1_duration_start')
            job_duration_end[1]=document.getElementById('r1_expr_1_duration_end')
        }
        else if(selected_template==2){
            company_name[1]=document.getElementById('r2_expr_1_cmp_name')
            job_title[1]=document.getElementById('r2_expr_1_position')
            job_loc[1]=document.getElementById('r2_expr_1_cmp_add')
            job_desc[1]=document.getElementById('r2_expr_1_desc')
            job_duration_start[1]=document.getElementById('r2_expr_1_duration_start')
            job_duration_end[1]=document.getElementById('r2_expr_1_duration_end')
        }
        
        listen_company_name[1]=document.getElementById('input_exp_comp_1')
                
        listen_job_title[1]=document.getElementById('input_exp_pos_1')
        
        listen_job_loc[1]=document.getElementById('input_exp_loc_1')
        
        listen_job_desc[1]=document.getElementById('input_exp_desc_1')
        
        listen_job_duration_start[1]=document.getElementById('input_exp_start_1')
        
        listen_job_duration_end[1]=document.getElementById('input_exp_stop_1')

        listen_company_name[1].addEventListener('input',(event)=>{
            company_name[1].innerText=listen_company_name[1].value
        })

        listen_job_title[1].addEventListener('input',(event)=>{
            job_title[1].innerText=listen_job_title[1].value
        })

        listen_job_loc[1].addEventListener('input',(event)=>{
            job_loc[1].innerText=listen_job_loc[1].value
        })

        listen_job_desc[1].addEventListener('input',(event)=>{
            job_desc[1].innerText=listen_job_desc[1].value
        })

        listen_job_duration_start[1].addEventListener('input',(event)=>{
            job_duration_start[1].innerText=get_month(listen_job_duration_start[1].value)
        })

        listen_job_duration_end[1].addEventListener('input',(event)=>{
            job_duration_end[1].innerText=get_month(listen_job_duration_end[1].value)
        })
    }

}

function remove_exp(){
    exp_name="exp_info_"+exp_i
    sec=document.getElementById(exp_name)
    
    
    var code=``
    sec.outerHTML=code   //remove input fields

    if(selected_template==1){
        res_sec=document.getElementById("r1_exp_sec")
        var rem_res_sec=document.getElementById("r1_exp_section_"+exp_i)
        code2=``
        rem_res_sec.innerHTML=''
    }
    if(selected_template==2){
        res_sec=document.getElementById("r2_exp_sec")
        var rem_res_sec=document.getElementById("r2_exp_section_"+exp_i)
        code2=``
        rem_res_sec.innerHTML=''
    }
    
    exp_i-=1
    console.log(exp_i)
    if(exp_i==0){
        res_sec.innerHTML=''
    }
    console.log("remove: \n"+res_sec)
}


//===========ADD/REMOVE PROJECTS===========
var proj_i=1
function add_project(){
    proj_i+=1
    sec=document.getElementById('add_proj_sec')
    //res_sec=document.getElementById('r1_proj_sec')
    code1=`
    <div class="section" id="project_sec_`+proj_i+`">
        <div class="input-field"> <!--SCHOOL/COLLEGE NAME-->
            <i class="material-icons prefix" id="project_1">insert_chart</i> <!--school is the name of the icon-->
            <input id="input_project_`+proj_i+`" type="text" class="validate" name="project">
            <label for="project_`+proj_i+`">Project `+proj_i+` Name</label> <!--make sure the ids are same-->
        </div>
        <div class="input-field"> <!--SCHOOL/COLLEGE NAME-->
            <label for="project_desc">Project Description</label>
            <textarea name="project_desc" id="project_desc_`+proj_i+`" cols="30" rows="30" style="font-size: 14px;">◦ Note: We advice the use of bullet points to describe your projects
            </textarea>
        </div>
        <span class="input-field"> <!--SCHOOL/COLLEGE NAME-->
            <input type="month" id="input_project_start_`+proj_i+`" style="width:40%;" name="proj_startdate">
        </span>
        <span class="input-field" style="margin-left: 30px;"> <!--SCHOOL/COLLEGE NAME-->
            <input type="month" id="input_project_stop_`+proj_i+`" style="width:40%;">
        </span>
    </div>
    
    
    <div class="divider blue"></div> <!--horizonal line between sections-->

    <!--new sections-->

    <div id="add_proj_sec"></div>
    `
    sec.outerHTML=code1;
    listen_proj_title[proj_i]=document.getElementById("input_project_"+proj_i)
    listen_proj_desc[proj_i]=document.getElementById("project_desc_"+proj_i)
    listen_proj_start[proj_i]=document.getElementById("input_project_start_"+proj_i)
    listen_proj_stop[proj_i]=document.getElementById("input_project_stop_"+proj_i)

    

    if(selected_template==1){
        console.log("AAA")
        res_sec=document.getElementById('r1_add_proj')
        code2=`
        <div class="r1_section_list_item" id="r1_proj_sec_`+proj_i+`" style="margin-top:10px">
            <div class="r1_left">
                <div id="r1_proj_name_`+proj_i+`" class="sub-sec-info-heading">ABCD</div>
                <div id="r1_proj_desc_`+proj_i+`" style="margin-left: 20px;">
                    Description of the project
                </div>
                
            </div>

            <div class="r1_right">
                <span id="r1_proj_duration_start_`+proj_i+`">Feb 2020 </span> -
                <span id="r1_proj_duration_end_`+proj_i+`"> Jan 2022</span>
            </div>
        </div>
        <div id="r1_add_proj"></div>
        
        `
        res_sec.innerHTML=code2
        proj_title[proj_i]=document.getElementById("r1_proj_name_"+proj_i)
        proj_desc[proj_i]=document.getElementById("r1_proj_desc_"+proj_i)
        proj_start[proj_i]=document.getElementById("r1_proj_duration_start_"+proj_i)
        proj_stop[proj_i]=document.getElementById("r1_proj_duration_end_"+proj_i)
    }
    if(selected_template==2){
        res_sec=document.getElementById('r2_add_proj')
        code2=`
        <div id="r2_proj_sec_`+proj_i+`">
            <div id="r2_proj_name_`+proj_i+`" class="sub-sec-info-heading" style="margin-top:13px;">ABCD</div>
            <span class="r2_text_muted" style="font-size: 14px; float: right;">
            
                <span id="r2_proj_duration_start_`+proj_i+`">Feb 2020 </span> -
                <span id="r2_proj_duration_end_`+proj_i+`"> Jan 2022</span>
                
            </span>

            <div id="r2_proj_desc_`+proj_i+`" style="margin-left: 20px; margin-top: 5px;">
                Description of the project
            </div>
            
        </div>
        <div id="r2_add_proj"></div>
        `
        res_sec.innerHTML=code2
        proj_title[proj_i]=document.getElementById("r2_proj_name_"+proj_i)
        proj_desc[proj_i]=document.getElementById("r2_proj_desc_"+proj_i)
        proj_start[proj_i]=document.getElementById("r2_proj_duration_start_"+proj_i)
        proj_stop[proj_i]=document.getElementById("r2_proj_duration_end_"+proj_i)
    }

    listen_proj_title[proj_i].addEventListener('input',(event)=>{
        proj_title[proj_i].innerText=listen_proj_title[proj_i].value
    })

    listen_proj_desc[proj_i].addEventListener('input',(event)=>{
        proj_desc[proj_i].innerText=listen_proj_desc[proj_i].value
    })

    listen_proj_start[proj_i].addEventListener('input',(event)=>{
        proj_start[proj_i].innerText=get_month(listen_proj_start[proj_i].value)
    })

    listen_proj_stop[proj_i].addEventListener('input',(event)=>{
        proj_stop[proj_i].innerText=get_month(listen_proj_stop[proj_i].value)
    })

    
    
}

function remove_project(){
    if(proj_i==1){
        alert('Must Have Atleast 1 Project')
    }
    else{
        var sec=document.getElementById("project_sec_"+proj_i)
        var code=`<div id="add_proj_sec"></div>`
        sec.outerHTML=code
        if(selected_template==1){
            res_sec=document.getElementById("r1_proj_sec_"+proj_i)
            code2=``
            res_sec.innerHTML=''
        }
        if(selected_template==2){
            res_sec=document.getElementById("r2_proj_sec_"+proj_i)
            code2=``
            res_sec.innerHTML=''
        }
        proj_i-=1
    }
    
}


//========PRINT PAGE=================

var style_code=`body {
    margin: 0;
    padding: 0;
    font: 12pt "Tahoma";
}
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}


/*NAVBAR PROPERTIES*/

.logo {
    height:50px;
    transform: translate(-30%,15%);
}

.logo_center{
    height:50px;
    transform: translate(-30%,15%);
}

.nav_bar{
    margin-left: 0%;
}

.book {
    margin: 0;
    padding: 0;
    background-color: 161616;
    font: 12pt "Tahoma";
}



/*SIDEBAR PROPERTIES*/

.sidebar {
    height: 100%;
    width: inherit;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.637);

    padding-top: 5em;
    padding-right: 2%;
    padding-bottom: 5em;
    padding-left: 2%;
    border: 1px rgba(152, 208, 232, 0.688) solid;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(152, 208, 232, 0.688);

    overflow: auto;

}

.sidebar_inputs{
    background-color: rgb(110, 178, 237);
    padding: 1em 1em 0em 1em;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(152, 208, 232, 0.688);
    
}

.section{
    background-color: rgba(255, 255, 255, 0.736);
    padding: 2em 2em 2em 2em;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 0 2px rgba(152, 208, 232, 0.688);
}

::placeholder{
    color: rgba(73, 166, 254, 0.794);
    font-size: 12px;
}


/*MATERIALISE CSS INPUT FIELD COLOR CHANGE*/

/* label color */
.input-field label {
    color: rgb(0, 53, 102);
    font-size: 12px;
}

/*underline and input text color*/

.input-field input {
    color: rgb(0, 53, 102);
    border-bottom: 1px solid rgb(0, 53, 102) !important;
    box-shadow: 0 1px 0 0 rgb(126, 126, 126);
}

/* label focus color */
.input-field input:focus + label {
color: rgb(0, 53, 102) !important;
}



/* label underline focus color */
.input-field input:focus {
border-bottom: 1px solid rgb(0, 53, 102) !important;
box-shadow: 0 1px 0 0 #000;
}

/* valid color */
.input-field input.valid {
border-bottom: 1px solid rgb(0, 53, 102);
box-shadow: 0 1px 0 0 #000;
}
/* invalid color */
.input-field input.invalid {
border-bottom: 1px solid #000;
box-shadow: 0 1px 0 0 #000;
}

.input-field .prefix{
    color: rgb(0, 53, 102);
    font-size: 1.5em;
}
.input-field .prefix.active {
    color: rgb(0, 92, 118);
}
    

/*RADIO BUTTON COLOUR CHANGE*/
[type="radio"].with-gap:checked+span:after {
    background-color: rgb(25, 122, 213) !important;
}
  
[type="radio"].with-gap:checked+span:before,
[type="radio"].with-gap:checked+span:after {
    border: 2px solid rgb(25, 122, 213) !important;
}
.radio_text{
    color: rgb(25, 122, 213);
}

/* icon prefix focus color 
*/




/*
SCROLL BAR
}
*/

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 0px;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 0px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgb(122, 176, 217)),
									   color-stop(0.72, rgb(73, 143, 189)),
									   color-stop(0.86, rgb(25, 122, 213)));
}

/*============================RESUME LAYOUT STYLES============================*/

/*TEMPLATE ICONS*/
.template_icons{
    height: 70%;
    width: 70%;
}

.template_icons:hover{
    border: outset;
    box-shadow:0px 12px 22px 1px rgb(219, 244, 246);
}

/*RESUME PAGE PROPERTIES*/

#page {
    width: 21cm;
    min-height: 29.7cm;
    padding: 1cm;
    margin: 1cm auto;
    border: 1px #0000003d solid;
    border-radius: 5px;
    background: white;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6), 0 0 20px rgba(152, 208, 232, 0.688)
    0 0 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(246, 197, 111, 0.908)
    ;

    overflow: hidden;
    
}

@page {
    size: A4;
    margin: 0;
}

@media print {
    #page {
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}


/*============STYLE1=============*/

.subpage_style_1 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100%;  
    background: #eee;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #222;
    font-size: 14px;
    line-height: 26px;
    padding-bottom: 50px;
}


.r1_header{
    margin-bottom: 30px;
}
#r1_full_name{
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 400;
}

.contact-info {
    margin-bottom: 20px;
}

#r1_email ,
#r1_phone,
#r1_address,
#r1_website {
    color: #999;
    font-weight: 500;
} 

#separator {
    height: 10px;
    display: inline-block;
    color: #999;
    margin: 0px 10px;
}

#r1_desc{
    
    display: inline-block;
    margin-right: 10px;
    text-align: justify;
}

.r1_details{
    line-height: 20px;
}

.r1_section {
    margin-bottom: 40px;  
}
  
.r1_section:last-of-type {
    margin-bottom: 0px;  
}

.r1_section_title {
    letter-spacing: 2px;
    color: #54AFE4;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.r1_left ,
.r1_right {
    vertical-align: top;
    display: inline-block;
}

.r1_left {
    width: 60%;    
}

.r1_right {
    text-align: right;
    width: 39%;    
}

#expr_1_position , 
#expr_1_cmp_name {
    font-weight: bold;
}

.r1_skill_items{
    margin-bottom: 10px;  
}

.r1_skills_item.r1_right[input] {
display: none;
}

.r1_skills_item.r1_right[label]{
    display: inline-block;  
    width: 20px;
    height: 20px;
    background: #C3DEF3;
    border-radius: 20px;
    margin-right: 3px;
}
.checked_dots {
    height: 20px;
    width: 20px;
    margin-right: 3px;
    background: #79A9CE;
    border-radius: 50%;
    display: inline-block;
}
.unchecked_dots {
    height: 20px;
    width: 20px;
    margin-right: 3px;
    background: #C3DEF3;
    border-radius: 50%;
    display: inline-block;
}


/*============STYLE2=============*/
:root {
    --dark-green: #9cc675;
    --dark-yellow: #e89a3d;
    --extra-light-brown:#fdf0d7;
    --light-brown: #ecd5ab;
    --dark-brown:#915b40;
    --light-yellow:#f8e3a8;
    --light-red:#f3ac99;
    --light-teal:#a6c8cc;
    --light-gray:#ddd5d6;

    --theme-color:#e89a3d;
}

.r2_resume_container{
    font-family: 'Lato', sans-serif !important;
}


.r2_left ,
.r2_right {
    padding: 15px;
  	border-radius: 10px;
    vertical-align: top;
    display: inline-block;
}

.r2_left {
    width: 30%;   
    background: #f1f1f1; 
    text-align: center;
}

.r2_right {
    text-align: right;
    width: 69%;    
    background: #f1f1f1;
}

#r2_profile_pic {
    --size: 180px;
    width: var(--size);
    height: var(--size);
    object-fit: cover;
    border-radius: 50%;
    margin: 20px auto;
    display: block;
    background:var(--light-brown)
}

#r2_full_name{
    font-size: 35px;
    margin-bottom: 5px;
}

.r2_text_muted{
    color: #828282;
}
.r2_info_detail{
    line-height: 25px;
    font-size: 14px;
    font-weight: 100;
}
.r2_info_head{
    font-weight: 500;
    color: #54AFE4;
}

.r2_title_line{
    font-size: 25px;
    border-bottom: 1px solid #b9b9b9;
  	padding-bottom: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.r2_title_line:before {
    content: '';
    width: 65px;
    height: 2px;
    background: var( --theme-color);
    position: absolute;
    margin-top: 44px; 
    /*title_height+padding-bottom-(line-height/2) = 25+15-1 */
}

.r2_title_line.center{
    text-align: center;
}

/*-=========- TRANSITION*/


.logo_center {
    height:50px;
    transform: translate(-30%,15%);
}

.main-container{
    text-align: center;
    background-color: rgba(190, 224, 255, 0.878);
    margin: 0em 1em 0em 1em;
    padding: 1em 1em 1em 1em;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(152, 208, 232, 0.688);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(152, 208, 232, 0.688);

    overflow: auto;
}

.sub-body{
    background-color: rgba(250, 253, 255, 0.533);
    margin: 1em 1.5em 1em 1.5em;
    padding: 2em 1em 1em 1em;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(152, 208, 232, 0.688);
}

.sub-heading{
    text-align: left;
    font-size: 4.5em;
}

.percent-int{
    position: relative;
    text-align: center;
    line-height: 10px;
    transform: translate(30%,15%);

}

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;
    column-gap:0px;
    margin: auto 0;
    width: 100%;
}
.container .box h2{
    margin-top: 1em;
    font-size: 2em;
}

#box1 h2{
    margin-top: .5em;
    font-size: 2.5em;
}

#box1{
    grid-column: 2;
    grid-row: 1;
}

#box2{
    grid-column: 1/3;
    grid-row: 2;
}
#box3{
    grid-column: 2/4;
    grid-row: 2;
}
`

function print_page(){
    var print_page=document.getElementById("page").innerHTML
    var print_window=window.open('','print window')
    print_window.document.write(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <style>`
        +style_code+
        `
        </style>
        <title>RESUME PRINT</title>
    </head>
    <body>
        <div id="page">
    `)
    print_window.document.write(print_page)
    print_window.document.write(`
        </div>
    </body>
    </html>
    `)
    print_window.document.close()
    print_window.focus()
    print_window.print()
}

//===================================DYNAMIC TYPING BASIC INFO===================================
/*
var full_name=''
var email=''
var phone=''
var loc=''
var website=''
var subtitle=''
*/

var listen_full_name=document.getElementById('input_full_name')
var listen_email=document.getElementById('input_email');
var listen_phone=document.getElementById('input_phone');
var listen_website=document.getElementById('input_website');
var listen_loc=document.getElementById('input_location');
var listen_subtitle=document.getElementById('input_subtitle')

listen_full_name.addEventListener('input',(event)=>{
    full_name.innerText=listen_full_name.value
})

listen_email.addEventListener('input',(event)=>{
    email.innerText=listen_email.value
})

listen_phone.addEventListener('input',(event)=>{
    phone.innerText=listen_phone.value
})


listen_loc.addEventListener('input',(event)=>{
    loc.innerText=listen_loc.value
})

listen_website.addEventListener('input',(event)=>{
    website.innerText=listen_website.value
})

listen_subtitle.addEventListener('input',(event)=>{
    subtitle.innerText=listen_subtitle.value
})


//===================================DYNAMIC TYPING EDUCATION INFO===================================

var listen_edu_name=[]
var listen_edu_degree=[]
var listen_edu_duration_start=[]
var listen_edu_duration_end=[]

listen_edu_name[1]=document.getElementById('input_edu_inst_1')
listen_edu_name[1].addEventListener('input',(event)=>{
    education_name[1].innerText=listen_edu_name[1].value
})


listen_edu_degree[1]=document.getElementById('input_edu_course_1')
listen_edu_degree[1].addEventListener('input',(event)=>{
    education_degree[1].innerText=listen_edu_degree[1].value
})


listen_edu_duration_start[1]=document.getElementById('input_edu_start_1')
listen_edu_duration_start[1].addEventListener('input',(event)=>{
    edu_duration_start[1].innerText=get_month(listen_edu_duration_start[1].value)
})

listen_edu_duration_end[1]=document.getElementById('input_edu_stop_1')
listen_edu_duration_end[1].addEventListener('input',(event)=>{
    console.log(listen_edu_duration_end[1].value)
    edu_duration_end[1].innerText=get_month(listen_edu_duration_end[1].value)
})

//=================================DYNAMIC TYPING EXPERIENCE
var listen_company_name=[]
listen_company_name[1]=document.getElementById('input_exp_comp_1')
var listen_job_title=[]
listen_job_title[1]=document.getElementById('input_exp_pos_1')
var listen_job_loc=[]
listen_job_loc[1]=document.getElementById('input_exp_loc_1')
var listen_job_desc=[]
listen_job_desc[1]=document.getElementById('input_exp_desc_1')
var listen_job_duration_start=[]
listen_job_duration_start[1]=document.getElementById('input_exp_start_1')
var listen_job_duration_end=[]
listen_job_duration_end[1]=document.getElementById('input_exp_stop_1')

listen_company_name[1].addEventListener('input',(event)=>{
    company_name[1].innerText=listen_company_name[1].value
})

listen_job_title[1].addEventListener('input',(event)=>{
    job_title[1].innerText=listen_job_title[1].value
})

listen_job_loc[1].addEventListener('input',(event)=>{
    job_loc[1].innerText=listen_job_loc[1].value
})

listen_job_desc[1].addEventListener('input',(event)=>{
    job_desc[1].innerText=listen_job_desc[1].value
})

listen_job_duration_start[1].addEventListener('input',(event)=>{
    job_duration_start[1].innerText=get_month(listen_job_duration_start[1].value)
})

listen_job_duration_end[1].addEventListener('input',(event)=>{
    job_duration_end[1].innerText=get_month(listen_job_duration_end[1].value)
})

//===================================DYNAMIC TYPING SKILLS============


var listen_skills=[]
var listen_skills_level=[]

listen_skills[1]=document.getElementById('input_skill_1')
listen_skills[1].addEventListener('input',(event)=>{
    skills[1].innerText=listen_skills[1].value
})

listen_skills_level[1]=document.querySelectorAll('input[name="input_skill_level_1"]')
listen_skills_level[1].forEach((elem)=>{
    elem.addEventListener('change',(event)=>{
        skill_level[1].innerText=elem.value
    })
})

listen_skills[2]=document.getElementById('input_skill_2')
listen_skills[2].addEventListener('input',(event)=>{
    skills[2].innerText=listen_skills[2].value
})

listen_skills_level[2]=document.querySelectorAll('input[name="input_skill_level_2"]')
listen_skills_level[2].forEach((elem)=>{
    elem.addEventListener('change',(event)=>{
        skill_level[2].innerText=elem.value
    })
})


listen_skills[3]=document.getElementById('input_skill_3')
listen_skills[3].addEventListener('input',(event)=>{
    skills[3].innerText=listen_skills[3].value
})

listen_skills_level[3]=document.querySelectorAll('input[name="input_skill_level_3"]')
listen_skills_level[3].forEach((elem)=>{
    elem.addEventListener('change',(event)=>{
        skill_level[3].innerText=elem.value
    })
})

//===================================DYNAMIC TYPING PROJECTS============


var listen_proj_title=[]
var listen_proj_desc=[]
var listen_proj_start=[]
var listen_proj_stop=[]

listen_proj_title[1]=document.getElementById('input_project_1')
listen_proj_desc[1]=document.getElementById('project_desc_1')
listen_proj_start[1]=document.getElementById('input_project_start_1')
listen_proj_stop[1]=document.getElementById('input_project_stop_1')


listen_proj_title[1].addEventListener('input',(event)=>{
    proj_title[1].innerText=listen_proj_title[1].value
})

listen_proj_desc[1].addEventListener('input',(event)=>{
    proj_desc[1].innerText=listen_proj_desc[1].value
})

listen_proj_start[1].addEventListener('input',(event)=>{
    proj_start[1].innerText=get_month(listen_proj_start[1].value)
})

listen_proj_stop[1].addEventListener('input',(event)=>{
    proj_stop[1].innerText=get_month(listen_proj_stop[1].value)
})


//==========xxxx=====EDUCATION INFO BUTTONS=======xxxxxx=======

//===================NEW SECTION=======================

/*
add element, remove element function will be the same for other functions.
only need to change the following:
>in add_ed():
    >>edu_i
    >>id="edu_sec" [line 9]
    >>id="add_edu_sec"  [line 7,19]
    >>code [line 8]: 
        -> the code in section one (html line 155) will be copied here with the id values changed
        -> make sure to position 'i' values properly so the id values change 
        -> [ex. line 12, 13, 14]. because the value of edu_i changes everytime the function is called
            JS adds a new section with a different id name each time. 

>in remove_ed():
    >>edu_sec [line 25]
    >>id="add_edu_sec" [line 28]
*/

//========xxxxx========xxxxx===================

//=================FLOATING ACTION BTN===================
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top'
    });
});


