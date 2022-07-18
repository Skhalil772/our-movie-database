function Items(props) {
  return (
    <section className="container mx-auto py-6 text-black h-fit">
      {props.Movie.Title && (
        <div className=" flex md:flex-row  flex-col items-center justify-around md:space-x-20 space-y-5 md:space-y-0    ">
          <div className="md:max-w-[40%]">
            <img
              className="w-full h-[450px] object-cover"
              src={props.Movie.Poster}
              alt={props.Movie.Title}
            />
            {props.Movie.Poster ? null : (
              <p className="text-3xl text-center text-red-700  absolute top-[100px] left-0 right-0">
                Image not found
              </p>
            )}
          </div>
          <div className="md:max-w-[40%] w-9/12 ">
            <h1 className=" text-lg font-bold">{props.title}</h1>

            <p className=" text-sm">
              <span className="font-bold">Released</span>:{" "}
              {props.Movie.Released}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Director</span> :{" "}
              {props.Movie.Director}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Duration</span> :{" "}
              {props.Movie.Runtime}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Plot</span> : {props.Movie.Plot}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Production</span> :
              {props.Movie.Production}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Actors</span> : {props.Movie.Actors}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Language</span> :{" "}
              {props.Movie.Language}
            </p>
            <p className=" text-lg">
              <span className="font-bold">Box Office</span> :
              {props.Movie.BoxOffice}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
export default Items;
