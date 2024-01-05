

const Colorfull = (WrappedComponent) => {

    const colors = [
      "success",
      "danger",
      "dark",
      "gray",
      "info",
    ];

    let randomColor = colors[Math.floor(Math.random() * 6)];
    let ClassName = `bg-${randomColor}`;

    return (props) => {
        return (
            <div className={ClassName}>
              <WrappedComponent {...props}/>
            </div>
        );
    };

};

export default Colorfull;