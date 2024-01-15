import React, { useState } from "react";
import { CreateJob } from "./API";

export default function InputForm(props) {
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      company: company,
      description: description,
      interest: interest,
      status: status
    };
    CreateJob(job);

    setCompany("");
    setDescription("");
    setInterest("");
    setStatus("");
    props.refreshList();
  };

  return (
    <div className="input-form-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="CompanyInput">Company</label>
        <input
          type="text"
          id="CompanyInput"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={12}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="interest">Interest</label>
        <select
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="">--Choose option--</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">--Choose option--</option>
          <option value="sent">Sent</option>
          <option value="declined">Declined</option>
          <option value="approved">Approved</option>
        </select>
        <button typeof="submit">Save</button>
      </form>
    </div>
  );
}
