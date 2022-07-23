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
      details: "A bike ride along the beautiful mountains of Eastern Italy",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/%D7%A1%D7%A7%D7%99-1.jpg",
      price: 1800,
      category: "extrem",
      details: "Ski vacation in Aspen for a month all inclusive",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/17476.jpg",
      price: 4000,
      category: "100 starts",
      details: "Surfing trip, paradise for surfers in exotic destinations",
    },

    {
      image:
        "https://maamul.sapir.ac.il/wp-content/uploads/2018/04/-%D7%93%D7%A0%D7%99%D7%90%D7%9C-e1560152462448.jpg",
      price: "0",
      category: "dreams",
      details: "Where you can hitchhike in the world",
    },
    {
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/03/19/15/Yukon.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
      price: 4400,
      category: "100 starts",
      details: "Flight over the world's frozen continent",
    },
    {
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2018/August/sky%20diving%20antarctica.jpg?imwidth=480",
      price: 3500,
      category: "100 starts",
      details: "Freediving over the mountains of Switzerland",
    },
    {
      image:
        "https://minus400.com/wp-content/uploads/2022/01/1920x680-MINUS-400-DESERT-EXTREME-RACe-.jpg",
      price: 3000,
      category: "dreams",
      details: "All inclusive international motorcycle race",
    },
    {
      image:
        " https://www.travelinsuranceexplained.co.uk/wp-content/uploads/2018/06/White-Water-Rafting-Adventure-Holiday.jpg",
      price: 1500,
      category: "dreams",
      details: "An extreme week along the Amazon River",
    },
    {
      image:
        " https://www.aboutmanchester.co.uk/wp-content/uploads/2019/06/2FE2E058-FB7B-4A7F-9F40-64A0A59347F7.jpeg",
      price: 12000,
      category: "dreams",
      details: "A month trip to the Rocky Mountains in the USA",
    },
    {
      image: "http://www.bgu.ac.il/aranne/heb/libpic06.jpg ",
      price: 0,
      category: "dreams",
      details: "Free entry to Ben Gurion University of the Negev",
    },
    {
      image:
        " https://www.planetware.com/wpimages/2021/06/best-family-adventure-holidays-diving-down-under.jpg",
      price: 9000,
      category: "dreams",
      details: "Diving trip among spectacular reefs and corals in Thailand",
    },
    {
      image:
        "https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/2/0/3/8/2038432-46.jpg",
      price: 50000,
      category: "dreams",
      details: "Spaceflight around the Earth with Elon Musk",
    },
    {
      image:
        " https://c4.wallpaperflare.com/wallpaper/431/989/239/men-sports-jumping-wingsuit-wallpaper-preview.jpg",
      price: 5000,
      category: "dreams",
      details: "Fly with a wingsuit over Peru",
    },
    {
      image: "https://media.timeout.com/images/105483066/750/422/image.jpg",
      price: 40000,
      category: "dreams",
      details:
        "A year of gambling and fun in the most prestigious hotels of Vegas, all included",
    },
    {
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/mco/EZUQAM7KGVCQXIGVRIIBQWYTAM.jpeg",
      price: 8000,
      category: "dreams",
      details: "Cruise for extreme bluefin tuna fishing",
    },
    {
      image:
        " https://media-cdn.tripadvisor.com/media/photo-s/04/09/e0/eb/universal-s-islands-of.jpg",
      price: 5000,
      category: "dreams",
      details: "All inclusive at all Orlando parks",
    },
    {
      image:
        "https://www.cruiseit.co.il/UploadedImages/Quantum%20-%20Ovation_800x415.jpg",
      price: 40000,
      category: "dreams",
      details:
        "A year of gambling and fun in the most prestigious hotels of Vegas, all included",
    },
    {
      image:
        "https://ae01.alicdn.com/kf/Hdf901612c99c4c8fa66383aa68a466651/41-1-28-Cas-Raptor-F150.jpg_Q90.jpg_.webp",
      price: 45000,
      category: "dreams",
      details: "New Ford Raptor 2022",
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
      details: "A bike ride along the beautiful mountains of Eastern Italy",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/%D7%A1%D7%A7%D7%99-1.jpg",
      price: 1800,
      category: "extrem",
      details: "Ski vacation in Aspen for a month all inclusive",
    },
    {
      image:
        "https://www.extreme-holidays.co.il/wp-content/uploads/2016/10/17476.jpg",
      price: 4000,
      category: "100 starts",
      details: "Surfing trip, paradise for surfers in exotic destinations",
    },

    {
      image:
        "https://maamul.sapir.ac.il/wp-content/uploads/2018/04/-%D7%93%D7%A0%D7%99%D7%90%D7%9C-e1560152462448.jpg",
      price: "0",
      category: "dreams",
      details: "Where you can hitchhike in the world",
    },
    {
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/03/19/15/Yukon.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
      price: 4400,
      category: "100 starts",
      details: "Flight over the world's frozen continent",
    },
    {
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2018/August/sky%20diving%20antarctica.jpg?imwidth=480",
      price: 3500,
      category: "100 starts",
      details: "Freediving over the mountains of Switzerland",
    },
    {
      image:
        "https://minus400.com/wp-content/uploads/2022/01/1920x680-MINUS-400-DESERT-EXTREME-RACe-.jpg",
      price: 3000,
      category: "dreams",
      details: "All inclusive international motorcycle race",
    },
    {
      image:
        " https://www.travelinsuranceexplained.co.uk/wp-content/uploads/2018/06/White-Water-Rafting-Adventure-Holiday.jpg",
      price: 1500,
      category: "dreams",
      details: "An extreme week along the Amazon River",
    },
    {
      image:
        " https://www.aboutmanchester.co.uk/wp-content/uploads/2019/06/2FE2E058-FB7B-4A7F-9F40-64A0A59347F7.jpeg",
      price: 12000,
      category: "dreams",
      details: "A month trip to the Rocky Mountains in the USA",
    },
    {
      image: "http://www.bgu.ac.il/aranne/heb/libpic06.jpg ",
      price: 0,
      category: "dreams",
      details: "Free entry to Ben Gurion University of the Negev",
    },
    {
      image:
        " https://www.planetware.com/wpimages/2021/06/best-family-adventure-holidays-diving-down-under.jpg",
      price: 9000,
      category: "dreams",
      details: "Diving trip among spectacular reefs and corals in Thailand",
    },
    {
      image:
        "https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/2/0/3/8/2038432-46.jpg",
      price: 50000,
      category: "dreams",
      details: "Spaceflight around the Earth with Elon Musk",
    },
    {
      image:
        " https://c4.wallpaperflare.com/wallpaper/431/989/239/men-sports-jumping-wingsuit-wallpaper-preview.jpg",
      price: 5000,
      category: "dreams",
      details: "Fly with a wingsuit over Peru",
    },
    {
      image: "https://media.timeout.com/images/105483066/750/422/image.jpg",
      price: 40000,
      category: "dreams",
      details:
        "A year of gambling and fun in the most prestigious hotels of Vegas, all included",
    },
    {
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/mco/EZUQAM7KGVCQXIGVRIIBQWYTAM.jpeg",
      price: 8000,
      category: "dreams",
      details: "Cruise for extreme bluefin tuna fishing",
    },
    {
      image:
        " https://media-cdn.tripadvisor.com/media/photo-s/04/09/e0/eb/universal-s-islands-of.jpg",
      price: 5000,
      category: "dreams",
      details: "All inclusive at all Orlando parks",
    },
    {
      image:
        "https://www.cruiseit.co.il/UploadedImages/Quantum%20-%20Ovation_800x415.jpg",
      price: 40000,
      category: "dreams",
      details:
        "A year of gambling and fun in the most prestigious hotels of Vegas, all included",
    },
    {
      image:
        "https://ae01.alicdn.com/kf/Hdf901612c99c4c8fa66383aa68a466651/41-1-28-Cas-Raptor-F150.jpg_Q90.jpg_.webp",
      price: 45000,
      category: "dreams",
      details: "New Ford Raptor 2022",
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
