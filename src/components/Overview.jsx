import lists from "../lists.json";

function Overview() {
  return (
    <div className="overview">
      <div className="overviewDescription">
        <p>Cesare / README.md</p>
        <h1>Hi I'm Cesare</h1>
        <div className="line" />
        <h2>A React Developer</h2>
        <p>
          I love coding with Html, Css, Javascript, React, Redux, Tailwind Css
          and others
        </p>
        <p>I'm improving in the Backend</p>
        <p>Follow me on my Twitter, Instagram and YouTube channel</p>
      </div>

      <div className="repositories">
        <div className="repositoriesTitle">
          <h2>Popular repositories </h2>
        </div>
        <div className="repositoriesContainer">
          {lists.map((repo, i, { c }) => (
            <div className="repositoriesBox" key={i}>
              <div className="repositoriesTop">
                <h3>{repo.repo}</h3>
                <p>{repo.status}</p>
              </div>
              <div className="repositoriesBottom">
                <p>{repo.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
