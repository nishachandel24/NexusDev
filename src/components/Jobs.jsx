import { jobs } from "../data";

export default function Jobs() {
  return (
    <>
      <h2>Job Board</h2>

      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>{job.salary}</p>
          {job.isNew}
        </div>
      ))}
    </>
  );
}