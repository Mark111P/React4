export function Lb2(){
    let city1 = {name: 'city1', info: 'info about city1'};
    let city2 = {name: 'city2', info: 'info about city2'};
    let city3 = {name: 'city3', info: 'info about city3'};
    let arr = [city1, city2, city3];

    return(
        <>
            {
                arr.map((i) => {return(<>{i.name}: {i.info} <br></br></>)})
            }
        </>
    )
}