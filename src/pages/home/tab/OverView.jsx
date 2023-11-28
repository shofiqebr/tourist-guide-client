import VideoPlayer from "./VedioPlayer";



const OverView = () => {
  const videoUrl = 'https://youtu.be/JLjvEYMBGzQ?si=dw5ZNlAZWt0MbyRT';
  const videoUrl1 = 'https://youtu.be/m-SWKNagR-Q?si=h2qo1ce5phe35B-v';

  return (
    <div>
      <h1>Best places we offer</h1>

      <div className="grid grid-cols-2 gap-10 py-3">
      <VideoPlayer videoUrl={videoUrl} />
      <VideoPlayer videoUrl={videoUrl1} />
      </div>
    </div>
  );
};

export default OverView;