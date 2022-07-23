import "./App.css";
import Home from "./components/home/Home";
import { UserContext } from "./components/context/ProdactContex";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState([
    {
      src: "student.jpg",
      text: "Student",
      path: "/home",
      bank: 50,
      sound: "Fail.mp4",
    },
    {
      src: "junior.png",
      text: "Junior",
      path: "/home",
      bank: 500,
      sound: "Applause.mp3",
    },
    {
      src: "senior.jpg",
      text: "Senior",
      path: "/home",
      bank: 5000,
      sound: "Applause.mp3",
    },
    {
      src: "gocode.jpg",
      text: "GoCode",
      path: "/home",
      bank: 50000,
      sound: "Applause.mp3",
    },
  ]);
  const [sidePro, setSidePro] = useState([]);

  const [Maindata, setMain] = useState([
    {
      image:
        "http://backend.traviyo.com/Images/Specializations/Amar_10442/637229882447967896_temp.jpg",
      price: 2800,
      category: "extrem",
      details: "extrem",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/%D7%A1%D7%A7%D7%99-1.jpg",
      price: 300,
      category: "extrem",
      details: "super race extrem",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/17476.jpg",
      price: 4000,
      category: "100 starts",
      details: "super race extrem",
    },
    {
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/03/19/15/Yukon.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
      price: 1800,
      category: "100 starts",
      details: "super race extrem",
    },
    {
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2018/August/sky%20diving%20antarctica.jpg?imwidth=480",
      price: 11000,
      category: "100 starts",
      details: "super race extrem",
    },
    {
      image:
        "https://minus400.com/wp-content/uploads/2022/01/1920x680-MINUS-400-DESERT-EXTREME-RACe-.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://www.travelinsuranceexplained.co.uk/wp-content/uploads/2018/06/White-Water-Rafting-Adventure-Holiday.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://www.aboutmanchester.co.uk/wp-content/uploads/2019/06/2FE2E058-FB7B-4A7F-9F40-64A0A59347F7.jpeg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://www.planetware.com/wpimages/2021/06/best-family-adventure-holidays-diving-down-under.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://c4.wallpaperflare.com/wallpaper/431/989/239/men-sports-jumping-wingsuit-wallpaper-preview.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        "https://cdn-1.motorsport.com/static/img/vmt/0/90000/98000/98500/98558/s1_2.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/mco/EZUQAM7KGVCQXIGVRIIBQWYTAM.jpeg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
  ]);
  const [packabuy, setpackabuy] = useState(0);
  const [wish, setWish] = useState(0);
  const [bank, setBank] = useState(0);
  const [productTemp, setListTemp] = useState([
    {
      image:
        "http://backend.traviyo.com/Images/Specializations/Amar_10442/637229882447967896_temp.jpg",
      price: 2800,
      category: "extrem",
      details: "extrem",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/%D7%A1%D7%A7%D7%99-1.jpg",
      price: 300,
      category: "extrem",
      details: "super race extrem",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/17476.jpg",
      price: 4000,
      category: "100 starts",
      details: "super race extrem",
    },
    {
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/03/19/15/Yukon.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
      price: 1800,
      category: "100 starts",
      details: "super race extrem",
    },
    {
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2018/August/sky%20diving%20antarctica.jpg?imwidth=480",
      price: 11000,
      category: "100 starts",
      details: "super race extrem",
    },
    {
      image:
        "https://minus400.com/wp-content/uploads/2022/01/1920x680-MINUS-400-DESERT-EXTREME-RACe-.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://www.travelinsuranceexplained.co.uk/wp-content/uploads/2018/06/White-Water-Rafting-Adventure-Holiday.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://www.aboutmanchester.co.uk/wp-content/uploads/2019/06/2FE2E058-FB7B-4A7F-9F40-64A0A59347F7.jpeg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://www.planetware.com/wpimages/2021/06/best-family-adventure-holidays-diving-down-under.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        " https://c4.wallpaperflare.com/wallpaper/431/989/239/men-sports-jumping-wingsuit-wallpaper-preview.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        "https://cdn-1.motorsport.com/static/img/vmt/0/90000/98000/98500/98558/s1_2.jpg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
    {
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/mco/EZUQAM7KGVCQXIGVRIIBQWYTAM.jpeg",
      price: 55555,
      category: "dreams",
      details: "super race extrem",
    },
  ]);
  const [selected, setSelected] = useState("All-collection");
  const [card, setCard] = useState([]);

  const [sortlist] = useState([
    {
      collection: "All-collection",
    },
    {
      collection: "extrem",
    },
    {
      collection: "100 starts",
    },
    {
      collection: "dreams",
    },
    {
      collection: "current",
    },
  ]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/profile")
  //     .then((res) => res.json())
  //     .then((colle) => {
  //       setProfile(colle);
  //     });
  // });

  // useEffect(() => {
  //   fetch("http://localhost:8000/products")
  //     .then((res) => res.json())
  //     .then((colle) => {
  //       setMain(colle);
  //       setListTemp(colle);
  //     });
  // }, []);

  function select(e) {
    setSelected(e);
    Filter(e);
  }

  const Filter = (category) => {
    let temp = productTemp;
    if (!(category === "All-collection")) {
      temp = productTemp.filter((pordu) => pordu.category === category);
      setMain(temp);
    } else {
      setMain(productTemp);
    }
  };
  return (
    <div className="app_container">
      <Router>
        <UserContext.Provider
          value={{
            sidePro,
            setSidePro,
            packabuy,
            setpackabuy,
            wish,
            setWish,
            bank,
            setBank,
            Maindata,
            setMain,
            card,
            setCard,
          }}
        >
          <Routes>
            <Route path="/" element={<Profile profile={profile} />} />
            <Route
              path="/home/*"
              element={
                <Home
                  sortlist={sortlist}
                  select={select}
                  selected={selected}
                  Maindata={Maindata}
                  card={card}
                  profile={profile}
                  setMain={setMain}
                />
              }
            />
            <Route path="/products" />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
