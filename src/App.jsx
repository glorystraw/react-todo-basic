import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App({ store }) {
    return (
        <main>
            <HeaderContainer />
            <ListContainer />
            <FormContainer />
        </main>
    );
}

// class App extends React.Component {
//     render() {
//         const store = this.props.store;
//         return (
//             <main>
//                 <HeaderContainer />
//                 <ListContainer />
//                 <FormContainer />
//             </main>
//         );
//     }
// }

export default App;