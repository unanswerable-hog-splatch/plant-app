

export default function Gardener({ gardener }) {

    return (
        <div>
            <h2>
                Name: {gardener.name}
            </h2>
            <h3>
                Email: {gardener.email}
            </h3>
            <h3>
                Plant Count: {gardener.plantCount}
            </h3>
        </div>
    )
}