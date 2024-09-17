// import React from "react";
// // import "./HomePage.css";
// import Layout from "./Layout/Layout";

// const Home = () => {
//   return (
//     <Layout>
//       <main className="main">
//         <section id="hero" className="hero section dark-background">
//           <img
//             src="/hero-carousel-4.jpg"
//             alt="Hero Image"
//             className="hero-image"
//             data-aos="fade-in"
//           />

//           {/* <a href="#about" className="btn-get-started">Get Started</a> */}
//         </section>
//       </main>
//     </Layout>
//   );
// };

// export default Home;


import React from "react";
import Layout from "./Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img
            src="/hero-carousel-4.jpg"
            alt="Hero Image"
            className="hero-image"
            data-aos="fade-in"
          />
          <div className="hero-content">
            <h1>Welcome to Labour Platform</h1>
            <p>Empowering you with effortless workforce management</p>
            <a href="/about" className="btn-get-started">Get Started</a>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
