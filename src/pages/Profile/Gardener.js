

export default function Gardener({ gardener }) {

    return (
        <div>
            <h2>
                {gardener.name}
            </h2>
            <h3>
                {gardener.email}
            </h3>
            <h3>
                Plant Count: {gardener.plantCount}
            </h3>
        </div>
    )
}