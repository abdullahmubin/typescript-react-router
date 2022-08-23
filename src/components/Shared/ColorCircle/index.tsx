import Row from 'react-bootstrap/Row';

interface colorInterface {
    colors: {
        color: string
    }[],
}

const CircleColor = (props: colorInterface) => {
    console.log(`props.colors`);
    console.log(props.colors)
    let test = props.colors.map(i => {
        return (<div className='circle-block ' key={i.color} style={{ backgroundColor: i.color }}>

        </div>)
    })

    console.log(test)
    return (
        <div>
            {
                test
            }


        </div>
    )
}

export default CircleColor;