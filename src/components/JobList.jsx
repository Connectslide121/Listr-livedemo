import React, { useEffect, useState } from "react";
import { GetAllJobs } from "./API";

export default function JobList(rerenderKey) {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    GetAllJobs().then((jobs) => {
      setJobList(jobs);
    });
  }, [rerenderKey]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="job-list-wrapper">
        <div className="job-list-subheader">
          <h3>Count: {jobList.length}</h3>
          <input type="text" />
        </div>

        <div className="job-list-header">
          <h2 className="job-list-header-company">Company</h2>
          <h2 className="job-list-header-description">Description</h2>
          <h2 className="job-list-header-interest">Interest</h2>
          <h2 className="job-list-header-status">Status</h2>
          <h2 className="job-list-header-date">Applied</h2>
        </div>

        <div className="job-list">
          <ul>
            {jobList.map((job) => (
              <li key={job.id}>
                <div className="job-company">
                  <p>{job.company}</p>
                </div>
                <div className="job-description">
                  <p>{job.description}</p>
                </div>
                <div className="job-interest">
                  <p>{job.interest}</p>
                </div>
                <div className="job-status">
                  <p>{job.status}</p>
                </div>
                <div className="job-date">
                  <p>{formatDate(job.appliedAt)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
