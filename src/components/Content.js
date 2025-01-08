import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import ProductCard from "./ProductCard";
import Tile from "./Tile";
import { useRouter } from "next/router";

function Content() {
  const [productData, setProductData] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [sortedOn, setSortedOn] = useState("recommended");
  const [isIdealFor, setIsIdealFor] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const idealForList = ["Men", "Women", "Baby & Kids"];
  const sortBasedOnList = [
    { label: "RECOMMENDED", value: "recommended" },
    { label: "NEWEST FIRST", value: "newestFirst" },
    { label: "POPULAR", value: "popular" },
    { label: "PRICE : HIGH TO LOW", value: "highToLow" },
    { label: "PRICE : LOW TO HIGH", value: "LowToHigh" },
  ];

  const router = useRouter();
  const currentPath = router.pathname; // Gives the current path template (e.g., "/about/[id]")
  const currentUrl = router.asPath;

  console.log("path", router);

  useEffect(() => {
    fetchProducts();
    const currentPath = router.pathname; // Gives the current path template (e.g., "/about/[id]")

    console.log("path", router);
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

  const handleSort = (e) => {
    // console.log("value", string);

    const value = e.target.getAttribute("data-value");
    setSortedOn(value);
    console.log("string", value);

    const data_copy = [...displayProducts];
    if (value === "highToLow") {
      data_copy.sort((a, b) => b.price - a.price);
    } else if (value === "LowToHigh") {
      data_copy.sort((a, b) => a.price - b.price);
    } else if (value === "popular") {
      data_copy.sort((a, b) => b.rating.count - a.rating.count);
    } else if (value === "recommended") {
      data_copy.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    console.log("after sorting data", data_copy);
    setDisplayProducts(data_copy);
  };

  return (
    <div className={styles.contentContainer}>
      {/* title  */}
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div
            className={`${styles.desktopHidden}`}
            style={{ textAlign: "left" }}
          >
            <span style={{ color: "#BFC8CD" }}>HOME |</span>{" "}
            {currentPath.toUpperCase().split("/")[1]}
          </div>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <div className={`${styles.filterContainer} ${styles.mobileHidden}`}>
        <div>
          <p>{displayProducts.length} Items</p>

          <button onClick={handleFilter} className={styles.mobileHidden}>
            <Image
              src="/arrow-left.svg"
              alt="arrow left"
              width={16}
              height={16}
            />
            <p>
              <u>{filterEnabled ? "HIDE FILTER" : "SHOW FILTER"}</u>
            </p>
          </button>
        </div>

        <div
          className={`${styles.select} ${styles.mobileHidden}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p>{sortBasedOnList.find((s) => s.value === sortedOn)?.label}</p>
          <Image
            src="/arrow-bottom.svg"
            alt="arrow bottom"
            width={20}
            height={20}
          />
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <ul onClick={handleSort}>
                {sortBasedOnList.map((s) => {
                  if (s.value === sortedOn) {
                    return (
                      <li data-value={s.value}>
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/tick.svg"
                            alt="tick"
                            width={20}
                            height={20}
                          />
                          <p>{s.label}</p>
                        </div>
                      </li>
                    );
                  } else return <li data-value={s.value}>{s.label}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${styles.filterContainerMobile} ${styles.desktopHidden}`}
      >
        <div onClick={handleFilter}>
          <p>FILTER</p>
        </div>
        {/* <div style={{ color: "#e5e5e5", height: "1px", width: "1px" }}></div> */}
        <div
          className={`${styles.select}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p>{sortBasedOnList.find((s) => s.value === sortedOn)?.label}</p>
          <Image
            src="/arrow-bottom.svg"
            alt="arrow bottom"
            width={20}
            height={20}
          />
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <ul onClick={handleSort}>
                {sortBasedOnList.map((s) => {
                  if (s.value === sortedOn) {
                    return (
                      <li data-value={s.value}>
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                            width: "max-content",
                          }}
                        >
                          <Image
                            src="/tick.svg"
                            alt="tick"
                            width={20}
                            height={20}
                          />
                          <p>{s.label}</p>
                        </div>
                      </li>
                    );
                  } else return <li data-value={s.value}>{s.label}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={styles.container}>
        {filterEnabled && (
          <div className={styles.filterSidebar}>
            <div
              className={styles.desktopHidden}
              onClick={() => setFilterEnabled(false)}
              style={{ textAlign: "right", padding: "10px" }}
            >
              X
            </div>
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
          } ${styles.mobileHidden}`}
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
