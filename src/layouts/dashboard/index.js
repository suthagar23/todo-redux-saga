import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import ToDo from '../../views/todoList'

const mapStateToProps = (state, ownProps) => {
  return { };
};

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
  
    return (
      <div className="wrapper" >
        <div id="main-panel" className="main-panel" >
          Here, These are your TO-DOs...!
          <ToDo {...this.props} />
        </div>
      </div>
    );
  }
}

const DashboardComponent = connect(mapStateToProps)(Dashboard);
export default DashboardComponent;