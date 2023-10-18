import { useParams } from 'react-router-dom';
function DummyUserDetail() {
    const params = useParams();
    return (
    <>
    <h1>Dummy User Detail</h1>
    <p>User Info: {params.eventId}</p>
    </>
    );
}


export default DummyUserDetail;