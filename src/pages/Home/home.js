import { useState } from "react";
import classes from "./home.module.css";
import Card from "../../components/HomeCard/homeCard";
import useFetch from "../../components/useFetch/useFetch";
import CardPopup from "../../components/CardPopup/cardPopup";

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [eachCard, setEachCard] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const productPerPage = [];

  const { data, isLoading } = useFetch(
    "https://api.manoapp.com/api/v1/users/products/whats_new"
  );

  const handeClick = (eachData) => {
    setEachCard(eachData);
    setShowCard(true);
  };

  for (let i = 0; i < perPage * currentPage; i++) {
    productPerPage[i] = data[i];
  }

  return (
    <>
      <div className={classes.gridCard}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          productPerPage.map((data) => (
            <div key={data.id}>
              <Card
                key={data.id}
                title={data.title}
                src={data.images[0].original}
                price={data.price}
                onClick={() => handeClick(data)}
              />
              {showCard && (
                <CardPopup
                  image={eachCard.images[0].large}
                  title={eachCard.title}
                  quantity={eachCard.quantity}
                  price={eachCard.price}
                  category={eachCard.categories[0].title}
                  onClick={() => setShowCard(false)}
                />
              )}
            </div>
          ))
        )}
      </div>
      {!isLoading && (
        <ul className={classes.listPagination}>
          <li
            onClick={() =>
              currentPage > 1 ? setCurrentPage(currentPage - 1) : null
            }
          >
            Back
          </li>
          <li onClick={() => setCurrentPage(1)}>1</li>
          <li onClick={() => setCurrentPage(2)}>2</li>
          <li
            onClick={() =>
              currentPage < 2 ? setCurrentPage(currentPage + 1) : null
            }
          >
            Next
          </li>
        </ul>
      )}
    </>
  );
};

export default Home;
