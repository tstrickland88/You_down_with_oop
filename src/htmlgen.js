function generateHTML(team){
    var startHTML=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    <body style="background-color: rgb(124, 96, 96);">
       <div class="container">
        <div class="row text-center bg-dark text-light">
            <h1>The Team</h1>
        </div>
        <br/>
        <div class="row">`
    var endHTML=` </div>


    </div>
     <!-- JavaScript Bundle with Popper -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
     
 </body>
 </html>`

    var teamHTML= team.map (t =>{
        switch(t.getRole()){
            case "manager":
                return `    <div class="col-md-4 bg-light rounded" style="padding:0;">
                <div class= "bg-dark text-light rounded-top" style="padding:5px;">
                <h3>${t.getName()}</h3> 
                <h4>${t.getRole()}</h4>
                </div>
                <div class= "bg-light text-dark rounded-bottom" style="padding:5px;">
                    <h5>
                    <b>Id:</b> ${t.getId()}
                    </h5>
                    
                    <h5>
                    <b>Email:</b> ${t.getEmail()}
                    </h5>
        
                    <h5>
                    <b>Office Number:</b> ${t.getOfficeNumber()}
                    </h5>
                </div> 
            </div>`
                break;

                case "engineer":
                    return `    <div class="col-md-4 bg-light rounded" style="padding:0;">
                    <div class= "bg-dark text-light rounded-top" style="padding:5px;">
                    <h3>${t.getName()}</h3> 
                    <h4>${t.getRole()}</h4>
                    </div>
                    <div class= "bg-light text-dark rounded-bottom" style="padding:5px;">
                        <h5>
                        <b>Id:</b> ${t.getId()}
                        </h5>
                        
                        <h5>
                        <b>Email:</b> ${t.getEmail()}
                        </h5>
            
                        <h5>
                        <b>github:</b> ${t.getGithub()}
                        </h5>
                    </div> 
                </div>`
                    break;

                    case "Intern":
                return `    <div class="col-md-4 bg-light rounded" style="padding:0;">
                <div class= "bg-dark text-light rounded-top" style="padding:5px;">
                <h3>${t.getName()}</h3> 
                <h4>${t.getRole()}</h4>
                </div>
                <div class= "bg-light text-dark rounded-bottom" style="padding:5px;">
                    <h5>
                    <b>Id:</b> ${t.getId()}
                    </h5>
                    
                    <h5>
                    <b>Email:</b> ${t.getEmail()}
                    </h5>
        
                    <h5>
                    <b>school:</b> ${t.getSchool()}
                    </h5>
                </div> 
            </div>`
                break;
        }
    })
    return startHTML + teamHTML.join(" ") + endHTML

}