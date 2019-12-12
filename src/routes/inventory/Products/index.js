import React, { Component } from "react";
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import api from "Api";


import AllProduct from './components/AllProduct'
import CarEdit from './components/CarEdit'
import MakeModel from './components/MakeModel'
import MakeModelGrade from './components/MakeModelGrade'

class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }

  }

  render() {

    return (
        <div className="todo-dashboard">

            <Tabs>
              <div>
                {/* <Tab><button>All Products</button></Tab> */}
                <Tab><button>All Cars</button></Tab>
                <Tab><button>Add New Car</button></Tab>
                <Tab><button>Add Make & Model</button></Tab>
              </div>

              {/* <Panel>
                <AllProduct/>
              </Panel> */}

              <Panel>
                <CarEdit/>
              </Panel>

              <Panel>
                <MakeModelGrade/>
              </Panel>

              <Panel>
                <MakeModel/>
              </Panel>
            </Tabs>


        </div>
    );
  }
}

export default AllProducts;
