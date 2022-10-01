import { useState, useEffect } from 'react';

const ResetProject = (project) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      project();
    }
    cleanup = false;
  }, []);

  return;
}
 
export default ResetProject;