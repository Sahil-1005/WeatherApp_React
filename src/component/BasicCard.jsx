import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BasicCard = ({stats}) => {
    return (
        <>
            <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center t
            ext-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            style={{textAlign:"center"}}>
            <Card style={{color:"white",alignContent:"center"}}>
                <Card.Body>
                    <Card.Title className='text-sm'>{stats.title} </Card.Title>
                    {stats.title!=="Air Quality in pm10" ?
                    (
                    <Card.Text >
                        <span className='text-2xl'>{stats.value}</span>
                        <span className='text-sm'>{stats.unit}</span>
                    </Card.Text>
                    ):
                    <Card.Text >
                        <span className='text-2xl'>{stats.value}</span>
                        <span className='text-sm'>{stats.quality}</span>
                    </Card.Text>
                    }
                </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default BasicCard
