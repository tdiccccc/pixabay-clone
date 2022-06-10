
import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    // formがリロードされるのを防ぐ
    e.preventDefault();
    console.log(ref.current.value);

    // APIURL
    const endpointURL = `https://pixabay.com/api/?key=27974076-f6e3e3dcff4b569e37badd9b6&q=${ref.current.value}&image_type=photo&pretty=true`
    // APIを叩く（データフェッチンぐ）
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits)
        setFetchData(data.hits);
      });

  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
