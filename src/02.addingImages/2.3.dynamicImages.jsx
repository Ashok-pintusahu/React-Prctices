import React from 'react';
import Toki from './assets/images/toki.jpg';

const data = [
    "toki.jpg", "tiger.jpg"
]
const DynamicImages = () => {
    console.log(data);
    console.log(data.map((e) => {
        return `./assets/images/${e}`
    }));
    return (
        <div>
            {
                data.map((e) => {
                    return (
                
                        <img key={e} height={100} alt="madhia" src={require(`./assets/images/${e}`)}/>
                    )
                })
            }
            <img height={100} alt="madhia" src={Toki} />
        </div>
    );
}

export default DynamicImages;