const MentalUp = () => {
  return (
    <div className="mentalUp">
      <div className="headerMentalUp">
        <div className="content">
          <h1>Mental Up</h1>
        </div>
      </div>

      <section className="video_blog mt-5">
        <div className="container">
          <div className="video_youtube">
            <iframe
              className="w-100"
              height="615"
              src="https://www.youtube.com/embed/Its84g00mh8?si=T2xNnMDQqFtAubZT"
              title="OkulAIle O'zbekistonda!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalUp;
