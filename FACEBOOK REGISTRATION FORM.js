
//id="fnmbox"               //First name
//id="fa-fname"             //fa-firstname 
//id="snmbox"               //surname
//id="fa-sname"             //fa-surname

// id="ddmmyy-box2"         //month
// id="ddmmyy-box1"         //date
// id="ddmmyy-box3"         //year
// id="fa-dob"              //fa-date of birth

// id="fa-gen-ques-mark"    //question mark gender
// id="fa-gen"              //alert mark gender
// id="gen-male"            //male-select
// id="gen-female"          //female-select
// id="gen-other"           //other-select

// id="email"                //email
// id="fa-email"             //alert mark email

// id="paswrd"               //pasword set
// id="fa-pass"              //alert mark password

// id="submit"               /submit button

// id="signup-form"          //whole facebook form 

/*................................................*/
/*...................Variables....................*/

const fname = document.getElementById("fnmbox");
const fa_fname = document.getElementById("fa-fname");
const snmbox  = document.getElementById("snmbox");
const fa_sname  = document.getElementById("fa-sname");

const ddmmyy1 = document.getElementById("ddmmyy-box1");
const ddmmyy2 = document.getElementById("ddmmyy-box2");
const ddmmyy3 = document.getElementById("ddmmyy-box3");
const fa_dob = document.getElementById("fa-dob");

const gen_Qmark  = document.getElementById("fa-gen-ques-mark");
const fa_alert_gen = document.getElementById("fa-gen");
const male  = document.getElementById("gen-male");
const female  = document.getElementById("gen-female");
const other = document.getElementById("gen-other");

const email = document.getElementById("email");
const fa_email_alert = document.getElementById("fa-email");

const psd = document.getElementById("paswrd");
const fa_pass_alert = document.getElementById("fa-pass");

const submit = document.getElementById("submit");

const form_submit = document.getElementById("fa-dob");

/*.......................................................*/



fname.onblur = function show()
{
    fname.style.border = "1px solid red";
    fname.style.outline = "2px solid red";
    fname.style.backgroundColor = "rgba(255, 238, 238, 0.02)";
    fa_fname.style.display = "block";

    fname.oninput = function ()
    {
        fname.style.border = "0.1px solid rgb(176, 176, 176)";
        fname.style.outline = "1px solid transparent";
        fname.style.backgroundColor = "transparent";
        fa_fname.style.display = "none";
    }
    
        if (fname.value != "")
        {   
        fname.style.border = "0.1px solid rgb(176, 176, 176)";
        fname.style.outline = "1px solid black";
        fname.style.backgroundColor = "transparent";
        fa_fname.style.display = "none";
        }
        else {fname.style.border = "1px solid rgb(176, 176, 176)";
        fname.style.outline = "2px solid red";
        fname.style.backgroundColor = "rgba(246, 178, 178, 0.28)";
        fa_fname.style.display = "block";
        }
    
}

snmbox.onblur = function show()
{
    snmbox.style.border = "1px solid rgb(176, 176, 176)";
    snmbox.style.outline = "1px solid red";
    snmbox.style.backgroundColor = "rgba(255, 238, 238, 0.02)";
    fa_sname.style.display = "block";

    snmbox.oninput = function ()
    {
        snmbox.style.border = "0.1px solid rgb(176, 176, 176)";
        snmbox.style.backgroundColor = "transparent";
        snmbox.style.outline = "1px solid transparent";
        fa_sname.style.display = "none";
    }
    
        if (snmbox.value != "")
        {   
        snmbox.style.border = "0.1px solid rgb(176, 176, 176)";
        snmbox.style.outline = "1px solid black";
        snmbox.style.backgroundColor = "transparent";
        fa_sname.style.display = "none";
        }
        else {fname.style.border = "1px solid rgb(176, 176, 176)";
        snmbox.style.outline = "2px solid red";
        snmbox.style.backgroundColor = "rgba(246, 178, 178, 0.28)";
        fa_sname.style.display = "block";
        }
    
}
