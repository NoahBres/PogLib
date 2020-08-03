import React, { useEffect, useState } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

export default function MainGrid() {
  const fetchUrlVerified = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/list/verified.json`;
  const fetchUrlUnverified = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/list/unverified.json`;

  const [verifiedImages, setVerifiedImages] = useState([]);
  const [unverifiedImages, setUnverifiedImages] = useState([]);

  useEffect(() => {
    fetch(fetchUrlVerified)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Oh no mama mia");
        }
      })
      .then((data) => setVerifiedImages(data.resources))
      .catch((error) => console.log("Oh no's sphaghetti o's!"));
  }, []);

  useEffect(() => {
    fetch(fetchUrlUnverified)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Oh no mama mia");
        }
      })
      .then((data) => setUnverifiedImages(data.resources))
      .catch((error) => console.log("Oh no's sphaghetti o's!"));
  }, []);

  return (
    <CloudinaryContext cloudName={process.env.CLOUD_NAME}>
      <div className="grid grid-cols-5 gap-4">
        {verifiedImages.map((data) => {
          return (
            <div key={data.public_id}>
              <Image publicId={data.public_id}>
                {/* <Transformation
                  crop="fit"
                  width="400"
                  height="400"
                  dpr="auto"
                  responsive_placeholder="blank"
                /> */}
              </Image>
            </div>
          );
        })}
        {unverifiedImages.map((data) => {
          return (
            <div key={data.public_id}>
              <Image publicId={data.public_id}>
                {/* <Transformation
                  crop="fit"
                  width="400"
                  height="400"
                  dpr="auto"
                  responsive_placeholder="blank"
                /> */}
              </Image>
            </div>
          );
        })}
      </div>
    </CloudinaryContext>
  );
}
