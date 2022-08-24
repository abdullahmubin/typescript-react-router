import Row from 'react-bootstrap/Row';

interface colorInterface {
    colors: {
        color: string
    }[],
    sectionTitle: string,
    sectionSubTitle?: string 
}

const CircleColor = (props: colorInterface) => {
    console.log(`props.colors`);
    console.log(props.colors)
    let test = props.colors.map(i => {
        return (<span className='circle-block ' key={i.color} style={{ backgroundColor: i.color }}>

        </span>)
    })

    console.log(test)
    return (
        <div className='color-title-container'>
            {
                test
            }
            <h3 className='card-no-img-details-heading'>{props.sectionTitle}</h3>
            <p>{props.sectionSubTitle}</p>

        </div>
    )
}

export default CircleColor;