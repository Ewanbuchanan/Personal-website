import { Fragment } from "react";


export function Overlay({ isOpen, children }) {
    return (
        <Fragment>
            {isOpen && (
                <div className="overlay overflow-visible">
                    {children}
                </div>
            )}
        </Fragment>
    );
}

export default Overlay;