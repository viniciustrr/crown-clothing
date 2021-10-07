import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector';
import CollectionPreview from '../preview-collection/collection-preview-component';
import { CollectionsOverviewContainer } from "./collections-overview-style";

const collectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionsOverview);