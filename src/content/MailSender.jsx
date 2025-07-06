import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import {useChromeStorage} from '../hooks/useChromeStorage'

MailSender.propTypes = {
  setInfoStored: PropTypes.func.isRequired,
}

function MailSender({setInfoStored}) {
  const [position, setPosition] = useState('');
  const [organisation, setOrganisation] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Position:', position, 'Organisation:', organisation);
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-8 rounded shadow-md w-full"
        style={{ minWidth: 300 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Send Mail</h2>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 mb-2" htmlFor="position">
            Position
          </label>
          <input
            id="position"
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter position"
            required
          />
        </div>
        <div className="mb-8 w-full">
          <label className="block text-gray-700 mb-2" htmlFor="organisation">
            Organisation
          </label>
          <input
            id="organisation"
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            placeholder="Enter organisation"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Mail
        </button>
        <div className='mt-4'>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={(e) => {
            e.preventDefault();
            setInfoStored(false);
          }}
        >
          Set resume link and email template
        </button>
        </div>
      </form>
    </div>
  );
}

export default MailSender;