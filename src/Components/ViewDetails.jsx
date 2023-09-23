import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "./Localstorage";

const ViewDetails = () => {
    const handleApplyAllBtn = ()=>{
      saveJobApplication(jobsId)
        toast("You have Apply Successful!");

    }
    const viewDetail = useLoaderData();
    const {jobsId} = useParams()
    const parsId = parseInt(jobsId)
    const job =  viewDetail.find(job => job.id === parsId);
    const {job_description,salary,job_title,contact_information,phone,email} = job;
    console.log(job,parsId)
    return (
        <div className="max-w-screen-lg mx-auto p-3 flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <p className="mb-6"><b>job_description:</b> {job_description}</p>
              <h1><b>Salary:</b> {salary}</h1>
            </div>
            <div className="md:w-1/3">
            <div className="card card-compact gap-4 bg-base-100 shadow-md">
  
  <div className="card-body">
    <h2 className="font-bold">Job Details</h2>
    <h6 className="card-title"><b>Salary:</b> {salary}</h6>
    <p className="mb-2"><b>Job_title:</b> {job_title}</p>
    <h2 className="font-bold border-b-2 mb-2">Contact Information</h2>
    <p><b>phone:</b> {contact_information.phone}</p>
    <p><b>Email:</b> {contact_information.email}</p>
    <div className="card-actions ">
      <button onClick={handleApplyAllBtn} className="btn btn-primary w-full">Apply Now</button>
      <ToastContainer />
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ViewDetails;