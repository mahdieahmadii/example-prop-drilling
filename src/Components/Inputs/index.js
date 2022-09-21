export function Inputs(props) {
    return <>
        <div>
            <div className="flex mt-5">
                <input
                    className="placeholder-gray-600 bg-gray-50 px-6 py-2 rounded-l-md"
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                />
                <button
                    className={`text-white px-5 rounded-r-md bg-${props.className}`}
                >
                    {props.children}
                </button>
            </div>
        </div>
    </>
}