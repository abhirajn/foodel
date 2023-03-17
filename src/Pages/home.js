import React from "react";
// import Navbarr from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "../Components/Navbar";
import Cards from "../Components/Cards";
// import Carousel from "../Components/Carousel";
import { useEffect, useState } from "react";
// import Cart from "../Components/Cart";

const App = () => {
  const [search, setSearch] = useState([]);
  const [cat, setCat] = useState([]);
  const [food, setFood] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/dis/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[1])
    // console.log(response[0] , response[1]);
    setFood(response[0]);
    setCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbarr />
      </div>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide  " data-bs-ride="carousel" style={{ objectFit: "contain !important" }} >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" style={{ maxHeight: "600px" }}>

            <div className='carousel-caption' style={{ zIndex: "10" }}>
              <div className="d-flex">
                <input className="form-control mr-2 bg-black" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                {/* <button className="btn btn-outline-success text-white bg-secondary " type="submit">Search</button> */}
              </div>
            </div>

            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x500/?cake" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x500/?burger" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x500/?pasta" className="d-block w-100" alt="..." />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
      <div className="container">
        {
          cat !== []
            ? cat.map((data) => {
              return (<div className="row mb-3">
                <div key={data._id} className="fs-3 m-3"> {data.CategoryName}</div>
                <hr />
                {
                  food !== [] ?
                    food.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search))).map((filteritems) => {
                      return (
                        <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                          <Cards
                           card = {filteritems}
                            cardname={filteritems.name}
                            cardimg={filteritems.img}
                            cardopt={filteritems.options[0]}
                          ></Cards>
                        </div>
                      )
                    }) : ""
                }
              </div>
              )
            })
            : <div> '''''''''''''''' </div>

        }

      </div>
     
    </div>
  );
};

export default App;
