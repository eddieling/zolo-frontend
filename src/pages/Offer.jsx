// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styles from "../styles/Offer.module.css";

export const Offer = () => {
  // const { id } = useParams();
  // const offers = JSON.parse(localStorage.getItem("offers"));
  // const [currentOffer, setCurrentOffer] = useState(null);

  // useEffect(() => {
  //   if (offers.length > 0) {
  //     setCurrentOffer(offers.find((offer) => offer.id == id));
  //   }
  // }, []);

  return (
    <p>offer page</p>
    // <div className={styles.main}>
    //   <h1>Offer details</h1>
    //   {currentOffer && (
    //     <div className={styles.container}>
    //       <div>Name: {currentOffer.name}</div>
    //       <div>Role: {currentOffer.role}</div>
    //       <div>Salary: ${currentOffer.salary}</div>
    //       <div>Bonus: ${currentOffer.bonus}</div>
    //       <div>Equity: {currentOffer.equity}%</div>
    //       <div>Culture: {currentOffer.culture}</div>
    //       <div>
    //         Learning Opportunities: {currentOffer.learningOpportunities}
    //       </div>
    //       <div>
    //         Organization: Early-stage technology startup with a mission to
    //         foster sustainability within the B2B food supply chain across
    //         Southeast Asia.
    //       </div>
    //     </div>
    //   )}
    //   {!currentOffer && <div>Offer not found</div>}
    // </div>
  );
};
