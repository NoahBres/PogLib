import React, { useEffect, useState } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

import UploadGridItem from "./UploadGridItem";

import shuffle from "../util/shuffle";

import PogLibLogo from "url:../../img/poglib-quarter.png";

export default function MainGrid() {
  const fetchUrlVerified = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/list/verified.json`;
  const fetchUrlUnverified = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/list/unverified.json`;

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const verifiedRequest = fetch(fetchUrlVerified).then((resp) => resp.json());
    const unVerifiedRequest = fetch(fetchUrlUnverified).then((resp) =>
      resp.json()
    );

    let combinedData = [];
    Promise.allSettled([verifiedRequest, unVerifiedRequest]).then((data) => {
      combinedData[0] = data[0];
      combinedData[1] = data[1];

      console.log(data[1]);

      // Filter out rejected fetch requests
      combinedData = combinedData.map((e) => {
        if (e.status == "fulfilled") return e.value.resources;
        else return [];
      });

      // Translate those fetch requests into React components
      for (let i = 0; i < combinedData.length; i++) {
        combinedData[i] = combinedData[i].map((data) => {
          return (
            <div key={data.public_id} style={{ height: "30rem" }}>
              <Image
                publicId={data.public_id}
                className="h-full"
                style={{ width: "100%", objectFit: "cover" }}
              >
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
        });
      }

      const uploadButtons = Array(Math.floor(combinedData[0].length / 4))
        .fill(0)
        .map((x, index) => {
          return (
            <UploadGridItem
              key={index}
              style={{
                height: "30rem",
              }}
            ></UploadGridItem>
          );
        });

      combinedData[0] = [...combinedData[0], ...uploadButtons];

      combinedData[0] = shuffle(combinedData[0]);
      combinedData[1] = shuffle(combinedData[1]);

      setItemList([...combinedData[0], ...combinedData[1]]);
      return combinedData;
    });
  }, []);

  return (
    <CloudinaryContext cloudName={process.env.CLOUD_NAME}>
      <div className="grid grid-cols-4">
        <div className="col-start-2 col-span-2 row-start-2 flex justify-center items-center">
          <img src={PogLibLogo} style={{ height: "20rem" }}></img>
        </div>
        {itemList}
      </div>
    </CloudinaryContext>
  );
}
