import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css'
import Navbar from '../components/Navbar'
import ShoppingPage from './ShoppingPage'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={ShoppingPage} />
            </Switch>
        </main>
    )
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar itemsInCartCount={this.props.itemsInCartCount} />
                </Container>

                <Container id='content-wrapper'>
                    <Main />
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    itemsInCartCount: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
        itemsInCartCount: state.cart.length
    }
}


export default withRouter(connect(mapStateToProps, {})(App))
