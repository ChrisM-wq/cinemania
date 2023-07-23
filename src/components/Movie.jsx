const Movie = ({title, poster}) => {
    return (
        <div className="w-72 flex flex-col bg-black px-8 py-8">
            <img src={poster} />
            <div className="font-semibold text-white">{title}</div>
        </div>
    )
};

export default Movie;