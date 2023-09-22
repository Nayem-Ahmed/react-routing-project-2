import React, { useEffect, useState } from 'react';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength] = useState([4]);
    useEffect(()=>{
      fetch('/jobs.json')
      .then(response => response.json())
      .then(json => setJobs(json))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h2 className='font-bold mb-2'>Featured Jobs {jobs.length}</h2>
                <p className='max-w-md mx-auto'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 mt-7 p-3 gap-5'>
                {
                    jobs.slice(0,dataLength).map(job =><FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className={`text-center mb-3 ${dataLength === jobs.length ? 'hidden' : ''}`}>
           <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary ">See All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;