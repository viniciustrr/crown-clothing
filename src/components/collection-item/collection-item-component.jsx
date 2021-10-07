import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import { CollectionItemContainer,CollectionFooter,NameFooter,PriceFooter,ImageCollection, AddButton } from "./collection-item-style";

const CollectionItem = ({item, addItem}) => {
    
    const {name,price,imageUrl} = item;
    return (
    <CollectionItemContainer>
        
        <ImageCollection style = {{
            backgroundImage: `url(${imageUrl})`
        }}/>
        
        
        <CollectionFooter>
            <NameFooter>{name} </NameFooter>
            <PriceFooter>{price} </PriceFooter>
        </CollectionFooter>

        <AddButton onClick={() => addItem(item)} inverted >Add to cart</AddButton>
        

    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
