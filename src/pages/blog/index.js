import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/banner.jpeg')`,
            height: "250px",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #2b2523 , -0.5rem 0 0 #2b2523 ",
              backgroundColor: "#2b2523",
              color: "white",
              padding: "1rem",
            }}
          >
            Projects
          </h1>
        </div>
        <section className="section" style={{}}>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
