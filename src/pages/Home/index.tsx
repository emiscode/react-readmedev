import "./Home.css";

import { useState } from "react";
import { RdInput } from "readmedev-ds";
import Banner from "../../components/Banner";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <section className="home">
      <Banner
        title="Quer alavancar sua carreira Dev?"
        subtitle="Encontre aqui livros e tutoriais de programação!"
      >
        <form className="search">
          <RdInput
            placeholder={"O que você procura?"}
            value={search}
            onChange={setSearch}
            shadowEffect={true}
          />
        </form>
      </Banner>
    </section>
  );
}

export default Home;
