import React, { useState } from "react";

const Mypdf = () => {
  const [pdf] = useState(
    "https://drive.google.com/file/d/1nGP37IQv89ie-4xmnslf9jpklNbuakcH/preview"
  );
  return (
    <div className="md:w-3/4 mx-auto lg:w-5/6">
      <iframe
        className="w-full"
        title="pdf"
        src={pdf}
        height="1000px"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Mypdf;
