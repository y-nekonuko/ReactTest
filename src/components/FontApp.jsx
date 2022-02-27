export const FontApp = (props) => {

    console.log(props.data);

    const fontNodes = props.data.map((data) => (
        <div className="col">
            <div className="card h-100">
                <div className={data.css}>
                    <div className="card-header">
                        {data.name}
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.type}
                        </h2>
                        <p className="card-text">sample：彼らの機器や装置はすべて生命体だ。</p>
                        <p className="card-text">{data.description_JP}</p>
                        <p className="card-text">{data.description}</p>
                        {/* {data.weight}<br />
                        {data.weight.length} */}
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="container px-0">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {fontNodes}
            </div>
        </div>
    );
}

export default FontApp;