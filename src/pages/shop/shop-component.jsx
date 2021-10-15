import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview-component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection-component";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner-component";
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {createStructuredSelector} from 'reselect';
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container";
import CollectionPageContainer from "../collection/collection-container";




class ShopPage extends React.Component {
    

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
      }


      render() {
        const { match } = this.props;
       
        return (
          <div>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            />
          </div>
        );
      }
} 


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null,mapDispatchToProps)(ShopPage);