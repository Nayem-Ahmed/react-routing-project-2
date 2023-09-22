import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    const {id, logo,job_title,job_type,company_name,location,salary} = job;
    return (
        <div>
  <div className="card  mb-4 p-3 mx-auto bg-base-100 shadow-md ">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="card-actions ">
    <button className="btn border-[#7E90FE] text-[#7E90FE]">{job_type}</button> 
    <button className="btn border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
    </div>
    <div className="flex gap-3">
        <div className='flex gap-1 items-center'><CiLocationOn></CiLocationOn>{location}</div>
        <div className='flex gap-1 items-center'><AiOutlineDollar></AiOutlineDollar>{salary}</div>
    </div>
    <div className="card-actions mt-2">
  <Link to={`/job/${id}`}>
    <button className="btn btn-primary">View Details</button>
  </Link>
</div>

  </div>
</div>
 </div>

    );
};

export default FeaturedJob;