import React, { useEffect, useState } from 'react'
import InformationSetter from './content/InformationSetter';
import MailSender from './content/MailSender';
import { useChromeStorage } from './hooks/useChromeStorage';

function App() {
  const [infoStored, setInfoStored] = useState(false);
  useEffect(() => {
    const { getInfo } = useChromeStorage(); 
    const fetchInfo = async () => {
      const info = await getInfo();
      if (info.resumeLink && info.emailTemplate) {
        setInfoStored(true);
      }
    };
    fetchInfo();
  }, []);

  return (
    infoStored ? <MailSender setInfoStored={setInfoStored}/> : <InformationSetter setInfoStored={setInfoStored} />
  );
}

export default App