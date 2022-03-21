import './profile.css'
import cactus from '../../img/cactus-1.png'

export default function Gardener({ gardener }) {

    return (
        <div className='my-info'>
            <div className='info-container'>
                <p className='info-title'>Gardener</p>
                <div className='info-data'>
                    <div className='info-subject'>
                        <h1>
                            Gardener Name:
                        </h1>
                        <h3 className='info-title'>
                            {gardener.name}
                        </h3>
                    </div>

                    <div className='info-subject'>
                        <h1>
                            EMAIL:
                        </h1>
                        <h3 className='info-title'>
                            {gardener.email}
                        </h3>
                    </div>

                    <div className='info-subject'>
                        <h1>
                            PLANTS:
                        </h1>
                        <h3 className='info-title'>
                            {gardener.plantCount}
                        </h3>
                    </div>
                </div>
            </div>


            <div className='icon-and-btn'>
                <div className='info-icon'>
                    {/* <a className="ant-dropdown-link profile-dropdown" onClick={e => e.preventDefault()}> */}
                    <div className="icon-letter">
                        <img src={cactus} alt='cactus' />
                    </div>
                    {/* </a> */}
                </div>
            </div>

        </div>
    )
}