import Image from "next/image";
import Iframe from 'react-iframe';

const HTMLContentTypes = ['html', 'htm']; // Sample array of HTML content types
const IMGContentTypes = ['image/jpeg', 'image/png']; // Sample array of image content types

export default function Home() {
  const itemClasses = ""; // Sample class for the container div
  const item = {
      contentType: 'html', // Sample content type (you can change this for testing)
      url: 'https://www.example.com/' // Sample URL (you can change this for testing)
  };
  const _index = 1; // Sample index (you can change this for testing)

  return (
      <div className={itemClasses} key={_index}>
             {HTMLContentTypes.includes(item.contentType) && (
         <Iframe
         url={item.url}
         width="100%"
         height="400px"
         display="initial"
         position="relative"
         allowFullScreen
         styles={{
            pointerEvents: "none",
        }}
       />
      )}
          {IMGContentTypes.includes(item.contentType) && (
              <img
                  src={item.url}
                  alt="trade items"
                  className="rounded-md object-cover"
              />
          )}
      </div>
  );
};