import react from 'react'
import {IState as IProps } from '../App'


const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((i) => {
            return (
                <li>
                    <div>
                        {i.name}
                    </div>
                    <div>
                        {i.age}
                    </div>
                    <div>
                        {i.url}
                    </div>
                    <div>
                        {
                            i.note
                        }
                    </div>

                </li>
            )
        })
    }
    return (
        <div>
            I am a list
            {renderList()}
        </div>
    )
}

export default List;