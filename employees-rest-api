let employees=[
    {id:1,name:'Raj',department:'Sales'},
    {id:2,name:'Sita',department:'HR'},
    {id:3,name:'Ram',department:'CyberSecurity'}
]
const express=require("express")
const app=express()
app.use(express.json())
//GET all employees
app.get("/employees",(req,resp)=>{
resp.json(employees)
})
app.get("/employees/:id",(req,resp)=>{
    let eid=req.params.id
    let e=employees.find((e)=>{return e.id==eid})
    if(e){
        resp.json(e)
    }else{
        resp.status(404).json({"message":"employees record not found"})
    }
    })
    //POST - Insert employee
    app.post("/employees",(req,resp)=>{
        let id=req.body.id
        let name=req.body.name
        let department=req.body.department
        let e={id:id,name:name,department:department}
        employees.push(e)
        resp.status(201).json({"message":"employees record inserted","employee":e})
    })
    //PUT employee
    app.put("/employees/:id",(req,resp)=>{
        let eid=req.params.id
        let name=req.body.name
        let department=req.body.department
        let e={id:eid,name:name,department:department}

        let index=employees.findIndex((e)=>{return e.id==eid})
        if(index!=-1){
            employees[index]=e
            resp.json({"message":"employee record updated","employee":e})
        }else{
            resp.status(404).json({"message":"employee record not found"})
        }
        })
    //DELETE - Delete employees
        app.delete("/employees/:id",(req,resp)=>{
        let eid=req.params.id
        let e=employees.find((e)=>{return e.id==eid})
        if(e){
            employees=employees.filter((e)=>{return e.id!=eid})
            resp.json({"message":"employee record deleted"})
        }else{
            resp.status(404).json({"message":"employee record not found"})
        }
        })
app.listen(3000,()=>{console.log("server started")})

