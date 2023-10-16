import {useState} from 'react'
import Form from "./Form";
import DisplayRecords from './DisplayRecords';


function Jobs() {
    const [job , setJob] = useState({title: "", age:"" }); 
  const [jobs, setJobs] = useState([{
    title: 'Senior',
    age: "Kagiso"
  },
  {
    title: "Developer",
    age: "Sbu"
  }
])


const addJob = (job) => {
  console.log(job)  
  setJobs([...jobs, job])
}

const deleteJob = (Job , index) => {
  console.log(Job)
  const filteredList = jobs.filter((job, jobIndex) => jobIndex != index);
  console.log(filteredList)
  setJobs(filteredList)
}


  return (
      <div className="Jobs">
        <h1> Jobs </h1>
      < Form record={job} addRecord={addJob}/>
      <DisplayRecords deleteRecord={deleteJob} records={jobs} />
    </div>
  );
}

export default Jobs;
