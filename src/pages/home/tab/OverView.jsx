import VideoPlayer from "./VedioPlayer";



const OverView = () => {
  const videoUrl = 'https://youtu.be/JLjvEYMBGzQ?si=dw5ZNlAZWt0MbyRT';

  return (
    <div>
      <h1>Video Sharing App</h1>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default OverView;