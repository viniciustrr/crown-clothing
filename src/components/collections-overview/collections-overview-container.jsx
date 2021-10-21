
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsColletingFetching } from "../../redux/shop/shop-selector";
import WithSpinner from "../with-spinner/with-spinner-component";
import collectionsOverviewComponent from "./collections-overview-component";
import { compose } from "redux";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsColletingFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverviewComponent);

export default CollectionsOverviewContainer;