import React from "react";

export default function InputForm() {
  return (
    <div className="input-form-wrapper">
      <form>
        <label htmlFor="CompanyInput">Company</label>
        <input type="text" id="CompanyInput" />
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={12} />
        <label htmlFor="interest">Interest</label>
        <select id="interest">
          <option value="">--Choose option--</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="status">Status</label>
        <select id="status">
          <option value="">--Choose option--</option>
          <option value="sent">Sent</option>
          <option value="declined">Declined</option>
          <option value="approved">Approved</option>
        </select>
      </form>
    </div>
  );
}
