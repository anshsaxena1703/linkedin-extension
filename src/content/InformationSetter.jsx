import React, {useState} from 'react'
import {useChromeStorage} from '../hooks/useChromeStorage'
import PropTypes from 'prop-types'

InformationSetter.propTypes = {
  setInfoStored: PropTypes.func.isRequired,
}

function InformationSetter({setInfoStored}) {
  const [resumeLink, setResumeLink] = useState('');
  const [emailTemplate, setEmailTemplate] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const {setInfo} = useChromeStorage();
    if(resumeLink && emailTemplate){
      await setInfo(resumeLink, emailTemplate);
      setInfoStored(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full"
        style={{ minWidth: 300 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Information</h2>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 mb-2" htmlFor="resumeLink">
            Resume Link
          </label>
          <input
            id="resumeLink"
            type="string"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            placeholder="https://your-resume-link.com"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="emailTemplate">
            Email Template
          </label>
          <textarea
            id="emailTemplate"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            placeholder="Enter your email template here..."
            rows={5}
            value={emailTemplate}
            onChange={(e) => setEmailTemplate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Set Information
        </button>
      </form>
    </div>
  )
}

export default InformationSetter