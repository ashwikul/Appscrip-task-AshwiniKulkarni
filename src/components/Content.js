import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import ProductCard from "./ProductCard";
import Tile from "./Tile";

function Content() {
  const [productData, setProductData] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [sortedOn, setSortedOn] = useState("");
  const [isIdealFor, setIsIdealFor] = useState(false);
  const idealForList = ["Men", "Women", "Baby & Kids"];
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductData(data);
    setDisplayProducts(data);
    setIsLoading(false);
  };

  const handleFilter = () => {
    setFilterEnabled(!filterEnabled);
  };

  const handleSort = (string) => {
    setSortedOn(string);
    const data_copy = [...displayProducts];
    if (string === "highToLow") {
      data_copy.sort((a, b) => b.price - a.price);
    } else if (string === "LowToHigh") {
      data_copy.sort((a, b) => a.price - b.price);
    } else if (string === "popular") {
      data_copy.sort((a, b) => b.rating.count - a.rating.count);
    } else if (string === "recommended") {
      data_copy.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    console.log("after sorting data", data_copy);
    setDisplayProducts(data_copy);
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <div className={styles.filterContainer}>
        <div>
          <p>3425 Items</p>
          <button onClick={handleFilter}>
            <Image
              src="/arrow-left.svg"
              alt="Appscrip logo"
              width={16}
              height={16}
            />
            <p>
              <u>{filterEnabled ? "HIDE FILTER" : "SHOW FILTER"}</u>
            </p>
          </button>
        </div>

        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="recommended">RECOMMENDED</option>
          <option value="newestFirst">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="highToLow">PRICE : HIGH TO LOW</option>
          <option value="LowToHigh">PRICE : LOW TO HIGH</option>
        </select>
      </div>
      <div className={styles.container}>
        {filterEnabled && (
          <div className={styles.filterSidebar}>
            {/* input box */}
            <div className={styles.inputbox}>
              <input type="checkbox" />
              <h1>CUSTOMIZABLE</h1>
            </div>
            {/* ideal for */}
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="IDEAL FOR"
            />
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="OCCASION"
            />
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="WORK"
            />{" "}
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="FABRIC"
            />{" "}
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="SEGMENT"
            />{" "}
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="SUITABLE FOR"
            />{" "}
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="RAW MATERIALS"
            />{" "}
            <Tile
              state={isIdealFor}
              updateFunction={setIsIdealFor}
              list={idealForList}
              label="PATTERN"
            />
          </div>
        )}

        <div
          className={`${styles.productsContainer} ${
            filterEnabled ? styles.gridWithFilter : styles.gridWithoutFilter
          }`}
        >
          {displayProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {isLoading && (
          <div className={styles.loaderConatiner}>
            <div className={styles.loader}></div>
            <p>Loading products...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
