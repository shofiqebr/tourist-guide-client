
import { FacebookIcon, FacebookShareButton } from 'react-share';

const Story2 = () => {
    const shareUrl = "https://www.linkedin.com/pulse/memorable-sundarban-tour-amanullah-rasel"
    return (
        <div>
                  <div>
                <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
            </div>
            <h1>visiting coxs bazar</h1>
            <div>
            Cox’s Bazar Sea Beach, located on the shores of the Bay of Bengal in southern Bangladesh, is renowned for its beauty and is considered the largest sea beach in the world. Stretching for 120 kilometers, it attracts thousands of tourists from around the world each year. The beach is famous for its sunrise and sunset views and its diverse marine life, making it a must-visit for all nature enthusiasts.

Last autumn, I embarked on a journey to Cox’s Bazar with a few friends. Excited to see the sea for the first time, we aimed to explore the heart of the city, away from the sandy beaches. We took a hired bus from Dhaka and reached the hotel near the sea beach in the afternoon.

The next morning, we woke up early to witness the stunning sunrise over the ocean. The changing colors of the sea were a mesmerizing sight, and we were amazed by the clear view of the ocean and the cluster of hotels. Many tourists were strolling around, some even taking a dip in the sea. We couldn’t resist the temptation and took a refreshing bath in the sea ourselves.

Later that day, we watched the breathtaking sunset, which was a wonderful experience. Although we didn’t spend the whole day at the beach, our excursion to the unknown streets of Cox’s Bazar made this visit a magical and unforgettable one.
      
        </div>
        </div>
    );
};

export default Story2;