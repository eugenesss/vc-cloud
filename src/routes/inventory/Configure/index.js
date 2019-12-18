import React, { Component } from "react";

import ProductOptions from './components/productOptions'
import Details from './components/details'
import ProductVariant from './components/productVarient'
import Tags from './components/tags'


import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

import ProfileTabs from "Components/Layout/ProfileTabs";
import ConfigureCard from "./components/ConfigureCard"


class CreateProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (

    
        <React.Fragment>

              <Helmet>
                <title>Everyday | Inventory Settings</title>
                <meta name="description" content="Everyday Inventory Management" />
              </Helmet>

              <PageTitleBar
                title={"Settings"}
                // createLink={quoteNewPage}
              />

              <div className="row">
                <div className="col-md-3">
                  <ConfigureCard />
                </div>

                <div className="col-md-9">
                  <ProfileTabs loading={false}>
                    <div label="MAKE & MODEL">
                      <Tags/>
                    </div>

                    <div label="PRODUCT VARIANT">
                      <ProductVariant/>
                    </div>

                    <div label="PRODUCT DETAILS">
                      <Details/>
                    </div>

                    <div label="PRODUCT OPTION">
                      <ProductOptions/>
                    </div>

                  </ProfileTabs>
                </div>
              </div>

        </React.Fragment>
    );
  }
}

export default CreateProduct;
