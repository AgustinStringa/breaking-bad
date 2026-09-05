import React from "react";
import PropTypes from "prop-types";
const Frase = ({ phrase: { quote, author } }) => {
  return (
    <div className="my-4 min-w-full rounded-3xl bg-white p-5 font-['Orelega_One'] text-[2rem] text-[#222]">
      <blockquote>
        <q className="">{quote}</q>
        <address className="mt-2 w-full text-end not-italic text-[#57595b]">
          - {author}
        </address>
      </blockquote>
    </div>
  );
};
/**
 * objeto que contiene quote y author, datos desde la api.
 */
Frase.propTypes = {
  phrase: PropTypes.object.isRequired,
};

export default Frase;
