import axios from "axios";

export async function CreateJob(job) {
  const response = await axios
    .post("api/Jobs/create", {
      company: job.company,
      description: job.description,
      interest: job.interest,
      status: job.status
    })
    .catch(function (error) {
      alert("Error saving project, there is no connection to the server");
      console.log("Error saving project:", error);
    });
}

export async function GetAllJobs() {
  const response = await axios.get("api/Jobs/all").catch(function (error) {
    alert("Error fetching projects, there is no connection to the server");
    console.log("Error fetching projects:", error);
  });
  return response.data;
}
