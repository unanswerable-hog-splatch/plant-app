import './footer.css'
import cacti from '../../img/cactus-1.png'
import useHook from '../../hooks/useHook'

export default function Footer() {
    const { selectIcon } = useHook();

    return (
        <footer>
            COPYRIGHT 2022 UHS ENTERPRISES. DO NOT LEVERAGE. <img src={selectIcon('cactus')} alt='Cactus' />
        </footer>
    )
}