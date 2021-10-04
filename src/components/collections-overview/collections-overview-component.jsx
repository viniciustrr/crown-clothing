import React from "react";
import './collections-overview-style.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollections} from '../../redux/shop/shop-selector';
import CollectionPreview from '../preview-collection/collection-preview-component';

const collectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(collectionsOverview);