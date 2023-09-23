
const getJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-Application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedJobApplication = getJobApplication();

    // Check if the id already exists in the storedJobApplication
    const exist = storedJobApplication.find(jobId => jobId == id);

    if (!exist) {
        storedJobApplication.push(id);
        localStorage.setItem('job-Application', JSON.stringify(storedJobApplication));
    }
}

export { saveJobApplication, getJobApplication };
