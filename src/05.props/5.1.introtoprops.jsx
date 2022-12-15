import React from 'react';


function PropsComponent() {
    const ashok = "pintu"
    return (
        <>

            <h1>Propscomponent</h1>
            <Props1Component name={ashok} />
        </>
    )
}
function Props1Component(props) {
    debugger;
    console.log(props);
    return (
        <>
            <h1>Props1component</h1>
            <Props2Component />
        </>
    )
}
function Props2Component() {
    return (
        <>
            <h1>Props2component</h1>
            <Props3Component />
        </>
    )
}
function Props3Component() {
    return (
        <h1>Props3Component</h1>
    )
}

export default PropsComponent