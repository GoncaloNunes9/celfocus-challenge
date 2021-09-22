import { React} from 'react'
import { history } from '../../helpers/history';

const GoBackButton = () => <button onClick={() => history.goBack()}>Go Back</button>

export default GoBackButton