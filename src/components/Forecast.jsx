const Forecast = ({ title, data }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            {title === "3 hour step forecast" ? (
              <p className="font-medium">{`${d.temp.toFixed()}`}</p>
            ) : (
              <>
                <p className="font-medium">{`High: ${d.temp_max.toFixed()}${String.fromCharCode(
                  176
                )}`}</p>
                <p className="font-medium">{`Low: ${d.temp_min.toFixed()}${String.fromCharCode(
                  176
                )}`}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
