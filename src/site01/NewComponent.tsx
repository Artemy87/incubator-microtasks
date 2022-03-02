type NewComponentType = {
    cars: CarsType[]
}

type CarsType = {
    manufacturer: string,
    model: string,
}

export const NewComponent = (props:NewComponentType) => {
    return (
        <>
            {props.cars.map((el, index) => {
                    return (
                        <table key={index}>
                            <tbody>
                                <tr>
                                    <th>{el.manufacturer}</th>
                                </tr>
                                <tr>
                                    <td>{el.model}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
        </>

    )
}