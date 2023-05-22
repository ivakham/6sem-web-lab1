import Contents from "./Contents";
import {default as Header, defaultSort} from "./Header";
import Modal from "./PosterModal";

import poster from "./assets/image 1.svg"
import { useState } from "react";

const MockFilms = [
  {
    id: 0,
    title: "film1",
    imgSrc: poster,
    imgAlt: "film1",
    director: "me1",
    actors: [
      "me1",
      "me2"
    ],
    year: 1,
    rating: 10,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 1,
    title: "film2",
    imgSrc: poster,
    imgAlt: "film2",
    director: "me2",
    actors: [
      "me2",
      "me3"
    ],
    year: 2,
    rating: 9,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 2,
    title: "film3",
    imgSrc: poster,
    imgAlt: "film3",
    director: "me3",
    actors: [
      "me3",
      "me4"
    ],
    year: 3,
    rating: 8,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 3,
    title: "film4",
    imgSrc: poster,
    imgAlt: "film4",
    director: "me4",
    actors: [
      "me4",
      "me5"
    ],
    year: 4,
    rating: 7,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 4,
    title: "film5",
    imgSrc: poster,
    imgAlt: "film5",
    director: "me5",
    actors: [
      "me5",
      "me6"
    ],
    year: 5,
    rating: 6,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 5,
    title: "film6",
    imgSrc: poster,
    imgAlt: "film6",
    director: "me6",
    actors: [
      "me6",
      "me7"
    ],
    year: 6,
    rating: 5,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 6,
    title: "film7",
    imgSrc: poster,
    imgAlt: "film7",
    director: "me7",
    actors: [
      "me7",
      "me8"
    ],
    year: 7,
    rating: 4,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 7,
    title: "film8",
    imgSrc: poster,
    imgAlt: "film8",
    director: "me8",
    actors: [
      "me8",
      "me9"
    ],
    year: 8,
    rating: 3,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 8,
    title: "film9",
    imgSrc: poster,
    imgAlt: "film9",
    director: "me9",
    actors: [
      "me9",
      "me10"
    ],
    year: 9,
    rating: 2,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 9,
    title: "film10",
    imgSrc: poster,
    imgAlt: "film10",
    director: "me10",
    actors: [
      "me10",
      "me11"
    ],
    year: 10,
    rating: 1,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  },
  {
    id: 10,
    title: "film11",
    imgSrc: poster,
    imgAlt: "film11",
    director: "me11",
    actors: [
      "me11",
      "me12"
    ],
    year: 11,
    rating: 10,
    trailer: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis elit sit amet risus volutpat, quis iaculis risus tristique. Proin ut purus a magna pharetra porta non volutpat erat. Aenean et lectus id nibh venenatis semper eu vitae nisl. Proin id urna turpis. Suspendisse tempus urna fringilla vehicula pulvinar. Integer a augue vitae turpis posuere mattis. Mauris eros lacus, varius id porttitor vel, tempus sed purus. Nunc vitae quam pulvinar, sollicitudin quam id, faucibus lorem. Nullam non lorem non diam hendrerit ornare id quis ipsum. Nunc at odio vitae lorem condimentum molestie eu vitae nisi. Praesent interdum, risus eget pretium gravida, nunc mi ullamcorper enim, maximus fringilla velit odio sit amet nisl. Mauris mauris nulla, fermentum id dignissim vitae, pulvinar id orci. Suspendisse bibendum quis mauris id hendrerit."
  }
]

function App() {

  const [showModal, setShowModal] = useState(false)
  let currentSorting = defaultSort()
  const [filmInFocus,setFilmInFocus] = useState({})
  const [display,setDisplay] = useState([...MockFilms].sort(defaultSort()))

  const posterClick = (id) => {
    setFilmInFocus(MockFilms.find( element => element.id == id ))
    setShowModal(true)
  }

  function search(val){
    setDisplay(MockFilms.filter( x => x.title.startsWith(val) || x.director.startsWith(val) || x.actors.filter(y => y.startsWith(val)).length != 0 ).sort(currentSorting))
  }

  function sort(val){
    currentSorting = val
    setDisplay([...display].sort(val))
  }

  return (
    <>
    <Header
      OnSearch={search}
      OnSort={sort}
    />
    <Contents posterList = { display } onClickCallback = { posterClick }/>
    <Modal
      poster = { filmInFocus }
      show = { showModal }
      exitCallback = { () => setShowModal(false) }
    />
    <div class="dummy" ></div>
    </>
  );
}

export default App;