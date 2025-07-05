import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/').then(res => setData(res.data)).catch(() => setData(null));
  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h1>CanaryFlow 灰度发布演示</h1>
      {data ? (
        <>
          <h2>后端版本: {data.version}</h2>
          <p>{data.message}</p>
        </>
      ) : (
        <p>正在获取后端信息...</p>
      )}
    </div>
  );
}
export default App; 