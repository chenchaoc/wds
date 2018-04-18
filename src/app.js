/*
* @Author: chenchao
* @Date: 2018-04-18 14:07:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-18 14:37:09
*/
import './app.scss';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>webpack-dev-server练习</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))