

export default function Gardener({ gardener }) {

    return (
        <div className='my-info'>
            <h3>
                Name: {gardener.name}
            </h3>
            <h3>
                Email: {gardener.email}
            </h3>
            <h3>
                Plant Count: {gardener.plantCount}
            </h3>
        </div>
    )
}