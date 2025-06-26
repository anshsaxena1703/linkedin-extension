import React, { useState } from 'react'
import InformationSetter from './content/InformationSetter';
import MailSender from './content/MailSender';

function App() {
  const [infoStored, setInfoStored] = useState(false);

  return (
    infoStored ? <MailSender/> : <InformationSetter setInfoStored={setInfoStored} />
  )
}

export default App