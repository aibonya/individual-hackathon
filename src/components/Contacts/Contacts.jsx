import React from "react";

const Contacts = () => {
  return (
    <div>
      <h2>Наши контактные данные:</h2>{" "}
      <p>+996 702 222 999 +996 559 143 455 allmix.kg@gmail.com</p>
      <iframe
        style={{ marginTop: "40px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.026715097949!2d76.15049911493216!3d42.427166238854525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b2308174af4f9%3A0xca6355ceb21c90e9!2sAllMix!5e0!3m2!1sru!2skg!4v1657125124045!5m2!1sru!2skg"
        width="100%"
        height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contacts;
